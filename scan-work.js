(() => {
  const config = window.scanWorkConfig || {};
  const subject = config.subject || "Vak";
  const storageKey = config.storageKey || `ewannScans${subject.replace(/\W/g, "")}`;
  const dbName = "ewann-weekly-scans";
  const storeName = "scans";
  const $ = (selector) => document.querySelector(selector);

  const elements = {
    form: $("#scanForm"),
    file: $("#scanPhoto"),
    week: $("#scanWeek"),
    title: $("#scanTitleInput"),
    notes: $("#scanNotes"),
    list: $("#scanList"),
    count: $("#scanCount"),
    status: $("#scanStatus"),
    exportButton: $("#exportScans"),
    clearButton: $("#clearScanForm")
  };

  if (!elements.form || !elements.file || !elements.list) return;

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, { keyPath: "id" });
          store.createIndex("storageKey", "storageKey", { unique: false });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function withStore(mode, action) {
    return openDb().then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const result = action(store);
      transaction.oncomplete = () => {
        db.close();
        resolve(result);
      };
      transaction.onerror = () => {
        db.close();
        reject(transaction.error);
      };
    }));
  }

  function getScans() {
    return withStore("readonly", (store) => new Promise((resolve, reject) => {
      const scans = [];
      const index = store.index("storageKey");
      const request = index.openCursor(IDBKeyRange.only(storageKey));
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) {
          scans.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
          resolve(scans);
          return;
        }
        scans.push(cursor.value);
        cursor.continue();
      };
      request.onerror = () => reject(request.error);
    }));
  }

  function saveScan(scan) {
    return withStore("readwrite", (store) => store.put(scan));
  }

  function deleteScan(id) {
    return withStore("readwrite", (store) => store.delete(id));
  }

  function clearForm() {
    elements.file.value = "";
    elements.title.value = "";
    elements.notes.value = "";
    elements.week.value = "";
    elements.status.textContent = "";
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("af-ZA", { dateStyle: "medium" }).format(new Date(value));
  }

  function setStatus(message) {
    elements.status.textContent = message;
  }

  function scanCard(scan) {
    const imageUrl = URL.createObjectURL(scan.image);
    const title = scan.title || "Week se werk";
    const week = scan.week || "Week nie gemerk nie";
    const notes = scan.notes ? `<p>${scan.notes}</p>` : "";
    return `
      <article class="scan-card">
        <img src="${imageUrl}" alt="${subject} foto vir ${week}" loading="lazy">
        <div>
          <span class="practice-meta">${week}</span>
          <h3>${title}</h3>
          ${notes}
          <p class="scan-date">Geskandeer: ${formatDate(scan.createdAt)}</p>
          <button class="secondary-button" data-delete-scan="${scan.id}" type="button">Verwyder</button>
        </div>
      </article>
    `;
  }

  async function renderScans() {
    const scans = await getScans();
    elements.count.textContent = `${scans.length} ${scans.length === 1 ? "foto" : "fotos"} gestoor`;
    elements.exportButton.disabled = scans.length === 0;
    if (!scans.length) {
      elements.list.innerHTML = `
        <article class="scan-empty">
          <h3>Nog geen weeklikse werk gestoor nie</h3>
          <p>Neem elke week 'n foto van ${subject} se werk. Dit bly op hierdie iPad gestoor totdat jy dit verwyder.</p>
        </article>
      `;
      return;
    }
    elements.list.innerHTML = scans.map(scanCard).join("");
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  elements.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = elements.file.files[0];
    if (!file) {
      setStatus("Kies of neem eers 'n foto.");
      return;
    }

    const scan = {
      id: `${storageKey}-${Date.now()}`,
      storageKey,
      subject,
      week: elements.week.value.trim(),
      title: elements.title.value.trim(),
      notes: elements.notes.value.trim(),
      createdAt: new Date().toISOString(),
      imageName: file.name || `${subject}-werk.jpg`,
      imageType: file.type || "image/jpeg",
      image: file
    };

    try {
      await saveScan(scan);
      clearForm();
      setStatus("Foto gestoor. Hierdie week se werk is nou op die iPad.");
      await renderScans();
    } catch (error) {
      setStatus("Die foto kon nie gestoor word nie. Probeer 'n kleiner foto.");
    }
  });

  elements.clearButton.addEventListener("click", clearForm);

  elements.list.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-delete-scan]");
    if (!button) return;
    await deleteScan(button.dataset.deleteScan);
    setStatus("Foto verwyder.");
    await renderScans();
  });

  elements.exportButton.addEventListener("click", async () => {
    const scans = await getScans();
    const payload = {
      exportedAt: new Date().toISOString(),
      subject,
      scans: await Promise.all(scans.map(async (scan) => ({
        id: scan.id,
        subject: scan.subject,
        week: scan.week,
        title: scan.title,
        notes: scan.notes,
        createdAt: scan.createdAt,
        imageName: scan.imageName,
        imageType: scan.imageType,
        imageData: await blobToDataUrl(scan.image)
      })))
    };
    download(`ewann-${subject.toLowerCase()}-scans.json`, JSON.stringify(payload, null, 2), "application/json");
    setStatus("Export gemaak. Hou die leer vir eksamen-prep.");
  });

  renderScans().catch(() => setStatus("Die gestoor werk kon nie nou gelaai word nie."));
})();

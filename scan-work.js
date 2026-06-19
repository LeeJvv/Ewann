(() => {
  const config = window.scanWorkConfig || {};
  const subject = config.subject || "Vak";
  const storageKey = config.storageKey || `ewannScans${subject.replace(/\W/g, "")}`;
  const apiUrlKey = "ewannScanAiEndpoint";
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
    apiUrl: $("#scanApiUrl"),
    saveApiUrl: $("#saveScanApiUrl"),
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

  async function getScan(id) {
    const scans = await getScans();
    return scans.find((scan) => scan.id === id);
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

  function getApiUrl() {
    return (elements.apiUrl?.value || localStorage.getItem(apiUrlKey) || config.apiUrl || "").trim().replace(/\/$/, "");
  }

  function setApiUrl(value) {
    const trimmed = value.trim().replace(/\/$/, "");
    if (trimmed) {
      localStorage.setItem(apiUrlKey, trimmed);
    } else {
      localStorage.removeItem(apiUrlKey);
    }
    if (elements.apiUrl) elements.apiUrl.value = trimmed;
    return trimmed;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function listItems(items = [], formatter = (item) => item) {
    if (!Array.isArray(items) || !items.length) return "<li>Nog niks gemaak nie.</li>";
    return items.map((item) => `<li>${formatter(item)}</li>`).join("");
  }

  function studyPackHtml(studyPack) {
    if (!studyPack) return "";
    return `
      <section class="scan-study-pack">
        <span class="practice-meta">AI leerwerk</span>
        <h4>${escapeHtml(studyPack.title || "Nuwe leerwerk")}</h4>
        <p>${escapeHtml(studyPack.summary || "")}</p>
        <div class="scan-generated">
          <section>
            <h5>Kernpunte</h5>
            <ul>${listItems(studyPack.keyPoints, escapeHtml)}</ul>
          </section>
          <section>
            <h5>Flitskaarte</h5>
            <ul>${listItems(studyPack.flashcards, (card) => `<strong>${escapeHtml(card.question)}</strong> ${escapeHtml(card.answer)}`)}</ul>
          </section>
          <section>
            <h5>Vasvra</h5>
            <ul>${listItems(studyPack.quiz, (item) => `<strong>${escapeHtml(item.question)}</strong> ${escapeHtml(item.answer)}`)}</ul>
          </section>
          <section>
            <h5>Eksamen-prep</h5>
            <ul>${listItems(studyPack.examPrep, escapeHtml)}</ul>
          </section>
        </div>
      </section>
    `;
  }

  function scanCard(scan) {
    const imageUrl = URL.createObjectURL(scan.image);
    const title = scan.title || "Week se werk";
    const week = scan.week || "Week nie gemerk nie";
    const notes = scan.notes ? `<p>${escapeHtml(scan.notes)}</p>` : "";
    return `
      <article class="scan-card">
        <img src="${imageUrl}" alt="${escapeHtml(subject)} foto vir ${escapeHtml(week)}" loading="lazy">
        <div>
          <span class="practice-meta">${escapeHtml(week)}</span>
          <h3>${escapeHtml(title)}</h3>
          ${notes}
          <p class="scan-date">Geskandeer: ${formatDate(scan.createdAt)}</p>
          ${studyPackHtml(scan.studyPack)}
          <div class="scan-actions">
            <button class="primary-button" data-analyze-scan="${scan.id}" type="button">${scan.studyPack ? "Maak AI weer" : "Maak AI leerwerk"}</button>
            <button class="secondary-button" data-delete-scan="${scan.id}" type="button">Verwyder</button>
          </div>
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

  async function analyzeScan(scanId, button) {
    const apiUrl = getApiUrl();
    if (!apiUrl) {
      setStatus("Vul eers die AI backend URL in en stoor dit.");
      return;
    }

    button.disabled = true;
    button.textContent = "Besig...";
    setStatus("AI lees nou die foto en maak leerwerk.");

    try {
      const scan = await getScan(scanId);
      if (!scan) throw new Error("Scan nie gevind nie.");
      const imageData = await blobToDataUrl(scan.image);
      const response = await fetch(`${apiUrl}/api/analyze-scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          week: scan.week,
          title: scan.title,
          notes: scan.notes,
          imageName: scan.imageName,
          imageType: scan.imageType,
          imageData
        })
      });
      if (!response.ok) throw new Error(`AI backend fout: ${response.status}`);
      const studyPack = await response.json();
      await saveScan({ ...scan, studyPack, analyzedAt: new Date().toISOString() });
      setStatus("AI leerwerk is gestoor en by die scan gevoeg.");
      await renderScans();
    } catch (error) {
      setStatus("AI kon nie die foto verwerk nie. Kyk of die backend aan is.");
      await renderScans();
    }
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
      setStatus("Foto gestoor. Gebruik Maak AI leerwerk wanneer die backend gereed is.");
      await renderScans();
    } catch (error) {
      setStatus("Die foto kon nie gestoor word nie. Probeer 'n kleiner foto.");
    }
  });

  elements.clearButton.addEventListener("click", clearForm);

  if (elements.apiUrl) elements.apiUrl.value = getApiUrl();

  elements.saveApiUrl?.addEventListener("click", () => {
    const url = setApiUrl(elements.apiUrl.value);
    setStatus(url ? "AI backend URL gestoor." : "AI backend URL skoongemaak.");
  });

  elements.list.addEventListener("click", async (event) => {
    const deleteButton = event.target.closest("[data-delete-scan]");
    if (deleteButton) {
      await deleteScan(deleteButton.dataset.deleteScan);
      setStatus("Foto verwyder.");
      await renderScans();
      return;
    }

    const analyzeButton = event.target.closest("[data-analyze-scan]");
    if (analyzeButton) {
      await analyzeScan(analyzeButton.dataset.analyzeScan, analyzeButton);
    }
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
        analyzedAt: scan.analyzedAt || null,
        imageName: scan.imageName,
        imageType: scan.imageType,
        studyPack: scan.studyPack || null,
        imageData: await blobToDataUrl(scan.image)
      })))
    };
    download(`ewann-${subject.toLowerCase()}-scans.json`, JSON.stringify(payload, null, 2), "application/json");
    setStatus("Export gemaak. Hou die leer vir eksamen-prep.");
  });

  renderScans().catch(() => setStatus("Die gestoor werk kon nie nou gelaai word nie."));
})();

const http = require("node:http");

const port = Number(process.env.PORT || 8787);
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || "gpt-5.5";
const allowedOrigin = process.env.ALLOWED_ORIGIN || "https://leejvv.github.io";
const maxBodyBytes = Number(process.env.MAX_BODY_BYTES || 12 * 1024 * 1024);

function sendJson(res, status, payload, origin = allowedOrigin) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > maxBodyBytes) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function normalizeStudyPack(value, fallbackTitle) {
  return {
    title: String(value.title || fallbackTitle || "Nuwe leerwerk").slice(0, 120),
    summary: String(value.summary || "").slice(0, 700),
    keyPoints: Array.isArray(value.keyPoints) ? value.keyPoints.slice(0, 10).map(String) : [],
    flashcards: Array.isArray(value.flashcards) ? value.flashcards.slice(0, 8).map((card) => ({
      question: String(card.question || ""),
      answer: String(card.answer || "")
    })) : [],
    quiz: Array.isArray(value.quiz) ? value.quiz.slice(0, 8).map((item) => ({
      question: String(item.question || ""),
      answer: String(item.answer || "")
    })) : [],
    examPrep: Array.isArray(value.examPrep) ? value.examPrep.slice(0, 8).map(String) : []
  };
}

async function analyzeScan(payload) {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  if (!payload.imageData || !payload.imageData.startsWith("data:image/")) {
    throw new Error("imageData must be a data:image URL");
  }

  const prompt = [
    "Jy help 'n Graad 4 leerder, Ewann, om weeklikse skoolwerk te verander in kort Afrikaanse leerinhoud.",
    "Lees die foto so goed moontlik. As dele onduidelik is, moenie feite uitdink nie; noem net wat sigbaar is.",
    "Hou die taal eenvoudig, kind-vriendelik en eksamen-gefokus.",
    `Vak: ${payload.subject || "Onbekend"}`,
    `Week/datum: ${payload.week || "Nie gegee nie"}`,
    `Titel: ${payload.title || "Week se werk"}`,
    `Notas van ouer: ${payload.notes || "Geen notas"}`,
    "Maak 'n kort leerpak met kernpunte, flitskaarte, vasvra-vrae en eksamen-prep punte."
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_url: payload.imageData }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "ewann_study_pack",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["title", "summary", "keyPoints", "flashcards", "quiz", "examPrep"],
            properties: {
              title: { type: "string" },
              summary: { type: "string" },
              keyPoints: { type: "array", items: { type: "string" } },
              flashcards: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["question", "answer"],
                  properties: {
                    question: { type: "string" },
                    answer: { type: "string" }
                  }
                }
              },
              quiz: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["question", "answer"],
                  properties: {
                    question: { type: "string" },
                    answer: { type: "string" }
                  }
                }
              },
              examPrep: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || `OpenAI error ${response.status}`);
  }

  const text = data.output_text || data.output?.flatMap((item) => item.content || [])
    .find((item) => item.type === "output_text")?.text;
  if (!text) throw new Error("No structured output returned");

  return normalizeStudyPack(JSON.parse(text), payload.title);
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || allowedOrigin;
  if (req.method === "OPTIONS") {
    sendJson(res, 204, {}, origin);
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, { ok: true, model }, origin);
    return;
  }

  if (req.method === "POST" && req.url === "/api/analyze-scan") {
    try {
      const body = await readBody(req);
      const payload = JSON.parse(body);
      const studyPack = await analyzeScan(payload);
      sendJson(res, 200, studyPack, origin);
    } catch (error) {
      sendJson(res, 400, { error: error.message }, origin);
    }
    return;
  }

  sendJson(res, 404, { error: "Not found" }, origin);
});

server.listen(port, () => {
  console.log(`Ewann scan backend listening on http://localhost:${port}`);
});

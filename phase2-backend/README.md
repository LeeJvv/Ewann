# Ewann Phase 2 Scan Backend

This tiny Node backend receives a scan photo from the GitHub Pages app, sends it to OpenAI with vision input, and returns a structured study pack.

The OpenAI key must stay here on the backend. Do not put it in the iPad app or GitHub Pages.

## Run locally

1. Copy `.env.example` to `.env` and fill in `OPENAI_API_KEY`.
2. Load the env vars in PowerShell:

```powershell
$env:OPENAI_API_KEY="sk-proj-your-key-here"
$env:OPENAI_MODEL="gpt-5.5"
$env:ALLOWED_ORIGIN="https://leejvv.github.io"
node server.js
```

3. In Ewann's app, open a subject, go to `Scan Werk`, and set:

```text
http://localhost:8787
```

For iPad use, deploy this backend to a small HTTPS host and paste that HTTPS URL into the app.

## Endpoints

- `GET /health`
- `POST /api/analyze-scan`

The app sends `subject`, `week`, `title`, `notes`, and `imageData`. The backend returns `title`, `summary`, `keyPoints`, `flashcards`, `quiz`, and `examPrep`.

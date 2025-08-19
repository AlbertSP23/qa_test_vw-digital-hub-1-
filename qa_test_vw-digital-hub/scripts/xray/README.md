# Xray (Jira) – Cypress + Cucumber integration

This doc explains how to **import BDD (Cucumber) results from Cypress into Xray/Jira** and **attach evidence** (screenshots)

---

## 1) Requirements

- Project uses **Cypress** + **@badeball/cypress-cucumber-preprocessor**.
- Tests generate **`cypress/reports/cucumber/cucumber.json`**.
- Node 18+.
- Xray (Jira Cloud or Server/Data Center) credentials.

> If you don’t yet produce `cucumber.json`, enable it in your Cucumber preprocessor (or produce `messages.ndjson` and convert to `cucumber.json` in CI). The final file **must** reside at `cypress/reports/cucumber/cucumber.json`.

---

## 2) BDD conventions (Xray mapping)

Use **tags** in `.feature` files:

- `@TestPlan=KEY` → link execution to a **Test Plan** (optional).
- `@Requirement=KEY` → link scenario(s) to **Requirements** (optional).
- `@TestKey=KEY` → use an **existing Test** in Xray (otherwise Xray can create one from the scenario).

Example:


## 3) Environment variables

Create a local `.env` (ignored by git) or set **GitHub Secrets**:


**Security:** do not commit `.env`. In CI use repository **Secrets**.

---

## 4) CI flow (GitHub Actions)

1. **Start the app** (server + client).
2. **Run Cypress** headless (**no video**).
3. **Produce `cucumber.json`** under `cypress/reports/cucumber/`.
4. **Upload results to Xray** via `scripts/xray/upload-results.js`.
5. **Attach evidence** (screenshots) with `scripts/xray/attach-evidence.js`.
6. **Publish HTML report** (Mochawesome) as an artifact.

A starter workflow is in `.github/workflows/ci-e2e-xray.yml` with TODOs noted.

---

## 5) Local usage

```bash
# 1) Run tests and generate reports
npm run start:server
npm run start:client
npm run test:e2e

# 2) Upload to Xray
node scripts/xray/upload-results.js

# 3) Attach evidence
node scripts/xray/attach-evidence.js

//TODO: Etc....


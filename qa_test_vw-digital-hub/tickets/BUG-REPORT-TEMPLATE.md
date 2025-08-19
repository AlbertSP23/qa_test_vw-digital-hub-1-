# Bug Report Template

**Title**: [Feature/Area] Short summary  
**Priority**: P1 | P2 | P3  
**Severity**: Blocker | Critical | Major | Minor | Trivial  
**Environment**: Browser / OS / Resolution  
**Build / Commit**:  
**URL / Route**:  

**Preconditions**:
- e.g., user logged in, seed data, feature flag ON.

**Steps to Reproduce**:
1. 
2. 
3. 

**Expected Result**:
- 

**Actual Result**:
- 

**Evidence**:
- Screenshots: attach path(s)
- Console logs: 
- Network HAR or request/response excerpts: 

**Xray/Jira Links (opcional)**:
- Requirement: 
- Test(s): 
- Test Execution: 

**Notes / Hypothesis**:
- Possible root cause or suspect area.

**Acceptance Criteria (fix)**:
- 


------------------------------------------------------------------------Example---------------------------------------------------------------------------------

# Bug – [Notes] Deleting a note happens without confirmation (data loss risk)

**Issue Type**: Bug  
**Summary / Title**: [Notes] Deleting a note happens without confirmation (data loss risk)  
**Priority**: P2  
**Severity**: Major  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ux, regression:unknown

---

## Environment
- **App Build / Commit**: b0f3c1a (main)
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 11:40 CET

## Preconditions
- At least one note exists, e.g., title: `E2E Seeded 3`.

## Steps to Reproduce
1. Open the app Home (`/`).
2. Click **Notes** to access the Notes screen.
3. Click the note card titled **“E2E Seeded 3”** to open details.
4. Click **Delete**.

## Expected Result
- A confirmation modal appears (**Confirm** / **Cancel**).
- The note is only deleted after explicit confirmation.
- On cancel, no deletion occurs.

## Actual Result
- No confirmation modal.
- The note is removed immediately from the list.

**Reproducibility**: 100% (5/5)

## User Impact / Business Impact
- High risk of accidental data loss; users cannot undo.

## Scope / Affected Areas
- Notes detail view (delete action). Potentially all delete flows.

## Workaround
- None in UI. Manual restore requires reverting `db.json`.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Delete -- no confirm.png`
- **Network**: `DELETE /notes/{id}` → **200 OK** immediately on click (no prior modal).
- **Console**: no relevant errors.
- **DB**: note entry removed after DELETE.

## Xray / Jira Links (optional)
- **Requirement**: VWJIRA-REQ-45
- **Test(s)**: VWJIRA-TEST-231 (BDD: `@notes @delete`)
- **Test Execution**: VWJIRA-EXEC-78
- **Test Plan**: VWJIRA-PLAN-12

## Root Cause Hypothesis
- Delete handler triggers API call directly; confirmation layer missing.
- Files to inspect: Note detail component and delete action wiring.

## Acceptance Criteria (Fix)
- A modal with **Confirm**/**Cancel** appears on delete.
- API `DELETE` is fired **only after** Confirm.
- Add E2E tests:
  - `DEL-001`: confirm → note removed, success toast.
  - `DEL-002`: cancel → note remains.
  - API error path shows non-blocking error toast.
- A11y: modal focus trapping, **Esc** closes (cancel), **Enter** confirms.

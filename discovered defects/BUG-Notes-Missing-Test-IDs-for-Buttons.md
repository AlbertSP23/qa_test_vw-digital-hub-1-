# Bug – [Global] Missing stable test IDs (data-cy) for interactive elements

**Issue Type**: Bug  
**Summary / Title**: [Global] Missing stable test IDs (data-cy) for interactive elements  
**Priority**: P2  
**Severity**: Major  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:global, platform:web, testability, maintainability, devx

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- UI contains clickable buttons/links without stable selectors.

## Steps to Reproduce
1. Inspect Home and Notes UI controls (navigation, actions, form buttons).
2. Attempt to target them using automation without relying on text or CSS classes.
3. Observe the absence of `data-cy` (or similar stable attributes).

## Expected Result
- Each interactive control exposes a stable automation selector (e.g., `data-cy='note-save'`).

## Actual Result
- No specific IDs/selectors exist; automation must rely on text/CSS which breaks on minor UI changes.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Blocks reliable E2E automation; increases maintenance cost and fragility.

## Scope / Affected Areas
- All interactive controls across Home and Notes.

## Workaround
- None, aside from brittle text-based selectors.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Global - Missing data-cy.png`
- **Console**: n/a.

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Lack of a testability convention; components do not receive `data-cy` props.

## Acceptance Criteria (Fix)
- Adopt a **data-cy** contract: `nav-notes, notes-list, note-card, note-add, note-edit, note-delete, note-title-input, note-content-input, note-save, cancel, confirm, notes-search`.
- Enforce via ESLint rule or PR checklist.

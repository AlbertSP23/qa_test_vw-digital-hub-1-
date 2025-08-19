# Bug – [Notes] Delete action hover animation/icon misalignment

**Issue Type**: Bug  
**Summary / Title**: [Notes] Delete action hover animation/icon misalignment  
**Priority**: P3  
**Severity**: Minor  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ui, ux, polish

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- At least one note exists and is visible in Notes list.

## Steps to Reproduce
1. Open Home (`/`) and navigate to **Notes**.
2. Hover the mouse over the **Delete** action on any note card or in the note detail.
3. Observe the icon and label alignment/animation.

## Expected Result
- Trash icon and the **Delete** text remain aligned; hover animation is smooth and consistent across states (hover/active/focus).

## Actual Result
- Trash icon shifts or overlaps the **Delete** label; hover animation looks jerky or does not match spacing/position.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Reduces perceived quality; distracts user and undermines trust in UI polish.

## Scope / Affected Areas
- Notes list and note detail actions (Delete control).

## Workaround
- None. Users must tolerate the visual glitch.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Delete hover misalignment.png`
- **Console**: no relevant errors.

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- CSS transition/transform values for icon and label differ; flex/inline alignment or gap tokens inconsistent.

## Acceptance Criteria (Fix)
- Align icon + label with a single flex container and consistent spacing token.
- Normalize hover/active states and easing timing (e.g., `transition: 150ms ease`).
- Add visual test or storybook snapshot for hover state.

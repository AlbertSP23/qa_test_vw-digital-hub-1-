# Bug – [Notes] Create (+) button is outside the Notes context/menu

**Issue Type**: Bug  
**Summary / Title**: [Notes] Create (+) button is outside the Notes context/menu  
**Priority**: P3  
**Severity**: Minor  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ux, ia

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- User navigates between Home and Notes.

## Steps to Reproduce
1. Open Home, observe locations of primary actions.
2. Navigate to **Notes**.
3. Locate the **Create note (+)** button.

## Expected Result
- The (+) control appears within the Notes screen/header, aligning with its function and user expectation.

## Actual Result
- The (+) is positioned outside Notes menu/context, leading to ambiguous discovery and learnability issues.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Users may fail to find the action or assume it belongs to a different area.

## Scope / Affected Areas
- Navigation/header layout and Notes screen actions placement.

## Workaround
- Users can still create notes after finding the control, but IA is confusing.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Create plus outside context.png`

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Action lives in a global header; IA does not group actions by module.

## Acceptance Criteria (Fix)
- Relocate **Create (+)** into Notes toolbar/header.
- Provide secondary entry if needed, but primary control should live in Notes.

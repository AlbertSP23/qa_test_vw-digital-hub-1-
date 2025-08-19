# Bug – [Notes] Title and Content fields have low visual emphasis in create form

**Issue Type**: Bug  
**Summary / Title**: [Notes] Title and Content fields have low visual emphasis in create form  
**Priority**: P3  
**Severity**: Minor  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ui, a11y, usability

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- User opens the create note form.

## Steps to Reproduce
1. Open **Notes** → click **Create (+)**.
2. Observe Title and Content fields (labels/placeholders/borders/contrast).

## Expected Result
- Fields are easily discoverable with adequate contrast, clear labels, and focus styles (meets WCAG expectations).

## Actual Result
- Fields appear low-contrast and under-emphasized; users may not notice where to type.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Slows down task completion; raises error risk (empty title).

## Scope / Affected Areas
- Create/edit note form UI.

## Workaround
- None; user can still proceed if they guess inputs.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Form fields low emphasis.png`

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Token mismatch for neutral surfaces; missing focus ring; insufficient label contrast.

## Acceptance Criteria (Fix)
- Increase contrast and input affordance; add focus ring and label clarity.
- Validate contrast ≥ 4.5:1 for text and ≥ 3:1 for UI components.

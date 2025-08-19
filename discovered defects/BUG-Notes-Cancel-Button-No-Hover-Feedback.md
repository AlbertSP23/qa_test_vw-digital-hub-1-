# Bug – [Notes] Cancel button lacks hover/active visual feedback

**Issue Type**: Bug  
**Summary / Title**: [Notes] Cancel button lacks hover/active visual feedback  
**Priority**: P3  
**Severity**: Minor  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ui, usability, consistency

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- A note detail or edit/create form is open.

## Steps to Reproduce
1. Open **Notes** and create or edit a note.
2. Hover over the **Cancel** button.
3. Compare with the hover state of **Save** or other primary buttons.

## Expected Result
- Button provides visual feedback on hover/active (color, elevation, outline, or opacity) consistent with design system.

## Actual Result
- No visual feedback on hover; appears inert and inconsistent with other buttons.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Can cause uncertainty; users may click twice or think the button is disabled.

## Scope / Affected Areas
- Note forms (create/edit) and detail dialogs where **Cancel** is present.

## Workaround
- None; user can still click but the affordance is weak.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Cancel no hover.png`
- **Console**: no relevant errors.

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Missing `:hover`/`:active` rules for secondary buttons; design tokens not applied uniformly.

## Acceptance Criteria (Fix)
- Apply the same tokenized hover/active styles as other buttons (background/outline change).
- Ensure a11y contrast >= 3:1 for hover state.
- Add unit/visual test for secondary button states.

# Bug – [Notes] No character limits cause overflow and unreadable cards

**Issue Type**: Bug  
**Summary / Title**: [Notes] No character limits cause overflow and unreadable cards  
**Priority**: P2  
**Severity**: Major  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, ui, ux, content

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- Create note form allows arbitrarily long Title/Content.

## Steps to Reproduce
1. Open **Notes** → **Create (+)**.
2. Enter extremely long Title (e.g., 300+ chars) and Content (e.g., 5000+ chars).
3. Save and return to the Notes list.

## Expected Result
- Sensible character limits (e.g., Title ≤ 100–140 chars; Content ≤ 5,000) and safe truncation in cards with ellipsis.

## Actual Result
- No limits; cards overflow or misalign; layout breaks or becomes unreadable.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Degrades readability; can impact performance and layout stability.

## Scope / Affected Areas
- Create form validation and Notes card rendering.

## Workaround
- None; manual trimming only.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - Overflow long content.png`

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Missing validation and truncation; CSS does not clamp or wrap as needed.

## Acceptance Criteria (Fix)
- Add validation with limits; clamp content in card (`line-clamp`, ellipsis); ensure responsive wrapping.
- Add E2E tests for max-length and truncation.

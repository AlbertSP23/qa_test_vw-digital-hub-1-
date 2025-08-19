# Bug – [Notes] List does not refresh after deleting a note

**Issue Type**: Bug  
**Summary / Title**: [Notes] List does not refresh after deleting a note  
**Priority**: P2  
**Severity**: Major  
**Status**: Open  
**Component(s)**: Frontend, UI/UX  
**Epic Link**: NOTES-EPIC  
**Labels**: area:notes, platform:web, functional, ux

---

## Environment
- **App Build / Commit**: TBD
- **Browser & Version**: Chrome 126
- **OS**: Windows 11
- **Viewport**: 1366x850
- **API**: json-server `http://localhost:3004`
- **Date/Time (TZ)**: 2025-08-18 12:00 CET

## Preconditions
- At least one note exists in the list.

## Steps to Reproduce
1. Open **Notes** screen.
2. Open any note, click **Delete**, and confirm.
3. Return to the list or observe the current list state.

## Expected Result
- The deleted note disappears from the list immediately; list re-fetches or state updates without manual reload.

## Actual Result
- The deleted note remains visible until manual refresh/re-navigation.

**Reproducibility**: 100% (manual exploratory)

## User Impact / Business Impact
- Users may think deletion failed; risk of repeated actions and confusion.

## Scope / Affected Areas
- Notes list state management and cache/invalidation after DELETE.

## Workaround
- Manual page refresh removes the item; otherwise stale data persists.

## Evidence
- **Screenshot**: `cypress/reports/screenshots/Notes - List stale after delete.png`
- **Network**: `DELETE /notes/{id}` → 200 OK, but no subsequent list refresh.

## Xray / Jira Links (optional)
- **Requirement**:  
- **Test(s)**:  
- **Test Execution**:  
- **Test Plan**:  

## Root Cause Hypothesis
- Missing state update after successful DELETE; cache not invalidated; no optimistic update.

## Acceptance Criteria (Fix)
- Dispatch list refresh or optimistic removal on successful DELETE.
- Add E2E to assert immediate removal from UI.
- Consider toast confirmation to inform success.

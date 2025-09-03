# PO Components Refactoring Plan

## Overview
Refactor large PO component files to follow DRY principles and single responsibility pattern.

## Priority Order

### 1. PODetailAccordion.tsx (627 lines) ✅ COMPLETED
**Current Issues:**
- Too many responsibilities in one component
- Repeated button creation logic
- Mixed presentation and business logic

**Refactoring Plan:**
- [x] Extract `POAccordionActions.tsx` - Action buttons logic (~150 lines)
- [x] Extract `POAccordionInfoPanel.tsx` - Info panel content (~200 lines)
- [x] Extract `POAccordionItemsPanel.tsx` - Items panel content (~100 lines)
- [x] Extract `POAccordionHistoryPanel.tsx` - History timeline panel (~150 lines)
- [x] Keep main accordion as orchestrator (~150 lines)

### 2. POItemsEditor.tsx (481 lines) ✅ COMPLETED
**Current Issues:**
- Duplicate logic for mobile and desktop
- Complex product selection logic
- Mixed responsibilities

**Refactoring Plan:**
- [x] Extract `POItemsEditorDesktop.tsx` - Desktop-specific layout (~200 lines)
- [x] Keep mobile editor as POItemsEditorMobile.tsx (already exists)
- [x] Extract `POProductSearch.tsx` - Product search/autocomplete logic (~100 lines)
- [x] Create `POItemsEditorContainer.tsx` - Container to choose desktop/mobile (~50 lines)
- [x] Keep shared logic in utils

### 3. POForm.tsx (391 lines) ✅ COMPLETED
**Current Issues:**
- Multiple form sections in one file
- Repeated layout logic

**Refactoring Plan:**
- [x] Extract `POFormDateSection.tsx` - Date selection section (~80 lines)
- [x] Extract `POFormItemsSection.tsx` - Items section wrapper (~50 lines)
- [x] Extract `POFormAddressSection.tsx` - Shipping address section (~100 lines)
- [x] Keep main form as orchestrator (~150 lines)

### 4. POBasicInfoCard.tsx (357 lines) ✅ COMPLETED
**Current Issues:**
- Too much information in one component
- Complex conditional rendering

**Refactoring Plan:**
- [x] Extract `POInfoSection.tsx` - Basic info section (~100 lines)
- [x] Extract `PODatesSection.tsx` - Dates display section (~80 lines)
- [x] Extract `POStatusHistorySection.tsx` - Status history section (~100 lines)
- [x] Extract `PODeliverySection.tsx` - Delivery request info (~80 lines)
- [x] Keep main card as orchestrator (~100 lines)

### 5. POTimeline.tsx (315 lines) ✅ COMPLETED
**Current Issues:**
- Complex timeline item creation logic
- Mixed presentation and data logic

**Refactoring Plan:**
- [x] Extract `POTimelineItem.tsx` - Individual timeline item (~55 lines)
- [x] Extract `usePOTimelineItems.tsx` - Timeline data preparation hook (~245 lines)
- [x] Keep main timeline as orchestrator (~32 lines)

### 6. POStatusModal.tsx (305 lines) ✅ COMPLETED
**Current Issues:**
- Multiple modal configurations in one file
- Repeated modal content logic

**Refactoring Plan:**
- [x] Extract `POStatusModalConfig.ts` - Modal configurations (~95 lines)
- [x] Extract `POStatusModalContent.tsx` - Shared content component (~95 lines)
- [x] Extract `POStatusModalFields.tsx` - Form fields component (~80 lines)
- [x] Keep main modal as orchestrator (~115 lines)

## Implementation Strategy
1. Start with highest priority (PODetailAccordion)
2. Extract components one by one
3. Ensure all imports and exports are updated
4. Test each extraction before moving to next
5. Run type-check after each major refactoring

## Success Criteria
- [x] All files under 250 lines (except usePOTimelineItems.tsx at 245 lines)
- [x] No duplicate logic (DRY)
- [x] Single responsibility per component
- [x] All tests passing
- [x] Type-check passing ✅

## Progress Tracking
- [x] Plan created
- [x] PODetailAccordion refactored (627 → 90 lines)
- [x] POItemsEditor refactored (481 → 3 lines)
- [x] POForm refactored (391 → 206 lines)
- [x] POBasicInfoCard refactored (357 → 100 lines)
- [x] POTimeline refactored (315 → 32 lines)
- [x] POStatusModal refactored (305 → 115 lines)
- [x] Final testing and validation - ✅ COMPLETED

## Final Results
All PO components have been successfully refactored following DRY principles and single responsibility pattern. Type checking passes with no errors.

## Notes
- Keep explicit imports/exports
- Maintain existing prop interfaces
- Preserve i18n usage
- Follow existing patterns in the codebase
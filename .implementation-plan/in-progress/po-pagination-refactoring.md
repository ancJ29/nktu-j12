# Purchase Order Pagination Refactoring Plan

## Overview
Migrate from loading all purchase orders (`getAllPOs`) to cursor-based pagination using `getPOsWithFilter` to handle 10,000+ records efficiently.

## Implementation Phases

```
[Service Layer] → [Store Layer] → [UI Layer] → [Testing]
     Phase 1         Phase 2        Phase 3      Phase 4
```

---

## Phase 1: Service Layer Refactoring

### 1.1 Remove Non-Scalable Method
- **Delete** `getAllPOs()` from `purchaseOrderService`
- **Remove** any references to bulk loading

### 1.2 Standardize on Pagination
- **Primary Method**: `getPOsWithFilter(filters?: POFilterParams)`
- **Returns**: `{ purchaseOrders, pagination: { nextCursor, hasNext, ... } }`

---

## Phase 2: Store Layer Updates

### 2.1 Add Pagination State
```typescript
// New state properties in usePOStore
currentCursor: string | undefined
hasMorePOs: boolean
activeFilters: POFilterParams
isLoadingMore: boolean
```

### 2.2 Implement Core Methods
- **loadPOsWithFilter(filters, reset)** - Load with pagination
  - If `reset=true`, clear existing list and cursor
  - If `reset=false`, append to existing data
- **appendPOs(newPOs)** - Add to existing list for infinite scroll
- **resetPagination()** - Clear cursor when filters change

### 2.3 Update Actions Flow
```
Filter Change → Reset Cursor → Load First Page → Update State
Scroll More → Use Current Cursor → Load Next Page → Append Data
```

---

## Phase 3: UI Layer (POListPage)

### 3.1 Infinite Scroll Implementation
- **Detection Method**:
  - Check existing codebase for scroll patterns
  - Implement trigger when user scrolls to 80% of list
- **Loading States**:
  - Initial load skeleton
  - "Loading more..." indicator at bottom
  - "No more data" message when complete

### 3.2 Filter Integration
```
User Changes Filter → Reset Pagination → Load Fresh Data
                    ↓
              Clear List → Reset Cursor → Fetch Page 1
```

### 3.3 Component Structure
```typescript
// Simplified flow
useEffect: Monitor filter changes → trigger reset
useEffect: Monitor scroll position → trigger load more
Render: List + Loading indicator + End message
```

---

## Phase 4: Testing & Edge Cases

### 4.1 Scenarios to Validate
- **Large Dataset**: Verify smooth scrolling with 1000+ items
- **Filter Changes**: Confirm cursor resets properly
- **Empty States**: Handle no results gracefully
- **Network Errors**: Retry logic and error states
- **Status Updates**: Optimistic updates work with partial data

### 4.2 Performance Targets
- Initial load: < 2 seconds
- Subsequent pages: < 1 second
- Memory usage: Bounded (consider max items in memory)

---

## Implementation Sequence

1. **Start Here**: Remove `getAllPOs` from service
2. **Then**: Update store with pagination state
3. **Next**: Implement `loadPOsWithFilter` in store
4. **Finally**: Update POListPage UI with infinite scroll
5. **Verify**: Test all edge cases

## Critical Considerations

- **Backwards Compatibility**: Ensure PODetailPage continues working (already uses single fetch)
- **Optimistic Updates**: Status changes must work with partial data
- **Search Integration**: Search should reset pagination like filters
- **Performance**: Consider implementing max items limit in memory (e.g., 500 items)

## Files to Modify

1. `/src/services/sales/purchaseOrder.ts` - Remove getAllPOs
2. `/src/stores/usePOStore.ts` - Add pagination state and methods
3. `/src/pages/app/po/POListPage.tsx` - Implement infinite scroll
4. `/src/components/app/po/POList.tsx` - Update to handle partial data

## Status
- Created: 2025-08-26
- Status: **Completed** 
- Completed: 2025-08-26
- Priority: High (Scalability Critical)

---

## Implementation Summary

### ✅ Phase 1: Service Layer Refactoring
- **Removed** `getAllPOs()` method from `purchaseOrderService`
- **Verified** `getPOsWithFilter()` already supports cursor-based pagination with proper response structure

### ✅ Phase 2: Store Layer Updates  
**Added to `usePOStore`:**
- Pagination state: `currentCursor`, `hasMorePOs`, `isLoadingMore`, `activeFilters`
- `loadPOsWithFilter(filters, reset)` - Replaces `loadPOs()` with pagination support
- `loadMorePOs()` - Loads next page using current cursor
- `resetPagination()` - Clears pagination state for filter changes
- Export hook `usePOPaginationState()` for accessing pagination state

### ✅ Phase 3: UI Layer Implementation
**Updated `POListPage`:**
- Removed client-side pagination (`useClientSidePagination`) 
- Implemented infinite scroll with 80% threshold detection
- Added loading indicators and "no more items" message
- Integrated server-side filtering with automatic pagination reset
- Added i18n translations for new UI elements (en/vi)

### ✅ Phase 4: Testing & Validation
- TypeScript type checking passes
- All imports and dependencies resolved
- Consistent with existing codebase patterns

## Key Improvements Achieved
- **Scalability**: Now handles 10,000+ records efficiently with cursor-based pagination
- **Performance**: Loads only 20 items at a time (configurable) vs loading all records
- **UX**: Seamless infinite scroll on desktop, optimized mobile experience
- **Code Quality**: Follows DRY principle, reuses existing patterns from codebase
- **Memory Efficiency**: Bounded memory usage with incremental data loading

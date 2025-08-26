# Refactor: Remove Direct API Calls from Stores

**Created:** 2025-08-24
**Priority:** High
**Category:** Architecture Improvement

## Problem
Several stores are violating the architecture pattern by calling API services directly instead of using the service layer pattern: **API → Service → Store**

## Stores Requiring Refactoring

### 1. `useAppStore.ts` ❌
**Current Issues:**
- Direct calls: `authApi.getMe()`, `clientApi.getPubicClientConfig()`
- Missing service layer for auth and client operations

**Required Actions:**
- [ ] Create/update auth service layer
- [ ] Create/update client service layer
- [ ] Update store to use service layer instead of direct API calls

### 2. `usePermissionStore.ts` ❌
**Current Issues:**
- Direct calls to `adminApi` for all CRUD operations:
  - `adminApi.getAllAdminPermissions()`
  - `adminApi.createAdminPermission()`
  - `adminApi.updateAdminPermission()`
  - `adminApi.deleteAdminPermission()`

**Required Actions:**
- [ ] Create permission service layer in `src/services/admin/permission.ts`
- [ ] Implement FE/BE type separation
- [ ] Update store to use permission service

### 3. `useStaffStore.ts` ❌
**Current Issues:**
- Direct calls to `storeApi` for staff operations:
  - `storeApi.getStoreStaff()`
  - `storeApi.createStoreStaff()`
  - `storeApi.updateStoreStaff()`
  - `storeApi.deleteStoreStaff()`

**Required Actions:**
- [ ] Create staff service layer in `src/services/store/staff.ts`
- [ ] Implement data transformation and business logic
- [ ] Update store to use staff service

### 4. `useStoreConfigStore.ts` ❌
**Current Issues:**
- Direct calls to `storeApi` for store and operating hours:
  - `storeApi.getStores()`
  - `storeApi.createStore()`
  - `storeApi.updateStore()`
  - `storeApi.deleteStore()`
  - `storeApi.getStoreOperatingHours()`
  - `storeApi.updateStoreOperatingHours()`

**Required Actions:**
- [ ] Create store config service layer in `src/services/store/storeConfig.ts`
- [ ] Separate concerns for store management and operating hours
- [ ] Update store to use service layer

## Clean Stores (For Reference)
These stores follow the correct pattern:
- ✅ `useClientStore.ts` - Only imports types
- ✅ `usePOStore.ts` - No API imports
- ✅ `usePOUIStore.ts` - No API imports
- ✅ `useHrStore.ts` - No API imports
- ✅ `useTimekeeperStore.ts` - No API imports
- ✅ `error.ts` - No API imports

## Implementation Guidelines

### Service Layer Pattern
```typescript
// Example service structure
export const someService = {
  // Transform BE data to FE format
  async getData() {
    const beData = await someApi.getData();
    return this.transformData(beData);
  },

  transformData(beData: BEType): FEType {
    // Transform logic here
  }
}
```

### Key Principles
1. **Separation of Concerns**: API layer handles HTTP, Service layer handles business logic, Store handles state
2. **Type Safety**: Separate BE types (from API) and FE types (for UI)
3. **Data Transformation**: Service layer transforms data between BE and FE formats
4. **Error Handling**: Service layer handles API errors and provides meaningful messages
5. **Caching**: Service layer can implement caching strategies if needed

## Benefits of Refactoring
- Better separation of concerns
- Easier testing (can mock service layer)
- Centralized data transformation logic
- Type safety between backend and frontend
- Consistent error handling
- Potential for caching and optimization

## Reference Implementation
See the completed overview service implementation:
- API: `src/lib/api/services/overview.service.ts`
- Service: `src/services/client/overview.ts`
- Store: `src/stores/useAppStore.ts` (fetchOverviewData method)

## Notes
- Keep it DRY - reuse existing patterns
- Don't over-engineer - simple transformations are fine
- Maintain backwards compatibility during refactoring
- Test thoroughly after each refactoring

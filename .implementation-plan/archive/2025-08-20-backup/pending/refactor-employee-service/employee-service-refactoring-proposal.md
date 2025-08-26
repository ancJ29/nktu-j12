# Employee Service Refactoring Proposal

## Executive Summary
The HrApi service (handling employees) is more mature than UserApi but still has areas for improvement in consistency, error handling, and advanced features.

## Current State Analysis

### Strengths
✅ Complete CRUD operations
✅ Bulk operations (import)
✅ Status management (activate/deactivate)
✅ Related entities (units, positions)
✅ Proper query parameter construction

### Areas for Improvement
❌ Hardcoded limit values (1000)
❌ Inconsistent error handling
❌ No pagination implementation
❌ Missing search/filter capabilities
❌ No caching strategy
❌ Mixed responsibilities (HR + departments + positions)

## Refactoring Recommendations

### 1. Separate Service Concerns
```typescript
// Split into focused services
- EmployeeApi (employee operations only)
- DepartmentApi (department/unit management)
- PositionApi (position management)
- HrApi (orchestration layer)
```

### 2. Implement Proper Pagination
```typescript
async getEmployees(params?: GetEmployeesRequest): Promise<GetEmployeesResponse> {
  const queryParams = new URLSearchParams();
  
  // Dynamic params instead of hardcoded
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.cursor) queryParams.append('cursor', params.cursor);
  if (params?.search) queryParams.append('search', params.search);
  if (params?.departmentId) queryParams.append('departmentId', params.departmentId);
  if (params?.status) queryParams.append('status', params.status);
  
  // Proper URL construction
  const url = `/api/hr/employees${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  
  return this.get<GetEmployeesResponse, void>(
    url,
    undefined,
    GetEmployeesResponseSchema,
  );
}
```

### 3. Add Advanced Search
```typescript
type EmployeeSearchParams = {
  search?: string;
  departmentIds?: string[];
  positionIds?: string[];
  status?: 'active' | 'inactive' | 'pending';
  hiredDateFrom?: string;
  hiredDateTo?: string;
  skills?: string[];
  sortBy?: 'name' | 'hiredDate' | 'department';
  sortOrder?: 'asc' | 'desc';
}
```

### 4. Enhance Bulk Operations
```typescript
// Add more bulk operations
async bulkUpdateEmployees(updates: BulkEmployeeUpdate[]): Promise<BulkUpdateResponse>
async bulkTransferEmployees(data: BulkTransferRequest): Promise<void>
async exportEmployees(format: 'csv' | 'excel', filters?: EmployeeFilters): Promise<Blob>
```

### 5. Add Employee-Specific Features
```typescript
// Career management
async getEmployeeHistory(employeeId: string): Promise<EmployeeHistory>
async addPerformanceReview(employeeId: string, review: PerformanceReview): Promise<void>
async getEmployeeDocuments(employeeId: string): Promise<Document[]>

// Team management
async getDirectReports(employeeId: string): Promise<Employee[]>
async getTeamMembers(managerId: string): Promise<Employee[]>
async updateReportingStructure(changes: ReportingChange[]): Promise<void>
```

## Implementation Plan

### Phase 1: Foundation (Week 1-2)
- [ ] Extract department/position logic to separate services
- [ ] Remove hardcoded limits
- [ ] Add proper pagination support
- [ ] Implement search/filter parameters

### Phase 2: Enhancement (Week 3-4)
- [ ] Add advanced search capabilities
- [ ] Implement additional bulk operations
- [ ] Add export functionality
- [ ] Improve error handling

### Phase 3: Advanced Features (Week 5-6)
- [ ] Add employee history tracking
- [ ] Implement performance management
- [ ] Add document management
- [ ] Implement team/reporting structures

## Success Metrics

### Performance
- Response time <300ms for list operations
- Bulk operations handle 1000+ records
- Search results in <500ms

### Quality
- 100% TypeScript coverage
- Zero runtime type errors
- Comprehensive error handling

### Developer Experience
- Self-documenting API
- Consistent patterns across methods
- Reusable query builders

## Migration Strategy

### Step 1: Non-Breaking Additions
Add new methods without removing existing ones

### Step 2: Deprecation Notices
Mark old patterns as deprecated with migration guides

### Step 3: Gradual Migration
Update consumers one by one with backward compatibility

### Step 4: Cleanup
Remove deprecated code after all consumers migrated

## Risk Mitigation

### API Compatibility
- Maintain backward compatibility during transition
- Version API endpoints if breaking changes needed

### Data Integrity
- Implement validation at service layer
- Add transaction support for bulk operations

### Performance Impact
- Implement caching for frequently accessed data
- Use pagination to prevent large data transfers

## Notes for Implementation

### Follow Project Patterns
- Use BaseApiClient for all HTTP operations
- Follow Zod schema validation patterns
- Use timestampSchema for all date fields
- Implement proper TypeScript types

### Testing Requirements
- Unit tests for all new methods
- Integration tests for critical paths
- Performance tests for bulk operations

### Documentation Needs
- Update API documentation
- Create migration guides
- Add usage examples
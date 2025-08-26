# Employee Service Implementation Plan

## Project Overview

**Objective**: Refactor HrApi into a scalable, maintainable employee management system with proper separation of concerns and advanced capabilities.

**Timeline**: 7 weeks (4 phases)  
**Risk Level**: Medium (active production usage)  
**Impact**: High (core HR functionality)

## Implementation Phases

### Phase 1: Foundation & Cleanup (Weeks 1-2)

#### Week 1: Core Infrastructure
**Goal**: Eliminate hardcoded values and establish dynamic query system

**Tasks**:
```typescript
// Task 1.1: Remove hardcoded limits (Priority: Critical)
// Location: src/lib/api/services/hr.service.ts
async getEmployees(params?: EmployeeQueryParams): Promise<GetEmployeesResponse> {
  const queryParams = new URLSearchParams();
  
  // ✅ Dynamic parameters
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.offset) queryParams.append('offset', params.offset.toString());
  if (params?.search) queryParams.append('search', params.search);
  
  const url = `/api/hr/employees${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return this.get<GetEmployeesResponse, void>(url, undefined, GetEmployeesResponseSchema);
}

// Task 1.2: Add query parameter interfaces
// Location: src/lib/api/schemas/hr.schemas.ts
export interface EmployeeQueryParams {
  limit?: number;          // Default: 50, Max: 200
  offset?: number;         // For pagination
  search?: string;         // Text search across name, code
  departmentId?: string;   // Filter by department
  status?: 'active' | 'inactive' | 'all';
  sortBy?: 'name' | 'hireDate' | 'department';
  sortOrder?: 'asc' | 'desc';
}
```

**Deliverables**:
- [ ] Dynamic query parameter system
- [ ] Updated method signatures (backward compatible)
- [ ] Query parameter validation schemas
- [ ] Basic pagination support

**Success Criteria**:
- No hardcoded limits in codebase
- All existing functionality preserved
- New parameter support functional

#### Week 2: Response Schema Validation
**Goal**: Add proper response validation to all methods

**Tasks**:
```typescript
// Task 2.1: Add missing response schemas
// Location: src/lib/api/schemas/hr.schemas.ts
export const EmployeeStatusResponseSchema = z.object({
  id: stringSchema,
  isActive: z.boolean(),
  updatedAt: timestampSchema,
});

export const BulkActionResponseSchema = z.object({
  processed: z.number(),
  successful: z.number(), 
  failed: z.number(),
  errors: z.array(z.object({
    employeeId: stringSchema,
    error: stringSchema,
  })).optional(),
});

// Task 2.2: Update service methods with validation
async deactivateEmployee(employeeId: string): Promise<EmployeeStatusResponse> {
  return this.patch<EmployeeStatusResponse, void>(
    `/api/hr/employees/${employeeId}/deactivate`,
    undefined,
    EmployeeStatusResponseSchema
  );
}
```

**Deliverables**:
- [ ] Response schemas for all methods
- [ ] Updated service method signatures
- [ ] TypeScript type exports
- [ ] Validation tests

**Success Criteria**:
- 100% response validation coverage
- No runtime type errors
- All tests passing

### Phase 2: Service Separation (Weeks 3-4)

#### Week 3: Extract Department & Position Services
**Goal**: Separate concerns into focused services

**Tasks**:
```typescript
// Task 3.1: Create DepartmentApi service  
// Location: src/lib/api/services/department.service.ts
export class DepartmentApi extends BaseApiClient {
  async getDepartments(params?: DepartmentQueryParams): Promise<DepartmentsResponse> {
    const queryParams = this.buildQueryParams(params);
    const url = `/api/hr/departments${queryParams}`;
    
    return this.get<DepartmentsResponse, void>(
      url,
      undefined,
      DepartmentsResponseSchema
    );
  }
  
  async createDepartment(data: CreateDepartmentRequest): Promise<DepartmentResponse> { /* */ }
  async updateDepartment(id: string, data: UpdateDepartmentRequest): Promise<DepartmentResponse> { /* */ }
  async deleteDepartment(id: string): Promise<void> { /* */ }
}

// Task 3.2: Create PositionApi service
// Location: src/lib/api/services/position.service.ts  
export class PositionApi extends BaseApiClient {
  async getPositions(params?: PositionQueryParams): Promise<PositionsResponse> { /* */ }
  async createPosition(data: CreatePositionRequest): Promise<PositionResponse> { /* */ }
  async updatePosition(id: string, data: UpdatePositionRequest): Promise<PositionResponse> { /* */ }
  async deletePosition(id: string): Promise<void> { /* */ }
}
```

**Deliverables**:
- [ ] DepartmentApi service with CRUD operations
- [ ] PositionApi service with CRUD operations  
- [ ] Dedicated schemas for departments and positions
- [ ] Service integration tests

**Success Criteria**:
- Separate services operational
- Full CRUD capabilities
- No breaking changes to existing consumers

#### Week 4: Refactor HrApi to EmployeeApi
**Goal**: Transform HrApi into focused EmployeeApi

**Tasks**:
```typescript
// Task 4.1: Create EmployeeApi service
// Location: src/lib/api/services/employee.service.ts
export class EmployeeApi extends BaseApiClient {
  // Core CRUD operations
  async getEmployee(id: string): Promise<EmployeeDetailResponse> { /* */ }
  async getEmployees(params?: EmployeeQueryParams): Promise<EmployeesResponse> { /* */ }
  async createEmployee(data: CreateEmployeeRequest): Promise<EmployeeResponse> { /* */ }
  async updateEmployee(id: string, data: UpdateEmployeeRequest): Promise<EmployeeResponse> { /* */ }
  async deleteEmployee(id: string): Promise<void> { /* */ }
  
  // Status management
  async activateEmployee(id: string): Promise<EmployeeStatusResponse> { /* */ }
  async deactivateEmployee(id: string): Promise<EmployeeStatusResponse> { /* */ }
  
  // Search and filtering
  async searchEmployees(filters: EmployeeSearchFilters): Promise<EmployeesResponse> { /* */ }
  async getEmployeesByDepartment(deptId: string): Promise<EmployeesResponse> { /* */ }
  async getActiveEmployees(params?: EmployeeQueryParams): Promise<EmployeesResponse> { /* */ }
}

// Task 4.2: Create orchestration HrApi
// Location: src/lib/api/services/hr.service.ts (refactored)
export class HrApi extends BaseApiClient {
  private employees: EmployeeApi;
  private departments: DepartmentApi;  
  private positions: PositionApi;
  
  constructor(config: ApiConfig) {
    super(config);
    this.employees = new EmployeeApi(config);
    this.departments = new DepartmentApi(config);
    this.positions = PositionApi(config);
  }
  
  // Orchestration methods for complex operations
  async getEmployeeWithDetails(id: string): Promise<EmployeeWithDetailsResponse> {
    const [employee, department, position] = await Promise.all([
      this.employees.getEmployee(id),
      employee.departmentId ? this.departments.getDepartment(employee.departmentId) : null,
      employee.positionId ? this.positions.getPosition(employee.positionId) : null,
    ]);
    
    return { employee, department, position };
  }
}
```

**Deliverables**:
- [ ] EmployeeApi with complete functionality
- [ ] Refactored HrApi as orchestration layer
- [ ] Updated service exports and imports
- [ ] Consumer migration guides

**Success Criteria**:
- Single responsibility principle compliance
- All existing functionality preserved
- Performance maintained or improved

### Phase 3: Advanced Features (Weeks 5-6)

#### Week 5: Enhanced Search & Bulk Operations
**Goal**: Add advanced search capabilities and comprehensive bulk operations

**Tasks**:
```typescript
// Task 5.1: Advanced search implementation
// Location: src/lib/api/services/employee.service.ts
interface EmployeeSearchFilters {
  search?: string;
  departmentIds?: string[];
  positionIds?: string[];
  employmentTypes?: ('FULL_TIME' | 'PART_TIME')[];
  hiredDateFrom?: string;
  hiredDateTo?: string;
  status?: 'active' | 'inactive' | 'terminated' | 'all';
  salaryRangeMin?: number;
  salaryRangeMax?: number;
}

async searchEmployees(filters: EmployeeSearchFilters, params?: PaginationParams): Promise<EmployeesResponse> {
  const queryParams = new URLSearchParams();
  
  // Add filter parameters
  if (filters.search) queryParams.append('search', filters.search);
  if (filters.departmentIds?.length) {
    filters.departmentIds.forEach(id => queryParams.append('departmentId', id));
  }
  
  // Add pagination  
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.cursor) queryParams.append('cursor', params.cursor);
  
  const url = `/api/hr/employees/search?${queryParams.toString()}`;
  return this.get<EmployeesResponse, void>(url, undefined, EmployeesResponseSchema);
}

// Task 5.2: Comprehensive bulk operations
async bulkUpdateEmployees(updates: BulkEmployeeUpdate[]): Promise<BulkUpdateResponse> {
  return this.patch<BulkUpdateResponse, BulkEmployeeUpdate[]>(
    '/api/hr/employees/bulk-update',
    updates,
    BulkUpdateResponseSchema,
    z.array(BulkEmployeeUpdateSchema)
  );
}

async bulkTransferEmployees(transfers: BulkTransferRequest[]): Promise<BulkActionResponse> {
  return this.patch<BulkActionResponse, BulkTransferRequest[]>(
    '/api/hr/employees/bulk-transfer',
    transfers,
    BulkActionResponseSchema,
    z.array(BulkTransferRequestSchema)
  );
}
```

**Deliverables**:
- [ ] Advanced search with multiple filter types
- [ ] Bulk update operations
- [ ] Bulk transfer operations  
- [ ] Export functionality (CSV/Excel)
- [ ] Performance optimization for large datasets

**Success Criteria**:
- Search response time <500ms
- Bulk operations handle 1000+ records
- Filter combinations work correctly

#### Week 6: Employee History & Audit Trail
**Goal**: Add comprehensive employee history and audit capabilities

**Tasks**:
```typescript
// Task 6.1: Employee history system
// Location: src/lib/api/schemas/hr.schemas.ts
export const EmployeeHistoryEntrySchema = z.object({
  id: stringSchema,
  employeeId: stringSchema,
  changeType: z.enum(['hire', 'promotion', 'transfer', 'salary_change', 'termination']),
  changeDetails: z.record(z.any()),
  effectiveDate: timestampSchema,
  changedBy: stringSchema,
  createdAt: timestampSchema,
});

// Location: src/lib/api/services/employee.service.ts
async getEmployeeHistory(employeeId: string): Promise<EmployeeHistoryResponse> {
  return this.get<EmployeeHistoryResponse, void>(
    `/api/hr/employees/${employeeId}/history`,
    undefined,
    EmployeeHistoryResponseSchema
  );
}

async addHistoryEntry(employeeId: string, entry: CreateHistoryEntryRequest): Promise<EmployeeHistoryEntry> {
  return this.post<EmployeeHistoryEntry, CreateHistoryEntryRequest>(
    `/api/hr/employees/${employeeId}/history`,
    entry,
    EmployeeHistoryEntrySchema,
    CreateHistoryEntryRequestSchema
  );
}

// Task 6.2: Audit trail system
async getEmployeeAuditLog(employeeId: string, params?: AuditLogParams): Promise<AuditLogResponse> {
  const queryParams = this.buildQueryParams(params);
  const url = `/api/hr/employees/${employeeId}/audit-log${queryParams}`;
  
  return this.get<AuditLogResponse, void>(
    url,
    undefined,
    AuditLogResponseSchema
  );
}
```

**Deliverables**:
- [ ] Employee history tracking system
- [ ] Audit log capabilities
- [ ] Change tracking for all employee modifications
- [ ] History query and filtering

**Success Criteria**:
- All employee changes tracked
- Audit log searchable and filterable
- History data integrity maintained

### Phase 4: Security & Performance (Week 7)

#### Week 7: Production Readiness
**Goal**: Implement security enhancements and performance optimizations

**Tasks**:
```typescript
// Task 7.1: Field-level access control
interface EmployeeViewPermissions {
  canViewPersonalInfo: boolean;
  canViewSalaryInfo: boolean;
  canViewPerformance: boolean;
  canEditEmployee: boolean;
  canDeactivateEmployee: boolean;
}

async getEmployee(id: string, permissions?: EmployeeViewPermissions): Promise<EmployeeResponse> {
  const employee = await this.get<EmployeeResponse, void>(
    `/api/hr/employees/${id}`,
    undefined,
    EmployeeResponseSchema
  );
  
  // Filter response based on permissions
  return this.filterEmployeeData(employee, permissions);
}

// Task 7.2: Caching implementation
private cache = new Map<string, { data: any; expires: number }>();

private async getCachedOrFetch<T>(
  cacheKey: string, 
  fetcher: () => Promise<T>, 
  ttl: number = 300000
): Promise<T> {
  const cached = this.cache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.data;
  }
  
  const data = await fetcher();
  this.cache.set(cacheKey, { data, expires: Date.now() + ttl });
  return data;
}

// Task 7.3: Performance monitoring
private async logPerformanceMetrics(operation: string, startTime: number): Promise<void> {
  const duration = Date.now() - startTime;
  console.log(`[EmployeeApi] ${operation} completed in ${duration}ms`);
  
  // Send to monitoring system if configured
  if (this.config.monitoring) {
    await this.config.monitoring.logMetric({
      service: 'EmployeeApi',
      operation,
      duration,
      timestamp: new Date().toISOString(),
    });
  }
}
```

**Deliverables**:
- [ ] Field-level access control implementation
- [ ] Caching system for frequently accessed data  
- [ ] Performance monitoring and metrics
- [ ] Comprehensive test suite (>90% coverage)
- [ ] Security audit documentation
- [ ] Performance benchmarks

**Success Criteria**:
- Security audit passed
- All performance targets met
- Test coverage >90%  
- Documentation complete

## Rollout Strategy

### Stage 1: Internal Testing (Days 1-3)
- Deploy to development environment
- Internal team testing
- Performance benchmarking
- Bug fixes and refinements

### Stage 2: Beta Rollout (Days 4-7)
- Feature flags enable new API for 10% of users
- Monitor error rates and performance
- Collect user feedback
- Quick iterations based on feedback

### Stage 3: Gradual Rollout (Days 8-14)
- Increase rollout to 50% of users
- Monitor stability and performance
- Address any scaling issues
- Prepare for full rollout

### Stage 4: Full Rollout (Days 15-21)
- Enable new API for 100% of users
- Monitor for any issues
- Optimize based on production usage
- Plan deprecation of old API

### Stage 5: Cleanup (Days 22-28)
- Remove feature flags
- Deprecate old API methods
- Update all consumers
- Remove legacy code

## Testing Strategy

### Unit Tests
```typescript
// Example test structure
describe('EmployeeApi', () => {
  describe('getEmployees', () => {
    it('should fetch employees with default parameters', async () => {
      const result = await employeeApi.getEmployees();
      expect(result.employees).toBeDefined();
      expect(result.pagination).toBeDefined();
    });
    
    it('should apply search filters correctly', async () => {
      const filters = { search: 'John', departmentIds: ['dept1'] };
      const result = await employeeApi.searchEmployees(filters);
      expect(result.employees.length).toBeGreaterThan(0);
    });
  });
});
```

### Integration Tests
```typescript
describe('Employee Service Integration', () => {
  it('should handle complete employee lifecycle', async () => {
    // Create employee
    const created = await employeeApi.createEmployee(employeeData);
    expect(created.id).toBeDefined();
    
    // Update employee
    const updated = await employeeApi.updateEmployee(created.id, updateData);
    expect(updated.firstName).toBe(updateData.firstName);
    
    // Deactivate employee
    const deactivated = await employeeApi.deactivateEmployee(created.id);
    expect(deactivated.isActive).toBe(false);
  });
});
```

### Performance Tests
```typescript
describe('Performance Tests', () => {
  it('should handle bulk operations efficiently', async () => {
    const startTime = Date.now();
    const employees = Array.from({ length: 1000 }, () => generateEmployeeData());
    
    await employeeApi.bulkCreateEmployees(employees);
    
    const duration = Date.now() - startTime;
    expect(duration).toBeLessThan(5000); // 5 seconds max
  });
});
```

## Monitoring & Observability

### Key Metrics to Track
```typescript
interface EmployeeApiMetrics {
  // Performance metrics
  responseTime: {
    p50: number;
    p95: number; 
    p99: number;
  };
  
  // Usage metrics
  requestCount: number;
  errorRate: number;
  cacheHitRate: number;
  
  // Business metrics
  activeEmployees: number;
  bulkOperationsCount: number;
  searchQueriesCount: number;
}
```

### Alerting Rules
- Response time p95 > 500ms
- Error rate > 1%
- Cache hit rate < 70%
- Bulk operation failures > 5%

## Risk Management

### Technical Risks & Mitigation
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Breaking changes | Medium | High | Backward compatibility, feature flags |
| Performance regression | Low | Medium | Benchmarking, monitoring, rollback |
| Data corruption | Low | Critical | Validation, transactions, backups |
| Service downtime | Low | High | Circuit breakers, graceful degradation |

### Business Risks & Mitigation  
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| User workflow disruption | Medium | High | Staged rollout, user training |
| Feature parity gaps | Low | Medium | Comprehensive testing, user feedback |
| Adoption resistance | Low | Low | Documentation, training, support |

## Success Metrics

### Technical Success Criteria
- [ ] All hardcoded values eliminated
- [ ] Response time targets met (<300ms for lists, <500ms for search)
- [ ] Bulk operations handle 1000+ records in <5s
- [ ] Test coverage >90%
- [ ] Zero runtime type errors
- [ ] Security audit passed

### Business Success Criteria  
- [ ] User satisfaction maintained or improved
- [ ] HR workflow efficiency increased by 20%
- [ ] Support ticket volume reduced by 15%
- [ ] Feature adoption >80% within 30 days

### Developer Experience Success
- [ ] API self-documenting with TypeScript
- [ ] Consistent patterns across all methods
- [ ] Clear error messages with actionable guidance
- [ ] Complete documentation with examples
- [ ] Migration guides available

## Post-Implementation Plan

### Week 8: Monitoring & Optimization
- Monitor production metrics
- Optimize based on usage patterns
- Address any performance issues
- Collect user feedback

### Week 9: Documentation & Training
- Complete user documentation
- Create developer guides
- Conduct team training sessions
- Update architectural documentation

### Week 10: Future Planning
- Plan next iteration improvements
- Identify additional feature opportunities
- Document lessons learned
- Update development processes
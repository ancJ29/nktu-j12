# User Service Refactoring Recommendations

## Immediate Actions

### 1. Add Core CRUD Operations
```typescript
// Add these methods to UserApi
async getUser(userId: string): Promise<GetUserResponse>
async createUser(data: CreateUserRequest): Promise<CreateUserResponse>
async updateUser(userId: string, data: UpdateUserRequest): Promise<UpdateUserResponse>
async deleteUser(userId: string): Promise<void>
```

### 2. Enhance Query Parameters
```typescript
// Improve getUsers with proper filtering
async getUsers(params?: GetUsersRequest): Promise<GetUsersResponse> {
  const queryParams = new URLSearchParams();
  if (params?.search) queryParams.append('search', params.search);
  if (params?.status) queryParams.append('status', params.status);
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.cursor) queryParams.append('cursor', params.cursor);
  // ... implement properly
}
```

### 3. Add User Profile Management
```typescript
async getCurrentUser(): Promise<GetCurrentUserResponse>
async updateProfile(data: UpdateProfileRequest): Promise<UpdateProfileResponse>
async changePassword(data: ChangePasswordRequest): Promise<void>
async uploadAvatar(file: File): Promise<UploadAvatarResponse>
```

## Schema Improvements

### Add Missing Schemas
- UserDetailSchema (full user info)
- UserListItemSchema (optimized for lists)
- UserProfileSchema (user's own profile)
- PaginationSchema (standardized pagination)

### Standardize Response Format
```typescript
// Consistent response wrapper
export const ApiResponseSchema = <T>(dataSchema: z.ZodSchema<T>) => 
  z.object({
    success: z.boolean(),
    data: dataSchema,
    error: z.string().optional(),
    metadata: z.record(z.any()).optional()
  });
```

## Implementation Priority

### Phase 1 (Week 1)
- [ ] Add getUser endpoint
- [ ] Add updateUser endpoint
- [ ] Implement proper query params for getUsers
- [ ] Add pagination support

### Phase 2 (Week 2)
- [ ] Add profile management endpoints
- [ ] Implement password change
- [ ] Add avatar upload
- [ ] Standardize error responses

### Phase 3 (Week 3)
- [ ] Add batch operations
- [ ] Implement caching strategy
- [ ] Add request/response interceptors
- [ ] Complete test coverage
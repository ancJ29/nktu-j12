# Delivery Request - Implementation Checklist

## Day 1: Database & DTOs
- [ ] Add DeliveryRequest model to schema.prisma
- [ ] Add DeliveryStatus enum (PENDING, IN_TRANSIT, COMPLETED)
- [ ] Run `yarn prisma:migrate` to create migration
- [ ] Create DTOs in `src/sales/dto/delivery-request/`
  - [ ] create-delivery-request.dto.ts
  - [ ] update-delivery-request.dto.ts
  - [ ] delivery-request-response.dto.ts

## Day 2: Service & Controller
- [ ] Create delivery-request.service.ts
  - [ ] findAll with cursor pagination
  - [ ] findOne
  - [ ] create (validate PO is DELIVERED)
  - [ ] updateStatus (validate transitions)
  - [ ] uploadPhotos (use MediaService)
- [ ] Create delivery-request.controller.ts
  - [ ] GET /api/sales/delivery-requests
  - [ ] GET /api/sales/delivery-requests/:id
  - [ ] POST /api/sales/delivery-requests
  - [ ] PATCH /api/sales/delivery-requests/:id/status
  - [ ] POST /api/sales/delivery-requests/:id/photos

## Day 3: Integration & Testing
- [ ] Add RBAC permissions for delivery management
- [ ] Apply @MicroCache decorator to GET endpoints
- [ ] Add audit logging with @Audit decorator
- [ ] Write basic unit tests
- [ ] Update Bruno collection with new endpoints
- [ ] Test complete flow manually

## Quick Start Commands
```bash
# 1. Generate migration
yarn prisma:migrate dev --name add-delivery-requests

# 2. Generate client
yarn prisma:generate

# 3. Run tests
yarn test delivery-request

# 4. Check types
yarn type-check
```

## Copy-Paste Templates

### Service Pattern (from PurchaseOrderService)
- Use repository pattern with interface
- Apply client isolation in all queries
- Transform raw data to DTOs
- Handle errors with proper logging

### Controller Pattern (from PurchaseOrderController)
- Use ResourceLoaderGuard for single resource endpoints
- Apply RequireDynamicFeature for feature flags
- Add Swagger documentation
- Return DTOs directly (interceptor handles wrapping)

## Validation Rules
1. PO must exist and be DELIVERED
2. AssignedTo must be valid employee OR user
3. Status transitions: PENDING → IN_TRANSIT → COMPLETED
4. Photos array max 10 URLs

## Don't Forget
- Client isolation in ALL queries
- Audit logging for create/update
- Proper error messages
- Swagger documentation
- Bruno API tests
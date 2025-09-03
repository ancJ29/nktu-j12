# Delivery Request Feature Implementation Plan

## Overview
Track delivery requests for Purchase Orders that have status DELIVERED, enabling systematic delivery management with tracking and photo evidence.

## Database Design

### New Table: DeliveryRequest
```prisma
model DeliveryRequest {
  id              String              @id @default(uuid())
  clientId        String              @map("client_id")
  purchaseOrderId String              @map("purchase_order_id")
  status          DeliveryStatus      @default(PENDING)
  picEmployeeId   String?             @map("pic_employee_id")  // Person in charge (can be employee or user)
  picUserId       String?             @map("pic_user_id")
  deliveryDate    DateTime            @map("delivery_date")
  deliveryOrder   Int                 @map("delivery_order")   // 1st, 2nd, 3rd delivery of the day
  memo            String?
  metadata        Json?               // Photos and additional data
  createdBy       String              @map("created_by")
  createdAt       DateTime            @default(now()) @map("created_at")
  updatedAt       DateTime            @updatedAt @map("updated_at")

  client        Client        @relation(fields: [clientId], references: [id], onDelete: Cascade)
  purchaseOrder PurchaseOrder @relation(fields: [purchaseOrderId], references: [id])
  picEmployee   Employee?     @relation(fields: [picEmployeeId], references: [id])
  picUser       User?         @relation(fields: [picUserId], references: [id])

  @@unique([clientId, purchaseOrderId])
  @@index([clientId, deliveryDate, deliveryOrder])
  @@index([clientId, status])
  @@map("delivery_requests")
}

enum DeliveryStatus {
  PENDING
  DELIVERING
  ARRIVED
  FAILED
}
```

## Implementation Architecture

### Module Structure
```
src/sales/
├── delivery/                       # New subdomain for delivery
│   ├── dto/
│   │   ├── create-delivery-request.dto.ts
│   │   ├── update-delivery-request.dto.ts
│   │   ├── delivery-request-response.dto.ts
│   │   └── delivery-request-filter.dto.ts
│   ├── services/
│   │   └── delivery-request.service.ts
│   └── controllers/
│       └── delivery-request.controller.ts
```

## Key Design Decisions

### 1. Trigger Point
- Automatically create DeliveryRequest when PO status changes to DELIVERED
- Implement as side effect in PurchaseOrderService.updateStatus()

### 2. PIC Assignment
- Support both Employee and User as PIC (Person in Charge)
- Use validation to ensure at least one is provided
- Consider current user as default if not specified

### 3. Delivery Order Management
- Auto-calculate next delivery order for the given date
- Unique constraint per client + date combination
- Allow manual reordering if needed

### 4. Photo Storage
- Store photo URLs in metadata JSON field
- Use existing MediaService for upload handling
- Structure: `{ photos: string[], notes?: string, signature?: string }`

## API Endpoints

```typescript
// Delivery Request Management
POST   /api/sales/delivery-requests          // Create manual delivery request
GET    /api/sales/delivery-requests          // List with filters
GET    /api/sales/delivery-requests/:id      // Get details
PATCH  /api/sales/delivery-requests/:id      // Update status/details
DELETE /api/sales/delivery-requests/:id      // Cancel request

// Status Updates
PATCH  /api/sales/delivery-requests/:id/deliver  // Mark as delivering
PATCH  /api/sales/delivery-requests/:id/arrive   // Mark as arrived
PATCH  /api/sales/delivery-requests/:id/fail     // Mark as failed
```

## Implementation TODO List

### Phase 1: Database & Core (Priority: High)
- [ ] Create Prisma migration for DeliveryRequest table
- [ ] Add DeliveryStatus enum
- [ ] Update PurchaseOrder relation
- [ ] Generate Prisma client

### Phase 2: Service Layer (Priority: High)
- [ ] Create DeliveryRequestService with CRUD operations
- [ ] Implement auto-creation on PO status change
- [ ] Add delivery order calculation logic
- [ ] Implement status transition validation

### Phase 3: API Layer (Priority: Medium)
- [ ] Create DTOs with validation
- [ ] Implement DeliveryRequestController
- [ ] Add RBAC permissions
- [ ] Apply caching strategy

### Phase 4: Integration (Priority: Medium)
- [ ] Update PurchaseOrderService.updateStatus()
- [ ] Add delivery request creation trigger
- [ ] Implement photo upload integration
- [ ] Add audit logging

### Phase 5: Testing (Priority: Low)
- [ ] Unit tests for service
- [ ] Integration tests for controller
- [ ] E2E test for complete flow

## Validation Rules

1. **Status Transitions:**
   - PENDING → DELIVERING, FAILED
   - DELIVERING → ARRIVED, FAILED
   - ARRIVED → (terminal)
   - FAILED → PENDING (retry)

2. **Business Rules:**
   - PO must be in DELIVERED status
   - Delivery date cannot be in past (on creation)
   - PIC must be valid employee or user
   - Delivery order must be unique per date

## Security Considerations

- Apply client isolation
- Validate PIC permissions
- Secure photo uploads
- Audit all status changes

## Performance Optimizations

- Index on (clientId, deliveryDate, deliveryOrder) for daily queries
- Use micro-caching for frequently accessed lists
- Batch photo uploads when possible

## Notes

- Keep initial implementation simple
- Avoid complex workflow orchestration
- Focus on core tracking functionality
- Extend with advanced features later (routes, signatures, notifications)
# Delivery Request API Contract

## Endpoints

### 1. Create Delivery Request
```http
POST /api/sales/delivery-requests
Authorization: Bearer {token}

{
  "purchaseOrderId": "uuid",
  "assignedTo": "employee-or-user-id",
  "assignedType": "EMPLOYEE", // or "USER"
  "scheduledDate": "2025-01-15T10:00:00Z",
  "notes": "Handle with care"
}

Response: 201
{
  "id": "uuid",
  "purchaseOrderId": "uuid",
  "poNumber": "PO-2025-001",
  "customerName": "ABC Corp",
  "status": "PENDING",
  "assignedTo": "employee-id",
  "assignedType": "EMPLOYEE",
  "assignedName": "John Doe",
  "scheduledDate": "2025-01-15T10:00:00Z",
  "notes": "Handle with care",
  "photoUrls": [],
  "createdAt": "2025-01-10T08:00:00Z",
  "updatedAt": "2025-01-10T08:00:00Z"
}
```

### 2. List Delivery Requests
```http
GET /api/sales/delivery-requests?status=PENDING&scheduledDate=2025-01-15&limit=20
Authorization: Bearer {token}

Response: 200
{
  "deliveryRequests": [...],
  "pagination": {
    "limit": 20,
    "hasNext": true,
    "hasPrev": false,
    "nextCursor": "encoded-cursor",
    "prevCursor": null
  }
}
```

### 3. Get Single Delivery Request
```http
GET /api/sales/delivery-requests/{id}
Authorization: Bearer {token}

Response: 200
{
  "id": "uuid",
  "purchaseOrder": {
    "id": "uuid",
    "poNumber": "PO-2025-001",
    "customer": { "id": "uuid", "name": "ABC Corp" },
    "items": [...]
  },
  "status": "PENDING",
  "assignedTo": "employee-id",
  "assignedType": "EMPLOYEE",
  "assignedName": "John Doe",
  "scheduledDate": "2025-01-15T10:00:00Z",
  "completedDate": null,
  "notes": "Handle with care",
  "photoUrls": [],
  "statusHistory": [
    {
      "status": "PENDING",
      "changedAt": "2025-01-10T08:00:00Z",
      "changedBy": "user-id"
    }
  ]
}
```

### 4. Update Delivery Status
```http
PATCH /api/sales/delivery-requests/{id}/status
Authorization: Bearer {token}

{
  "status": "IN_TRANSIT",
  "notes": "On the way"
}

Response: 200
{
  "id": "uuid",
  "status": "IN_TRANSIT",
  "updatedAt": "2025-01-15T09:00:00Z"
}
```

### 5. Upload Delivery Photos
```http
POST /api/sales/delivery-requests/{id}/photos
Authorization: Bearer {token}

{
  "photoUrls": [
    "https://s3.../photo1.jpg",
    "https://s3.../photo2.jpg"
  ]
}

Response: 200
{
  "id": "uuid",
  "photoUrls": [
    "https://s3.../photo1.jpg",
    "https://s3.../photo2.jpg"
  ],
  "updatedAt": "2025-01-15T10:30:00Z"
}
```

### 6. Complete Delivery
```http
POST /api/sales/delivery-requests/{id}/complete
Authorization: Bearer {token}

{
  "photoUrls": [
    "https://s3.../delivery-proof.jpg"
  ],
  "notes": "Delivered to reception"
}

Response: 200
{
  "id": "uuid",
  "status": "COMPLETED",
  "completedDate": "2025-01-15T10:45:00Z",
  "photoUrls": [...],
  "notes": "Delivered to reception"
}
```

## Status Codes
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 401: Unauthorized
- 403: Forbidden (no permission)
- 404: Not Found
- 409: Conflict (invalid status transition)

## Error Response Format
```json
{
  "timeIn": 1234567890,
  "timeOut": 1234567891,
  "duration": 1,
  "success": false,
  "error": "Invalid status transition from COMPLETED to PENDING",
  "errorCode": "INVALID_STATUS_TRANSITION",
  "data": null
}
```

## Filters (Query Parameters)
- `status`: PENDING | IN_TRANSIT | COMPLETED
- `assignedTo`: Employee or User ID
- `scheduledDate`: ISO date (filters by date only)
- `purchaseOrderId`: PO ID
- `customerId`: Customer ID
- `cursor`: Pagination cursor
- `limit`: Results per page (default: 20, max: 100)
- `sortBy`: scheduledDate | createdAt | status
- `sortOrder`: asc | desc
# TimeKeeper Backend API Requirements

## Minimum Required APIs for Mobile Time Tracking

### 1. Dashboard API
**GET** `/api/timekeeper/dashboard`
```json
Response: {
  "employee": {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "position": "string",
    "unit": "string"
  },
  "currentClock": {
    "clockInTime": "ISO 8601",
    "status": "CLOCKED_IN|CLOCKED_OUT|ON_BREAK",
    "workedMinutes": 0,
    "breakMinutes": 0
  },
  "todayStats": {
    "totalWorkedMinutes": 0,
    "totalBreakMinutes": 0,
    "overtimeMinutes": 0
  },
  "weekStats": {
    "totalWorkedMinutes": 0,
    "remainingMinutes": 0,
    "overtimeMinutes": 0
  },
  "monthStats": {
    "totalWorkedMinutes": 0,
    "averageDailyMinutes": 0,
    "totalDays": 0
  },
  "upcomingShifts": 0,
  "pendingLeaveRequests": 0
}
```

### 2. Clock Management APIs

#### Clock In
**POST** `/api/timekeeper/clock-in`
```json
Request: {
  "location": {
    "latitude": 0.0,
    "longitude": 0.0
  },
  "photoUrl": "string" // S3 URL after upload
}

Response: {
  "success": true,
  "clockEntry": { /* ClockEntry object */ },
  "message": "string"
}
```

#### Clock Out
**POST** `/api/timekeeper/clock-out`
```json
Request: {
  "location": {
    "latitude": 0.0,
    "longitude": 0.0
  },
  "photoUrl": "string" // S3 URL after upload
}

Response: {
  "success": true,
  "clockEntry": { /* ClockEntry object */ },
  "message": "string"
}
```

#### Break Management
**POST** `/api/timekeeper/break/start`
```json
Response: {
  "success": true,
  "clockEntry": { /* ClockEntry object */ },
  "message": "string"
}
```

**POST** `/api/timekeeper/break/end`
```json
Response: {
  "success": true,
  "clockEntry": { /* ClockEntry object */ },
  "message": "string"
}
```

### 3. Timesheet API
**GET** `/api/timekeeper/timesheet`
```json
Query: {
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD"
}

Response: [
  {
    "date": "ISO 8601",
    "clockEntries": [
      {
        "id": "string",
        "employeeId": "string",
        "clockInTime": "ISO 8601",
        "clockOutTime": "ISO 8601",
        "breakStartTime": "ISO 8601",
        "breakEndTime": "ISO 8601",
        "status": "CLOCKED_IN|CLOCKED_OUT|ON_BREAK",
        "location": {
          "latitude": 0.0,
          "longitude": 0.0,
          "address": "string"
        }
      }
    ],
    "totalWorkedMinutes": 0,
    "totalBreakMinutes": 0,
    "overtimeMinutes": 0
  }
]
```

### 4. Current Status API
**GET** `/api/timekeeper/clock/current`
```json
Response: {
  "id": "string",
  "employeeId": "string",
  "clockInTime": "ISO 8601",
  "clockOutTime": "ISO 8601 | null",
  "breakStartTime": "ISO 8601 | null",
  "breakEndTime": "ISO 8601 | null",
  "status": "CLOCKED_IN|CLOCKED_OUT|ON_BREAK",
  "location": {
    "latitude": 0.0,
    "longitude": 0.0,
    "address": "string"
  }
}
```

### 5. Photo Upload API (Pre-signed URL)
**POST** `/api/timekeeper/photo/upload-url`
```json
Request: {
  "fileName": "string",
  "fileType": "image/jpeg",
  "purpose": "CLOCK_IN|CLOCK_OUT"
}

Response: {
  "uploadUrl": "string", // Pre-signed S3 URL for upload
  "photoUrl": "string",  // Final URL to reference the photo
  "expiresIn": 300       // Seconds until URL expires
}
```

## Implementation Notes

### Priority 1 (MVP - Sprint 1)
1. Dashboard API - Display current status and stats
2. Clock In/Out APIs - Core functionality
3. Current Status API - Check clock status
4. Timesheet API - View work history

### Priority 2 (Sprint 2)
1. Break Management APIs - Start/end breaks
2. Photo Upload API - Secure photo storage

### Priority 3 (Future)
1. Shifts API - View upcoming shifts
2. Leave Request APIs - Submit and view leave requests

### Security Requirements
- All endpoints require JWT authentication
- Multi-tenant support via X-CLIENT-CODE header
- Location validation for clock in/out
- Rate limiting on clock operations (prevent spam)
- Photo uploads via pre-signed URLs only

### Data Validation
- Clock operations should validate:
  - No duplicate clock-in without clock-out
  - Break can only start when clocked in
  - Maximum work hours per day
  - Location within acceptable radius (if configured)

### Response Standards
- Use ISO 8601 format for all dates
- Time durations in minutes (integer)
- Consistent error response format
- Include success flag in mutation responses
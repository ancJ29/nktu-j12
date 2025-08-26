# Timekeeper Module Pages Implementation Plan

## Overview
Based on the existing Dashboard and My Timesheet pages, this plan outlines the remaining pages for the Timekeeper module.

## Architecture Review
- **Pattern**: Mobile-first responsive design with separate layouts
- **State**: Zustand store (`useTimekeeperStore`) with dedicated hooks
- **Components**: Modular, reusable components in `/components/timeKeeper/`
- **Layouts**: Consistent use of `AppMobileLayout` and `AppDesktopLayout`
- **Navigation**: Bottom nav for mobile with 4 main sections

## Existing Pages
1. **Dashboard** (`/time-keeper/dashboard`) ✅
   - Clock status, daily/weekly stats
   - Quick actions (clock in/out)
   - Resources section

2. **My Timesheet** (`/time-keeper/my-timesheet`) 🚧
   - Timesheet entries view
   - Period selection (day/week/month)
   - Leave requests display

## Remaining Pages to Implement

### 1. Clock Management Page (`/time-keeper/clock`)
**Purpose**: Real-time clock in/out with break management and photo verification

**Key Features**:
- Large clock display with current time
- One-tap clock in/out button with photo capture
- Break management (start/end break)
- Location capture (if required)
- Photo verification on clock actions:
  - Camera capture with permission handling
  - Low-quality image compression for bandwidth efficiency
  - Time/location watermark overlay
  - S3 upload (mock implementation initially)
- Today's timeline view with photo thumbnails
- Clock history for current day

**Components Needed**:
- `ClockDisplay` - Real-time clock
- `ClockActionButton` - Primary action button with camera trigger
- `ClockTimeline` - Visual timeline with photo markers
- `BreakManager` - Break controls
- `PhotoCapture` - Camera handling with watermark
- `PhotoPreview` - Review captured image before submit

### 2. Jobs/Shifts Page (`/time-keeper/jobs`)
**Purpose**: View and manage scheduled shifts

**Key Features**:
- Calendar view of shifts
- List view with filters (upcoming/past)
- Shift details (time, location, unit)
- Shift swap requests
- Availability management

**Components Needed**:
- `ShiftCalendar` - Calendar display
- `ShiftList` - List view
- `ShiftCard` - Individual shift display
- `ShiftFilters` - Filter controls

### 3. Services Page (`/time-keeper/services`)
**Purpose**: Access to employee services and requests

**Key Features**:
- Leave request management
  - New request form
  - Request history
  - Balance display
- Documents access
  - Payslips
  - Certificates
  - Tax documents
- Settings
  - Notifications
  - Profile info
- Help & Support

**Components Needed**:
- `ServiceGrid` - Service tiles
- `LeaveRequestForm` - Leave submission
- `DocumentList` - Document viewer
- `ServiceSettings` - Settings panel

### 4. Leave Request Detail Page (`/time-keeper/leave-request/:id`)
**Purpose**: View and manage individual leave requests

**Key Features**:
- Request details display
- Status tracking
- Approval workflow
- Comments/notes
- Cancel option (if pending)

### 5. Shift Detail Page (`/time-keeper/shift/:id`)
**Purpose**: View individual shift details

**Key Features**:
- Shift information
- Location map
- Check-in QR code (if applicable)
- Notes/instructions
- Contact supervisor option

## Implementation Priority

### Phase 1 - Core Functionality
1. Clock Management Page - **High Priority**
2. Jobs/Shifts Page - **High Priority**

### Phase 2 - Employee Services
3. Services Page - **Medium Priority**
4. Leave Request Detail - **Medium Priority**

### Phase 3 - Enhancements
5. Shift Detail Page - **Low Priority**
6. Additional features based on user feedback

## Technical Considerations

### Store Updates Required
- Add clock management actions with photo data
- Photo upload state and progress tracking
- Shift management state
- Leave request CRUD operations
- Document fetching
- Camera permission state

### API Integration Points
- `/api/timekeeper/clock` - Clock actions with photo upload
- `/api/timekeeper/clock/photo` - Photo upload endpoint
- `/api/timekeeper/shifts` - Shift data
- `/api/timekeeper/leave` - Leave requests
- `/api/timekeeper/documents` - Document access
- S3 presigned URL generation for photo uploads

### i18n Keys to Add
- `timekeeper.clock.*` - Clock page labels
- `timekeeper.shifts.*` - Shifts page labels
- `timekeeper.services.*` - Services labels
- `timekeeper.leave.*` - Leave request labels

### Photo Capture Technical Approach
```typescript
// Key implementation points
interface PhotoCaptureConfig {
  quality: 0.3; // Low quality for bandwidth
  maxWidth: 640; // Resize to max 640px width
  maxHeight: 480; // Resize to max 480px height
  format: 'jpeg'; // JPEG for compression
}

// Watermark implementation
- Use Canvas API for overlay
- Include: timestamp, location (lat/lng), employee ID
- Position: bottom-right corner
- Semi-transparent background for readability

// S3 Upload Strategy (Phase 1: Mock)
- Generate mock presigned URL
- Store base64 in localStorage initially
- Implement retry mechanism for failed uploads
- Queue uploads for offline mode
```

### Route Configuration
```typescript
// Add to routeConfig.ts
TIME_KEEPER_CLOCK: { id: 'time-keeper/clock', path: '/time-keeper/clock' },
TIME_KEEPER_JOBS: { id: 'time-keeper/jobs', path: '/time-keeper/jobs' },
TIME_KEEPER_SERVICES: { id: 'time-keeper/services', path: '/time-keeper/services' },
TIME_KEEPER_LEAVE_REQUEST: { id: 'time-keeper/leave-request', path: '/time-keeper/leave-request/:id' },
TIME_KEEPER_SHIFT: { id: 'time-keeper/shift', path: '/time-keeper/shift/:id' },
```

## UI/UX Guidelines
- Maintain green theme consistency
- Large touch targets for mobile
- Clear visual feedback for actions
- Offline capability for clock actions with photo queue
- Loading states for all async operations
- Error recovery mechanisms
- Photo capture UX:
  - Clear camera permission request flow
  - Preview before submission
  - Progress indicator for upload
  - Fallback for devices without camera
  - Privacy-first approach with clear data usage notice

## Store Actions Update for Photo Handling
```typescript
// Updated clock actions in useTimekeeperStore
interface ClockActionPayload {
  location?: { latitude: number; longitude: number };
  photo?: {
    base64: string;
    timestamp: Date;
    metadata: {
      deviceId?: string;
      compression: number;
      originalSize: number;
    };
  };
}

// Actions to add/update:
- clockIn: (payload: ClockActionPayload) => Promise<void>
- clockOut: (payload: ClockActionPayload) => Promise<void>
- uploadClockPhoto: (clockId: string, photo: File) => Promise<string>
- retryFailedPhotoUploads: () => Promise<void>
```

## Success Metrics
- Clock action response time < 500ms (excluding photo upload)
- Photo capture to preview < 2s
- Page load time < 2s
- Offline clock sync success rate > 95%
- Photo upload success rate > 90%
- User task completion rate > 90%

## Senior React Engineer Review Notes

### ✅ Architecture Strengths
- Separation of concerns with dedicated photo components
- Progressive enhancement approach (mock S3 first)
- Offline-first design with upload queue
- Clear state management strategy

### ⚠️ Critical Considerations
1. **Privacy & Compliance**
   - GDPR/privacy law compliance for photo storage
   - User consent flow before enabling camera
   - Data retention policy implementation

2. **Performance Optimization**
   - Image compression on client-side before upload
   - WebWorker for image processing to avoid UI blocking
   - Lazy load camera component only when needed

3. **Error Handling**
   - Graceful fallback when camera unavailable
   - Network failure recovery with exponential backoff
   - Clear user feedback for all failure scenarios

4. **Security**
   - Validate image metadata to prevent injection
   - Implement rate limiting for photo uploads
   - Secure presigned URL generation with expiry

5. **Testing Strategy**
   - Mock MediaDevices API for unit tests
   - E2E tests with camera permission scenarios
   - Performance testing with various image sizes

### 📋 Implementation Phases
**Phase 1 (MVP)**: Basic camera capture with localStorage
**Phase 2**: S3 integration with retry mechanism
**Phase 3**: Offline queue with background sync
**Phase 4**: Advanced features (face detection, quality checks)
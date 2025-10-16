/**
 * Screenshot capture and cropping utilities
 * Uses browser's getDisplayMedia API for screen capture
 * Canvas-based image cropping for user selection
 */

export type CropArea = {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
};

export type ScreenshotError = {
  readonly type: 'permission_denied' | 'not_supported' | 'capture_failed' | 'crop_failed';
  readonly message: string;
};

/**
 * Captures a screenshot using the browser's Screen Capture API
 * @returns dataURL of the captured screenshot, or null if failed
 * @throws ScreenshotError if permission denied, not supported, or capture fails
 */
export async function captureScreenshot(): Promise<string> {
  // Check if getDisplayMedia is supported
  if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    const error: ScreenshotError = {
      type: 'not_supported',
      message: 'Screen capture is not supported in this browser',
    };
    throw error;
  }

  try {
    // Request screen capture permission
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
    });

    // Create video element to capture the stream
    const video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;

    // Wait for video to load
    await new Promise<void>((resolve) => {
      video.addEventListener('loadedmetadata', () => {
        resolve();
      });
    });

    // Create canvas and capture frame
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (!context) {
      // Stop the stream
      for (const track of stream.getTracks()) {
        track.stop();
      }

      const error: ScreenshotError = {
        type: 'capture_failed',
        message: 'Failed to get canvas context',
      };
      throw error;
    }

    // Draw the video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Stop the stream immediately after capture
    for (const track of stream.getTracks()) {
      track.stop();
    }

    // Convert canvas to dataURL
    const dataUrl = canvas.toDataURL('image/png', 0.95);
    return dataUrl;
  } catch (error) {
    // Handle specific error types
    if (error instanceof Error && error.name === 'NotAllowedError') {
      const screenshotError: ScreenshotError = {
        type: 'permission_denied',
        message: 'Screen capture permission was denied',
      };
      throw screenshotError;
    }

    // If it's already our ScreenshotError type, rethrow
    if (typeof error === 'object' && error !== null && 'type' in error) {
      throw error;
    }

    // Unknown error
    const screenshotError: ScreenshotError = {
      type: 'capture_failed',
      message: error instanceof Error ? error.message : 'Failed to capture screenshot',
    };
    throw screenshotError;
  }
}

/**
 * Creates a cropped image from a dataURL using canvas
 * @param imageSrc - Source image as dataURL
 * @param cropArea - Crop coordinates in pixels
 * @returns Blob of the cropped image
 * @throws ScreenshotError if crop fails
 */
export async function createCroppedImage(imageSrc: string, cropArea: CropArea): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => {
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          const error: ScreenshotError = {
            type: 'crop_failed',
            message: 'Failed to get canvas context for cropping',
          };
          reject(error);
          return;
        }

        // Set canvas dimensions to crop area
        canvas.width = cropArea.width;
        canvas.height = cropArea.height;

        // Draw the cropped portion
        context.drawImage(
          image,
          cropArea.x,
          cropArea.y,
          cropArea.width,
          cropArea.height,
          0,
          0,
          cropArea.width,
          cropArea.height,
        );

        // Convert canvas to blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              const error: ScreenshotError = {
                type: 'crop_failed',
                message: 'Failed to create blob from cropped image',
              };
              reject(error);
            }
          },
          'image/png',
          0.95,
        );
      } catch (error) {
        const screenshotError: ScreenshotError = {
          type: 'crop_failed',
          message: error instanceof Error ? error.message : 'Failed to crop image',
        };
        reject(screenshotError);
      }
    });

    image.addEventListener('error', () => {
      const error: ScreenshotError = {
        type: 'crop_failed',
        message: 'Failed to load image for cropping',
      };
      reject(error);
    });

    image.src = imageSrc;
  });
}

/**
 * Converts a Blob to a File object with a filename
 * @param blob - Image blob
 * @param filename - Desired filename
 * @returns File object
 */
export function convertBlobToFile(blob: Blob, filename: string): File {
  return new File([blob], filename, {
    type: blob.type,
    lastModified: Date.now(),
  });
}

/**
 * Generates a filename for a screenshot with timestamp
 * @returns Filename in format: screenshot-YYYYMMDD-HHMMSS.png
 */
export function generateScreenshotFilename(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `screenshot-${year}${month}${day}-${hours}${minutes}${seconds}.png`;
}

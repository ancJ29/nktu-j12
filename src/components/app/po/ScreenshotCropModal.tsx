import { useCallback, useEffect, useState } from 'react';

import { ActionIcon, Button, Center, Group, Modal, Stack, Text } from '@mantine/core';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconCamera,
  IconClipboard,
  IconMinus,
  IconPlus,
} from '@tabler/icons-react';
import Cropper from 'react-easy-crop';

import { useTranslation } from '@/hooks/useTranslation';
import {
  captureScreenshot,
  convertBlobToFile,
  createCroppedImage,
  generateScreenshotFilename,
  type ScreenshotError,
} from '@/utils/screenshot';
import type { CropArea } from '@/utils/screenshot';

import type { Area, Point } from 'react-easy-crop';

type ScreenshotCropModalProps = {
  readonly opened: boolean;
  readonly imageSrc: string | null;
  readonly onClose: () => void;
  readonly onApply: (croppedFile: File) => void;
  readonly onImagePaste?: (dataUrl: string) => void;
};

export function ScreenshotCropModal({
  opened,
  imageSrc,
  onClose,
  onApply,
  onImagePaste,
}: ScreenshotCropModalProps) {
  const { t } = useTranslation();

  // Crop state
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  // Handle crop completion
  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Handle apply button click
  const handleApply = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      setIsProcessing(true);

      // Create crop area object
      const cropArea: CropArea = {
        x: croppedAreaPixels.x,
        y: croppedAreaPixels.y,
        width: croppedAreaPixels.width,
        height: croppedAreaPixels.height,
      };

      // Crop the image
      const croppedBlob = await createCroppedImage(imageSrc, cropArea);

      // Convert blob to File
      const filename = generateScreenshotFilename();
      const croppedFile = convertBlobToFile(croppedBlob, filename);

      // Pass the file to parent
      onApply(croppedFile);

      // Reset state
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);

      // Close modal
      onClose();
    } catch (error) {
      console.error('Failed to crop image:', error);
      // Error will be shown in parent component
    } finally {
      setIsProcessing(false);
    }
  }, [imageSrc, croppedAreaPixels, onApply, onClose]);

  // Handle cancel
  const handleCancel = useCallback(() => {
    // Reset state
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    onClose();
  }, [onClose]);

  // Handle screenshot capture inside modal
  const handleCaptureScreenshot = useCallback(async () => {
    try {
      setIsCapturing(true);
      const dataUrl = await captureScreenshot();
      if (onImagePaste) {
        // Reset crop state
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedAreaPixels(null);
        // Update image source
        onImagePaste(dataUrl);
      }
    } catch (error) {
      const screenshotError = error as ScreenshotError;
      // TODO: Show notification based on error type
      console.error('Screenshot capture failed:', screenshotError.message);
    } finally {
      setIsCapturing(false);
    }
  }, [onImagePaste]);

  // Handle zoom in
  const handleZoomIn = useCallback(() => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  }, []);

  // Handle zoom out
  const handleZoomOut = useCallback(() => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1));
  }, []);

  // Handle arrow button movements
  const MOVE_STEP = 10;

  const handleMoveUp = useCallback(() => {
    setCrop((prev) => ({ x: prev.x, y: prev.y - MOVE_STEP }));
  }, []);

  const handleMoveDown = useCallback(() => {
    setCrop((prev) => ({ x: prev.x, y: prev.y + MOVE_STEP }));
  }, []);

  const handleMoveLeft = useCallback(() => {
    setCrop((prev) => ({ x: prev.x - MOVE_STEP, y: prev.y }));
  }, []);

  const handleMoveRight = useCallback(() => {
    setCrop((prev) => ({ x: prev.x + MOVE_STEP, y: prev.y }));
  }, []);

  // Handle keyboard arrow keys for crop movement
  useEffect(() => {
    if (!opened) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const MOVE_STEP = 10; // pixels to move per key press

      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          setCrop((prev) => ({ x: prev.x, y: prev.y - MOVE_STEP }));
          break;
        }
        case 'ArrowDown': {
          event.preventDefault();
          setCrop((prev) => ({ x: prev.x, y: prev.y + MOVE_STEP }));
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          setCrop((prev) => ({ x: prev.x - MOVE_STEP, y: prev.y }));
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          setCrop((prev) => ({ x: prev.x + MOVE_STEP, y: prev.y }));
          break;
        }
        default: {
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [opened]);

  // Handle clipboard paste
  useEffect(() => {
    if (!opened) return;

    const handlePaste = async (event: ClipboardEvent) => {
      event.preventDefault();

      const items = event.clipboardData?.items;
      if (!items) return;

      // Find image item in clipboard
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (!file) continue;

          // Convert file to data URL
          const reader = new FileReader();
          reader.addEventListener('load', (e) => {
            const dataUrl = e.target?.result as string;
            if (dataUrl && onImagePaste) {
              // Reset crop state when new image is pasted
              setCrop({ x: 0, y: 0 });
              setZoom(1);
              setCroppedAreaPixels(null);
              // Update image source through callback
              onImagePaste(dataUrl);
            }
          });
          reader.readAsDataURL(file);
          break;
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [opened, onImagePaste]);

  return (
    <Modal opened={opened} onClose={handleCancel} title={t('po.cropImage')} size="xl" centered>
      <Stack gap="md">
        {/* Instructions */}
        {imageSrc ? (
          <Text size="sm" c="dimmed">
            {t('po.cropInstructions')}
          </Text>
        ) : (
          <Text size="sm" c="dimmed">
            {t('po.emptyStateInstructions')}
          </Text>
        )}

        {/* Crop Area or Empty State */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 500,
            backgroundColor: '#333',
          }}
        >
          {imageSrc ? (
            <>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={undefined}
                showGrid={true}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </>
          ) : (
            <Center h="100%" style={{ flexDirection: 'column', gap: '1rem' }}>
              <Stack align="center" gap="md">
                <Text size="lg" c="dimmed" ta="center">
                  {t('po.noImageYet')}
                </Text>
                <Group gap="md">
                  <Button
                    variant="light"
                    size="lg"
                    leftSection={<IconCamera size={20} />}
                    onClick={handleCaptureScreenshot}
                    disabled={isCapturing}
                    loading={isCapturing}
                  >
                    {t('po.captureScreenshot')}
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    leftSection={<IconClipboard size={20} />}
                    disabled
                  >
                    {t('po.pasteFromClipboard')}
                  </Button>
                </Group>
                <Text size="sm" c="dimmed" ta="center">
                  {t('po.orPressCtrlV')}
                </Text>
              </Stack>
            </Center>
          )}

          {/* Movement Controls - D-pad style (only show when image exists) */}
          {imageSrc && (
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 40px)',
                gridTemplateRows: 'repeat(3, 40px)',
                gap: 4,
              }}
            >
              {/* Up arrow */}
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleMoveUp}
                aria-label="Move up"
                style={{ gridColumn: 2, gridRow: 1 }}
              >
                <IconArrowUp size={20} />
              </ActionIcon>
              {/* Left arrow */}
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleMoveLeft}
                aria-label="Move left"
                style={{ gridColumn: 1, gridRow: 2 }}
              >
                <IconArrowLeft size={20} />
              </ActionIcon>
              {/* Right arrow */}
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleMoveRight}
                aria-label="Move right"
                style={{ gridColumn: 3, gridRow: 2 }}
              >
                <IconArrowRight size={20} />
              </ActionIcon>
              {/* Down arrow */}
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleMoveDown}
                aria-label="Move down"
                style={{ gridColumn: 2, gridRow: 3 }}
              >
                <IconArrowDown size={20} />
              </ActionIcon>
            </div>
          )}

          {/* Zoom Controls - only show when image exists */}
          {imageSrc && (
            <Group
              gap="xs"
              style={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                zIndex: 10,
              }}
            >
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                aria-label={t('common.zoomOut')}
              >
                <IconMinus size={20} />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                size="lg"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                aria-label={t('common.zoomIn')}
              >
                <IconPlus size={20} />
              </ActionIcon>
            </Group>
          )}
        </div>
        {/* Action Buttons */}
        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={handleCancel} disabled={isProcessing}>
            {t('common.cancel')}
          </Button>
          <Button onClick={handleApply} disabled={!imageSrc || isProcessing} loading={isProcessing}>
            {t('common.apply')}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

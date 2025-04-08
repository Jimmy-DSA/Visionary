import { ScreenSize } from "./useScreenSize";

interface Position {
  x: number;
  y: number;
  z: number;
}

interface SectionAnimationValues {
  camera: Position;
  scene: Position;
  rotation: Position;
}

export interface EnterAnimationValues {
  sceneStart: Position;
  sceneEnd: Position;
  cameraStart: Position;
  cameraEnd: Position;
  rotationStart: Position;
  rotationEnd: Position;
}

export const getEnterAnimationValues = (screenSize: ScreenSize) => {
  if (screenSize === "mobile" || screenSize === "smallDesktop") {
    return {
      sceneStart: { x: 5.35, y: 0.7, z: 1 },
      sceneEnd: { x: -0.25, y: -0.45, z: 1.75 },
      cameraStart: { x: -0.09, y: -0.39, z: 4.97 },
      cameraEnd: { x: -1.89, y: -0.29, z: 5.02 },
      rotationStart: { x: -0.09, y: -0.39, z: 0 },
      rotationEnd: { x: -0.1, y: -0.1, z: 0.3 },
    };
  } else if (screenSize === "normalDesktop") {
    return {
      sceneStart: { x: 5.35, y: 0.7, z: 1 },
      sceneEnd: { x: 0.25, y: -0.45, z: 1.75 },
      cameraStart: { x: -0.09, y: -0.39, z: 4.97 },
      cameraEnd: { x: -1.39, y: -0.34, z: 4.53 },
      rotationStart: { x: -0.09, y: -0.39, z: 0 },
      rotationEnd: { x: -0.1, y: -0.1, z: 0.3 },
    };
  }
};

export const getOffersSectionValues = (
  screenSize: ScreenSize
): SectionAnimationValues | null => {
  if (screenSize === "mobile") {
    return {
      camera: { x: -4.79, y: -0.29, z: 4.53 },
      scene: { x: -2.75, y: -2.95, z: 1.75 },
      rotation: { x: -0.65, y: 1.95, z: 0.3 },
    };
  } else {
    return {
      camera: { x: -4.79, y: -0.29, z: 4.53 },
      scene: { x: -2.75, y: -2.95, z: 1.75 },
      rotation: { x: -0.65, y: 1.95, z: 0.3 },
    };
  }
};

export const getAboutSectionValues = (
  screenSize: ScreenSize
): SectionAnimationValues | null => {
  if (screenSize === "mobile") {
    return {
      camera: { x: -8.34, y: 0.06, z: 4.44 },
      scene: { x: -3.2, y: -0.25, z: 1.75 },
      rotation: { x: 0, y: 5.23, z: 0 },
    };
  } else {
    return {
      camera: { x: -4.89, y: -0.49, z: 7.08 },
      scene: { x: 0, y: -0.2, z: 5.4 },
      rotation: { x: -0.3, y: 5.0, z: 0.0 },
    };
  }
};

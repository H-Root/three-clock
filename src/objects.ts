import { CircleGeometry, CylinderGeometry, TorusGeometry } from "three";

export const circle = new CircleGeometry(2, 128);
export const circleBack = new CircleGeometry(2.1, 128);
export const toros = new TorusGeometry(2.1, 0.1, 24, 64);
toros.scale(1, 1, 2.5);

export const cylinder = new CylinderGeometry(0.01, 0.01, 0.05);

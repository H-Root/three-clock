import { PerspectiveCamera, Vector3 } from "three";

const initCamera = (size: Size) => {
  const camera = new PerspectiveCamera(75, size.width / size.height);
  camera.position.z = 3;
  camera.lookAt(new Vector3(0, 0, 0));

  return camera;
}

export default initCamera;
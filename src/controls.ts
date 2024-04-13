import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const initControls = (
	camera: PerspectiveCamera,
	domElement: HTMLCanvasElement
) => {
	const control = new OrbitControls(camera, domElement);
	control.enableDamping = true;

	return control;
};

export default initControls;

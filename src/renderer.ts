import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const initRenderer = (
	size: Size,
	canvas: Element,
	camera: PerspectiveCamera,
	scene: Scene
) => {
	const renderer = new WebGLRenderer({ canvas });
	renderer.setSize(size.width, size.height);
	renderer.render(scene, camera);

  return renderer;
};

export default initRenderer;

import { Mesh, MeshMatcapMaterial, Scene } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

const configs = {
	size: 0.14,
	height: 0.01,
	curveSegments: 12,
	bevelEnabled: true,
	bevelThickness: 0.002,
	bevelSize: 0.004,
	bevelOffset: 0,
	bevelSegments: 1,
};

const initSignature = (material: MeshMatcapMaterial, scene: Scene) => {
	const loader = new FontLoader();
	loader.load("fonts/alex_brush.typeface.json", function (font) {
		const geometry = new TextGeometry("Hans Root", { font, ...configs });
		const geometry2 = new TextGeometry("Bruno Simon", { font, ...configs });

		geometry.computeBoundingBox();
		geometry.center();

		const mesh = new Mesh(geometry, material);
		mesh.position.y = -0.7;

		geometry2.computeBoundingBox();
		geometry2.center();

		const mesh2 = new Mesh(geometry2, material);
		mesh2.position.y = -0.9;

		scene.add(mesh, mesh2);
	});
};

export default initSignature;

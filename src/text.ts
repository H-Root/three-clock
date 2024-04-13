import { Group, Mesh, MeshMatcapMaterial, Scene } from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

const angle = Math.PI / 6;

const initText = (
	text: string,
	scene: Scene,
	material: MeshMatcapMaterial,
	n: number
) => {
	const loader = new FontLoader();
	loader.load("fonts/helvetiker_regular.typeface.json", function (font) {
		const geometry = new TextGeometry(text, {
			font: font,
			size: 0.3,
			height: 0.01,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 0.002,
			bevelSize: 0.004,
			bevelOffset: 0,
			bevelSegments: 1,
		});

		geometry.computeBoundingBox();
		geometry.center();

		const mesh = new Mesh(geometry, material);

		mesh.position.z = 0;
		mesh.position.y = 1.7;

		const group = new Group();
		group.position.set(0, 0, 0);
		group.rotateZ(-Math.PI / 6);

		group.rotateZ(angle * n);
		mesh.rotateZ(-angle * n + Math.PI / 6);

		group.add(mesh);

		scene.add(group);
	});
};

export default initText;

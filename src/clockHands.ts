import { Group, Mesh, MeshMatcapMaterial, PlaneGeometry } from "three";

const initClockHand = (
	width: number,
	length: number,
	material: MeshMatcapMaterial,
  z: number,
) => {
	const clockPlate = new PlaneGeometry(width, length);
	const clockHand = new Mesh(clockPlate, material);

	clockHand.position.z = z;
	clockHand.translateY(length / 2 - length / 10);

	const group = new Group();
	group.position.set(0, 0, 0);

	group.add(clockHand);

	return group;
};

export default initClockHand;

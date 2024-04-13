import GUI from "lil-gui";
import { MeshPhysicalMaterial } from "three";
const gui = new GUI({ title: "Nice Debug UI" });

const initGlassOptions = (glassMaterial: MeshPhysicalMaterial) => {
	const glassEffect = gui.addFolder("Glass Effect");

	glassEffect.add(glassMaterial, "metalness").min(0).max(1).name("Metal-ness");
	glassEffect.add(glassMaterial, "roughness").min(0).max(1).name("Roughness");
	glassEffect.add(glassMaterial, "clearcoat").min(0).max(1).name("Clear Coat");
	glassEffect
		.add(glassMaterial, "transmission")
		.min(0)
		.max(1)
		.name("Transmission");
	glassEffect.add(glassMaterial, "opacity").min(0).max(1).name("Opacity");
	glassEffect
		.add(glassMaterial, "reflectivity")
		.min(0)
		.max(1)
		.name("Reflectivity");
	glassEffect.add(glassMaterial, "ior").min(0).max(1).name("IOR");
	glassEffect
		.add(glassMaterial, "iridescence")
		.min(0)
		.max(1)
		.name("Iridescence");
	glassEffect
		.add(glassMaterial, "iridescenceIOR")
		.min(1)
		.max(2.333)
		.name("Iridescence IOR");
	glassEffect
		.add(glassMaterial, "specularIntensity")
		.min(0)
		.max(1)
		.name("Specular Intensity");
};

export default initGlassOptions;

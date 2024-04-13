import {
	LoadingManager,
	MeshMatcapMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
} from "three";

const loadManager = new LoadingManager();
const loader = new TextureLoader(loadManager);
const metalMatcap = loader.load("/matcaps/metalLike.png");
const coalShinyMatcap = loader.load("/matcaps/coalShiny.png");

export const glassMaterial = new MeshPhysicalMaterial({
	metalness: 0.9,
	roughness: 0.05,
	clearcoat: 1,
	transparent: true,
	transmission: 0.95,
	opacity: 0.5,
	reflectivity: 0.5,
	ior: 0.9,
	iridescence: 1,
	iridescenceIOR: 1,
	specularIntensity: 1,
});

export const metalMaterial = new MeshMatcapMaterial({ matcap: metalMatcap });
export const coalShinyMaterial = new MeshMatcapMaterial({
	matcap: coalShinyMatcap,
});

import "./style.css";

import { AmbientLight, Mesh, Scene } from "three";
import initGlassOptions from "./gui";

import { coalShinyMaterial, glassMaterial, metalMaterial } from "./materials";
import { circle, circleBack, cylinder, toros } from "./objects";
import initControls from "./controls";
import initCamera from "./camera";
import initRenderer from "./renderer";
import initText from "./text";
import initSignature from "./signature";
import initClockHand from "./clockHands";

const size = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const canvas = document.querySelector("canvas.webgl")!;

const scene = new Scene();

initSignature(coalShinyMaterial, scene);

// const axesHelper = new AxesHelper();

initGlassOptions(glassMaterial);
const camera = initCamera(size);

for (let i = 0; i < 12; i++) {
	initText(`${i + 1}`, scene, coalShinyMaterial, -i);
}

const mesh = new Mesh(circle, metalMaterial);

const backPlateMesh = new Mesh(circleBack, metalMaterial);
backPlateMesh.rotateX(Math.PI);
backPlateMesh.position.z = -0.2;

const frontPlateMesh = new Mesh(circleBack, glassMaterial);
frontPlateMesh.position.z = 0.2;

const cylinderGeometry = new Mesh(cylinder, metalMaterial);
cylinderGeometry.rotateX(Math.PI / 2);
cylinderGeometry.position.z = 0.025;

const hourHand = initClockHand(0.1, 1, coalShinyMaterial, 0.01);

const minutesHand = initClockHand(0.1, 1.5, coalShinyMaterial, 0.02);
minutesHand.rotateZ(Math.PI / 5);

const secondsHand = initClockHand(0.05, 1.7, coalShinyMaterial, 0.03);

const tubeGeometry = new Mesh(toros, coalShinyMaterial);

const light = new AmbientLight(0xffffff);
light.position.z = 2;
scene.add(light);

scene.add(
	mesh,
	tubeGeometry,
	backPlateMesh,
	frontPlateMesh,
	cylinderGeometry,
	hourHand,
	minutesHand,
	secondsHand
	// axesHelper,
);

const renderer = initRenderer(size, canvas, camera, scene);

const control = initControls(camera, renderer.domElement);

window.addEventListener("resize", () => {
	size.width = window.innerWidth;
	size.height = window.innerHeight;

	camera.aspect = size.width / size.height;
	camera.updateProjectionMatrix();

	renderer.setSize(size.width, size.height);
});

const tick = () => {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours() % 12;

	console.log(hours);

	renderer.render(scene, camera);

	control.update();

	secondsHand.rotation.z = (-seconds * Math.PI) / 30;
	minutesHand.rotation.z = (-minutes * Math.PI) / 30;
	hourHand.rotation.z = (-hours * Math.PI * 5) / 30;

	window.requestAnimationFrame(tick);
};

tick();

// const path = new QuadraticBezierCurve3(
// 	new Vector3(0, 0, -0.15),
// 	new Vector3(0, 0, 0),
// 	new Vector3(0, 0, 0.3)
// );
// const tube = new TubeGeometry(path, 64, 2, 64);

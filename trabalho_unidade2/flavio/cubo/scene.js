const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
const controls = new THREE.OrbitControls( camera, renderer.domElement );

const cube = new THREE.BufferGeometry();

const base = [
    2.0, 0.0, 0.0,
    2.0, 0.0, 2.0,
    0.0, 0.0, 2.0,

    0.0, 0.0, 2.0,
    0.0, 0.0, 0.0,
    2.0, 0.0, 0.0,
]

const face1 = [
    0.0, 2.0, 2.0,
    2.0, 2.0, 2.0,
    2.0, 0.0, 2.0,

    2.0, 0.0, 2.0,
    0.0, 0.0, 2.0,
    0.0, 2.0, 2.0,
]

const face2 = [
    2.0, 0.0, 0.0,
    2.0, 0.0, 2.0,
    2.0, 2.0, 2.0,

    2.0, 2.0, 2.0,
    2.0, 2.0, 0.0,
    2.0, 0.0, 0.0,
]

const face3 = [
    0.0, 0.0, 0.0,
    2.0, 0.0, 0.0,
    2.0, 2.0, 0.0,

    2.0, 2.0, 0.0,
    0.0, 2.0, 0.0,
    0.0, 0.0, 0.0,
]

const face4 = [
    0.0, 0.0, 2.0,
    0.0, 0.0, 0.0,
    0.0, 2.0, 0.0,

    0.0, 2.0, 0.0,
    0.0, 2.0, 2.0,
    0.0, 0.0, 2.0,
]

const topo = [
    0.0, 2.0, 0.0,
    2.0, 2.0, 0.0,
    2.0, 2.0, 2.0,

    2.0, 2.0, 2.0,
    0.0, 2.0, 2.0,
    0.0, 2.0, 0.0,
]

const vertices = new Float32Array(
    Array.prototype.concat(base, face1, face2, face3, face4, topo)
);

const uvs = new Float32Array([
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,
]);

const image = new THREE.TextureLoader().load('./static/cube_texture.jpg');


cube.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
cube.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

const mesh_color = new THREE.MeshBasicMaterial({ color: 0x00ffdd, wireframe: true });
const mesh_image = new THREE.MeshBasicMaterial({ map: image, side: THREE.DoubleSide });

const wireframe = new THREE.Mesh(cube, mesh_color);
const texture = new THREE.Mesh(cube, mesh_image);

scene.add(wireframe);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

toggleViewMode(scene, wireframe, texture);

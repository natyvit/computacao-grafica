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

camera.position.z = 15;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

const piramide = new THREE.BufferGeometry();

const base = [
    -3.0, 0.0, 3.0,
    3.0, 0.0, 3.0,
    3.0, 0.0, -3.0,

    3.0, 0.0, -3.0,
    -3.0, 0.0, -3.0,
    -3.0, 0.0, 3.0,
]

const face1 = [
    -3.0, 0.0, 3.0,
    3.0, 0.0, 3.0,
    0.0, 5.0, 0.0,
]

const face2 = [
    3.0, 0.0, 3.0,
    3.0, 0.0, -3.0,
    0.0, 5.0, 0.0,
]

const face3 = [
    3.0, 0.0, -3.0,
    -3.0, 0.0, -3.0,
    0.0, 5.0, 0.0,
]

const face4 = [
    -3.0, 0.0, -3.0,
    -3.0, 0.0, 3.0,
    0.0, 5.0, 0.0,
]

const vertices = new Float32Array(
    Array.prototype.concat(base, face1, face2, face3, face4)
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
    0.5, 1.0,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
]);

const image = new THREE.TextureLoader().load('./static/pyramid_texture.jpg');


piramide.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
piramide.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

const mesh_color = new THREE.MeshBasicMaterial({ color: 0x00ffdd, wireframe: true });
const mesh_image = new THREE.MeshBasicMaterial({ map: image, side: THREE.DoubleSide });

const wireframe = new THREE.Mesh(piramide, mesh_color);
const texture = new THREE.Mesh(piramide, mesh_image);

scene.add(wireframe);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

toggleViewMode(scene, wireframe, texture);
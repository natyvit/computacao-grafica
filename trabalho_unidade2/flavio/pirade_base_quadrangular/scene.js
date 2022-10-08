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

const quad = new THREE.BufferGeometry();
const piramide = new THREE.BufferGeometry();

const base = [
    1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,

    1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0,
]

const face1 = [
    0.0, 1.0, 0.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,
]

const face2 = [
    0.0, 1.0, 0.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0,
]

const face3 = [
    0.0, 1.0, 0.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,
]

const face4 = [
    0.0, 1.0, 0.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
]

const vertices = new Float32Array(
    Array.prototype.concat(base, face1, face2, face3, face4)
);

piramide.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const mat = new THREE.MeshBasicMaterial({ color: 0x00ffdd, wireframe: true });
const mesh = new THREE.Mesh(piramide, mat);
scene.add(mesh);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y += 0.01;
}
animate();
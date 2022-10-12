const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshBasicMaterial({
  color: 0xcd007f,
  wireframe: true,
});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// for (let j = -10; j < 10; j++) {
//   for (let i = -5; i < 5; i++) {
//     const cube = new THREE.Mesh(geometry, material);
//     cube.position.x = j;
//     cube.position.y = i;
//     cube.position.z = i;
//     scene.add(cube);
//   }
// }

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = Math.cos((2 * Math.PI * i) / 12);
    cube.position.y = Math.sin((2 * Math.PI * i) / 12);
    scene.add(cube);
  }
}

camera.position.z = 5;

// const quad = new THREE.BufferGeometry();
// const vertices = new Float32Array([
//   -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

//   1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
// ]);

// const piramide = new THREE.BufferGeometry();
// const vert = new Float32Array([
//   1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,

//   1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0,

//   0.0, 1.0, 0.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,

//   0.0, 1.0, 0.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0,

//   0.0, 1.0, 0.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,

//   0.0, 1.0, 0.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
// ]);

// piramide.setAttribute("position", new THREE.BufferAttribute(vert, 3));
// const mat = new THREE.MeshBasicMaterial({ color: 0xcd007f, wireframe: true });
// const mesh = new THREE.Mesh(piramide, mat);
// scene.add(mesh);

// quad.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// const mat = new THREE.MeshBasicMaterial({ color: 0xcd007f, wireframe: true });
// const mesh = new THREE.Mesh(quad, mat);
// scene.add(mesh);

// let theta = 0;

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.05;
  // cube.rotation.y += 0.05;
  // cube.position.y = 1;
  camera.rotation.z += 0.05;

  // mesh.rotation.y += 0.05;
  // mesh.position.y = 1.0 * Math.sin(theta);
  renderer.render(scene, camera);
  // theta += 0.1;
}
animate();

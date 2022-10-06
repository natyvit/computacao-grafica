const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const quad = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.

function createUVQuad(u, v, spanU, spanV) {
	return ([
		[u, v],
		[u + spanU, v],
		[u + spanU, v + spanV],
		[u, v + spanV],
	]);
}

function createQuad(A, B, C, D) {
	return [
		...A, ...B, ...C,
		...C, ...D, ...A,
	]
}

function createVertexFromUV(u, v) {
	let theta = 2.0 * Math.PI * u;
	
	let y = 2.0 * v - 1.0
	
	let r = Math.sqrt(1.0 - y*y)
	let x = r * Math.cos(-theta)
	let z = r * Math.sin(-theta)
	// let x = 2.0 * u - 1.0
	// let y = 2.0 * v - 1.0
	// let z = 1.0

	return [x, y, z]
}


var vertices_ = []
var uvs_ = []

var uDivs = 100.0
var spanU = 1.0 / uDivs

var vDivs = 100.0
var spanV = 1.0 / vDivs

for (let i = 0; i < uDivs; i++) {
	for (let j = 0; j < vDivs; j++) {
		let u = i * spanU
		let v = j * spanV
		
		let uvQuad = createUVQuad(u, v, spanU, spanV)
		let A = createVertexFromUV(...uvQuad[0])
		let B = createVertexFromUV(...uvQuad[1])
		let C = createVertexFromUV(...uvQuad[2])
		let D = createVertexFromUV(...uvQuad[3])
		vertices_.push(...createQuad(A, B, C, D))
		uvs_.push(...createQuad(...uvQuad))
	}
}

// var vertices_ = createQuad(
// 	[-1.0, -1.0, 1.0,],
// 	[1.0, -1.0, 1.0,],
// 	[1.0, 1.0, 1.0,],
// 	[-1.0, 1.0, 1.0,],
// )
const vertices = new Float32Array(vertices_);

// var uvs_ = createQuad(
// 	[0.0, 0.0,],
// 	[1.0, 0.0,],
// 	[1.0, 1.0,],
// 	[0.0, 1.0,],
// )
// var uvs_ = createQuad(
// 	...createUVQuad(0.0, 0.0, 1.0, 1.0)
// )
var uvs = new Float32Array(uvs_);

// itemSize = 3 because there are 3 values (components) per vertex

const texture = new THREE.TextureLoader().load('./textures/mapa_mundi2.jpg');

quad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
// const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, side: THREE.DoubleSide });
const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(quad, mat);
scene.add(mesh)


camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();

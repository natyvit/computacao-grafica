const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const quad = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0,
	 1.0, -1.0,  1.0,
	 1.0,  1.0,  1.0,

	 1.0,  1.0,  1.0,
	-1.0,  1.0,  1.0,
	-1.0, -1.0,  1.0
] );

// itemSize = 3 because there are 3 values (components) per vertex
quad.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const mat = new THREE.MeshBasicMaterial( {
	color: 0xff0000,
	wireframe: false,
	side:THREE.DoubleSide} );
const mesh = new THREE.Mesh( quad, mat );
scene.add(mesh)


const quad2 = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices2 = new Float32Array( [
	-1.0, -1.0,  0.0,
	 1.0, -1.0,  0.0,
	 1.0,  1.0,  0.0,

	 1.0,  1.0,  0.0,
	-1.0,  1.0,  0.0,
	-1.0, -1.0,  0.0
] );

// itemSize = 3 because there are 3 values (components) per vertex
quad2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
const mat2 = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false, depthTest:false } );
const mesh2 = new THREE.Mesh( quad2, mat2 );
scene.add(mesh2)


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();

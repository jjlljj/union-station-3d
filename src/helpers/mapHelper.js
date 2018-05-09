import { Threebox } from 'threebox';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

export const renderMapElements = map => {
  console.log('yo')
  map.on('load', () => {
    renderThreebox(map)
  })
}

function renderThreebox( map ) {
  const threebox = new Threebox(map);
  threebox.setupDefaultLights();

  const loader = new GLTFLoader();
  loader.load("models/unionStation.gltf", gltf => {
    const children = gltf.scene.children[0].children[1].children;

    const meshes = parseChildren([
      ...children.slice(0,11), 
      ...children.slice(13,40),
    ]) 
    
    const position = [-105.00006, 39.75317, 0];

    renderMeshes(meshes, position, threebox)
  })
}

const parseChildren = children => {
  return children.map(child => {
    let geom = new THREE.Geometry().fromBufferGeometry(child.geometry) || child.geometry
    let material = child.material || new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
   
    geom.rotateY((90/360)*4*Math.PI);
    geom.rotateX((90/360)*2*Math.PI);
    return  new THREE.Mesh( geom, material );
  })
}

const renderMeshes = (meshes, position, threebox) => {
  meshes.map(build => threebox.addAtCoordinate(build, position))
}

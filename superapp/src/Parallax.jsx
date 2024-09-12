import React, {useEffect,useRef} from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ParallaxT = () => {
    const mountRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a sphere (globe)
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Sphere geometry for globe
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true, // You can set this to false for a solid sphere
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.z = 3; // Adjust camera position to fit the globe in the view

    // Add OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth out the movement
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5; // Control speed of rotation

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Update controls on each frame
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} />;
};
  
  export default ParallaxT;




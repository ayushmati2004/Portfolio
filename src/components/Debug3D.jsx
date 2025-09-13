import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useState } from 'react';

export default function Debug3D() {
  const [modelInfo, setModelInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await new GLTFLoader().loadAsync('/models/hacker-room.glb');
        console.log('Model loaded successfully:', gltf);
        setModelInfo({
          scene: gltf.scene ? 'Loaded' : 'Missing',
          nodes: gltf.scene ? Object.keys(gltf.scene.nodes).length : 0,
          materials: gltf.materials ? Object.keys(gltf.materials).length : 0,
          animations: gltf.animations ? gltf.animations.length : 0
        });
      } catch (err) {
        console.error('Error loading model:', err);
        setError(err.message);
      }
    };

    loadModel();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 1000,
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <h3>3D Model Debug Info</h3>
      {error ? (
        <div style={{ color: 'red' }}>Error: {error}</div>
      ) : modelInfo ? (
        <pre style={{ margin: 0 }}>
          {JSON.stringify(modelInfo, null, 2)}
        </pre>
      ) : (
        <div>Loading model information...</div>
      )}
    </div>
  );
}

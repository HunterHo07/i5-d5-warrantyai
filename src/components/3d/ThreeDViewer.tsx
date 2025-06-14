'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Home, 
  Car, 
  Laptop, 
  Utensils,
  QrCode,
  Info,
  Eye,
  Move3D
} from 'lucide-react';

interface ThreeDViewerProps {
  selectedCategory: string;
}

const ThreeDViewer = ({ selectedCategory }: ThreeDViewerProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const assets3D = {
    electronics: [
      { id: 'iphone', name: 'iPhone 15 Pro', position: [-2, 0, 0], color: 0x1a1a1a, warranty: '11 months left', status: 'active' },
      { id: 'macbook', name: 'MacBook Pro', position: [0, 0, 0], color: 0x2a2a2a, warranty: '2 years left', status: 'active' },
      { id: 'camera', name: 'Sony Camera', position: [2, 0, 0], color: 0x333333, warranty: 'Expired', status: 'expired' },
      { id: 'airpods', name: 'AirPods Pro', position: [0, 1, 0], color: 0xffffff, warranty: '8 months left', status: 'active' }
    ],
    vehicles: [
      { id: 'tesla', name: 'Tesla Model 3', position: [0, 0, 0], color: 0xff0000, warranty: 'Service due', status: 'warning' },
      { id: 'bmw', name: 'BMW X5', position: [4, 0, 0], color: 0x0066cc, warranty: '3 years left', status: 'active' },
      { id: 'honda', name: 'Honda Civic', position: [-4, 0, 0], color: 0x666666, warranty: '1 year left', status: 'active' }
    ],
    appliances: [
      { id: 'fridge', name: 'LG Refrigerator', position: [-2, 0, -2], color: 0xcccccc, warranty: '4 years left', status: 'active' },
      { id: 'ac', name: 'Dyson AC', position: [2, 0, -2], color: 0x4a90e2, warranty: '2 months left', status: 'warning' },
      { id: 'washer', name: 'Washing Machine', position: [0, 0, 2], color: 0x888888, warranty: '1 year left', status: 'active' }
    ],
    food: [
      { id: 'milk', name: 'Milk', position: [-1, 0, 0], color: 0xffffff, warranty: 'Expires in 3 days', status: 'warning' },
      { id: 'bread', name: 'Bread', position: [0, 0, 0], color: 0xd2691e, warranty: 'Expires today', status: 'expired' },
      { id: 'yogurt', name: 'Yogurt', position: [1, 0, 0], color: 0xffc0cb, warranty: 'Fresh for 5 days', status: 'active' }
    ]
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Point lights for atmosphere
    const blueLight = new THREE.PointLight(0x00d4ff, 0.5, 20);
    blueLight.position.set(-5, 3, 5);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 0.5, 20);
    purpleLight.position.set(5, 3, -5);
    scene.add(purpleLight);

    // Room environment
    const roomGeometry = new THREE.BoxGeometry(20, 10, 20);
    const roomMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x1a1a1a, 
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.3
    });
    const room = new THREE.Mesh(roomGeometry, roomMaterial);
    room.position.y = 0;
    scene.add(room);

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x2a2a2a,
      transparent: true,
      opacity: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x00d4ff, 0x444444);
    gridHelper.position.y = -1.9;
    scene.add(gridHelper);

    setIsLoading(false);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate lights for dynamic effect
      const time = Date.now() * 0.001;
      blueLight.position.x = Math.cos(time) * 8;
      blueLight.position.z = Math.sin(time) * 8;
      purpleLight.position.x = Math.cos(time + Math.PI) * 8;
      purpleLight.position.z = Math.sin(time + Math.PI) * 8;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Clear existing assets
    const objectsToRemove = sceneRef.current.children.filter(child => 
      child.userData.isAsset
    );
    objectsToRemove.forEach(obj => sceneRef.current!.remove(obj));

    // Add new assets based on selected category
    const categoryAssets = assets3D[selectedCategory as keyof typeof assets3D] || [];
    
    categoryAssets.forEach((asset, index) => {
      // Create different geometries based on category
      let geometry: THREE.BufferGeometry;
      
      switch (selectedCategory) {
        case 'electronics':
          if (asset.id === 'iphone') {
            geometry = new THREE.BoxGeometry(0.3, 0.6, 0.05);
          } else if (asset.id === 'macbook') {
            geometry = new THREE.BoxGeometry(1.2, 0.8, 0.05);
          } else if (asset.id === 'camera') {
            geometry = new THREE.BoxGeometry(0.5, 0.4, 0.3);
          } else {
            geometry = new THREE.SphereGeometry(0.2, 16, 16);
          }
          break;
        case 'vehicles':
          geometry = new THREE.BoxGeometry(2, 0.8, 4);
          break;
        case 'appliances':
          if (asset.id === 'fridge') {
            geometry = new THREE.BoxGeometry(1, 2, 1);
          } else if (asset.id === 'ac') {
            geometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 16);
          } else {
            geometry = new THREE.BoxGeometry(0.8, 1, 0.8);
          }
          break;
        case 'food':
          if (asset.id === 'milk') {
            geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 16);
          } else if (asset.id === 'bread') {
            geometry = new THREE.BoxGeometry(0.6, 0.3, 0.4);
          } else {
            geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16);
          }
          break;
        default:
          geometry = new THREE.BoxGeometry(1, 1, 1);
      }

      // Status-based material
      let materialColor = asset.color;
      let emissiveColor = 0x000000;
      
      if (asset.status === 'active') {
        emissiveColor = 0x004400;
      } else if (asset.status === 'warning') {
        emissiveColor = 0x444400;
      } else if (asset.status === 'expired') {
        emissiveColor = 0x440000;
      }

      const material = new THREE.MeshPhongMaterial({ 
        color: materialColor,
        emissive: emissiveColor,
        emissiveIntensity: 0.2,
        shininess: 100
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(asset.position[0], asset.position[1], asset.position[2]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { 
        isAsset: true, 
        assetData: asset 
      };

      // Add hover effect
      mesh.addEventListener = () => {};
      
      sceneRef.current!.add(mesh);

      // Add QR code indicator
      const qrGeometry = new THREE.PlaneGeometry(0.3, 0.3);
      const qrMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      });
      const qrMesh = new THREE.Mesh(qrGeometry, qrMaterial);
      qrMesh.position.set(asset.position[0], asset.position[1] + 1, asset.position[2]);
      qrMesh.lookAt(cameraRef.current!.position);
      qrMesh.userData = { isQR: true, parentAsset: asset.id };
      sceneRef.current!.add(qrMesh);
    });

  }, [selectedCategory]);

  const resetCamera = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 5, 8);
      cameraRef.current.lookAt(0, 0, 0);
    }
  };

  const zoomIn = () => {
    if (cameraRef.current) {
      cameraRef.current.position.multiplyScalar(0.9);
    }
  };

  const zoomOut = () => {
    if (cameraRef.current) {
      cameraRef.current.position.multiplyScalar(1.1);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'expired': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'electronics': return Laptop;
      case 'vehicles': return Car;
      case 'appliances': return Home;
      case 'food': return Utensils;
      default: return Laptop;
    }
  };

  const CategoryIcon = getCategoryIcon(selectedCategory);
  const currentAssets = assets3D[selectedCategory as keyof typeof assets3D] || [];

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <div className="text-white">Loading 3D Environment...</div>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Controls Overlay */}
      <div className="absolute top-4 left-4 space-y-2">
        <button
          onClick={resetCamera}
          className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/80 transition-all"
          title="Reset View"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={zoomIn}
          className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/80 transition-all"
          title="Zoom In"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={zoomOut}
          className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/80 transition-all"
          title="Zoom Out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
      </div>

      {/* Category Info */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <CategoryIcon className="w-5 h-5 text-blue-400" />
          <span className="font-medium capitalize">{selectedCategory}</span>
        </div>
        <div className="text-sm text-gray-400">
          {currentAssets.length} items in 3D space
        </div>
      </div>

      {/* Asset List */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Eye className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">3D Assets</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-32 overflow-y-auto">
          {currentAssets.map((asset, index) => (
            <div
              key={asset.id}
              className={`bg-white/10 rounded-lg p-2 cursor-pointer hover:bg-white/20 transition-all ${
                selectedAsset === asset.id ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setSelectedAsset(selectedAsset === asset.id ? null : asset.id)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white text-sm font-medium truncate">{asset.name}</span>
                <QrCode className="w-3 h-3 text-gray-400" />
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(asset.status)}`}>
                {asset.warranty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-center text-white">
          <Move3D className="w-8 h-8 mx-auto mb-2 text-blue-400" />
          <div className="text-sm">Use mouse to navigate</div>
          <div className="text-xs text-gray-400">Click and drag to explore the 3D space</div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDViewer;

'use client';

import { useState, useEffect } from 'react';
import { 
  Camera, 
  QrCode, 
  Bell, 
  Search, 
  Plus, 
  Home, 
  User, 
  Settings,
  Smartphone,
  Car,
  Laptop,
  Utensils,
  ChevronRight,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

interface MobileSimulatorProps {
  selectedCategory: string;
}

const MobileSimulator = ({ selectedCategory }: MobileSimulatorProps) => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'scanner' | 'assets' | 'profile'>('home');
  const [deviceType, setDeviceType] = useState<'ios' | 'android'>('ios');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const categoryData = {
    electronics: [
      { name: 'iPhone 15 Pro', warranty: '11 months left', status: 'active', value: '$1,199' },
      { name: 'MacBook Pro', warranty: '2 years left', status: 'active', value: '$2,499' },
      { name: 'Sony Camera', warranty: 'Expired', status: 'expired', value: '$899' },
      { name: 'AirPods Pro', warranty: '8 months left', status: 'active', value: '$249' }
    ],
    vehicles: [
      { name: 'Tesla Model 3', warranty: 'Service due', status: 'warning', value: '$45,000' },
      { name: 'BMW X5', warranty: '3 years left', status: 'active', value: '$65,000' },
      { name: 'Honda Civic', warranty: '1 year left', status: 'active', value: '$25,000' }
    ],
    appliances: [
      { name: 'LG Refrigerator', warranty: '4 years left', status: 'active', value: '$1,299' },
      { name: 'Dyson AC', warranty: '2 months left', status: 'warning', value: '$599' },
      { name: 'Washing Machine', warranty: '1 year left', status: 'active', value: '$799' }
    ],
    food: [
      { name: 'Milk', warranty: 'Expires in 3 days', status: 'warning', value: '$4.99' },
      { name: 'Bread', warranty: 'Expires today', status: 'expired', value: '$2.99' },
      { name: 'Yogurt', warranty: 'Fresh for 5 days', status: 'active', value: '$6.99' }
    ]
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

  const renderHomeScreen = () => (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">Welcome back!</h2>
        <p className="text-gray-400 text-sm">You have 3 items expiring soon</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
          <div className="text-2xl font-bold text-blue-400">247</div>
          <div className="text-sm text-gray-400">Total Assets</div>
        </div>
        <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
          <div className="text-2xl font-bold text-green-400">189</div>
          <div className="text-sm text-gray-400">Active Warranties</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setCurrentScreen('scanner')}
            className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 text-center hover:bg-purple-500/30 transition-all"
          >
            <Camera className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-sm text-white">Scan Receipt</div>
          </button>
          <button className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-4 text-center hover:bg-cyan-500/30 transition-all">
            <QrCode className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-sm text-white">Generate QR</div>
          </button>
        </div>
      </div>

      {/* Recent Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Recent Items</h3>
          <button 
            onClick={() => setCurrentScreen('assets')}
            className="text-blue-400 text-sm"
          >
            View All
          </button>
        </div>
        <div className="space-y-2">
          {categoryData[selectedCategory as keyof typeof categoryData]?.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium text-sm">{item.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${getStatusColor(item.status)}`}>
                    {item.warranty}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderScannerScreen = () => (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">AI Receipt Scanner</h2>
        <p className="text-gray-400 text-sm">Point camera at receipt or upload image</p>
      </div>

      {/* Camera Viewfinder */}
      <div className="relative bg-black rounded-xl overflow-hidden aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-4 border-2 border-white/50 rounded-lg border-dashed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Camera className="w-12 h-12 text-white/50" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <div className="text-white text-sm">Position receipt within frame</div>
        </div>
      </div>

      {/* Scan Results */}
      <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 font-medium">Receipt Detected</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-white">Product: iPhone 15 Pro</div>
          <div className="text-gray-400">Purchase Date: Dec 15, 2023</div>
          <div className="text-gray-400">Warranty: 12 months</div>
          <div className="text-gray-400">Value: $1,199.00</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-blue-500 text-white rounded-xl py-3 font-medium">
          Save to Assets
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          className="w-full border border-white/20 text-white rounded-xl py-3"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  const renderAssetsScreen = () => {
    const CategoryIcon = getCategoryIcon(selectedCategory);
    
    return (
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">My Assets</h2>
          <button className="bg-blue-500 text-white rounded-full p-2">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Category Header */}
        <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4">
          <CategoryIcon className="w-6 h-6 text-blue-400" />
          <div>
            <div className="text-white font-medium capitalize">{selectedCategory}</div>
            <div className="text-gray-400 text-sm">
              {categoryData[selectedCategory as keyof typeof categoryData]?.length} items
            </div>
          </div>
        </div>

        {/* Assets List */}
        <div className="space-y-3">
          {categoryData[selectedCategory as keyof typeof categoryData]?.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.value}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className={`text-xs px-3 py-1 rounded-full ${getStatusColor(item.status)}`}>
                  {item.warranty}
                </div>
                <QrCode className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderProfileScreen = () => (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Demo User</h2>
        <p className="text-gray-400 text-sm">demo@warrantyai.com</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="text-white font-medium mb-2">Account Stats</div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Assets Tracked</div>
              <div className="text-white font-semibold">247</div>
            </div>
            <div>
              <div className="text-gray-400">Money Saved</div>
              <div className="text-green-400 font-semibold">$2,340</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-white/5 rounded-xl p-4 text-left border border-white/10">
            <div className="text-white">Notification Settings</div>
            <div className="text-gray-400 text-sm">Manage alerts and reminders</div>
          </button>
          <button className="w-full bg-white/5 rounded-xl p-4 text-left border border-white/10">
            <div className="text-white">Export Data</div>
            <div className="text-gray-400 text-sm">Download your warranty data</div>
          </button>
          <button className="w-full bg-white/5 rounded-xl p-4 text-left border border-white/10">
            <div className="text-white">Help & Support</div>
            <div className="text-gray-400 text-sm">Get help with WarrantyAI</div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-sm mx-auto">
      {/* Device Type Selector */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10">
          <button
            onClick={() => setDeviceType('ios')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              deviceType === 'ios' ? 'bg-blue-500 text-white' : 'text-gray-400'
            }`}
          >
            iOS
          </button>
          <button
            onClick={() => setDeviceType('android')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              deviceType === 'android' ? 'bg-green-500 text-white' : 'text-gray-400'
            }`}
          >
            Android
          </button>
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div className={`relative mx-auto ${
        deviceType === 'ios' 
          ? 'w-[375px] h-[812px] bg-black rounded-[40px] p-2' 
          : 'w-[360px] h-[800px] bg-gray-900 rounded-[25px] p-2'
      } shadow-2xl border-4 ${
        deviceType === 'ios' ? 'border-gray-800' : 'border-gray-700'
      }`}>
        
        {/* Screen */}
        <div className={`w-full h-full bg-black ${
          deviceType === 'ios' ? 'rounded-[32px]' : 'rounded-[20px]'
        } overflow-hidden relative`}>
          
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 py-2 text-white text-sm">
            <div className="flex items-center space-x-1">
              <span className="font-medium">{time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* App Header */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-3 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">WarrantyAI</span>
              </div>
              <Bell className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto">
            {currentScreen === 'home' && renderHomeScreen()}
            {currentScreen === 'scanner' && renderScannerScreen()}
            {currentScreen === 'assets' && renderAssetsScreen()}
            {currentScreen === 'profile' && renderProfileScreen()}
          </div>

          {/* Bottom Navigation */}
          <div className="bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-2">
            <div className="flex items-center justify-around">
              <button
                onClick={() => setCurrentScreen('home')}
                className={`flex flex-col items-center space-y-1 p-2 ${
                  currentScreen === 'home' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => setCurrentScreen('scanner')}
                className={`flex flex-col items-center space-y-1 p-2 ${
                  currentScreen === 'scanner' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                <Camera className="w-5 h-5" />
                <span className="text-xs">Scan</span>
              </button>
              <button
                onClick={() => setCurrentScreen('assets')}
                className={`flex flex-col items-center space-y-1 p-2 ${
                  currentScreen === 'assets' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                <Search className="w-5 h-5" />
                <span className="text-xs">Assets</span>
              </button>
              <button
                onClick={() => setCurrentScreen('profile')}
                className={`flex flex-col items-center space-y-1 p-2 ${
                  currentScreen === 'profile' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSimulator;

'use client';

import { useState } from 'react';
import Link from 'next/link';
const DemoPage = () => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile' | '3d'>('desktop');
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const viewOptions = [
    { id: 'desktop', label: 'Desktop View' },
    { id: 'mobile', label: 'Mobile View' },
    { id: '3d', label: '3D/VR View' }
  ];

  const categories = [
    { id: 'electronics', label: 'Electronics', color: 'blue' },
    { id: 'vehicles', label: 'Vehicles', color: 'purple' },
    { id: 'appliances', label: 'Appliances', color: 'cyan' },
    { id: 'food', label: 'Food & More', color: 'pink' }
  ];

  const features = [
    {
      title: "AI Receipt Scanner",
      description: "Upload receipts for instant warranty extraction",
      status: "active"
    },
    {
      title: "QR Code System",
      description: "Generate and scan QR codes for instant access",
      status: "active"
    },
    {
      title: "Smart Reminders",
      description: "Get notified before warranties expire",
      status: "active"
    },
    {
      title: "3D Visualization",
      description: "View assets in virtual 3D environments",
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">WarrantyAI</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/demo" className="text-blue-400">Demo</Link>
              <Link href="/pitch" className="text-gray-300 hover:text-white transition-colors">Pitch</Link>
              <Link href="/why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</Link>
              <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Demo Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Live Demo Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience WarrantyAI in action with our interactive demo featuring real-time warranty tracking,
              mobile simulation, and 3D asset visualization.
            </p>

            {/* Feature Status */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-sm text-green-400">{feature.title}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Demo Controls */}
          <div className="mb-8">
            {/* View Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10">
                {viewOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveView(option.id as any)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeView === option.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Selector */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 border ${
                    selectedCategory === category.id
                      ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="mb-12">
            {activeView === 'desktop' && (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Dashboard */}
                <div className="lg:col-span-2 bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6 capitalize">{selectedCategory} Dashboard</h3>

                  {/* Sample Assets */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-white font-semibold">iPhone 15 Pro</h4>
                          <p className="text-gray-400 text-sm">Apple • Smartphone</p>
                        </div>
                        <span className="text-white font-semibold">$1,199</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Purchase Date:</span>
                          <div className="text-white">Dec 15, 2023</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Warranty Expiry:</span>
                          <div className="text-white">Dec 15, 2024</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Days Remaining:</span>
                          <div className="text-green-400 font-semibold">335 days</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-white font-semibold">MacBook Pro 16"</h4>
                          <p className="text-gray-400 text-sm">Apple • Laptop</p>
                        </div>
                        <span className="text-white font-semibold">$2,499</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Purchase Date:</span>
                          <div className="text-white">Aug 20, 2022</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Warranty Expiry:</span>
                          <div className="text-white">Aug 20, 2025</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Days Remaining:</span>
                          <div className="text-green-400 font-semibold">598 days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Panel */}
                <div className="space-y-6">
                  {/* QR Code Generator */}
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">QR Code Generator</h3>
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="w-32 h-32 bg-black mx-auto flex items-center justify-center text-white text-xs">
                        QR Code Preview
                      </div>
                    </div>
                    <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">
                      Generate QR Code
                    </button>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Demo Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Assets</span>
                        <span className="text-white font-semibold">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Active Warranties</span>
                        <span className="text-green-400 font-semibold">189</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expiring Soon</span>
                        <span className="text-yellow-400 font-semibold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expired</span>
                        <span className="text-red-400 font-semibold">46</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'mobile' && (
              <div className="flex justify-center">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">Mobile App Simulation</h3>
                  <div className="w-80 h-96 bg-gray-800 rounded-2xl p-4 mx-auto">
                    <div className="bg-black rounded-xl h-full p-4 text-white">
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-semibold">WarrantyAI Mobile</h4>
                        <p className="text-gray-400 text-sm">iOS & Android App</p>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-green-500/20 rounded-lg p-3">
                          <div className="font-medium">📱 iPhone 15 Pro</div>
                          <div className="text-green-400 text-sm">11 months left</div>
                        </div>
                        <div className="bg-green-500/20 rounded-lg p-3">
                          <div className="font-medium">💻 MacBook Pro</div>
                          <div className="text-green-400 text-sm">2 years left</div>
                        </div>
                        <div className="bg-yellow-500/20 rounded-lg p-3">
                          <div className="font-medium">🚗 Tesla Model 3</div>
                          <div className="text-yellow-400 text-sm">Service due</div>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                          📷 Scan Receipt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === '3d' && (
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">3D Asset Visualization</h3>
                <div className="h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏠</div>
                    <h4 className="text-xl font-semibold mb-2">Virtual Room View</h4>
                    <p className="text-gray-400">3D visualization of your assets in virtual rooms</p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl">📱</div>
                        <div className="text-xs">Electronics</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl">🚗</div>
                        <div className="text-xs">Vehicles</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl">🏠</div>
                        <div className="text-xs">Appliances</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Demo Actions */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                This is just a preview. Sign up to access the full platform with unlimited assets,
                real AI processing, and cloud synchronization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  ⚡ Start Free Trial
                </Link>
                <Link
                  href="/pitch"
                  className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Investor Pitch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Smartphone, Eye, Zap, Shield, QrCode, Camera, Bell } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState("Never miss a warranty again.");

  const demoItems = [
    { icon: Smartphone, label: 'iPhone 15 Pro', warranty: '11 months left', status: 'active' },
    { icon: Shield, label: 'MacBook Pro', warranty: '2 years left', status: 'active' },
    { icon: Zap, label: 'Tesla Model 3', warranty: 'Service due', status: 'warning' },
    { icon: Camera, label: 'Sony Camera', warranty: 'Expired', status: 'expired' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Animated Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{typedText}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                AI-powered warranty tracking, 3D asset visualization, and smart reminders for all your belongings.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <QrCode className="w-4 h-4 text-blue-400" />
                <span>QR Scanning</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Camera className="w-4 h-4 text-purple-400" />
                <span>Receipt AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Bell className="w-4 h-4 text-cyan-400" />
                <span>Smart Alerts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Eye className="w-4 h-4 text-pink-400" />
                <span>3D Visualization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span className="font-semibold">Try Live Demo</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
              </Link>
              
              <Link
                href="/pitch"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">View Pitch</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Mini Demo */}
          <div>
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Your Assets</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Live Demo</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {demoItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`demo-card flex items-center justify-between p-3 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer ${
                          item.status === 'active' 
                            ? 'bg-green-500/10 border-green-500/30' 
                            : item.status === 'warning'
                            ? 'bg-yellow-500/10 border-yellow-500/30'
                            : 'bg-red-500/10 border-red-500/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            item.status === 'active' 
                              ? 'bg-green-500/20' 
                              : item.status === 'warning'
                              ? 'bg-yellow-500/20'
                              : 'bg-red-500/20'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-medium text-white">{item.label}</div>
                            <div className={`text-sm ${
                              item.status === 'active' 
                                ? 'text-green-400' 
                                : item.status === 'warning'
                                ? 'text-yellow-400'
                                : 'text-red-400'
                            }`}>
                              {item.warranty}
                            </div>
                          </div>
                        </div>
                        <QrCode className="w-5 h-5 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Total Assets</span>
                    <span className="text-white font-semibold">247 items</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-400">Expiring Soon</span>
                    <span className="text-yellow-400 font-semibold">3 items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

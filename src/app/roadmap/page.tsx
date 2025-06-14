import Link from 'next/link';

const RoadmapPage = () => {
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
              <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link>
              <Link href="/pitch" className="text-gray-300 hover:text-white transition-colors">Pitch</Link>
              <Link href="/why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</Link>
              <Link href="/roadmap" className="text-blue-400">Roadmap</Link>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Product Roadmap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our journey to revolutionize warranty management with cutting-edge technology, 
              innovative features, and global expansion.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>✅ Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔄 In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📅 Planned</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⭐ Vision</span>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Development Timeline</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Phase 1 - MVP Launch */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-2 bg-green-500 border-green-400" />
                  <div className="ml-16 bg-white/5 border border-white/10 rounded-lg p-6 flex-1 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🚀</span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">MVP Launch</h3>
                          <div className="text-gray-400">Q1 2024</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm text-green-400 bg-green-500/20 flex items-center space-x-1">
                        <span>✅</span>
                        <span>completed</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Core warranty tracking functionality with basic AI and mobile app</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">✅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-green-400 bg-green-500/20">completed</div>
                        </div>
                        <div className="text-white font-medium text-sm">Manual Asset Entry</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">✅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-green-400 bg-green-500/20">completed</div>
                        </div>
                        <div className="text-white font-medium text-sm">Basic Receipt Scanning</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">✅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-green-400 bg-green-500/20">completed</div>
                        </div>
                        <div className="text-white font-medium text-sm">Mobile App (iOS/Android)</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">2,500+</div>
                        <div className="text-gray-400 text-xs">Users</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">78%</div>
                        <div className="text-gray-400 text-xs">Retention</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">4.8/5</div>
                        <div className="text-gray-400 text-xs">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 - AI Enhancement */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-2 bg-yellow-500 border-yellow-400" />
                  <div className="ml-16 bg-white/5 border border-white/10 rounded-lg p-6 flex-1 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🧠</span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">AI Enhancement</h3>
                          <div className="text-gray-400">Q2 2024</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm text-yellow-400 bg-yellow-500/20 flex items-center space-x-1">
                        <span>🔄</span>
                        <span>in progress</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Advanced AI capabilities and smart automation features</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">✅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-green-400 bg-green-500/20">completed</div>
                        </div>
                        <div className="text-white font-medium text-sm">Advanced OCR Processing</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">🔄</span>
                          <div className="text-xs px-2 py-1 rounded-full text-yellow-400 bg-yellow-500/20">in progress</div>
                        </div>
                        <div className="text-white font-medium text-sm">Product Recognition AI</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">📅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-blue-400 bg-blue-500/20">planned</div>
                        </div>
                        <div className="text-white font-medium text-sm">Predictive Analytics</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">99.2%</div>
                        <div className="text-gray-400 text-xs">Accuracy</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">&lt; 2 sec</div>
                        <div className="text-gray-400 text-xs">Processing</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">50+</div>
                        <div className="text-gray-400 text-xs">Categories</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 - 3D/AR Revolution */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-2 bg-blue-500 border-blue-400" />
                  <div className="ml-16 bg-white/5 border border-white/10 rounded-lg p-6 flex-1 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👁️</span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">3D/AR Revolution</h3>
                          <div className="text-gray-400">Q3 2024</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm text-blue-400 bg-blue-500/20 flex items-center space-x-1">
                        <span>📅</span>
                        <span>planned</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Immersive 3D visualization and AR asset management</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">📅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-blue-400 bg-blue-500/20">planned</div>
                        </div>
                        <div className="text-white font-medium text-sm">3D Asset Visualization</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">📅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-blue-400 bg-blue-500/20">planned</div>
                        </div>
                        <div className="text-white font-medium text-sm">AR Room Scanning</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">📅</span>
                          <div className="text-xs px-2 py-1 rounded-full text-blue-400 bg-blue-500/20">planned</div>
                        </div>
                        <div className="text-white font-medium text-sm">Interactive 3D Tours</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">10+</div>
                        <div className="text-gray-400 text-xs">Environments</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">1000+</div>
                        <div className="text-gray-400 text-xs">Assets</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">60 FPS</div>
                        <div className="text-gray-400 text-xs">Performance</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 4 - Scale & Expand */}
                <div className="relative flex items-center">
                  <div className="absolute left-6 w-4 h-4 rounded-full border-2 bg-purple-500 border-purple-400" />
                  <div className="ml-16 bg-white/5 border border-white/10 rounded-lg p-6 flex-1 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🌍</span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Scale & Expand</h3>
                          <div className="text-gray-400">Q4 2024</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm text-purple-400 bg-purple-500/20 flex items-center space-x-1">
                        <span>⭐</span>
                        <span>vision</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Global expansion and platform ecosystem development</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">25+</div>
                        <div className="text-gray-400 text-xs">Markets</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">100+</div>
                        <div className="text-gray-400 text-xs">Partners</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white mb-1">$10M ARR</div>
                        <div className="text-gray-400 text-xs">Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
              <p className="text-gray-300 mb-6">
                Be part of the warranty management revolution. Experience our current features 
                and help shape the future of asset tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  🎯 Try Current Features
                </Link>
                <Link
                  href="/signup"
                  className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;

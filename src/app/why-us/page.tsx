import Link from 'next/link';

const WhyUsPage = () => {
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
              <Link href="/why-us" className="text-blue-400">Why Us</Link>
              <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
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
              Why Choose WarrantyAI?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're not just another warranty tracker. We're building the future of asset management
              with cutting-edge AI, immersive 3D visualization, and unmatched user experience.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Competitive Advantages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-First Innovation</h3>
                <p className="text-gray-300 mb-4">Advanced machine learning for receipt processing and predictive analytics</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-sm text-gray-400">99.2% OCR accuracy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-sm text-gray-400">Real-time product identification</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold text-white mb-3">3D/AR Visualization</h3>
                <p className="text-gray-300 mb-4">Revolutionary 3D asset visualization and AR room mapping</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">Immersive 3D environments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">AR asset placement</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-3">Mobile-First Design</h3>
                <p className="text-gray-300 mb-4">Native mobile experience optimized for iOS and Android</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-400">Responsive design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-400">Offline functionality</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-white mb-3">Complete Coverage</h3>
                <p className="text-gray-300 mb-4">Comprehensive tracking across all asset categories</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    <span className="text-sm text-gray-400">Electronics & appliances</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    <span className="text-sm text-gray-400">Vehicles & machinery</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Privacy & Security</h3>
                <p className="text-gray-300 mb-4">Enterprise-grade security with end-to-end encryption</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    <span className="text-sm text-gray-400">AES-256 encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    <span className="text-sm text-gray-400">GDPR compliant</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Platform</h3>
                <p className="text-gray-300 mb-4">Built for scale with microservices architecture</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-400">Auto-scaling infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm text-gray-400">API-first architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Proven Performance</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-3xl font-bold text-white mb-2">2,500+</div>
                <div className="text-gray-400 text-sm mb-2">Beta Users</div>
                <div className="text-green-400 text-xs font-medium">+150%</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-400 text-sm mb-2">User Rating</div>
                <div className="text-green-400 text-xs font-medium">+0.3</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-3xl font-bold text-white mb-2">78%</div>
                <div className="text-gray-400 text-sm mb-2">Engagement</div>
                <div className="text-green-400 text-xs font-medium">+45%</div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-3xl font-bold text-white mb-2">99.2%</div>
                <div className="text-gray-400 text-sm mb-2">AI Accuracy</div>
                <div className="text-green-400 text-xs font-medium">+12%</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of users who have already discovered the future of warranty management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  🎯 Try Live Demo
                </Link>
                <Link
                  href="/signup"
                  className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
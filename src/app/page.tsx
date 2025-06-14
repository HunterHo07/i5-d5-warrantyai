import Link from 'next/link';

export default function Home() {
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
              <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Never miss a warranty again.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                  AI-powered warranty tracking, 3D asset visualization, and smart reminders for all your belongings.
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span>📱 QR Scanning</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span>📷 Receipt AI</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span>🔔 Smart Alerts</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span>👁️ 3D Visualization</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  🎮 Try Live Demo
                </Link>

                <Link
                  href="/pitch"
                  className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  👁️ View Pitch
                </Link>
              </div>
            </div>

            {/* Right Column - Mini Demo */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Your Assets</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Live Demo</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-green-500/10 border-green-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-500/20">📱</div>
                    <div>
                      <div className="font-medium text-white">iPhone 15 Pro</div>
                      <div className="text-sm text-green-400">11 months left</div>
                    </div>
                  </div>
                  <span>📱</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-green-500/10 border-green-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-500/20">💻</div>
                    <div>
                      <div className="font-medium text-white">MacBook Pro</div>
                      <div className="text-sm text-green-400">2 years left</div>
                    </div>
                  </div>
                  <span>📱</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-yellow-500/10 border-yellow-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-yellow-500/20">🚗</div>
                    <div>
                      <div className="font-medium text-white">Tesla Model 3</div>
                      <div className="text-sm text-yellow-400">Service due</div>
                    </div>
                  </div>
                  <span>📱</span>
                </div>
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
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Explore WarrantyAI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/demo" className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Demo</h3>
              <p className="text-gray-300">Experience our live demo with real warranty tracking, mobile simulation, and 3D visualization.</p>
            </Link>

            <Link href="/pitch" className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Investor Pitch</h3>
              <p className="text-gray-300">View our comprehensive pitch deck with market analysis, business model, and growth projections.</p>
            </Link>

            <Link href="/why-us" className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us</h3>
              <p className="text-gray-300">Discover our competitive advantages and why we're leading the warranty management revolution.</p>
            </Link>

            <Link href="/roadmap" className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Product Roadmap</h3>
              <p className="text-gray-300">See our development timeline and upcoming features for the next 18 months.</p>
            </Link>

            <Link href="/signup" className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Started</h3>
              <p className="text-gray-300">Join thousands of users and start tracking your warranties with AI-powered automation.</p>
            </Link>

            <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• AI Receipt Scanning</div>
                <div>• 3D Asset Visualization</div>
                <div>• Smart Reminders</div>
                <div>• QR Code Integration</div>
                <div>• Mobile Apps</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

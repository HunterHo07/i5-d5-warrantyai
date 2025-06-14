'use client';

import { useState } from 'react';
import Link from 'next/link';

const PitchPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'WarrantyAI',
      subtitle: 'The Future of Warranty & Asset Management',
      content: 'Never miss a warranty again. AI-powered tracking, 3D visualization, and smart reminders.',
      gradient: 'from-blue-500 to-purple-600',
      emoji: '⚡'
    },
    {
      title: 'The $2.3B Problem',
      subtitle: 'Massive Market Opportunity',
      content: '70% of consumers lose receipts within 6 months. $2.3 billion in unclaimed warranties annually.',
      gradient: 'from-red-500 to-orange-500',
      emoji: '🎯',
      stats: [
        { value: '70%', label: 'Lose Receipts' },
        { value: '$2.3B', label: 'Lost Annually' },
        { value: '25+', label: 'Items per Home' },
        { value: '85%', label: 'Miss Claims' }
      ]
    },
    {
      title: 'AI-Powered Solution',
      subtitle: 'Revolutionary Warranty Management',
      content: 'Smart receipt scanning, 3D asset visualization, QR code integration, and predictive reminders.',
      gradient: 'from-green-500 to-cyan-500',
      emoji: '💡',
      features: [
        'AI Receipt Scanner',
        '3D/AR Visualization',
        'Smart Reminders',
        'QR Code System',
        'Multi-Platform Support'
      ]
    },
    {
      title: 'Market Opportunity',
      subtitle: '$15B Addressable Market',
      content: '130M US households, 28M small businesses, 2.8B smartphone users globally.',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '🌍',
      marketData: [
        { segment: 'US Households', size: '130M', value: '$7.8B' },
        { segment: 'Small Business', size: '28M', value: '$4.2B' },
        { segment: 'Global Mobile', size: '2.8B', value: '$15B+' }
      ]
    },
    {
      title: 'Investment Opportunity',
      subtitle: 'Series A - $5M Raise',
      content: 'Accelerate growth, expand team, and capture market leadership position.',
      gradient: 'from-orange-500 to-red-500',
      emoji: '💰',
      useOfFunds: [
        { category: 'Product Development', percentage: 40, amount: '$2M' },
        { category: 'Marketing & Sales', percentage: 30, amount: '$1.5M' },
        { category: 'Team Expansion', percentage: 20, amount: '$1M' },
        { category: 'Operations', percentage: 10, amount: '$500K' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

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
              <Link href="/pitch" className="text-blue-400">Pitch</Link>
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
          {/* Pitch Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Investor Pitch Deck
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the future of warranty management and our path to market leadership
            </p>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
            >
              ←
            </button>
            
            <span className="text-white">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
            >
              →
            </button>
          </div>

          {/* Slide Progress */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Slide */}
          <div className="mb-12">
            <div className={`bg-gradient-to-br ${currentSlideData.gradient} rounded-2xl p-8 md:p-12 text-white min-h-[600px] flex flex-col justify-center`}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">{currentSlideData.emoji}</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{currentSlideData.title}</h2>
                <h3 className="text-xl md:text-2xl opacity-90 mb-6">{currentSlideData.subtitle}</h3>
                <p className="text-lg opacity-80 max-w-3xl mx-auto">{currentSlideData.content}</p>
              </div>

              {/* Slide-specific content */}
              {currentSlideData.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {currentSlideData.features && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>
              )}

              {currentSlideData.marketData && (
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {currentSlideData.marketData.map((market, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold">{market.size}</div>
                      <div className="opacity-80 mb-2">{market.segment}</div>
                      <div className="text-xl font-semibold text-yellow-300">{market.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {currentSlideData.useOfFunds && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {currentSlideData.useOfFunds.map((fund, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-yellow-300">{fund.percentage}%</div>
                      <div className="font-semibold mb-1">{fund.category}</div>
                      <div className="text-lg">{fund.amount}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Invest in the Future?</h3>
              <p className="text-gray-300 mb-6">
                Join us in revolutionizing warranty management and capturing a $15B market opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Live Demo
                </Link>
                <a
                  href="mailto:investors@warrantyai.com"
                  className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Contact Investors
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchPage;

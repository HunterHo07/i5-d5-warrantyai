'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, QrCode, Bell, Eye, Smartphone, Car, Home, Utensils, Laptop } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturePreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Feature cards animation
      gsap.fromTo('.feature-card', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Demo preview animation
      gsap.fromTo('.demo-preview', 
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.demo-section',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Camera,
      title: "AI Receipt Scanner",
      description: "Upload any receipt and our AI instantly extracts product details, warranty info, and purchase dates",
      demo: "Scan receipt → AI processes → Auto-categorized"
    },
    {
      icon: QrCode,
      title: "QR Code Integration",
      description: "Generate QR codes for instant asset identification. Scan to view warranty status and details",
      demo: "Generate QR → Attach to item → Instant access"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get notified before warranties expire, service dates approach, or food items go bad",
      demo: "Set alerts → AI monitors → Timely notifications"
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "View your assets in virtual 3D rooms. See warranty status with visual indicators",
      demo: "3D room → Place items → Visual warranty status"
    }
  ];

  const categories = [
    {
      icon: Laptop,
      name: "Electronics",
      items: ["iPhone 15 Pro", "MacBook Pro", "Sony TV", "Gaming Console"],
      color: "blue"
    },
    {
      icon: Car,
      name: "Vehicles",
      items: ["Tesla Model 3", "BMW X5", "Honda Civic", "Motorcycle"],
      color: "purple"
    },
    {
      icon: Home,
      name: "Appliances",
      items: ["Refrigerator", "AC Unit", "Washing Machine", "Microwave"],
      color: "cyan"
    },
    {
      icon: Utensils,
      name: "Food & More",
      items: ["Groceries", "Medications", "Tools", "Furniture"],
      color: "pink"
    }
  ];

  const demoSteps = [
    {
      step: 1,
      title: "Upload Receipt",
      description: "Take a photo or upload your receipt",
      visual: "📄 → 📱"
    },
    {
      step: 2,
      title: "AI Processing",
      description: "Our AI extracts all warranty information",
      visual: "🤖 → ⚡"
    },
    {
      step: 3,
      title: "Smart Organization",
      description: "Items are automatically categorized and tracked",
      visual: "📊 → ✅"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of warranty management with AI-powered automation, 
            3D visualization, and intelligent reminders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-300 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                <div className="text-xs text-blue-400 font-mono bg-blue-500/10 rounded px-2 py-1">
                  {feature.demo}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Tabs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Track Everything You Own</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? `bg-${category.color}-500/20 border-${category.color}-500/50 text-${category.color}-400`
                      : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                  } border`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Category Content */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories[activeTab].items.map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{item}</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Warranty active</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Steps */}
        <div className="demo-section">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {demoSteps.map((step, index) => (
              <div key={index} className="demo-preview text-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <div className="text-3xl mb-2">{step.visual}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">See It In Action</h3>
            <p className="text-gray-300">Experience our live demo with real warranty tracking</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Camera className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Receipt Uploaded</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-sm text-gray-400">iPhone 15 Pro - $1,199.00</div>
                <div className="text-sm text-blue-400">Warranty: 11 months remaining</div>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <QrCode className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">QR Code Generated</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-sm text-gray-400">Scan for instant access</div>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Bell className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Smart Alert Set</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-sm text-gray-400">Reminder: 30 days before expiry</div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/demo"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span className="font-semibold">Try Full Demo</span>
                </div>
              </a>
              <p className="text-sm text-gray-400 mt-4">No signup required • Instant access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;

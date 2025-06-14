'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Receipt, Clock, DollarSign, Shield, Zap, Eye, Smartphone } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSolution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Problem cards animation
      gsap.fromTo('.problem-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.problems-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Solution cards animation
      gsap.fromTo('.solution-card', 
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.solutions-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number',
        { textContent: 0 },
        {
          textContent: (i: number, target: any) => target.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: Receipt,
      title: "Lost Receipts",
      description: "70% of consumers lose receipts within 6 months",
      impact: "$2.3B in unclaimed warranties annually"
    },
    {
      icon: Clock,
      title: "Missed Deadlines",
      description: "85% miss warranty claims due to poor tracking",
      impact: "Average $500 lost per household"
    },
    {
      icon: AlertTriangle,
      title: "Service Chaos",
      description: "No centralized system for maintenance reminders",
      impact: "Equipment failures cost 3x more"
    },
    {
      icon: DollarSign,
      title: "Food Waste",
      description: "Average household wastes $1,500/year on expired food",
      impact: "25% of groceries go bad unnoticed"
    }
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: "AI Receipt Scanning",
      description: "Upload receipts, invoices, or photos for automatic AI extraction of warranty information",
      features: ["OCR Technology", "Product Recognition", "Auto-categorization"]
    },
    {
      icon: Eye,
      title: "3D Asset Visualization",
      description: "Visualize your assets in virtual rooms with AR/VR technology",
      features: ["Room Mapping", "3D Models", "QR Integration"]
    },
    {
      icon: Shield,
      title: "Smart Reminders",
      description: "Never miss warranty expiration or service dates with intelligent notifications",
      features: ["Predictive Alerts", "Service Scheduling", "Claim Assistance"]
    },
    {
      icon: Zap,
      title: "Complete Coverage",
      description: "Track everything from electronics to vehicles to food expiration dates",
      features: ["Multi-category", "Real-time Sync", "Cloud Backup"]
    }
  ];

  const stats = [
    { value: 70, label: "% Lose Receipts", suffix: "%" },
    { value: 2.3, label: "Billion Lost Annually", suffix: "B" },
    { value: 25, label: "Items Per Household", suffix: "+" },
    { value: 85, label: "% Miss Claims", suffix: "%" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            The Problem We Solve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Millions of people lose money every year due to poor warranty and asset management. 
            WarrantyAI changes that with intelligent automation and visualization.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <span className="stat-number" data-value={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Current Pain Points</h3>
          <div className="problems-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="problem-card bg-red-500/10 border border-red-500/30 rounded-xl p-6 hover:bg-red-500/20 transition-all duration-300">
                  <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{problem.description}</p>
                  <p className="text-red-400 text-xs font-medium">{problem.impact}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solutions Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Solution</h3>
          <div className="solutions-grid grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="solution-card bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{solution.title}</h4>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Never Miss a Warranty Again?</h3>
            <p className="text-gray-300 mb-6">Join thousands of users who have already saved money with WarrantyAI</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                Try Free Demo
              </a>
              <a
                href="/signup"
                className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

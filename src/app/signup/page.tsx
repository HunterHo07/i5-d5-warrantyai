'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from '@/components/layout/Navigation';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  Zap, 
  Shield, 
  Smartphone,
  Globe,
  Star,
  ArrowRight,
  Check
} from 'lucide-react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: 'free',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.signup-header', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );

      gsap.fromTo('.signup-form', 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.4 }
      );

      gsap.fromTo('.signup-benefits', 
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Track up to 5 assets',
        'Basic warranty reminders',
        'Manual receipt upload',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'For power users and families',
      features: [
        'Unlimited assets',
        'AI receipt scanning',
        '3D visualization',
        'Smart reminders',
        'QR code generation',
        'Priority support',
        'Export data'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      price: '$49.99',
      period: 'per month',
      description: 'For teams and businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Admin dashboard',
        'API access',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Never Miss a Warranty',
      description: 'AI-powered reminders ensure you never lose money on expired warranties'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Native iOS and Android apps with offline functionality'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Works worldwide with multi-language support'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setStep(3); // Success step
  };

  const validatePassword = (password: string) => {
    const requirements = [
      { test: password.length >= 8, text: 'At least 8 characters' },
      { test: /[A-Z]/.test(password), text: 'One uppercase letter' },
      { test: /[a-z]/.test(password), text: 'One lowercase letter' },
      { test: /\d/.test(password), text: 'One number' }
    ];
    return requirements;
  };

  const passwordRequirements = validatePassword(formData.password);
  const isPasswordValid = passwordRequirements.every(req => req.test);
  const passwordsMatch = formData.password === formData.confirmPassword;

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to WarrantyAI!</h1>
            <p className="text-gray-300 mb-6">
              Your account has been created successfully. Check your email for verification instructions.
            </p>
            <div className="space-y-3">
              <a
                href="/demo"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Using WarrantyAI
              </a>
              <a
                href="/"
                className="block w-full px-6 py-3 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="signup-header text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Join WarrantyAI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start your journey to never missing a warranty again. Choose your plan and get started in minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Sign Up Form */}
            <div className="signup-form">
              {step === 1 && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                          placeholder="Create a strong password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      
                      {formData.password && (
                        <div className="mt-2 space-y-1">
                          {passwordRequirements.map((req, index) => (
                            <div key={index} className={`flex items-center space-x-2 text-xs ${req.test ? 'text-green-400' : 'text-gray-400'}`}>
                              <Check className={`w-3 h-3 ${req.test ? 'text-green-400' : 'text-gray-400'}`} />
                              <span>{req.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-12 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none ${
                            formData.confirmPassword && passwordsMatch ? 'border-green-400' : 
                            formData.confirmPassword && !passwordsMatch ? 'border-red-400' : 'border-white/20'
                          }`}
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {formData.confirmPassword && !passwordsMatch && (
                        <div className="mt-1 text-xs text-red-400">Passwords do not match</div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                          required
                        />
                        <span className="text-sm text-gray-300">
                          I agree to the <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>
                        </span>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="subscribeNewsletter"
                          checked={formData.subscribeNewsletter}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-300">
                          Subscribe to our newsletter for product updates and tips
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.agreeToTerms || !isPasswordValid || !passwordsMatch}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      <span>Continue to Plan Selection</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <span className="text-gray-400">Already have an account? </span>
                    <a href="/login" className="text-blue-400 hover:underline">Sign in</a>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Choose Your Plan</h2>
                  
                  <div className="space-y-4 mb-8">
                    {plans.map((plan) => (
                      <label key={plan.id} className="block">
                        <input
                          type="radio"
                          name="plan"
                          value={plan.id}
                          checked={formData.plan === plan.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.plan === plan.id
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}>
                          {plan.popular && (
                            <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Most Popular
                            </div>
                          )}
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                              <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{plan.price}</div>
                              <div className="text-gray-400 text-sm">{plan.period}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border-2 border-white/20 text-white rounded-lg hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="signup-benefits space-y-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose WarrantyAI?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Trusted by Thousands</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">2,500+</div>
                    <div className="text-gray-400 text-sm">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">4.8/5</div>
                    <div className="text-gray-400 text-sm">User Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">$2.3M</div>
                    <div className="text-gray-400 text-sm">Saved in Claims</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

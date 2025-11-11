'use client'

import { useState } from 'react'
import { CheckCircle, Users, MessageCircle, Calendar, Target, ArrowRight, Zap, Shield, Star, Play, ChevronRight } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGetStarted = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to signup page
      window.location.href = '/signup'
    }, 1000)
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Outreach",
      description: "Personalized messaging at scale with human approval"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Targeting",
      description: "Reach your ideal clients based on industry & behavior"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Automated Booking",
      description: "Seamless calendar integration for qualified meetings"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Human Oversight",
      description: "Every campaign reviewed by our experts before sending"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Define Your Ideal Client",
      description: "Tell us your target industry, company size, and decision-maker profiles"
    },
    {
      number: "02",
      title: "AI + Human Outreach",
      description: "Our AI crafts personalized messages, reviewed by humans before sending"
    },
    {
      number: "03",
      title: "Qualify & Schedule",
      description: "Set your criteria, we handle qualification and book meetings directly to your calendar"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">calnova.ai</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                How it Works
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">No Cold Calls. No Ad Spend. Just Results.</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stop Chasing Leads
              <span className="text-blue-600 block">We Fill Your Calendar</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered lead generation with human oversight. 
              <span className="font-semibold"> Pay only for appointments that show up.</span>
            </p>

            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              We use automation to find, contact, and book your ideal clients. 
              No ad spend. No cold calling. Just qualified meetings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleGetStarted}
                disabled={isLoading}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-200 inline-flex items-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Redirecting...</span>
                  </>
                ) : (
                  <>
                    <span>Get Qualified Leads</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
              
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition duration-200 inline-flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>Join 250+ businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 from 128 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium mb-8">TRUSTED BY GROWING BUSINESSES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {['Tech', 'Agency', 'Consulting', 'SaaS', 'Finance', 'Health'].map((industry) => (
              <div key={industry} className="flex items-center justify-center">
                <div className="h-8 bg-gray-300 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Fill Your Calendar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to get you qualified meetings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Fill Your Pipeline?</h3>
            <p className="text-blue-100 mb-6 text-lg">Get your first qualified leads this week</p>
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Calnova.ai</h2>
            <p className="text-xl text-gray-600">The modern way to generate qualified leads</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for results that matter</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for testing the waters</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">RM5,000</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500">Limited time offer</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['5 qualified meetings/month', 'AI + human outreach', 'Basic targeting', 'Email support'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleGetStarted}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 relative bg-blue-50 hover:shadow-lg transition duration-200">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-semibold">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600">For growing businesses</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">RM8,000</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500">Best value</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['15 qualified meetings/month', 'Advanced AI targeting', 'Multi-channel outreach', 'Priority support', 'Custom qualification'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleGetStarted}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Note */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need custom solutions?{' '}
              <button 
                onClick={handleGetStarted}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact us for enterprise pricing
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Stop Chasing Leads?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join businesses getting qualified meetings with our AI-powered approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-200"
            >
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">calnova.ai</span>
            </div>
            <p className="text-gray-400 mb-2">AI-powered lead generation that actually works</p>
            <p className="text-gray-400">&copy; 2024 Calnova AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

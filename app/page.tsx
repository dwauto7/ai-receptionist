'use client'

import { useState } from 'react'
import { CheckCircle, Users, MessageCircle, Calendar, Target, ArrowRight, Zap, Shield } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGetStarted = () => {
    setIsLoading(true)
    // Simulate API call or navigation
    setTimeout(() => {
      setIsLoading(false)
      // Add your navigation logic here
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">LeadGenAI</span>
            </div>
            <button 
              onClick={handleGetStarted}
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Get Started'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Lead Generation
            <span className="text-blue-600 block">That Actually Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop wasting time on cold outreach. Get qualified leads that actually want to talk to you. 
            Human-approved AI messaging with your qualification criteria.
          </p>

          {/* Limited Time Offer */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 max-w-md mx-auto mb-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-2">
                <span className="line-through">Usually RM10,000</span>
              </p>
              <p className="text-3xl font-bold text-green-600 mb-4">
                Now RM5,000
              </p>
              <p className="text-sm text-gray-500">Limited Time Offer</p>
            </div>
          </div>

          <button 
            onClick={handleGetStarted}
            disabled={isLoading}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-200 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Start Getting Qualified Leads</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent process for quality leads</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Define Your Target</h3>
              <p className="text-gray-600">You specify your ideal industry and client profile</p>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI-Powered Outreach</h3>
              <p className="text-gray-600">Our AI crafts personalized messages, with human approval before sending</p>
            </div>

            {/* Step 3 */}
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Qualify & Book Meetings</h3>
              <p className="text-gray-600">You set qualification criteria and questions - we handle the rest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Human-Approved AI</h3>
              <p className="text-sm text-gray-600">Every message reviewed by humans before sending</p>
            </div>

            <div className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quality Focused</h3>
              <p className="text-sm text-gray-600">Only interested, qualified leads that match your criteria</p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Transparent Process</h3>
              <p className="text-sm text-gray-600">You control targeting and qualification parameters</p>
            </div>

            <div className="text-center">
              <Zap className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Time Efficient</h3>
              <p className="text-sm text-gray-600">Focus on closing while we handle lead generation</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join businesses getting qualified leads with our transparent, AI-powered approach.
          </p>
          
          {/* Limited Time Offer Reminder */}
          <div className="bg-yellow-400 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-gray-900 font-semibold">
              ⏰ Limited Time: RM5,000 (Usually RM10,000)
            </p>
          </div>

          <button 
            onClick={handleGetStarted}
            disabled={isLoading}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-200 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Start Getting Qualified Leads</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 LeadGenAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

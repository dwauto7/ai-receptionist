import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AI Blizzard</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#examples" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Examples
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </a>
              <a 
                href="https://calnova.ai/signup" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Book Free Strategy Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Limited Time: 50% Off First Month + Free Strategy Session
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Chasing,
            <span className="text-blue-600 block">Start Converting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-powered lead generation that delivers <span className="font-semibold text-blue-600">15-25 qualified clients</span> 
            directly to your calendar every month. Focus on closing deals, not finding them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calnova.ai/signup" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Start Getting Clients Now
            </a>
            <a 
              href="#dashboard-preview" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-medium text-lg"
            >
              📊 See Dashboard Preview
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>No Cold Calling</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>15-25 Leads/Month</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✓</span>
              <span>Ready-to-Buy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-8 font-medium">Trusted by businesses worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-xl font-bold text-gray-800">Consulting Firms</div>
              <div className="text-xl font-bold text-gray-800">Marketing Agencies</div>
              <div className="text-xl font-bold text-gray-800">Coaches</div>
              <div className="text-xl font-bold text-gray-800">Freelancers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard-preview" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Client Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your leads, meetings, and conversions in real-time
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dashboard Stats */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Your Monthly Performance</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">18</div>
                    <div className="text-gray-600 text-sm">Qualified Leads</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">6</div>
                    <div className="text-gray-600 text-sm">Scheduled Calls</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-gray-600 text-sm">New Clients</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">$15K</div>
                    <div className="text-gray-600 text-sm">Revenue Generated</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">📅 Upcoming Meetings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Tech Startup Consultation</span>
                      <span className="text-sm text-gray-500">Tomorrow, 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Marketing Agency Pitch</span>
                      <span className="text-sm text-gray-500">Mar 15, 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Calendly Integration Preview */}
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🎯 Your Booking Page</h3>
                <p className="text-gray-300 mb-4">Clients book directly on your personalized Calendly page</p>
                <div className="bg-gray-800 p-4 rounded space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-400">Available: Mon-Fri, 9AM-5PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400">15-min Discovery Calls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400">Automated Reminders</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://calnova.ai/signup" 
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    Access Your Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Clients
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours are achieving growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Example 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                Marketing Agency
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Growth Co.</h3>
              <p className="text-gray-600 mb-4">
                "We went from sporadic client work to fully booked in 60 days. AI Blizzard delivered 22 qualified leads last month alone."
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-600">+$45K Revenue</span>
                <span className="text-gray-500">3 new clients</span>
              </div>
            </div>
            
            {/* Example 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                Business Coach
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sarah Mitchell Coaching</h3>
              <p className="text-gray-600 mb-4">
                "No more wasting time on unqualified leads. Every call booked through the system is with someone ready to invest."
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-600">+$28K Revenue</span>
                <span className="text-gray-500">85% close rate</span>
              </div>
            </div>
            
            {/* Example 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                Tech Consultant
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NextGen Solutions</h3>
              <p className="text-gray-600 mb-4">
                "The dashboard integration with Calendly and Airtable CRM saved us 20+ hours per month on admin work."
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-600">+$67K Revenue</span>
                <span className="text-gray-500">5 enterprise clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get from zero to booked calls in less than 48 hours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onboard & Customize</h3>
              <p className="text-gray-600 text-lg">
                Tell us about your ideal client. We set up your AI lead finder and connect your Calendly in under 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Finds & Qualifies</h3>
              <p className="text-gray-600 text-lg">
                Our AI scans multiple channels to find and pre-qualify leads that match your exact criteria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Booked Calls</h3>
              <p className="text-gray-600 text-lg">
                Qualified leads book directly on your calendar. You show up and close deals - no chasing needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing, Extraordinary Results
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to fill your pipeline with qualified clients
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-white/10 backdrop-blur-sm py-6 text-center">
                <h3 className="text-2xl font-bold text-white">🚀 PROFESSIONAL PLAN</h3>
                <p className="text-blue-100 mt-2">Perfect for consultants, coaches, and agencies</p>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">$497</span>
                    <span className="text-blue-200 ml-3 text-xl line-through">$994</span>
                    <span className="bg-green-400 text-green-900 text-sm font-bold ml-4 px-3 py-1 rounded-full">
                      50% OFF FIRST MONTH
                    </span>
                  </div>
                  <p className="text-blue-200 mt-3 text-lg">$994/month after first month</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-lg">🎯 What You Get:</h4>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>15-25 qualified leads per month</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>AI-powered lead generation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>Calendly + Airtable CRM integration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>Real-time dashboard access</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-lg">🎁 Bonus Included:</h4>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>Free strategy session ($500 value)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>Dedicated success manager</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>Setup & onboarding included</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span>
                        <span>24/7 AI monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://calnova.ai/signup" 
                    className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                  >
                    🚀 Start Your 50% Off Trial
                  </a>
                  <p className="text-blue-200 mt-4 text-sm">
                    🔒 No contract required • Cancel anytime • 48-hour setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Fill Your Calendar with Qualified Clients?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have stopped chasing and started converting with AI Blizzard.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <a 
              href="https://calnova.ai/signup" 
              className="block sm:inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl"
            >
              🚀 Book Free Strategy Session
            </a>
            <a 
              href="#how-it-works" 
              className="block sm:inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

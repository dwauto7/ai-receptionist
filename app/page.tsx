import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
             <nav className="bg-white shadow-sm">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <span className="text-xl font-bold text-blue-600">AI Blizzard</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
          How It Works
        </a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
          Pricing
        </a>
        <a 
          href="https://calnova.ai/signup" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Book Free Strategy Session
        </a>
      </div>
    </div>
  </div>
</nav>

{/* Hero Section */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
      Stop Chasing Clients, 
      <span className="text-blue-600 block">Start Growing Your Business</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
      Our AI-powered system delivers qualified leads directly to you while you focus on what you do best. 
      No more cold calling, no more guesswork - just consistent growth.
    </p>
    <div className="space-x-4">
      <a 
        href="https://calnova.ai/signup" 
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
      >
        Start Getting Clients
      </a>
      <a 
        href="#how-it-works" 
        className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
      >
        See How It Works
      </a>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section id="how-it-works" className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How We Deliver Clients to You
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Our proven 3-step system works around the clock to fill your pipeline with ready-to-buy clients
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-blue-600 font-bold text-xl">1</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Lead Generation</h3>
        <p className="text-gray-600">
          Our advanced AI identifies and qualifies your ideal clients 24/7, so you never miss an opportunity
        </p>
      </div>
      
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-blue-600 font-bold text-xl">2</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Outreach</h3>
        <p className="text-gray-600">
          We handle all the initial contact and follow-ups, warming up leads before they ever reach you
        </p>
      </div>
      
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-blue-600 font-bold text-xl">3</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready-to-Close Meetings</h3>
        <p className="text-gray-600">
          You get scheduled calls with pre-qualified clients who are already interested in your services
        </p>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section id="pricing" className="py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-gray-600">
        Get started risk-free with our limited time offer
      </p>
    </div>
    
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden">
      <div className="bg-blue-600 text-white py-4 text-center">
        <h3 className="text-xl font-bold">🚀 LIMITED TIME OFFER</h3>
        <p className="text-blue-100">First month 50% off + Free Strategy Session</p>
      </div>
      
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900">$497</span>
            <span className="text-gray-500 ml-2 line-through">$994</span>
            <span className="bg-green-100 text-green-800 text-sm font-medium ml-3 px-2 py-1 rounded">
              50% OFF
            </span>
          </div>
          <p className="text-gray-600 mt-2">per month after first month</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>15-25 qualified leads per month</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>AI-powered lead generation</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Automated email & SMS sequences</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Calendar scheduling integration</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Dedicated success manager</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free strategy session ($500 value)</span>
          </li>
        </ul>
        
        <a 
          href="https://calnova.ai/signup" 
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
        >
          Get Started Now
        </a>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          🔒 No contract required • Cancel anytime
        </p>
      </div>
    </div>
  </div>
</section>

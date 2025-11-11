import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Keep but simplify */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AI Blizzard</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <a 
                href="#book-call" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Book Free Strategy Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* NEW LANDING PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stop Chasing Clients
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            We Fill Your Calendar With Qualified Appointments
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            AI-powered appointment booking for busy professionals. Pay only for actual results, not promises.
          </p>
          
          {/* Calendly Embed */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Free Strategy Session</h3>
            <p className="text-gray-600 mb-6">See exactly how we can fill your calendar with ready-to-buy clients</p>
            {/* Calendly embed will go here */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-500">Calendly Booking Widget</p>
              <p className="text-sm text-gray-400 mt-2">[Will be integrated]</p>
            </div>
          </div>
        </div>

        {/* The Offer Section */}
        <div id="pricing" className="py-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Simple, Fair Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-12">You only pay when we deliver results</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founding Client Offer</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Setup & Integration</span>
                  <span className="text-2xl font-bold text-blue-600">RM 5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Per Qualified Appointment</span>
                  <span className="text-2xl font-bold text-green-600">RM 200</span>
                </div>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600">Only pay for successfully booked appointments</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Fully managed appointment booking
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI-powered lead qualification
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Direct calendar integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Weekly performance reports
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  30-day performance guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="py-20 bg-gray-50 rounded-3xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Target Leads", desc: "We identify your ideal clients" },
              { step: "2", title: "AI Outreach", desc: "Smart messaging that converts" },
              { step: "3", title: "Qualify & Book", desc: "AI confirms interest & books appointments" },
              { step: "4", title: "Your Calendar", desc: "Appointments appear automatically" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

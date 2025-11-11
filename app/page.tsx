import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
             <Link 
                href="/signup"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
          
          {/* CTA Button */}
          <Link 
            href="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Book Your Free Strategy Session →
          </Link>
        </div>

        {/* Rest of landing page content... */}
      </div>
    </div>
  );
}

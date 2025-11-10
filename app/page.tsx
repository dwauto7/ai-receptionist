import VideoHero from '@/components/VideoHero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AI Receptionists</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/dashboard-preview" className="text-gray-700 hover:text-blue-600">Dashboard</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Video Hero Section */}
      <VideoHero />

      {/* How It Works Section - Clean white background */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Customer Calls</h3>
              <p className="text-gray-600 text-lg">Your business number rings 24/7, day or night</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Conversation</h3>
              <p className="text-gray-600 text-lg">Natural AI conversation in English or Malay</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Auto-Confirmation</h3>
              <p className="text-gray-600 text-lg">Books calendar & sends SMS/email confirmations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Never Miss a Customer Call?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of Malaysian businesses using our AI receptionist to handle calls 24/7, 
            book appointments automatically, and grow their customer base.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/signup" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start 14-Day Free Trial
            </Link>
            <button className="inline-block border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Talk to Sales
            </button>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}

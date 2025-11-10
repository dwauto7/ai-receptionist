import VideoHero from '@/components/VideoHero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
     {/* Navigation */}
<nav className="bg-white shadow-lg border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900">AI Receptionists</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
        <a href="/dashboard-preview" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</a>
        <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
        <Link href="/signup" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 font-medium transition-colors">
          Start Free Trial
        </Link>
      </div>
    </div>
  </div>
</nav>

      {/* Video Hero Section */}
      <VideoHero />

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Calls</h3>
              <p className="text-gray-600">Your business number rings, anytime day or night</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Answers</h3>
              <p className="text-gray-600">Natural conversation in English or Malay</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Books Calendar</h3>
              <p className="text-gray-600">Appointment automatically added to your calendar</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">SMS Confirmation</h3>
              <p className="text-gray-600">Instant SMS sent to customer with appointment details</p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Notification</h3>
              <p className="text-gray-600">You receive email summary; customer gets confirmation</p>
            </div>
          </div>

          {/* Additional Explanation */}
          <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-center mb-4">Real-time Business Updates</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h5 className="font-semibold mb-2">📱 For Your Business:</h5>
                <ul className="space-y-1">
                  <li>• Instant email notifications for new appointments</li>
                  <li>• Real-time dashboard with all bookings</li>
                  <li>• Calendar sync with Google/Outlook</li>
                  <li>• Daily booking summary reports</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">📞 For Your Customers:</h5>
                <ul className="space-y-1">
                  <li>• Immediate SMS confirmation</li>
                  <li>• Email appointment details</li>
                  <li>• Reminder notifications before appointment</li>
                  <li>• Easy rescheduling via SMS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section (replaces Pricing) */}
      <section className="bg-white py-20">
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
            <button className="inline-block border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
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

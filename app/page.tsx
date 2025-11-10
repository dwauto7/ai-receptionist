import VideoHero from '@/components/VideoHero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AIReception</span>
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

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        {/* ... your updated 5-step process ... */}
      </section>

      {/* Simple CTA Section (replaces Pricing) */}
      <section className="bg-white py-20">
        {/* ... the simple CTA code above ... */}
      </section>
    </div>
  );
}

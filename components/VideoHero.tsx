'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VideoHero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      {/* Video Background Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-1">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/ai-demo-background.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-blue-800/50 z-2"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-3 text-center text-white max-w-4xl px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            AI Voice Agent
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md leading-relaxed">
            Never miss a customer call again. 24/7 automated call answering and appointment booking.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
            >
              Start Free Trial
            </Link>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Modal - Only shows when manually clicked */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative">
            <button 
              onClick={() => setShowDemo(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              ×
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Voice Agent Demo</h3>
              <video controls className="w-full rounded-lg">
                <source src="/assets/videos/full-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

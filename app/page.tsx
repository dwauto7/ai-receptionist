'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Users, Calendar, Zap, CheckCircle, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { signupSchema, type SignupFormData } from '@/lib/validation';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        reset(); // Clear form
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('There was an error submitting the form. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const industries = [
    'Technology & SaaS',
    'Marketing Agency',
    'Consulting',
    'Financial Services',
    'Real Estate',
    'Healthcare',
    'Legal Services',
    'Education',
    'E-commerce',
    'Manufacturing',
    'Other'
  ];

  const leadTargets = [
    '1-5 meetings per month',
    '5-10 meetings per month',
    '10-20 meetings per month',
    '20+ meetings per month'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-blue-600 px-6 py-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <Link href="/" className="text-white text-xl font-bold">calnova.ai</Link>
                </div>
                <h1 className="text-2xl font-bold text-white">Book Your Free Consultation</h1>
                <p className="mt-2 text-blue-100">Get your personalized lead generation strategy</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="+60 12-345 6789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    {...register('business')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Your Business Sdn Bhd"
                  />
                  {errors.business && (
                    <p className="mt-1 text-sm text-red-600">{errors.business.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    {...register('industry')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="monthlyLeads" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Meeting Target *
                  </label>
                  <select
                    id="monthlyLeads"
                    {...register('monthlyLeads')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  >
                    <option value="">How many meetings do you need?</option>
                    {leadTargets.map(target => (
                      <option key={target} value={target}>{target}</option>
                    ))}
                  </select>
                  {errors.monthlyLeads && (
                    <p className="mt-1 text-sm text-red-600">{errors.monthlyLeads.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                  />
                  <label htmlFor="terms" className="block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Free Consultation</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already working with us?{' '}
                  <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Client Login
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* Right Side - Benefits (same as before) */}
          {/* ... keep the benefits section from previous code ... */}
        </div>
      </div>
    </div>
  );
}

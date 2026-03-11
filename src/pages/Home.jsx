import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Insights',
      description: 'Get intelligent health recommendations powered by advanced machine learning algorithms.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: '3D Body Mapping',
      description: 'Visualize your symptoms on an interactive 3D body model for better tracking.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Anomaly Detection',
      description: 'Advanced AI detects unusual patterns in your health data before they become serious.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: '24/7 AI Assistant',
      description: 'Chat with our intelligent health assistant anytime for instant support and guidance.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
              <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 lg:py-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center transform scale-[0.8] origin-top">
              
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="text-sm font-bold text-white">
                    Trusted by 50,000+ Users Worldwide
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className="block text-gray-900">
                    Take Control of
                  </span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Your Health Journey
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experience the future of personal health management with AI-powered insights, 
                  real-time monitoring, and intelligent symptom tracking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/login">
                    <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                      <span className="relative flex items-center gap-2">
                        Start Free Today
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Button>
                  </Link>
                  <button className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demo
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900">50K+</div>
                    <div className="text-sm text-gray-600 mt-1">Active Users</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600 mt-1">AI Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Health Dashboard</div>
                        <div className="text-sm text-gray-500">Real-time monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-5 border border-red-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600">Heart Rate</span>
                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">72</div>
                      <div className="text-sm text-green-600 mt-1">Normal</div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600">Sleep</span>
                        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">7.5h</div>
                      <div className="text-sm text-green-600 mt-1">Good</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600">Steps</span>
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">8.4k</div>
                      <div className="text-sm text-green-600 mt-1">84% Goal</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600">Water</span>
                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">6/8</div>
                      <div className="text-sm text-blue-600 mt-1">Glasses</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 text-white">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold mb-1">AI Health Insight</div>
                        <div className="text-sm text-blue-100">
                          Your vitals are looking great! Consider increasing water intake by 2 glasses for optimal hydration.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-xl transform rotate-12 hidden lg:block">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl transform -rotate-12 hidden lg:block">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
            </svg>
          </div>
        </section>

        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Powerful Features for Better Health
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to monitor, track, and improve your health in one intelligent platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-4 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start your health journey in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>

              <div className="relative text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 shadow-2xl relative z-10">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your account in seconds. No credit card required. Start tracking immediately.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 shadow-2xl relative z-10">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Your Health</h3>
                <p className="text-gray-600 leading-relaxed">
                  Log symptoms, chat with AI, and monitor your health metrics in real-time.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 shadow-2xl relative z-10">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get AI Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive personalized recommendations and early anomaly detection alerts.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    Get Started Now
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Loved by Thousands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our users have to say about their experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "This app changed how I manage my health. The AI insights are incredibly accurate and helpful!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Marketing Director</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "The 3D body mapping feature is genius! Makes tracking symptoms so much easier and intuitive."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "The anomaly detection caught a pattern I didn't notice. Potentially life-saving technology!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    EP
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Emily Parker</div>
                    <div className="text-sm text-gray-500">Teacher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed">
              Join 50,000+ users who trust AI Health Copilot for their health management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl w-full sm:w-auto">
                  <span className="flex items-center gap-2 text-lg px-4">
                    Start Free Trial
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all shadow-xl w-full sm:w-auto">
                Schedule Demo
              </button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;

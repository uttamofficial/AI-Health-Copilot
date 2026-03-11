import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useUser } from '@clerk/react';

const Dashboard = () => {
  const { user } = useUser();
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [feelingNote, setFeelingNote] = useState('');

  // Health metrics data
  const healthMetrics = [
    { 
      id: 1, 
      title: 'Heart Rate', 
      value: '72', 
      unit: 'bpm', 
      status: 'Normal',
      change: '+2',
      trend: 'stable',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      id: 2, 
      title: 'Sleep', 
      value: '7.5', 
      unit: 'hours', 
      status: 'Good',
      change: '+0.5',
      trend: 'up',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    { 
      id: 3, 
      title: 'Steps', 
      value: '8,432', 
      unit: 'steps', 
      status: 'Great',
      change: '+1.2k',
      trend: 'up',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 4, 
      title: 'Calories', 
      value: '2,150', 
      unit: 'kcal', 
      status: 'On Track',
      change: '+50',
      trend: 'stable',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
  ];

  // Feelings tracking options
  const feelings = [
    { id: 1, emoji: '😊', label: 'Happy', color: 'green' },
    { id: 2, emoji: '😐', label: 'Neutral', color: 'gray' },
    { id: 3, emoji: '😢', label: 'Sad', color: 'blue' },
    { id: 4, emoji: '😌', label: 'Calm', color: 'purple' },
    { id: 5, emoji: '😄', label: 'Excited', color: 'yellow' },
    { id: 6, emoji: '😰', label: 'Anxious', color: 'red' },
    { id: 7, emoji: '😴', label: 'Tired', color: 'indigo' },
    { id: 8, emoji: '😡', label: 'Angry', color: 'orange' },
  ];

  // Weekly mood data
  const moodData = [
    { day: 'Mon', mood: '😊', value: 80 },
    { day: 'Tue', mood: '😐', value: 60 },
    { day: 'Wed', mood: '😢', value: 40 },
    { day: 'Thu', mood: '😊', value: 75 },
    { day: 'Fri', mood: '��', value: 70 },
    { day: 'Sat', mood: '😄', value: 95 },
    { day: 'Sun', mood: '😊', value: 85 },
  ];

  // Recent activities
  const recentActivities = [
    { id: 1, action: 'Morning walk completed', time: '2 hours ago', icon: '🚶', color: 'green' },
    { id: 2, action: 'Water intake logged', time: '4 hours ago', icon: '💧', color: 'blue' },
    { id: 3, action: 'Sleep tracked', time: 'Yesterday', icon: '😴', color: 'purple' },
    { id: 4, action: 'Mood logged as Happy', time: 'Yesterday', icon: '😊', color: 'yellow' },
  ];

  const handleFeelingSubmit = (e) => {
    e.preventDefault();
    if (selectedFeeling) {
      alert(`Feeling logged: ${feelings.find(f => f.id === selectedFeeling)?.label}`);
      setSelectedFeeling(null);
      setFeelingNote('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Welcome back, {user?.firstName || user?.fullName || 'User'}!
                </h1>
                <span className="text-3xl animate-bounce">👋</span>
              </div>
              <p className="text-blue-100 text-base">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-sm text-blue-100 mb-1">Health Score</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-bold">92</p>
                  <p className="text-xl text-blue-200">/100</p>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 mt-6">
        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {healthMetrics.map((metric) => (
            <Card 
              key={metric.id} 
              className="p-5 bg-white hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {metric.title}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="text-xs text-gray-500 font-medium ml-1">{metric.unit}</span>
                    )}
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {metric.icon}
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${metric.bgColor}`}>
                  {metric.status}
                </span>
                <span className={`text-sm font-bold ${
                  metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} {metric.change}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Mood & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Tracker */}
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    How are you feeling?
                  </h2>
                  <p className="text-sm text-gray-500">Track your daily mood</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-bold text-purple-600">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleFeelingSubmit} className="space-y-5">
                <div className="grid grid-cols-4 gap-3">
                  {feelings.map((feeling) => (
                    <button
                      key={feeling.id}
                      type="button"
                      onClick={() => setSelectedFeeling(feeling.id)}
                      className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        selectedFeeling === feeling.id
                          ? 'border-purple-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg'
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md bg-white'
                      }`}
                    >
                      <div className="text-3xl mb-2">{feeling.emoji}</div>
                      <div className="text-xs font-bold text-gray-700">{feeling.label}</div>
                    </button>
                  ))}
                </div>
                
                {selectedFeeling && (
                  <div className="space-y-3 animate-fadeIn">
                    <textarea
                      value={feelingNote}
                      onChange={(e) => setFeelingNote(e.target.value)}
                      placeholder="How are you feeling? (optional)"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      rows="2"
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 shadow-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Log Mood
                    </Button>
                  </div>
                )}
              </form>
            </Card>

            {/* Weekly Mood Chart */}
            <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Weekly Overview
                </h2>
                <span className="text-xs font-bold text-gray-500 px-3 py-1.5 bg-gray-100 rounded-lg">
                  Last 7 days
                </span>
              </div>
              
              <div className="flex justify-between items-end gap-2 h-48">
                {moodData.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center group cursor-pointer">
                    <div className="text-xs font-bold text-gray-500 mb-2 group-hover:text-purple-600 transition-colors">
                      {day.day}
                    </div>
                    <div className="w-full flex flex-col items-center justify-end flex-1">
                      <div 
                        className={`w-full rounded-t-lg ${
                          day.value >= 75 ? 'bg-gradient-to-t from-green-400 to-green-500' :
                          day.value >= 50 ? 'bg-gradient-to-t from-yellow-400 to-yellow-500' :
                          'bg-gradient-to-t from-red-400 to-red-500'
                        } opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105`}
                        style={{ height: `${day.value}%` }}
                      ></div>
                    </div>
                    <div className="text-2xl mt-2 group-hover:scale-125 transition-transform">{day.mood}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Progress Trackers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Hydration</h3>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">6</span>
                    <span className="text-lg text-gray-400">/8 glasses</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-sm py-2.5 shadow-md">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Water
                </Button>
              </Card>

              <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Daily Goal</h3>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">85</span>
                    <span className="text-lg text-gray-400">%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-semibold">1,568 steps to go 🎯</p>
              </Card>
            </div>
          </div>

          {/* Right Column - Quick Actions & Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl transition-all duration-300 border-0">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">Quick Actions</h2>
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2.5">
                <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm hover:scale-105 transform">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Log Symptom</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm hover:scale-105 transform">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">View Reports</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm hover:scale-105 transform">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Check Alerts</span>
                </button>
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-5 bg-white hover:shadow-xl transition-all duration-300 border-0">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-800">AI Insights</h2>
                <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Great sleep!</p>
                    <p className="text-xs text-gray-600 mt-0.5">7.5 hours last night</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Stay active</p>
                    <p className="text-xs text-gray-600 mt-0.5">85% of daily goal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Hydrate</p>
                    <p className="text-xs text-gray-600 mt-0.5">Time for water break</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-5 bg-white hover:shadow-xl transition-all duration-300 border-0">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

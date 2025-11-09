import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Body = () => {
  const [view, setView] = useState('front');
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [filterSeverity, setFilterSeverity] = useState('all');

  const [symptoms, setSymptoms] = useState([
    { 
      id: 1, 
      name: 'Headache', 
      severity: 3, 
      position: { front: { x: 50, y: 12 }, back: { x: 50, y: 12 } },
      description: 'Mild tension headache',
      duration: '2 hours',
      type: 'Tension',
      date: new Date().toISOString(),
    },
    { 
      id: 2, 
      name: 'Shoulder Pain', 
      severity: 2, 
      position: { front: { x: 28, y: 30 }, back: { x: 28, y: 30 } },
      description: 'Dull ache in left shoulder',
      duration: '1 day',
      type: 'Muscle',
      date: new Date(Date.now() - 86400000).toISOString(),
    },
    { 
      id: 3, 
      name: 'Knee Pain', 
      severity: 4, 
      position: { front: { x: 45, y: 75 }, back: { x: 45, y: 75 } },
      description: 'Sharp pain when climbing stairs',
      duration: '3 days',
      type: 'Joint',
      date: new Date(Date.now() - 3 * 86400000).toISOString(),
    },
    { 
      id: 4, 
      name: 'Lower Back', 
      severity: 3, 
      position: { front: { x: 50, y: 48 }, back: { x: 50, y: 48 } },
      description: 'Moderate lower back pain',
      duration: '1 week',
      type: 'Chronic',
      date: new Date(Date.now() - 7 * 86400000).toISOString(),
    },
  ]);

  const getSeverityColor = (severity) => {
    const colors = {
      1: 'from-green-400 to-emerald-500',
      2: 'from-yellow-400 to-orange-400',
      3: 'from-orange-400 to-red-400',
      4: 'from-red-500 to-pink-500',
      5: 'from-purple-500 to-pink-600',
    };
    return colors[severity] || 'from-gray-400 to-gray-500';
  };

  const getSeverityLabel = (severity) => {
    const labels = { 1: 'Mild', 2: 'Moderate', 3: 'Strong', 4: 'Severe', 5: 'Critical' };
    return labels[severity] || 'Unknown';
  };

  const getViewSymptoms = () => {
    return symptoms
      .filter(s => filterSeverity === 'all' || s.severity === parseInt(filterSeverity))
      .map(s => ({ ...s, position: view === 'front' ? s.position.front : s.position.back }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">3D Body Map</h1>
              <p className="text-blue-100">Visualize and track your symptoms in real-time</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-blue-100">Active Symptoms</p>
                <p className="text-2xl font-bold">{symptoms.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Body Viewer - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Controls */}
            <Card className="p-5 bg-white border-0 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* View Toggle */}
                <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1.5 shadow-inner">
                  <button
                    onClick={() => setView('front')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      view === 'front' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Front View
                  </button>
                  <button
                    onClick={() => setView('back')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      view === 'back' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Back View
                  </button>
                </div>

                {/* Severity Filter */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-700">Filter:</span>
                  <div className="relative">
                    <select
                      value={filterSeverity}
                      onChange={(e) => setFilterSeverity(e.target.value)}
                      className="appearance-none px-5 py-2.5 pr-10 rounded-xl border-2 border-purple-200 bg-gradient-to-r from-white to-purple-50 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 cursor-pointer hover:border-purple-300 transition-all shadow-sm"
                    >
                      <option value="all">All Severity</option>
                      <option value="1">Mild</option>
                      <option value="2">Moderate</option>
                      <option value="3">Strong</option>
                      <option value="4">Severe</option>
                      <option value="5">Critical</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Body Visualization */}
            <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 opacity-50"></div>
              
              <div className="relative">
                <div className="flex justify-center items-center min-h-[600px] relative">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 grid-rows-12 h-full">
                      {[...Array(144)].map((_, i) => (
                        <div key={i} className="border border-blue-300"></div>
                      ))}
                    </div>
                  </div>

                  {/* Body Model */}
                  <div className="relative w-72 h-[600px]">
                    {/* Head */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full border-2 border-blue-400/50 backdrop-blur-sm shadow-lg"></div>
                    
                    {/* Neck */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-lg border-2 border-blue-400/50"></div>
                    
                    {/* Torso */}
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-32 h-44 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-2xl border-2 border-purple-400/50 backdrop-blur-sm shadow-lg"></div>
                    
                    {/* Arms */}
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-x-28 w-28 h-12 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-lg border-2 border-blue-400/50 rotate-12"></div>
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 translate-x-20 w-28 h-12 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-lg border-2 border-blue-400/50 -rotate-12"></div>
                    
                    {/* Hips */}
                    <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-28 h-16 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-xl border-2 border-purple-400/50"></div>
                    
                    {/* Legs */}
                    <div className="absolute top-88 left-1/2 transform -translate-x-1/2 -translate-x-10 w-12 h-48 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-lg border-2 border-pink-400/50 backdrop-blur-sm shadow-lg"></div>
                    <div className="absolute top-88 left-1/2 transform -translate-x-1/2 translate-x-6 w-12 h-48 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-lg border-2 border-pink-400/50 backdrop-blur-sm shadow-lg"></div>
                    
                    {/* Symptom Markers */}
                    {getViewSymptoms().map((symptom) => (
                      <div
                        key={symptom.id}
                        className="absolute group"
                        style={{ left: `${symptom.position.x}%`, top: `${symptom.position.y}%` }}
                      >
                        {/* Pulse Animation */}
                        <div className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 animate-ping"></div>
                        
                        {/* Main Marker */}
                        <div
                          className={`relative w-10 h-10 rounded-full bg-gradient-to-br ${getSeverityColor(symptom.severity)} border-3 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-all shadow-2xl z-10 flex items-center justify-center`}
                          onClick={() => setSelectedSymptom(symptom)}
                        >
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        </div>

                        {/* Tooltip */}
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-20">
                          <div className="font-bold">{symptom.name}</div>
                          <div className="text-gray-300">{getSeverityLabel(symptom.severity)}</div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Severity Levels
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div key={level} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${getSeverityColor(level)} shadow-md`}></div>
                        <span className="text-sm font-semibold text-gray-700">{getSeverityLabel(level)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Selected Symptom Details */}
            <Card className="p-6 bg-white border-0 shadow-xl sticky top-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-800">Details</h2>
              </div>
              
              {selectedSymptom ? (
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{selectedSymptom.name}</h3>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getSeverityColor(selectedSymptom.severity)} shadow-md`}>
                      {getSeverityLabel(selectedSymptom.severity)}
                    </span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-gray-700 text-sm leading-relaxed">{selectedSymptom.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Duration</p>
                      <p className="text-sm font-bold text-gray-900">{selectedSymptom.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Type</p>
                      <p className="text-sm font-bold text-gray-900">{selectedSymptom.type}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Logged Date</p>
                    <p className="text-sm font-bold text-gray-900">{new Date(selectedSymptom.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add Note
                    </Button>
                    <Button variant="outline" className="w-full border-2">
                      View History
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">No Selection</h3>
                  <p className="text-gray-500 text-sm">Click a symptom marker to view details</p>
                </div>
              )}
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-xl">
              <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span className="text-sm font-semibold">Total Symptoms</span>
                  <span className="text-xl font-bold">{symptoms.length}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span className="text-sm font-semibold">Active Today</span>
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span className="text-sm font-semibold">Avg Severity</span>
                  <span className="text-xl font-bold">3.0</span>
                </div>
              </div>
            </Card>

            {/* AI Integration */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900">AI Assistant</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Chat with AI to automatically map symptoms to your body.
              </p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Open AI Chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

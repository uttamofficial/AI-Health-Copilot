import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Status = () => {
  const [filter, setFilter] = useState('all');
  const [showContactDoctor, setShowContactDoctor] = useState(false);

  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'High Blood Pressure Detected',
      summary: 'Your blood pressure reading of 145/95 is above normal range.',
      date: new Date().toISOString(),
      anomaly: true,
      severity: 'high',
      recommendation: 'Consult healthcare professional within 24 hours.',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Irregular Heart Rate Pattern',
      summary: 'AI detected irregular heartbeat pattern during sleep.',
      date: new Date(Date.now() - 86400000).toISOString(),
      anomaly: true,
      severity: 'medium',
      recommendation: 'Monitor for next few days. If persists, consult doctor.',
    },
    {
      id: 3,
      type: 'info',
      title: 'Hydration Reminder',
      summary: 'It\'s been 4 hours since your last water intake.',
      date: new Date(Date.now() - 14400000).toISOString(),
      anomaly: false,
      severity: 'low',
      recommendation: 'Drink 1-2 glasses of water.',
    },
    {
      id: 4,
      type: 'critical',
      title: 'Medication Due',
      summary: 'Time to take your evening medication: Lisinopril 10mg',
      date: new Date(Date.now() - 3600000).toISOString(),
      anomaly: false,
      severity: 'medium',
      recommendation: 'Take medication as prescribed.',
    },
    {
      id: 5,
      type: 'warning',
      title: 'Sleep Quality Decline',
      summary: 'Sleep quality score dropped to 65% (avg: 78%).',
      date: new Date(Date.now() - 2 * 86400000).toISOString(),
      anomaly: true,
      severity: 'medium',
      recommendation: 'Review sleep patterns and lifestyle adjustments.',
    },
    {
      id: 6,
      type: 'info',
      title: 'Weekly Summary Available',
      summary: 'Your weekly health report is ready for review.',
      date: new Date(Date.now() - 3 * 86400000).toISOString(),
      anomaly: false,
      severity: 'low',
      recommendation: 'Review your weekly health summary.',
    }
  ];

  const filteredAlerts = filter === 'all' ? alerts : alerts.filter(a => a.type === filter);
  const anomalyAlerts = alerts.filter(a => a.anomaly);

  const getTypeColor = (type) => {
    const colors = {
      critical: 'from-red-500 to-pink-500',
      warning: 'from-yellow-500 to-orange-500',
      info: 'from-blue-500 to-cyan-500',
    };
    return colors[type];
  };

  const getTypeBgColor = (type) => {
    const colors = {
      critical: 'from-red-50 to-pink-50',
      warning: 'from-yellow-50 to-orange-50',
      info: 'from-blue-50 to-cyan-50',
    };
    return colors[type];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Health Alerts</h1>
              <p className="text-blue-100">AI-powered anomaly detection and health notifications</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-blue-100">Active Alerts</p>
                <p className="text-2xl font-bold">{alerts.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-red-500 to-pink-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-red-100 mb-1">High Priority</p>
                <p className="text-4xl font-bold">{anomalyAlerts.filter(a => a.severity === 'high').length}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-red-100">Requires immediate attention</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-yellow-100 mb-1">Medium Priority</p>
                <p className="text-4xl font-bold">{anomalyAlerts.filter(a => a.severity === 'medium').length}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-yellow-100">Monitor closely</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-blue-100 mb-1">Information</p>
                <p className="text-4xl font-bold">{alerts.filter(a => a.type === 'info').length}</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-blue-100">General notifications</p>
          </Card>
        </div>

        {/* Contact Doctor Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Need Medical Assistance?</h3>
                <p className="text-sm text-gray-600">Connect with healthcare professionals 24/7</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowContactDoctor(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Contact Doctor
            </Button>
          </div>
        </Card>

        {/* Filters */}
        <Card className="p-5 mb-8 bg-white border-0 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-gray-800">Filter Alerts</h2>
            <div className="flex flex-wrap gap-2">
              {['all', 'critical', 'warning', 'info'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    filter === f
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-white/20">
                    {f === 'all' ? alerts.length : alerts.filter(a => a.type === f).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Alerts List */}
        <div className="space-y-5">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <Card 
                key={alert.id}
                className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${getTypeBgColor(alert.type)}`}
              >
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getTypeColor(alert.type)} flex items-center justify-center shadow-lg`}>
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {alert.type === 'critical' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        )}
                        {alert.type === 'warning' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                        {alert.type === 'info' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{alert.title}</h3>
                        {alert.anomaly && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
                            AI Detected
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-gray-500">{formatDate(alert.date)}</span>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{alert.summary}</p>

                    {alert.recommendation && (
                      <div className="bg-white/70 p-4 rounded-xl mb-4 border border-gray-200">
                        <div className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <div>
                            <p className="text-sm font-bold text-gray-900 mb-1">AI Recommendation</p>
                            <p className="text-sm text-gray-700">{alert.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r ${getTypeColor(alert.type)} text-white shadow-md`}>
                          {alert.type.toUpperCase()}
                        </span>
                        {alert.anomaly && (
                          <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-800 text-white shadow-md">
                            {alert.severity.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-2">
                          View Details
                        </Button>
                        {alert.anomaly && (
                          <Button 
                            size="sm" 
                            onClick={() => setShowContactDoctor(true)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
                          >
                            Contact Doctor
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-16 text-center bg-white border-0 shadow-lg">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-5">
                <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Alerts Found</h3>
              <p className="text-gray-500">There are no alerts matching your current filter.</p>
            </Card>
          )}
        </div>
      </div>

      {/* Contact Doctor Modal */}
      {showContactDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <Card className="p-8 max-w-lg w-full shadow-2xl animate-scaleIn">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Doctor</h2>
              </div>
              <button
                onClick={() => setShowContactDoctor(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-5">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">24/7 Medical Support:</span> Our healthcare team is available to address your concerns. Please provide details about your inquiry.
                </p>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg"
                  onClick={() => {
                    alert('Contacting doctor...');
                    setShowContactDoctor(false);
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2"
                  onClick={() => setShowContactDoctor(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Status;

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [leads, setLeads] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [stats, setStats] = useState({
    totalLeads: 0,
    scheduledCalls: 0,
    convertedClients: 0,
    monthlyRevenue: 0
  });

  // Mock data - in real app, this would come from Airtable API
  useEffect(() => {
    // Simulate API call
    const mockLeads = [
      { id: 1, name: 'Sarah Johnson', company: 'TechStart Inc', status: 'New', date: '2024-03-10', value: 5000 },
      { id: 2, name: 'Mike Chen', company: 'Growth Labs', status: 'Contacted', date: '2024-03-09', value: 7500 },
      { id: 3, name: 'Emily Davis', company: 'Digital Solutions', status: 'Qualified', date: '2024-03-08', value: 10000 },
      { id: 4, name: 'Alex Rodriguez', company: 'NextGen Marketing', status: 'New', date: '2024-03-07', value: 6000 },
    ];

    const mockMeetings = [
      { id: 1, name: 'Sarah Johnson', company: 'TechStart Inc', date: '2024-03-12', time: '2:00 PM', type: 'Discovery Call' },
      { id: 2, name: 'Mike Chen', company: 'Growth Labs', date: '2024-03-11', time: '10:00 AM', type: 'Strategy Session' },
    ];

    setLeads(mockLeads);
    setMeetings(mockMeetings);
    setStats({
      totalLeads: 18,
      scheduledCalls: 6,
      convertedClients: 3,
      monthlyRevenue: 15000
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AI Blizzard</span>
              <span className="ml-4 text-gray-500">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Refresh Data
              </button>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-green-600 font-medium">
              +5 this week
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-green-600 text-xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Scheduled Calls</p>
                <p className="text-2xl font-bold text-gray-900">{stats.scheduledCalls}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-green-600 font-medium">
              +2 this week
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-purple-600 text-xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">New Clients</p>
                <p className="text-2xl font-bold text-gray-900">{stats.convertedClients}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-green-600 font-medium">
              +1 this week
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <span className="text-orange-600 text-xl">📈</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-green-600 font-medium">
              On track for $20K
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border">
              <div className="border-b">
                <nav className="flex space-x-8 px-6">
                  {['overview', 'leads', 'meetings', 'analytics'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <span className="text-blue-600">🎯</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-gray-900">New lead qualified</p>
                            <p className="text-sm text-gray-600">Sarah Johnson from TechStart Inc</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <span className="text-green-600">📅</span>
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-gray-900">Meeting scheduled</p>
                            <p className="text-sm text-gray-600">Discovery call with Mike Chen</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'leads' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Active Leads</h3>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Export Leads
                      </button>
                    </div>
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm font-medium text-gray-900">{lead.name}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{lead.company}</td>
                              <td className="px-4 py-3">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                  lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {lead.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900">${lead.value.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'meetings' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
                    <div className="space-y-3">
                      {meetings.map((meeting) => (
                        <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-lg">
                              <span className="text-green-600">📅</span>
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-gray-900">{meeting.name}</p>
                              <p className="text-sm text-gray-600">{meeting.company} • {meeting.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{meeting.date}</p>
                            <p className="text-sm text-gray-600">{meeting.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                        <p className="text-2xl font-bold text-gray-900">27%</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Avg Deal Size</p>
                        <p className="text-2xl font-bold text-gray-900">$6,250</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Response Time</p>
                        <p className="text-2xl font-bold text-gray-900">2.3h</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Lead Quality Score</p>
                        <p className="text-2xl font-bold text-gray-900">8.7/10</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 mr-2">+</span>
                  Add Manual Lead
                </button>
                <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mr-2">📊</span>
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Calendly Integration */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Booking Page</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">Active Calendly Integration</p>
                  <p className="text-xs text-blue-600 mt-1">Connected to your calendar</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">●</span>
                    <span>15-min Discovery Calls</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-blue-500 mr-2">●</span>
                    <span>30-min Strategy Sessions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-purple-500 mr-2">●</span>
                    <span>Automated Reminders Active</span>
                  </div>
                </div>

                <a 
                  href="https://calendly.com/your-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Your Booking Page
                </a>
              </div>
            </div>

            {/* Airtable CRM Status */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">CRM Integration</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">Airtable Connected</p>
                  <p className="text-xs text-green-600 mt-1">Last sync: 5 minutes ago</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Leads in CRM:</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Deals:</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month Revenue:</span>
                    <span className="font-medium text-green-600">$15,000</span>
                  </div>
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
                  Open Airtable CRM
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Your dedicated success manager is here to help you maximize results.
              </p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-green-600">AI Receptionists</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="/dashboard-preview" className="text-green-600 font-semibold">Dashboard</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600">Contact</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Connect CRM
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Client Dashboard</h1>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Export to Airtable
            </button>
            <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50">
              Refresh Data
            </button>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm font-medium">Calls Today</h3>
            <p className="text-2xl font-bold">14</p>
            <p className="text-green-600 text-sm">↑ 3 from yesterday</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm font-medium">Appointments Booked</h3>
            <p className="text-2xl font-bold">9</p>
            <p className="text-green-600 text-sm">80% success rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <h3 className="text-gray-600 text-sm font-medium">Minutes Used</h3>
            <p className="text-2xl font-bold">87/200</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '43.5%'}}></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
            <h3 className="text-gray-600 text-sm font-medium">SMS Used</h3>
            <p className="text-2xl font-bold">23/100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '23%'}}></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Calendar Preview */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <div>
                  <p className="font-semibold">Ahmad - Haircut</p>
                  <p className="text-gray-600 text-sm">10:30 AM - 11:30 AM</p>
                  <p className="text-gray-500 text-sm">+60 12-345 6789</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Confirmed</span>
              </div>
              <div className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                <div>
                  <p className="font-semibold">Sarah - Consultation</p>
                  <p className="text-gray-600 text-sm">2:00 PM - 3:00 PM</p>
                  <p className="text-gray-500 text-sm">+60 12-987 6543</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">New</span>
              </div>
              <div className="flex items-center justify-between p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
                <div>
                  <p className="font-semibold">Raj - Follow-up</p>
                  <p className="text-gray-600 text-sm">4:30 PM - 5:00 PM</p>
                  <p className="text-gray-500 text-sm">+60 13-456 7890</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Pending</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Real-time calendar with color-coded appointments
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Customer profiles with contact history
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Call recordings & transcripts
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                SMS & email communication logs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <strong>One-click Airtable sync</strong> for all data
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Automated reports & analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Real-time notifications
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Google Calendar sync
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Calls with Recordings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Calls & Recordings</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">+60 12-345 6789</p>
                    <p className="text-gray-600 text-sm">Today, 10:30 AM • 2:15 duration</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Booked</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex items-center gap-1 text-blue-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    </svg>
                    Play Recording
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    View Transcript
                  </button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">+60 12-987 6543</p>
                    <p className="text-gray-600 text-sm">Today, 11:15 AM • 1:45 duration</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Booked</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex items-center gap-1 text-blue-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    </svg>
                    Play Recording
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    View Transcript
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CRM Integration & Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">CRM Integration</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-800">Airtable Connected</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Live</span>
                </div>
                <p className="text-green-700 text-sm">Data syncing automatically every 5 minutes</p>
                <button className="mt-2 text-green-600 text-sm hover:text-green-800">
                  Sync Now →
                </button>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-gray-300 rounded p-3 text-center hover:bg-gray-50">
                    <div className="text-blue-500 text-sm">📊</div>
                    <div className="text-xs mt-1">View Reports</div>
                  </button>
                  <button className="border border-gray-300 rounded p-3 text-center hover:bg-gray-50">
                    <div className="text-green-500 text-sm">👥</div>
                    <div className="text-xs mt-1">Customers</div>
                  </button>
                  <button className="border border-gray-300 rounded p-3 text-center hover:bg-gray-50">
                    <div className="text-purple-500 text-sm">📞</div>
                    <div className="text-xs mt-1">Call Logs</div>
                  </button>
                  <button className="border border-gray-300 rounded p-3 text-center hover:bg-gray-50">
                    <div className="text-orange-500 text-sm">⚙️</div>
                    <div className="text-xs mt-1">Settings</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AI Receptionists</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/dashboard-preview" className="text-blue-600 font-semibold">Dashboard</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Export to Airtable
          </button>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm font-medium">Calls Today</h3>
            <p className="text-2xl font-bold text-gray-900">14</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm font-medium">Appointments</h3>
            <p className="text-2xl font-bold text-gray-900">9</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
            <h3 className="text-gray-600 text-sm font-medium">Minutes Used</h3>
            <p className="text-2xl font-bold text-gray-900">87/200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
            <h3 className="text-gray-600 text-sm font-medium">SMS Used</h3>
            <p className="text-2xl font-bold text-gray-900">23/100</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Today's Appointments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Today's Appointments</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <div>
                  <p className="font-semibold text-gray-900">Ahmad - Haircut</p>
                  <p className="text-gray-600 text-sm">10:30 AM - 11:30 AM</p>
                  <p className="text-gray-500 text-sm">+60 12-345 6789</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Confirmed</span>
              </div>
              <div className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                <div>
                  <p className="font-semibold text-gray-900">Sarah - Consultation</p>
                  <p className="text-gray-600 text-sm">2:00 PM - 3:00 PM</p>
                  <p className="text-gray-500 text-sm">+60 12-987 6543</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">New</span>
              </div>
            </div>
          </div>

          {/* Recent Calls */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Calls</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">+60 12-345 6789</p>
                    <p className="text-gray-600 text-sm">Today, 10:30 AM • 2:15 duration</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Booked</span>
                </div>
                <div className="flex gap-3 mt-2">
                  <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                    Play Recording
                  </button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">+60 12-987 6543</p>
                    <p className="text-gray-600 text-sm">Today, 11:15 AM • 1:45 duration</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Booked</span>
                </div>
                <div className="flex gap-3 mt-2">
                  <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                    Play Recording
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

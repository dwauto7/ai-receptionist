export default function DashboardPreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AIReception</span>
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
        <h1 className="text-3xl font-bold mb-8">Client Dashboard Preview</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-600 text-sm font-medium">Calls Today</h3>
            <p className="text-2xl font-bold">14</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-600 text-sm font-medium">Appointments Booked</h3>
            <p className="text-2xl font-bold">9</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-600 text-sm font-medium">Minutes Used</h3>
            <p className="text-2xl font-bold">87/200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-600 text-sm font-medium">SMS Used</h3>
            <p className="text-2xl font-bold">23/100</p>
          </div>
        </div>

        {/* Recent Calls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Calls</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Time</th>
                  <th className="text-left py-2">Number</th>
                  <th className="text-left py-2">Duration</th>
                  <th className="text-left py-2">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">10:30 AM</td>
                  <td className="py-3">+60 12-345 6789</td>
                  <td className="py-3">2:15</td>
                  <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Booked</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">11:15 AM</td>
                  <td className="py-3">+60 12-987 6543</td>
                  <td className="py-3">1:45</td>
                  <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Booked</span></td>
                </tr>
                <tr>
                  <td className="py-3">12:00 PM</td>
                  <td className="py-3">+60 13-456 7890</td>
                  <td className="py-3">0:45</td>
                  <td className="py-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Info Only</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Settings Preview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Business Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Hours</label>
                <p className="text-gray-600">9:00 AM - 6:00 PM, Monday - Saturday</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <p className="text-gray-600">+60 3-1234 5678</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">SMS Templates</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600">Appointment Confirmation</p>
                <p className="text-gray-800">Your appointment is confirmed for {`{date}`} at {`{time}`}. See you then!</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-600">Reminder</p>
                <p className="text-gray-800">Reminder: Your appointment is tomorrow at {`{time}`}. Reply STOP to cancel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

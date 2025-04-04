import { FiPhone, FiUsers, FiSearch, FiFilter, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaAmbulance } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with outline */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Officer Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Officer John Smith</p>
        </div>

        {/* Stats Cards with outlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-red-600 font-medium">Urgent Tasks</h3>
              <span className="text-3xl font-bold text-red-600">4</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-600 font-medium">In Progress</h3>
              <span className="text-3xl font-bold text-gray-900">0</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-green-200 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-600 font-medium">Resolved Today</h3>
              <span className="text-3xl font-bold text-gray-900">0</span>
            </div>
          </div>
        </div>

        {/* Action Buttons with outline container */}
        <div className="mb-12 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-red-200 hover:bg-red-50 transition-colors">
              <FiPhone className="text-red-500" />
              <span className="font-medium">Emergency Services</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors">
              <FaAmbulance className="text-blue-500" />
              <span className="font-medium">Request Ambulance</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border-2 border-yellow-200 hover:bg-yellow-50 transition-colors">
              <FiUsers className="text-yellow-500" />
              <span className="font-medium">Request Backup</span>
            </button>
          </div>
        </div>

        {/* Task Management Section with strong outline */}
        <div className="bg-white rounded-lg border-2 border-gray-300 shadow-md overflow-hidden">
          {/* Section Header */}
          <div className="p-6 border-b-2 border-gray-200 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900">Task Management</h2>
            <p className="text-gray-600 mt-1">View and manage all assigned tasks</p>
          </div>

          {/* Search and Filter - contained within the main box */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50">
                <FiFilter />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Task Tabs - with bottom border */}
          <div className="px-6 pt-4 border-b border-gray-200">
            <div className="flex gap-4">
              <button className="px-4 py-2 text-red-500 border-b-2 border-red-500 font-medium">
                Urgent <span className="ml-1 bg-red-100 text-red-500 px-2 py-0.5 rounded-full text-sm">4</span>
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">In Progress</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Resolved</button>
            </div>
          </div>

          {/* Task List - with individual item outlines */}
          <div className="p-6 space-y-4">
            {/* Task Item */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-500 rounded text-sm font-medium border border-red-200">Urgent</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-sm font-medium border border-yellow-200">Medium</span>
                </div>
                <div className="text-sm text-gray-500">23/03/2025, 08:25:52</div>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <FiMapPin className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">No.36, South Alley, Coimbatore</p>
                  <p className="text-sm text-gray-500">(N/A away)</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => navigate('/task/COMP-76U2W8F0J')}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Details
                  <FiArrowRight />
                </button>
              </div>
            </div>

            {/* Second Task Item */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-500 rounded text-sm font-medium border border-orange-200">High</span>
                </div>
                <div className="text-sm text-gray-500">22/03/2025, 14:30:15</div>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <FiMapPin className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">12th Main Road, Bangalore</p>
                  <p className="text-sm text-gray-500">(2.5km away)</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => navigate('/task/COMP-98X4V5B2N')}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Details
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
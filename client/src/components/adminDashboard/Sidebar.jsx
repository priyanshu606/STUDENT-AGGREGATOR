import React from 'react'
import { LayoutDashboard, Sparkles } from 'lucide-react';

const Sidebar = ({selected,setSelected}) => {
  return (
   <div className="w-64 mt-20 h-screen bg-gradient-to-br from-indigo-900 via-sky-800 to-cyan-700 text-white p-6 shadow-xl">
      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/10 shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-white drop-shadow-lg">
          Admin Panel
        </h1>
        <hr className="border-white/20 mb-6" />

        {/* Dashboard Button */}
        <div 
        onClick={()=> setSelected('Dashboard')}
        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer bg-white/10 hover:bg-white/20 transition duration-200 shadow hover:shadow-md">
          <LayoutDashboard className="w-5 h-5 text-white" />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>

        {/* Add Opportunity Button */}
        <div
        onClick={()=> setSelected('opportunity')}
        className="flex items-center gap-3 px-4 py-3 rounded-xl mt-4 cursor-pointer bg-white/10 hover:bg-white/20 transition duration-200 shadow hover:shadow-md">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-lg font-semibold">Add Opportunity</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
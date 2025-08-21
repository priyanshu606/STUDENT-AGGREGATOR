import React from 'react'
import { IoClose } from 'react-icons/io5';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
const AdminSignup = ({onClose,openAdminLogin}) => {
  return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
    
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 transition"
            >
              <IoClose />
            </button>
    
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Admin Sign Up
            </h2>
    
            {/* Sign Up Form */}
            <form className="space-y-5"  >
              {/* Full Name */}
              <div className="relative">
                <FaUser className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="College Name"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
              
                />
               
              </div>
           
              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
                
                />
              </div>
            
              {/* Password */}
              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
                  
                />
              </div>
              {/* {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} */}
              {/* Confirm Password */}
              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"  
                  placeholder="Confirm Password"
                
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
      
                />
              </div>
               {/* {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>} */}
              {/* Submit Button */}
              <button
               onClick={openAdminLogin}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md transition"
              >
                Create Account
              </button>
            </form>
    
            {/* Footer */}
            <p className="mt-5 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={openAdminLogin}
                className="text-blue-500 hover:underline font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
    
  )
}

export default AdminSignup
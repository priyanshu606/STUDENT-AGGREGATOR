import { useNavigate } from "react-router-dom";

const InternshipDetails = ({ internship }) => {
  const daysLeft = 13;
  if (!internship) {
    return <div className="text-gray-500 text-center mt-10">Select an internship to see details.</div>;
  }
  
  const navigate = useNavigate();
  const handleQuickApply = ()=>{
    navigate(`/explore/internships/apply/${internship._id}`);
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200 font-inter">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        {/* Company Logo */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
          {/* Placeholder for company logo */}
          <img
            src="https://placehold.co/64x64/E5E7EB/4B5563?text=Logo"
            alt="Company Logo"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/E5E7EB/4B5563?text=Logo"; }} // Fallback
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{internship.title}</h1>
          <p className="text-gray-600 text-lg">{internship.company}</p>
        </div>
      </div>

      {/* Updated On */}
      <div className="flex items-center text-gray-500 text-sm mb-6">
        {/* Calendar Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Updated On: {new Date(internship.date).toString()}</span>
      </div>

      {/* Action Section */}
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-6">
        <div className="flex space-x-4">
          {/* Heart Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          {/* Calendar Icon (already used above, but keeping for consistency if it implies "apply by" or similar) */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <button
        onClick={handleQuickApply}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
          Quick Apply
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Applied */}
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            {/* Users Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.128-.007-.256-.02-.383m-1.233 1.233a6.002 6.002 0 00-4.242-4.242m1.233 1.233A6.002 6.002 0 0010 2a6.002 6.002 0 00-4.242 1.758M13 11V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m8 0h2.929a2 2 0 011.828 1.131l.54 1.08a2 2 0 001.828 1.131H21M13 11a6.002 6.002 0 00-4.242 4.242m0 0a6.002 6.002 0 004.242 4.242" />
            </svg>
            <span className="font-medium">Applied</span>
          </div>
          <span className="text-xl font-bold text-gray-900">27</span>
        </div>

        {/* Application Deadline */}
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            {/* Clock Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Application Deadline</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{daysLeft}</span>
        </div>

        {/* Stipend */}
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            {/* Dollar Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium">Stipend</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{internship.stipend}</span>
        </div>

        {/* Impressions */}
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center text-gray-700 mb-2">
            {/* Eye Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="font-medium">Impressions</span>
          </div>
          <span className="text-xl font-bold text-gray-900">18</span>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3">Eligibility</h2>
        <div className="flex flex-wrap gap-3">
          {internship.eligibility.map((eligible,index)=>(
              <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">{eligible}</span>
          ))}
        </div>
      </div>

      {/* about the internship */}
      
      {/* Section Title */}
      <h2 className="mt-10 text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">About the Internship</h2>

      {/* Role Overview */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Role:</h3>
        <p className="text-gray-700 leading-relaxed">
          {internship.role}
         </p>
      </div>

      {/* Key Responsibilities */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Description:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
           {internship.description}
          </li>
        </ul>
      </div>
     {/* Additional information */}
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">Additional Information</h2>

      {/* Internship Duration */}
      <div className="flex items-center justify-between p-4 mb-4 bg-blue-50 rounded-lg border border-blue-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Internship Duration</h3>
          <p className="text-gray-700">{internship.duration}</p>
        </div>
        {/* Calendar Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Stipend */}
      <div className="flex items-center justify-between p-4 mb-4 bg-green-50 rounded-lg border border-green-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Stipend</h3>
          <p className="text-gray-700">{internship.stipend}</p>
        </div>
        {/* Wallet Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
      </div>

      {/* Work Detail */}
      <div className="flex items-center justify-between p-4 mb-4 bg-purple-50 rounded-lg border border-purple-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Work Detail</h3>
          <p className="text-gray-700">Working Days: 5 Days</p>
        </div>
        {/* Clipboard Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      </div>

      {/* Internship Type/Timing */}
      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Internship Type/Timing</h3>
          <p className="text-gray-700">{internship.workType}</p>
          <p className="text-gray-700">Location: {internship.location}</p>
        </div>
        {/* Clock Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;

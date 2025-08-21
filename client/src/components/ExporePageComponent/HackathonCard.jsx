const HackathonCard = ({ hackathon, onSelect, isSelected }) => {
  return (
  <div onClick={()=>onSelect(hackathon)} className={`flex rounded-lg p-4 mb-3 w-[400px] items-center ${isSelected ? "border border-blue-400" : "border border-gray-200"}`}
>
      <div className="mr-4">
        <img src="https://via.placeholder.com/48" alt="Company Logo" className="w-12 h-12 rounded object-cover" />
      </div>
      <div className="flex-grow">
        <div className="bg-blue-50 text-sky-500 px-2 py-1 rounded text-xs mb-1 inline-block">Hackathon</div>
        <h3 className="mt-0 mb-1 text-blue-900 text-xl font-semibold">{hackathon.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{hackathon.company}</p>
        <div className="flex items-center text-gray-600 text-xs mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM10 3a5 5 0 015 5v9a2 2 0 01-2 2H7a2 2 0 01-2-2V8a5 5 0 015-5z" />
          </svg>
          <span>{hackathon.apply}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-3 mr-1">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <span>{hackathon.daysLeft} days left</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {hackathon.eligibility.slice(0,2).map((eligible,index)=>(
            <div key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{eligible}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;

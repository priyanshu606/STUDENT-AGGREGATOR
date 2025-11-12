import React, { useEffect, useState } from 'react'
import HackathonCard from '../components//ExporePageComponent/HackathonCard'
import HackathonDetails from '../components//ExporePageComponent/HackathonDetails'
import axios from 'axios';
import FilterHackathon from '../components/ExporePageComponent/FilterHackathon';

const HackothonPage = () => {
    const [selectedHackathons, setSelectedHackathons] = useState(null);
    const [hackathon,setHackathon] = useState([]);
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await axios.get('http://localhost:3005/api/all/hackathon');
        console.log(response.data);
        setHackathon(response.data);
      }
      fetchData();
    },[])
  return (
     <div className="flex flex-col mt-15">
    <FilterHackathon setHackathons={setHackathon} />
    <div className="flex h-screen mt-1">
      {/* Left: List */}  
      <div className="w-1/3 border-r p-4 overflow-y-auto">
        {hackathon.map((hackathon) => (
            <HackathonCard
            key={hackathon._id}
            hackathon={hackathon}
            isSelected={selectedHackathons?.id === hackathon._id}
            onSelect={setSelectedHackathons}
          />
        ))}
      </div>

      {/* Right: Details */}
      <div className="w-2/3 overflow-y-auto">
        <HackathonDetails hackathon={selectedHackathons} />
      </div>
    </div>
    </div>
  )
}

export default HackothonPage
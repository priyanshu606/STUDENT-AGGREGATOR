import React, { useState } from 'react'
import Dashboard from '../components/adminDashboard/dashboard'
import Sidebar from '../components/adminDashboard/Sidebar'
import OpportunityTypeCard from '../components/adminDashboard/OpportunityTypeCard';
import InternshipForm from '../components/adminDashboard/InternshipForm';
import HackathonForm from '../components/adminDashboard/HackathonForm';
const AdminDashboard = () => {
      const [selected,setSelected] = useState('Dashboard');
      const [name,setName] = useState(null);
    const [showForm,setShowForm] = useState(false);
  return (
   <>
    <div className='flex'>
        <Sidebar selected = {selected} setSelected={setSelected}/>
        {selected==='Dashboard' ? <Dashboard/> : <OpportunityTypeCard setName={setName} onClose = {()=> setShowForm(true)}/>} 
    </div>
       {showForm && name==='Internship' && <InternshipForm onClose={()=>{setShowForm(false)}} />}
       {showForm && name==='Hackathon' && <HackathonForm onClose={()=>{setShowForm(false)}} />}
    </>
  )
}

export default AdminDashboard
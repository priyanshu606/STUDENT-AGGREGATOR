import React, { useState } from 'react'
import Dashboard from '../components/adminDashboard/AdminProfilePage'
import Sidebar from '../components/adminDashboard/Sidebar'
import OpportunityTypeCard from '../components/adminDashboard/OpportunityTypeCard';
import InternshipForm from '../components/adminDashboard/InternshipForm';
import HackathonForm from '../components/adminDashboard/HackathonForm';
import ScholarshipForm from '../components/adminDashboard/ScholarshipForm';
import ContestForm from '../components/adminDashboard/ContestForm';
import AdminProfilePage from '../components/adminDashboard/AdminProfilePage';
import TechEventForm from '../components/adminDashboard/TechEventForm';
const AdminDashboard = () => {
      const [selected,setSelected] = useState('Dashboard');
      const [name,setName] = useState(null);
    const [showForm,setShowForm] = useState(false);
  return (
   <>
    <div className='flex'>
        <Sidebar selected = {selected} setSelected={setSelected}/>
        {selected==='Dashboard' ? <AdminProfilePage/> : <OpportunityTypeCard setName={setName} onClose = {()=> setShowForm(true)}/>} 
    </div>
       {showForm && name==='Internship' && <InternshipForm onClose={()=>{setShowForm(false)}} />}
       {showForm && name==='Hackathon' && <HackathonForm onClose={()=>{setShowForm(false)}} />}
       {showForm && name==='Scholarship' && <ScholarshipForm onClose={()=>{setShowForm(false)}} />}
       {showForm && name==='TechEvents' && <TechEventForm onClose={()=>{setShowForm(false)}} />}
       {showForm && name==='Contest' && <ContestForm onClose={()=>{setShowForm(false)}} />}
    </>
  )
}

export default AdminDashboard
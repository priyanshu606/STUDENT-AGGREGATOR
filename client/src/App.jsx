import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import NavbarMain from "./components/HomepageComponent/NavbarMain";
import InternshipPage from "./pages/InternshipPage";
import Blog from "./pages/Blog";
import HackothonPage from "./pages/HackathonPage";
import AdminDashboard from "./pages/AdminDashboard";
import ScholarshipPage from "./pages/ScholarshipPage ";
import TechEventPage from "./pages/TechEventPage";
import CodingContestPage from "./pages/CodingContestPage";
import BlogDetails from "./components/blogPageComponent/BlogDetails";
import CreateBlog from "./components/blogPageComponent/CreateBlog";
import AboutPage from "./pages/AboutPage";  
import InternshipApplicationForm from "./components/ExporePageComponent/InternshipApplicationForm";
import HackathonApplicationForm from "./components/ExporePageComponent/HackathonApplicationForm.JSX";
import ScholarshipApplicationForm from "./components/ExporePageComponent/ScholarshipApplicationForm ."
import TechEventApplicationForm from "./components/ExporePageComponent/TechEventApplicationForm";
import AdminApplicationDetails from "./components/adminDashboard/AdminApplicationDetails";
import AdminApplicationsList from "./components/adminDashboard/AdminApplicationsList";
import HackathonApplicationDetails from "./components/adminDashboard/HackathonApplicationDetails";
import HackathonApplicationsList from "./components/adminDashboard/HackathonApplicationsList";
import ScholarshipApplicationsList from "./components/adminDashboard/ScholarshipApplicationsList";
import ScholarshipApplicationDetails from "./components/adminDashboard/ScholarshipApplicationDetails";
import TechEventApplicationsList from "./components/adminDashboard/TechEventApplicationsList";
import TechEventApplicationDetails from "./components/adminDashboard/TechEventApplicationDetails";
import ContestApplicationDetails from "./components/adminDashboard/ContestApplicationDetails";
import ContestApplicationsList from "./components/adminDashboard/ContestApplicationsList";
import ContestApplicationForm from "./components/ExporePageComponent/ContestApplicationForm "
import StudentProfilePage from "./pages/StudentProfilePage";
function App() {
  return (
    <>
    <NavbarMain/>
    <Routes>
         <Route path="/" element = {<HomePage/>}/>
         <Route path="/explore" element = {<Explore/> }/>
         <Route path="/explore/internships" element={<InternshipPage/>} />
         <Route path="/explore/internships/apply/:id" element={<InternshipApplicationForm/>} />  
         <Route path="/explore/hackathon/apply/:id" element={<HackathonApplicationForm/>} /> 
         <Route path="/explore/hackatons" element={<HackothonPage/>} />
         <Route path="/explore/scholarship" element={<ScholarshipPage/>} />
         <Route path="/explore/scholarship/apply/:id" element={<ScholarshipApplicationForm/>} />
         <Route path="/explore/tech-events" element={<TechEventPage/>} />
         <Route path="/explore/events/apply/:id" element={<TechEventApplicationForm/>} />
         <Route path="/explore/coding-contest" element={<CodingContestPage/>} />
         <Route path="/explore/coding-contest/apply/:id" element={<ContestApplicationForm/>} />
         <Route path="/blog" element = {<Blog/> }/>
         <Route path="/blog/details/:id" element = {<BlogDetails/> }/>
         <Route path="/blog/create" element = {<CreateBlog/> }/>
         <Route path="/about" element = {<AboutPage/> }/>
         <Route path="/admin/profile" element = {<AdminDashboard/> }/>
         <Route path="/user/profile" element = {<StudentProfilePage/>}/>
         <Route path="/admin/applications" element={<AdminApplicationsList />} />
         <Route path="/admin/applications/:id" element={<AdminApplicationDetails />} /> 
         <Route path="/admin/hackathon/applications" element={<HackathonApplicationsList />} />
         <Route path="/admin/hackathon/applications/:id" element={<HackathonApplicationDetails />} />
         <Route path="/admin/scholarships" element={<ScholarshipApplicationsList />} />
         <Route path="/admin/scholarships/:id" element={<ScholarshipApplicationDetails />} />
         <Route path="/admin/tech-event/applications" element={<TechEventApplicationsList />} />
         <Route path="/admin/tech-event/applications/:id" element={<TechEventApplicationDetails />} />
         <Route path="/admin/coding-contest/applications" element={< ContestApplicationsList/>} />
         <Route path="/admin/coding-contest/applications/:id" element={< ContestApplicationDetails/>} />
    </Routes>
    </>
  );
}

export default App;

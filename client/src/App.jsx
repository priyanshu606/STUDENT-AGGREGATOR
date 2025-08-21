import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import NavbarMain from "./components/HomepageComponent/NavbarMain";
import InternshipPage from "./pages/InternshipPage";
import Blog from "./pages/Blog";
import HackothonPage from "./pages/HackathonPage";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import ScholarshipPage from "./pages/ScholarshipPage ";
function App() {
  return (
    <>
    <NavbarMain/>
    <Routes>
         <Route path="/" element = {<HomePage/>}/>
         <Route path="/explore" element = {<Explore/> }/>
         <Route path="/explore/internships" element={<InternshipPage/>} />
         <Route path="/explore/hackatons" element={<HackothonPage/>} />
         <Route path="/explore/scholarship" element={<ScholarshipPage/>} />
         <Route path="/blog" element = {<Blog/> }/>
         <Route path="/about" element = {<About/> }/>
         <Route path="/admin/profile" element = {<AdminDashboard/> }/>
    </Routes>
    </>
  );
}

export default App;

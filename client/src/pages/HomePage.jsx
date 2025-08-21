import React, { useState } from 'react'
import NavbarMain from '../components/HomepageComponent/NavbarMain'
import HeroMain from '../components/HomepageComponent/HeroMain'
import FeaturesSection from '../components/HomepageComponent/FeaturesSection'
import WhoUsingSection from '../components/HomepageComponent/WhoUsingSection '
import BlogSection from '../components/HomepageComponent/BlogSection'
import NewsLetter from '../components/HomepageComponent/NewsLetter'
import Footer from '../components/HomepageComponent/Footer'
import LoginPopup from '../components/HomepageComponent/LoginPopUp'
import SignUpPopup from '../components/HomepageComponent/SignUpPopup'
import AdminSignup from '../components/HomepageComponent/AdminSignup'
import AdminLogin from '../components/HomepageComponent/AdminLogin'
const HomePage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [signUpPopup,setSignUpPopup] = useState(false);
  const [showAdminLogin,setShowAdminLogin] = useState(false);
  const [showAdminSignup,setShowAdminSignup] = useState(false);
 
  return (
    <div>
        <NavbarMain onLoginCLose = {()=>setShowPopup(true)} onAdminClose = {()=>{setShowAdminLogin(true)}}/>
        <HeroMain/>
        <FeaturesSection/>
        {showPopup && <LoginPopup onClose={()=>{setShowPopup(false)}} 
        openSignUp={()=>{
            setSignUpPopup(true);
            setShowPopup(false)}} />}
        {signUpPopup && <SignUpPopup onClose={()=>{setSignUpPopup(false)}}
         openLogin={() => {
          setSignUpPopup(false);
          setShowPopup(true);
        }}/>}
        {showAdminLogin && <AdminLogin onClose={()=> {setShowAdminLogin(false)}} 
          openAdminSignUp = {()=>{
            setShowAdminLogin(false);
            setShowAdminSignup(true);
          }}/>}
       { showAdminSignup && <AdminSignup onClose={()=> {setShowAdminSignup(false)}} 
          openAdminLogin = {()=>{
            setShowAdminLogin(true);
            setShowAdminSignup(false);
          }}/>}
        <WhoUsingSection/>
        <BlogSection/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default HomePage
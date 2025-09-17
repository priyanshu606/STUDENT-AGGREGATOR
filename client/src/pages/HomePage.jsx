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

const HomePage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [signUpPopup,setSignUpPopup] = useState(false);
  const [showAdminSignup,setShowAdminSignup] = useState(false);
 
  return (
    <div>
        <NavbarMain onLoginCLose = {()=>setShowPopup(true)}/>
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
        <WhoUsingSection/>
        <BlogSection/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default HomePage
import React, { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import RoleToggle from "../ExporePageComponent/RoleToggle";
import UserMenu from "./UserMenu";
const NavbarMain = ({ onLoginCLose, onAdminClose }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
        const userInfoStr = localStorage.getItem("user");
        if (userInfoStr) {
          try {
            const userObj = JSON.parse(userInfoStr);
            console.log(userObj); 
            setUserProfile(userObj);
          } catch (err) {
            console.error("Error parsing user info from localStorage", err);
          }
        }
      } else {
        setIsLoggedIn(false);
        setUserProfile(null);
      }
    };
    checkLogin();
    window.addEventListener("login-success", checkLogin);
    return () => window.removeEventListener("login-success", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserProfile(null);
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
      >
        Opportune
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="relative group text-base font-semibold text-gray-700 transition-all duration-300"
          >
            {/* Gradient text on hover using span */}
            <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">
              {link.name}
            </span>

            {/* Animated underline with gradient */}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        <IoNotifications className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />

        {isLoggedIn && userProfile ? (
          <div
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            className="w-10 h-10 flex cursor-pointer"
          >
            <img src="profileIcon.png" alt="profile" />
            <UserMenu
              userProfile = {userProfile}
              handleLogout={handleLogout}
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
            />
          </div>
        ) : (
          <RoleToggle onLoginCLose={onLoginCLose} onAdminClose={onAdminClose} />
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;

// BlogHeader.jsx
import React, { useState, useEffect, useContext } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BlogsContext } from "../../context/BlogContext";

const BlogHeader = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const {selectedTag,setSelectedTag} = useContext(BlogsContext);
  const handleClick = () => {
    navigate("/blog/create");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tags = [
    "all-blogs",
    "internship",
    "hackathon",
    "scholarship",
    "tech-events",
    "coding-contest",
    "tech-news",
  ];

  return (
    <div
      className={`flex justify-between mt-20 mx-10 sticky top-20 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex">
        {tags.map((t, index) => (
          <div key={index}>
            <button
              onClick={() => setSelectedTag(t)}
              className={`m-2 p-2 rounded-xl border cursor-pointer transition-all ${
                selectedTag === t
                  ? "bg-green-500 text-white border-green-600"
                  : "border-gray-300 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          </div>
        ))}
      </div>

      <div
        onClick={handleClick}
        className="flex items-center gap-2 border border-green-600 bg-green-500 text-white rounded-xl p-2 cursor-pointer hover:bg-green-600 hover:shadow-md transition-all duration-200"
      >
        <IoCreateOutline className="text-xl" />
        <button className="text-lg font-medium cursor-pointer">Create</button>
      </div>
    </div>
  );
};

export default BlogHeader;

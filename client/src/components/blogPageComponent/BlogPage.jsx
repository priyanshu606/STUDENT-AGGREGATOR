import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const BlogPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/blog/create');
  }
  const [scrolled,setScrolled] = useState();
  const tag = [
    "for you",
    "Career",
    "Content",
    "Compensation",
    "Feedback",
    "Interview",
  ];
  return (
    <div className="flex justify-between mt-20 mx-10 sticky top-20 left-0">
      <div className="flex">
        {tag.map((t,index) => {
          return (
            <div key={index}>
              <button className="m-2 p-2 rounded-xl border border-gray-300 hover:bg-gray-200 cursor-pointer">
                {t}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 border border-green-600 bg-green-500 text-white rounded-xl p-2 cursor-pointer hover:bg-green-600 hover:shadow-md transition-all duration-200">
        <IoCreateOutline className="text-xl" />
        <button onClick={handleClick} className="text-lg font-medium cursor-pointer">Create</button>
      </div>
    </div>
  );
};

export default BlogPage;

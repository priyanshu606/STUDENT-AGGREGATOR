import React from "react";
import { BiUpvote } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogCard = ({blog}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/details/${blog.id}`);
  }
    const shortDesc = blog.desc.length > 100 
    ? blog.desc.substring(0, 200) + "..." 
    : blog.desc;
  return (
    <div onClick={handleClick}
     className="flex justify-center mt-5 cursor-pointer">
      <div className="w-[900px] bg-white border border-gray-200 rounded-2xl shadow-sm p-6 font-sans hover:shadow-md transition-all duration-300">
       
        <div className="flex gap-3 items-start">
    
          <img
            src="https://placehold.co/40x40"
            alt="user"
            className="w-10 h-10 rounded-full border"
          />

          <div className="flex flex-col">
            <div className="flex gap-2 items-center text-sm text-gray-600">
              <p className="font-semibold text-gray-800">{blog.name}</p>
              <span className="text-gray-400">• {blog.time}</span>
            </div>
            <p className="text-base font-medium text-gray-900 mt-1">
              {blog.title}
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="mt-3">
          <p className="text-gray-700 text-sm leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 items-center mt-4 text-gray-500">
          <button className="flex items-center gap-1 hover:text-blue-500 transition-all duration-200">
            <BiUpvote className="text-xl" />
            <span className="text-sm">{blog.like}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-green-500 transition-all duration-200">
            <IoEyeOutline className="text-xl" />
            <span className="text-sm">{blog.seen}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-pink-500 transition-all duration-200">
            <FaRegComment className="text-lg" />
            <span className="text-sm">{blog.comment}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

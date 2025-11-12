import React from "react";
import { BiUpvote } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogCard = ({blog,comment}) => {
  
  const navigate = useNavigate();
 function timeAgoIntl(dateString) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.round((past - now) / 1000);

  // choose appropriate unit
  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, "second");
  }
  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, "minute");
  }
  const diffInHours = Math.round(diffInMinutes / 60);
  if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, "hour");
  }
  const diffInDays = Math.round(diffInHours / 24);
  if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInDays, "day");
  }
  const diffInMonths = Math.round(diffInDays / 30);
  if (Math.abs(diffInMonths) < 12) {
    return rtf.format(diffInMonths, "month");
  }
  return rtf.format(Math.round(diffInMonths / 12), "year");
}

  const handleClick = () => {
    navigate(`/blog/details/${blog._id}`);
  }
    const shortDesc = blog.content.length > 100 
    ? blog.content.substring(0, 200) + "..." 
    : blog.content;
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
              <p className="font-semibold text-gray-800">{blog.createdBy?.fullName}</p>
              <span className="text-gray-400">• {timeAgoIntl(blog.createdAt)}</span>
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
            <span className="text-sm">{blog.likes?.length || 0}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-blue-500 transition-all duration-200">
            <BiUpvote className="text-xl" />
            <span className="text-sm">{blog.dislikes?.length || 0}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-green-500 transition-all duration-200">
            <IoEyeOutline className="text-xl" />
            <span className="text-sm">{blog.views || 0}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-pink-500 transition-all duration-200">
            <FaRegComment className="text-lg" />
            <span className="text-sm">{comment}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

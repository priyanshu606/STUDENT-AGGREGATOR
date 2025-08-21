// BlogCard.jsx
import React from "react";

const BlogCard = ({ image, category, title, description, author, authorImg, time }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-blue-100">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        {/* Category label */}
        <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full inline-block mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={authorImg}
            alt={author}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{author}</p>
            <p className="text-xs text-gray-500">{time} ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

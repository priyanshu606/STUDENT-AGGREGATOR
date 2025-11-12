import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    tags: "",  
  });

  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    const newBlogData = {
      ...blogData,
      [e.target.name]: e.target.value,
    };
    setBlogData(newBlogData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      const response = await axios.post(
        `http://localhost:3005/api/add/blog`,
        blogData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("blog submitted", response);
      navigate("/blog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 mt-15">
      <div className="bg-white shadow-2xl rounded-none md:rounded-2xl p-8 md:p-12 max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">
            ✍️ Create a New Blog
          </h1>
          <p className="text-gray-500 mt-2">
            Share your thoughts, ideas, or experiences with the community.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your blog title"
              value={blogData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Blog Content
            </label>
            <textarea
              placeholder="Write your blog content..."
              rows={8}
              name="content"
              value={blogData.content}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
             Related Blogs
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g. internship, hackathon, tech-events"
              value={blogData.tags}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
            />
           
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition font-medium shadow-md"
            >
              Publish Blog 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

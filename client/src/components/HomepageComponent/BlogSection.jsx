import React from "react";
import BlogCard from "./BlogCard ";

const blogs = [
  {
    image: "techBlog1.png",
    category: "Technology",
    title: "What’s New in 2025 Tech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
    author: "Jane Doe",
    authorImg: "jon.png",
    time: "2h",
  },
  {
    image: "internshipBlog.png",
    category: "Career",
    title: "How to Land Your First Internship",
    description:
      "Tips and steps for students to get their first career experience through internships.",
    author: "Samuel Lee",
    authorImg: "samual.png",
    time: "5h",
  },
  {
    image: "resumeBlog.png",
    category: "Resume",
    title: "Tips for Effective Resume Writing",
    description:
      "Stand out to recruiters with a clean, concise, and impactful resume structure.",
    author: "Maya Patel",
    authorImg: "maya.png",
    time: "1d",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <h2 className="text-3xl font-bold text-center mb-2">Recent Blogs</h2>
      <p className="text-center text-gray-600 mb-10">
        Insights and stories from students on careers and education
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

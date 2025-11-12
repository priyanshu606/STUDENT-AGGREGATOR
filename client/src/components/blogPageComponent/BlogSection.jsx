import { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { BlogsContext } from "../../context/BlogContext";

const BlogSection = () => {
  const { blogs, setBlogs, selectedTag } = useContext(BlogsContext);
  const [commentCounts, setCommentCounts] = useState({});
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/all/blog?tag=${selectedTag}`
        );
        console.log(response.data);
        setBlogs(response.data);
        const countsResponse = await axios.get(
          "http://localhost:3005/api/comment/count"
        );
        setCommentCounts(countsResponse.data);
      } catch (error) {
        console.log("Error fetching internships:", error);
      }
    };
    fetchBlog();
  }, []);
  
  const filteredBlogs =
    selectedTag === "all-blogs"
      ? blogs
      : blogs.filter(
          (blog) => blog.tags?.toLowerCase() === selectedTag.toLowerCase()
        );
  return (
    <div>
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} comment={commentCounts[blog._id] || 0} />
      ))}
    </div>
  );
};

export default BlogSection;


import { blogPosts } from "../../assets/asset";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  

  return (<div>
    {blogPosts.map((blog)=>(
        <BlogCard key={blog.id} blog = {blog} />
    ))}
  </div>
  );
};

export default BlogSection;

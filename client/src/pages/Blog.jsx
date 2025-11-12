
import { useState } from "react";
import BlogHeader from "../components/blogPageComponent/BlogHeader"
import BlogSection from "../components/blogPageComponent/BlogSection"

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("all-blogs");
  return (
    <div>
      <BlogHeader selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
      <BlogSection selectedTag={selectedTag}/>
    </div>
  )
}

export default Blog
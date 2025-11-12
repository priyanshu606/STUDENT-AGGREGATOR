import { createContext, useState } from "react";

export const BlogsContext = createContext();

export const BlogProvider = (props)=>{
  const [blogs,setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all-blogs");
  return(
    <BlogsContext.Provider value={{blogs,setBlogs,selectedTag,setSelectedTag,comments, setComments}}>
        {props.children}
    </BlogsContext.Provider>
  )
}

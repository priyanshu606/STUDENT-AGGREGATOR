import axios from 'axios';
import { useState } from 'react';

const BlogComment = ({blog}) => {
   const token = localStorage.getItem("token");
     const [text, setText] = useState("");
      const handleClick = async() => {
         if (!text.trim()) return;
    
        try {
          const res = await axios.post("http://localhost:3005/api/add/comment", {
            content: text,
            blogId: blog._id,       
          },
         {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
        );
          setText(""); 
        } catch (err) {
          console.error("Error adding comment:", err);
        }
      };
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="💬 Join the discussion..."
            className="w-full outline-none rounded-lg p-3 text-[16px] resize-none  "
            rows={3}
          ></textarea>

          <div className="flex justify-end mt-3">
            <button
              onClick={handleClick}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg 
                       hover:bg-indigo-700 transition font-medium shadow-md"
            >
              Post Comment
            </button>
          </div>
        </div>
  )
}

export default BlogComment
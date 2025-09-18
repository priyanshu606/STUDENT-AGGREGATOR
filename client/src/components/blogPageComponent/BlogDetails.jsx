import { FaRegEye } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment, FaComments, FaReply } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { blogPosts } from "../../assets/asset";
import { useState } from "react";

const BlogDetails = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [text, setText] = useState("");
  const [commentText, setCommentText] = useState([]);
  const { id } = useParams();

  const handleClick = () => {
    if (text.trim() === "") return;
    setCommentText([...commentText, text]);
    setText("");
    setComments(comments + 1);
  };

  const blog = blogPosts.find((post) => post.id === parseInt(id));
  if (!blog) return <p className="p-8 text-red-500">Blog not found</p>;

  return (
    <div className="bg-gradient-to-br from-white to-indigo-50 shadow-xl rounded-2xl p-6 sm:p-10 space-y-10 max-w-6xl mx-auto mt-10">
      {/* Blog Header */}
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-3xl font-bold text-gray-600">
          {blog.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-gray-200 pb-6">
          <img
            src="https://placehold.co/80x80"
            alt="user avatar"
            className="w-16 h-16 rounded-full border-4 border-indigo-200 shadow-md"
          />
          <div>
            <p className="font-bold text-gray-700 text-lg">{blog.name}</p>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mt-1">
              <span className="flex items-center gap-2">
                <FaRegEye className="text-indigo-500" /> 71 views
              </span>
              <span className="flex items-center gap-2">
                <CiCalendar className="text-indigo-500" /> {blog.time}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="prose lg:prose-lg text-gray-700 leading-relaxed max-w-none">
        <p>{blog.desc}</p>
      </article>

      {/* Actions */}
      <div className="flex items-center gap-8 text-gray-600 border-t border-gray-200 pt-6 justify-center sm:justify-start">
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition shadow-sm"
        >
          <BiUpvote className="text-2xl" />
          <span className="font-semibold">{likes}</span>
        </button>
        <button
          onClick={() => setDislikes(dislikes + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition shadow-sm"
        >
          <BiDownvote className="text-2xl" />
          <span className="font-semibold">{dislikes}</span>
        </button>
        <button
          onClick={() => setComments(comments + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition shadow-sm"
        >
          <FaRegComment className="text-xl" />
          <span className="font-semibold">{comments}</span>
        </button>
      </div>

      {/* Comments Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-700">
            <FaComments className="text-indigo-600" />
            Comments ({comments})
          </h2>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm mt-3 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            <option>Best</option>
            <option>Most Votes</option>
            <option>Newest to Oldest</option>
          </select>
        </div>

        {/* Add Comment Box */}
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

        {/* Show Comments */}
        {commentText.length === 0 ? (
          <p className="text-gray-500 text-center mt-4">
            No comments yet. Be the first to comment! 🚀
          </p>
        ) : (
          <div className="space-y-6">
            {commentText.map((comment, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <img
                  src="https://placehold.co/40x40"
                  alt="commenter avatar"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-800">{blog.name}</p>
                    <p className="text-xs text-gray-500">a minute ago</p>
                  </div>
                  <p className="text-gray-700 mt-2">{comment}</p>
                  <div className="flex items-center gap-5 mt-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                      <BiUpvote /> 12
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-600 transition">
                      <BiDownvote /> 2
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-600 transition">
                      <FaReply /> Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogDetails;

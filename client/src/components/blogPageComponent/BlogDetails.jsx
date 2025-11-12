import { FaRegEye } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment, FaComments } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogComment from "./BlogComment";
import BlogComments from "./BlogComments";
import { useContext } from "react";
import { BlogsContext } from "../../context/BlogContext";

const BlogDetails = () => {
  const [likes, setLikes] = useState(0);
  const [likedByUser, setLikedByUser] = useState(false);
  const [dislikes, setDislikes] = useState(0);
  const [dislikedByUser, setDislikedByUser] = useState(false);
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const {comments} = useContext(BlogsContext);
  const userId = localStorage.getItem("userId");
  clg("userId in blog details:", userId);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3005/api/blog/${id}`);
        setBlog(res.data);
        console.log(res.data)
        // Initialize likes and likedByUser
      setLikes(res.data.likes?.length || 0);
      setDislikes(res.data.dislikes?.length || 0);
      setViews(res.data.views || 0);
      setLikedByUser(res.data.likes?.includes(userId));
      setDislikedByUser(res.data.dislikes?.includes(userId));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, userId]);

  const handleLike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3005/api/blog/${id}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setLikes(res.data.likesCount);
      setDislikes(res.data.dislikesCount);
      setLikedByUser(res.data.likedByUser);
      setDislikedByUser(res.data.dislikedByUser);
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };
  const handleDislike = async () => {
  try {
    const res = await axios.put(
      `http://localhost:3005/api/blog/${id}/dislike`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setDislikes(res.data.dislikesCount);
    setLikes(res.data.likesCount);
    setLikedByUser(res.data.likedByUser);
    setDislikedByUser(res.data.dislikedByUser);
  } catch (error) {
    console.error("Error disliking blog:", error);
  }
};

  if (loading) return <p className="p-8">Loading...</p>;
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
            <p className="font-bold text-gray-700 text-lg">
              {blog.createdBy?.fullName}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mt-1">
              <span className="flex items-center gap-2">
                <FaRegEye className="text-indigo-500" />{views}
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
        <p>{blog.content}</p>
      </article>

      {/* Actions */}
      <div className="flex items-center gap-8 text-gray-600 border-t border-gray-200 pt-6 justify-center sm:justify-start">
        {/* Like button */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            likedByUser
              ? "bg-red-100 text-red-600"
              : "bg-indigo-100 text-indigo-600"
          } hover:bg-indigo-200 transition shadow-sm`}
        >
          <BiUpvote className="text-2xl" />
          <span className="font-semibold">{likes}</span>
        </button>

        {/* Dislike button (optional) */}
        <button
          onClick={handleDislike}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition shadow-sm"
        >
          <BiDownvote className="text-2xl" />
          <span className="font-semibold">{dislikes}</span>
        </button>

        {/* Comments count */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition shadow-sm">
          <FaRegComment className="text-xl" />
          <span className="font-semibold">{comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-700">
            <FaComments className="text-indigo-600" />
            Comments ({comments.length})
          </h2>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm mt-3 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            <option>Best</option>
            <option>Most Votes</option>
            <option>Newest to Oldest</option>
          </select>
        </div>

        {/* Add Comment Box */}
        <BlogComment blog={blog} />

        {/* Show Comments */}
        <BlogComments blogId={blog._id} />
      </section>
    </div>
  );
};

export default BlogDetails;

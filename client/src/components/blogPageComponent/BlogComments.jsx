import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaReply } from "react-icons/fa";
import { BlogsContext } from "../../context/BlogContext";

const BlogComments = ({ blogId }) => {
  const { comments, setComments } = useContext(BlogsContext);
  const [replyingTo, setReplyingTo] = useState(null); // which comment user is replying to
  const [replyText, setReplyText] = useState("");
  const token = localStorage.getItem("token");

  // fetch comments for this blog
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:3005/api/comment/${blogId}`);
        setComments(res.data);
      } catch (error) {
        console.log("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [blogId]);

  // handle like / dislike
  const handleLikeDislike = async (commentId, type) => {
    try {
      const res = await axios.post(
        `http://localhost:3005/api/comment/${commentId}/${type}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // update state
      setComments((prev) =>
        prev.map((c) =>
          c._id === commentId ? { ...c, likes: res.data.likes, dislikes: res.data.dislikes } : c
        )
      );
    } catch (err) {
      console.error("Error updating like/dislike:", err);
    }
  };

  // handle reply submit
  const handleReplySubmit = async (parentId) => {
    if (!replyText.trim()) return;
    try {
      const res = await axios.post(
        "http://localhost:3005/api/add/comment",
        {
          content: replyText,
          blogId,
          parentId, // 👈 backend should support this
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // update replies in UI instantly
      setComments((prev) =>
        prev.map((c) =>
          c._id === parentId ? { ...c, replies: [...(c.replies || []), res.data] } : c
        )
      );

      setReplyText("");
      setReplyingTo(null);
    } catch (err) {
      console.error("Error posting reply:", err);
    }
  };

  return (
    <div>
      {comments.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">
          No comments yet. Be the first to comment! 🚀
        </p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="p-5 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition"
            >
              {/* Comment header */}
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/40x40"
                  alt="commenter avatar"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-800">
                      {comment.createdBy?.fullName || "Anonymous"}
                    </p>
                    <p className="text-xs text-gray-500">a few moments ago</p>
                  </div>
                  <p className="text-gray-700 mt-2">{comment.content}</p>

                  {/* Like/Dislike/Reply buttons */}
                  <div className="flex items-center gap-5 mt-4 text-sm text-gray-500">
                    <button
                      onClick={() => handleLikeDislike(comment._id, "like")}
                      className="flex items-center gap-1 hover:text-indigo-600 transition"
                    >
                      <BiUpvote /> {comment.likes?.length || 0}
                    </button>
                    <button
                      onClick={() => handleLikeDislike(comment._id, "dislike")}
                      className="flex items-center gap-1 hover:text-red-600 transition"
                    >
                      <BiDownvote /> {comment.dislikes?.length || 0}
                    </button>
                    <button
                      onClick={() =>
                        setReplyingTo(replyingTo === comment._id ? null : comment._id)
                      }
                      className="flex items-center gap-1 hover:text-green-600 transition"
                    >
                      <FaReply /> Reply
                    </button>
                  </div>

                  {/* Reply input box */}
                  {replyingTo === comment._id && (
                    <div className="mt-3 ml-6">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-400"
                        rows={2}
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleReplySubmit(comment._id)}
                          className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 transition"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 ml-8 space-y-3">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply._id}
                          className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                        >
                          <p className="text-sm font-semibold text-gray-800">
                            {reply.createdBy?.fullName || "Anonymous"}
                          </p>
                          <p className="text-gray-700 text-sm mt-1">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogComments;

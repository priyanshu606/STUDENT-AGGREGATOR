import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
      image,
    });
    
  };

  return (
    <div className="w-full min-h-screen  py-10 px-4 mt-15">
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
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
              required
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              placeholder="e.g. Career, IT, Cloud"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Thumbnail (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm bg-gray-50"
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

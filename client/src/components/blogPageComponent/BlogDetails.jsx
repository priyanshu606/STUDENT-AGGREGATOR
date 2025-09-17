import { FaRegEye } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment, FaComments, FaReply } from "react-icons/fa";

const BlogDetails = () => {
  return (
  
   
     
      <div className="bg-white shadow-lg rounded-none md:rounded-2xl p-8 md:p-12 space-y-8 max-w-none mx-0 mt-18"> {/* Removed max-w-4xl and mx-auto */}
        
        <header className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 leading-tight px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
            Need Career Guidance for 5.5 years of Experience in IT
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-200 pb-6 px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
            <img
              src="https://placehold.co/80x80"
              alt="user avatar"
              className="w-16 h-16 rounded-full border-2 border-indigo-400"
            />
            <div>
              <p className="font-bold text-gray-600 text-lg">Anonymous User</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-sm mt-1">
                <span className="flex items-center gap-1">
                  <FaRegEye /> 71 views
                </span>
                <span className="flex items-center gap-1">
                  <CiCalendar /> 35 minutes ago
                </span>
              </div>
            </div>
          </div>
        </header>

      
        <article className="prose lg:prose-lg text-gray-700 leading-relaxed px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
          <p>
            So, in total I've have around 5.5 years of IT experience, having worked
            across TCS, Amazon and now in Microsoft as an SDE-2. Also I have masters
            in CS from a tier-1 university in India. After coming from Amazon to
            Azure in Microsoft, I see that WLB has gone for a toss (I felt Amazon
            better) and also in terms of work quality, learning, having structured
            processes I am feeling let down by Microsoft. Now, I am looking to
            switch to a company which has Better work quality and learning...
          </p>
        </article>

        <div className="flex items-center gap-8 text-gray-600 border-t border-gray-200 pt-6 px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
            <BiUpvote className="text-2xl text-indigo-500" />
            <span className="font-semibold">12</span>
          </button>
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
            <BiDownvote className="text-2xl text-red-500" />
            <span className="font-semibold">2</span>
          </button>
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
            <FaRegComment className="text-xl text-green-600" />
            <span className="font-semibold">6</span>
          </button>
        </div>

        <section>
        
          <div className="flex flex-col sm:flex-row justify-between sm:items-center border-t border-gray-200 pt-6 px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-600">
              <FaComments className="text-indigo-600" />
              Comments (1)
            </h2>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm mt-4 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option>Best</option>
              <option>Most Votes</option>
              <option>Newest to Oldest</option>
            </select>
          </div>

          <div className="mt-6 space-y-4 px-4 sm:px-6 lg:px-8"> 
            <textarea
              placeholder="Join the discussion..."
              className="w-full border border-gray-300 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm"
              rows={3}
            ></textarea>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition font-medium shadow-md">
              Comment
            </button>
          </div>

          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 shadow-sm">
              <img
                src="https://placehold.co/40x40"
                alt="commenter avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-800">Avik</p>
                  <p className="text-xs text-gray-500">An hour ago</p>
                </div>
                <p className="text-gray-700 mt-2">
                  You should ask these in developers india subreddit.
                </p>
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
          </div>
        </section>
      </div>
  );
};

export default BlogDetails;
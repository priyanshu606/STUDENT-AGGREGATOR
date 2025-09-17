
import BlogCard from "./BlogCard";

const BlogSection = () => {
 const blogPosts = [
  {
    id: 1,
    name: "Priyanshu",
    time: "2 hours ago",
    title: "Resource to prepare for code review",
    desc: "I have a code review interview coming up. It is my first time, so wanted to ask how was your experience and what resources helped you in preparation?",
    like: "10",
    seen: "20",
    comment: "6",
  },
  {
    id: 2,
    name: "Anjali Verma",
    time: "30 minutes ago",
    title: "Best practices for React state management",
    desc: "I’ve been working with React and wanted to know which state management library is better for large projects: Redux or Zustand?",
    like: "15",
    seen: "45",
    comment: "12",
  },
  {
    id: 3,
    name: "Rohit Sharma",
    time: "1 day ago",
    title: "Tips for solving DSA problems faster",
    desc: "How do you guys approach complex DSA problems during contests? Any strategies or resources you’d recommend?",
    like: "32",
    seen: "100",
    comment: "25",
  },
  {
    id: 4,
    name: "Simran Kaur",
    time: "3 hours ago",
    title: "How to prepare for system design interviews?",
    desc: "I am starting my preparation for system design interviews. What topics should I focus on and which resources are best?",
    like: "20",
    seen: "78",
    comment: "14",
  },
  {
    id: 5,
    name: "Aman Gupta",
    time: "5 days ago",
    title: "Learning roadmap for MERN stack",
    desc: "I just started learning web development. Can someone suggest a proper roadmap to become a MERN stack developer?",
    like: "40",
    seen: "150",
    comment: "30",
  },
];

  return (<div>
    {blogPosts.map((blog)=>(
        <BlogCard key={blog.id} blog = {blog} />
    ))}
  </div>
  );
};

export default BlogSection;

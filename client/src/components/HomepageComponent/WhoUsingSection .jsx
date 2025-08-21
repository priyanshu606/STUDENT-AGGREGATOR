import React from "react";
import {
  FaUserGraduate,
  FaBriefcase,
  FaRocket,
  FaTrophy,
  FaCogs,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    title: "Students and Professionals",
    subtitle:
      "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    image: "s&p.png",
    points: [
      { icon: <FaRocket />, text: "Access tailored jobs and internships" },
      { icon: <FaTrophy />, text: "Participate in exciting competitions" },
      {  icon: <FaUsers />, text: "Showcase your profile to top recruiters" },
    ],
    color: "bg-blue-100",
  },
  {
    title: "Companies and Recruiters",
    subtitle:
      "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    image: "c&r.png",
    points: [
      { icon: <FaUsers />, text: "Build employer brand with engagements" },
      { icon: <FaBriefcase />, text: "Host jobs & internships to hire top talent" },
      { icon: <FaCogs />, text: "Streamline hiring with AI-driven tools" },
    ],
    color: "bg-purple-100",
  },
  {
    title: "Colleges",
    subtitle:
      "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    image: "college.png",
    points: [
      { icon: <FaTrophy />, text: "Offer top competition & job opportunities" },
      { icon: <FaBriefcase />, text: "Partner with companies for placements" },
      { icon: <FaUserGraduate />, text: "Gain insights into student performance" },
    ],
    color: "bg-yellow-100",
  },
];

const WhoUsingSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Who's using Opportune?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 ${card.color}`}
          >
            {/* Flex Layout: Left text + Right image */}
            <div className="flex items-start gap-6">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{card.subtitle}</p>
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-lg text-blue-600">
                        {point.icon}
                      </span>
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-28 h-28 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoUsingSection;

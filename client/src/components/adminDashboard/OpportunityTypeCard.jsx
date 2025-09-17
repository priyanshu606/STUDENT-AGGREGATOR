import React from "react";
import {
  Briefcase,
  Code,
  GraduationCap,
  CalendarCheck,
  Trophy,
  PlusCircle,
  FolderPlus,
} from "lucide-react";

const AddOpportunity = [
  {
    title: "Internship",
    icon: Briefcase,
    bgFrom: "from-rose-100",
    bgTo: "to-rose-200",
    iconColor: "text-rose-600",
    hoverTextGradient: "from-rose-500 to-rose-700",
  },
  {
    title: "Hackathon",
    icon: Code,
    bgFrom: "from-sky-100",
    bgTo: "to-sky-200",
    iconColor: "text-sky-600",
    hoverTextGradient: "from-sky-500 to-sky-700",
  },
  {
    title: "Scholarship",
    icon: GraduationCap,
    bgFrom: "from-violet-100",
    bgTo: "to-violet-200",
    iconColor: "text-violet-600",
    hoverTextGradient: "from-violet-500 to-violet-700",
  },
  {
    title: "TechEvents",
    icon: CalendarCheck,
    bgFrom: "from-emerald-100",
    bgTo: "to-emerald-200",
    iconColor: "text-emerald-600",
    hoverTextGradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Contest",
    icon: Trophy,
    bgFrom: "from-yellow-100",
    bgTo: "to-yellow-200",
    iconColor: "text-yellow-600",
    hoverTextGradient: "from-yellow-500 to-yellow-700",
  },
  {
    title: "Other",
    icon: FolderPlus,
    bgFrom: "from-gray-100",
    bgTo: "to-gray-200",
    iconColor: "text-gray-600",
    hoverTextGradient: "from-gray-500 to-gray-700",
  },
];

const OpportunityTypeCard = ({ setName, onClose }) => {
  return (
    <div className="max-w-7xl mt-10 mx-auto py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {AddOpportunity.map(
          ({
            title,
            icon: Icon,
            bgFrom,
            bgTo,
            iconColor,
            hoverTextGradient,
          }) => (
            <div
              key={title}
              onClick={() => {
                setName(title);
                onClose();
              }}
              className={`bg-gradient-to-br ${bgFrom} ${bgTo} rounded-3xl shadow-xl p-6 relative overflow-hidden transition transform hover:scale-105 cursor-pointer group`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    className={`w-10 h-10 ${iconColor}`}
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`
                  text-2xl font-bold text-center text-gray-800 mb-1 
                  group-hover:text-transparent 
                  group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r 
                  group-hover:${hoverTextGradient}
                  transition-all duration-300
                `}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-center text-gray-600 text-sm px-2 mb-4 
                  group-hover:text-transparent 
                  group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r 
                  group-hover:${hoverTextGradient}
                  transition-all duration-300
                `}
              >
                Quickly post a new {title.toLowerCase()} for students to
                explore.
              </p>

              {/* Floating Plus Icon */}
              <PlusCircle
                className={`absolute top-4 right-4 w-6 h-6 text-gray-400 transition-all duration-300 group-hover:rotate-90 group-hover:scale-125 group-hover:${iconColor}`}
              />

              {/* Decorative Blur Background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OpportunityTypeCard;

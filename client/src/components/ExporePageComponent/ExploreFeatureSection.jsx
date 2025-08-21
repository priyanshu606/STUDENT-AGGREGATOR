import React from 'react';
import {ArrowRightCircle} from 'lucide-react';
import { Link } from 'react-router-dom';
import { OpportunitiesList } from '../../assets/asset';



const ExploreFeatureSection = ({ onSelectCategory }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-20 py-5 bg-white rounded-2xl shadow-lg">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {OpportunitiesList.map(
          ({
            title,
            path,
            description,
            icon: Icon,
            bgFrom,
            bgTo,
            iconColor,
            hoverTextGradient,
            hoverBorder,
          }) => (
            <Link
             to={path}
              key={title}
              className={`
                bg-gradient-to-br ${bgFrom} ${bgTo}
                rounded-xl shadow-md p-6 relative
                transition-all duration-300 ease-in-out transform
                hover:scale-105 hover:shadow-xl border border-transparent group cursor-pointer ${hoverBorder}
              `}
              onClick={() => onSelectCategory(title.toLowerCase().replace(' ', '_'))}
            >
              {/* Blurred Background Accent */}
              <div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-20 ${iconColor.replace('text-', 'bg-')}`}
              ></div>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="bg-white p-4 rounded-full shadow group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold text-center text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${hoverTextGradient} transition-all`}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm text-gray-600 text-center mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${hoverTextGradient} transition-all`}
              >
                {description}
              </p>

              {/* CTA Icon */}
              <div className="flex justify-center mt-4">
                <ArrowRightCircle className={`w-6 h-6 ${iconColor} opacity-70 group-hover:opacity-100 transition-all`} />
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default ExploreFeatureSection;

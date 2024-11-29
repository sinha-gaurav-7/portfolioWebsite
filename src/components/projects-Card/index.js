import React from "react";
import Image from "next/image";

const Projects = ({ title, description, image, link }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4 sm:p-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-[180px] sm:h-[250px] overflow-hidden">
          <Image
            src={image}
            width={435}
            height={250}
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
            alt={title}
          />
        </div>
      </a>
      <h2 className="card-title text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
        {title}
      </h2>
      <p className="card-description text-gray-700 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default Projects;

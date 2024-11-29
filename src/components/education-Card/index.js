import React from "react";

const Education = ({ collegeName, location, duration, courses }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          {collegeName}, <span className="text-lg font-normal">{location}</span>
        </h3>
        <p className="text-gray-500">{duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {courses.map((course, index) => (
          <li key={index} className="text-gray-700 list-none">
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;

const Experience = ({ jobTitle, companyName, duration, jobDescription }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{jobTitle}</h3>
        <p className="text-gray-600">{duration}</p>
      </div>
      <p className="text-gray-500">{companyName}</p>
      <ul className="list-disc list-inside space-y-2">
        {jobDescription.map((desc, index) => (
          <li key={index} className="text-gray-700 list-none">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

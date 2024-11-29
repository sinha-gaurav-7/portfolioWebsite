import React from "react";
import Layout from "../Layout.js";
import Experience from "@/components/experience-Card/index.js";
import Education from "@/components/education-Card/index.js";

const Resume = () => {
  const experiences = [
    {
      jobTitle: "Software Engineer",
      companyName: "Tata Consultancy Services",
      duration: "August 2022 - July 2023",
      jobDescription: [
        "Successfully led the front-end development of multiple high-traffic applications, resulting in a 30% increase in user engagement.",
        "Streamlined the development process by implementing automated testing frameworks, reducing bug rates by 25%.",
        "Enhanced application security by integrating advanced authentication protocols, ensuring compliance with industry standards",
      ],
    },
    {
      jobTitle: "Associate Software Engineer",
      companyName: "Tata Consultancy Services",
      duration: "July 2021 - July 2022",
      jobDescription: [
        "Collaborated with cross-functional teams to develop user interfaces for multiple client projects, ensuring on-time delivery and adherence to project scope.",
        "Implemented performance improvements that reduced load times by 20% in certain modules by optimizing the front-end architecture.",
        "Demonstrated strong attention to detail by identifying and resolving critical bugs during testing phases, improving the overall quality of the delivered products",
      ],
    },
  ];

  const education = [
    {
      collegeName: "Northeastern University",
      location: "Boston, MA",
      duration: "September 2023 - May 2025",
      courses: [
        "Object Oriented Design",
        "Web Design/ User Experience Engineering",
        "Advanced Big-Data Application/ Indexing",
        "Data Structures and Algorithms",
      ],
    },
    {
      collegeName: "Mumbai University",
      location: "Mumbai, India",
      duration: "August 2017 - June 2021",
      courses: [
        "Database Management and Design",
        "Object Oriented Design Lab",
        "Microprocessor 8085",
        "Structured Programming Approach",
      ],
    },
  ];

  return (
    <Layout>
      <section className="w-full sm:w-3/4 mx-auto sm:p-20 p-4">
        <h1 className="text-center font-semibold sm:text-3xl text-2xl sm:py-10 py-4">
          WORK EXPERIENCE
        </h1>
        <div className="mx-auto space-y-10">
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              jobTitle={experience.jobTitle}
              companyName={experience.companyName}
              duration={experience.duration}
              jobDescription={experience.jobDescription}
            />
          ))}
        </div>
      </section>

      <section className="w-full sm:w-3/4 mx-auto sm:p-20 p-4">
        <h1 className="text-center font-semibold sm:text-3xl text-2xl sm:py-10 py-4">
          EDUCATION
        </h1>
        <div className="mx-auto space-y-10">
          {education.map((edu, index) => (
            <Education
              key={index}
              collegeName={edu.collegeName}
              location={edu.location}
              duration={edu.duration}
              courses={edu.courses}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
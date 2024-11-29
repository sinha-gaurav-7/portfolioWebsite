import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Projects from "@/components/projects-Card";
import Marquee from "@/components/Marquee";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const words = [
    "Software Developer 💻",
    "Designer ✏️",
    "Creator⚡",
    "Coffee-Lover 🍵",
    "Sports Enthusiast 🏏",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const projectList = {
    projects: [
      {
        title: "Present",
        description: "Users can create animation-based presentations",
        image: "/present-1.png",
        link: "https://present-self.vercel.app/landing",
      },
      {
        title: "Financial Budget Tracking Application",
        description: "Expense sharing and tracking platform",
        image: "/fbta-1.png",
        link: "https://github.com/Cenagaurav77/FBT-Application.git",
      },
      {
        title: "Tweet Hub",
        description: "Users can post and monitor tweets of their connections",
        image: "/tweet.jpg",
        link: "https://github.com/Cenagaurav77/Twitter.git",
      },
      {
        title: "Insurance Plan Data Indexing System",
        description:
          "Efficient managing and indexing of medical insurance plans",
        image: "/medical.jpg",
        link: "https://github.com/Cenagaurav77/Secure-API.git",
      },
    ],
  };

  const images = [
    { src: "/agile.png", alt: "Image 1" },
    { src: "/aws.png", alt: "Image 2" },
    { src: "/docker.png", alt: "Image 3" },
    { src: "/elastics.png", alt: "Image 4" },
    { src: "/figma.png", alt: "Image 5" },
    { src: "/java.png", alt: "Image 6" },
    { src: "/js.png", alt: "Image 7" },
    { src: "/k8s.png", alt: "Image 8" },
    { src: "/linux.png", alt: "Image 9" },
    { src: "/mongodb.png", alt: "Image 10" },
    { src: "/nextjs.png", alt: "Image 11" },
    { src: "/nodejs.png", alt: "Image 12" },
    { src: "/Python.png", alt: "Image 13" },
    { src: "/rabbitmq.png", alt: "Image 14" },
    { src: "/reactJs.png", alt: "Image 15" },
    { src: "/redis.png", alt: "Image 16" },
    { src: "/sql.png", alt: "Image 17" },
    { src: "/typescript.png", alt: "Image 18" },
  ];

  return (
    <>
      <section className="mx-auto w-full sm:w-3/4 min-h-screen grid items-center px-4">
        <div className="space-y-5 py-20 sm:py-28">
          <h2 className="text-xl sm:text-3xl">👋 Hey There, I’m Gaurav</h2>
          <h1 className="font-semibold text-2xl sm:text-4xl">
            A <span className="text-red-500">{words[currentWordIndex]}</span>,
          </h1>
          <h1 className="font-semibold text-2xl sm:text-4xl">
            Crafting Innovative Solutions, One Line of Code at a Time
          </h1>
          <h3 className="text-lg sm:text-xl">
            Currently pursuing MS in Software Engineering at Northeastern
            University
          </h3>
        </div>
      </section>

      <section className="mx-auto w-full sm:w-3/4">
        <h1 className="font-semibold text-2xl sm:text-4xl text-center">
          MY WORK
        </h1>
        <div className="container mx-auto p-10 sm:p-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.projects.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full sm:w-3/4">
        <div className="flex flex-col items-center justify-center py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-8">
              Skills and Competencies
            </h1>
            <Marquee images={images} />
          </main>
        </div>
      </section>
    </>
  );
};

export default Index;

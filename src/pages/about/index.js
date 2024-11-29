import React, { useState } from "react";
import Image from "next/image";
import Layout from "../Layout";

const About = () => {
  // State management for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "An error occurred"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <Layout>
      {/* About Section */}
      <section className="mx-auto w-[90%] sm:w-3/4 pt-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 flex justify-center p-4 md:p-10">
            <Image
              src="/gaurav-about.jpg"
              height={450}
              width={350}
              className="rounded-lg"
              alt="Gaurav Rakesh Sinha"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-4 md:p-10">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am Gaurav Rakesh Sinha, a full-stack developer based in Boston
              with a passion for modern web technologies. I specialize in React,
              Next.js, Node.js, and Flask, and I enjoy building scalable web
              applications while managing cloud-based services. Lately, I've
              been focusing on creating user-friendly interfaces and optimizing
              performance for seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto w-[90%] sm:w-3/4 pt-20">
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Contact Info */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-4 md:p-10">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg leading-relaxed">
              I am currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I will
              try my best to get back to you!
            </p>
            <p className="text-lg mt-4">
              Phone:{" "}
              <a
                href="tel:+18573983073"
                className="text-blue-500 hover:underline"
              >
                (857)-(398)-(3073)
              </a>
            </p>
            <p className="text-lg mt-4">
              Email:{" "}
              <a
                href="mailto:sinha.g@northeastern.edu"
                className="text-blue-500 hover:underline"
              >
                sinha.g@northeastern.edu
              </a>
            </p>
          </div>
          {/* Contact Form */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-4 md:p-10">
            <form className="w-[90%] mx-auto" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your first name"
                />
              </div>
              {/* Last Name */}
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your last name"
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              {/* Subject */}
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter the subject"
                />
              </div>
              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

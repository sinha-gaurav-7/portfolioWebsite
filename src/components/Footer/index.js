import React from "react";

const Footer = () => {
  return (
    <footer className="bg-custom-color py-4 sm:py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/gaurav-sinha-89b57116a/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Cenagaurav77"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="mailto:sinha.g@northeastern.edu"
            className="hover:text-gray-400"
          >
            Email
          </a>
        </div>
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Gaurav Rakesh Sinha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

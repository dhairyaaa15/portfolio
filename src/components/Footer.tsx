import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-8 text-center">
        {/* Copyright */}
        <p className="text-cyan-100 text-sm">
          &copy; {new Date().getFullYear()} Dhairya Chawda. All rights reserved.
        </p>
        
        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/dhairya-chawda-464884233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dhairyaaa15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://x.com/dhairya_15_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

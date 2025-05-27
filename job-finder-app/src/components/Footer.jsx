import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/djordje-bradonjic-894701144/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-1.07-2.4-2.4-2.4s-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.5c.89-1.3 3.3-1.4 4.2 0v-1.5h3v10z" />
          </svg>
        </a>

        <a
          href="https://github.com/djordjebradonjic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-100 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.609-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.21v3.285c0 .315.21.69.825.57 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="/DjordjeBradonjic_CV.pdf"
          download="Djordje_Bradonjic_CV.pdf"
          className="hover:text-green-400 transition-colors flex items-center space-x-1"
          aria-label="Download CV"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L8 4h3v8h2V4h3l-4-4zm6 20H6v2h12v-2zm-6-4l-4 4h8l-4-4z" />
          </svg>
          <span className="text-sm">Download CV</span>
        </a>
      </div>

      <p className="text-sm">&copy; 2025 JobFinder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

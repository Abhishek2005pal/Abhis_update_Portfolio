import { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to detect screen size and handle visibility of hamburger menu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint (1024px is lg in Tailwind)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`w-full px-5 sm:px-10 py-3 fixed top-0 z-10 shadow-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container flex justify-between items-center max-w-5xl mx-auto">
        {/* Hamburger Icon for mobile - positioned to the far left */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="block lg:hidden text-2xl focus:outline-none"
            style={{ position: 'absolute', left: '10px' }} // Positions the icon to the left corner
          >
            <FaBars className={`${darkMode ? 'text-white' : 'text-black'}`} />
          </button>
        )}

        {/* Modified "Abhishek Pal" text with "Pal" under "Abhishek" */}
        <h3 className={`text-2xl font-bold text-center ml-6 ${darkMode ? 'text-white' : 'text-black'} flex-grow`}>
          Abhishek
          <br />
          <span className="block text-center">Pal</span>
        </h3>

        {/* Navbar Links - Hidden on mobile, shown on larger screens */}
        {!isMobile && (
          <ul className="lg:flex gap-8 justify-center items-center flex-grow">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`px-3 py-2 rounded no-underline block lg:inline ${darkMode ? 'text-white' : 'text-black'} hover:bg-emerald-600`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Icons and Dark Mode Toggle - centered with equal spacing in desktop */}
        <div className={`flex items-center gap-6 ${isMobile ? 'justify-start mt-2 ml-3' : 'justify-center'}`}>
          {/* GitHub Icon */}
          <a
            href="https://github.com/Abhishek2005pal"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl no-underline ${darkMode ? 'text-white' : 'text-black'} hover:text-emerald-600`}
          >
            <FaGithub />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/abhishek-pal-79215b266/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl no-underline ${darkMode ? 'text-white' : 'text-black'} hover:text-emerald-600`}
          >
            <FaLinkedin />
          </a>

          {/* Dark Mode / Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 text-lg rounded-full focus:outline-none ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:bg-emerald-600 transition-all duration-300`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Mobile menu (visible when open) */}
      {isMobile && isMenuOpen && (
        <div className="lg:hidden mt-3">
          <ul className="flex flex-col gap-2 items-center">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block px-3 py-2 rounded no-underline ${darkMode ? 'text-white' : 'text-black'} hover:bg-emerald-600`}
                  onClick={() => setIsMenuOpen(false)}  /* Close menu on link click */
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

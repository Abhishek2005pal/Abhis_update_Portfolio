import React from 'react';

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold text-center ${darkMode ? 'text-emerald-100' : 'text-gray-800'}`}>
        My Projects
      </h2>

      {/* Weather App */}
      <div
        className={`p-10 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${
          darkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="w-80 rounded">
          <a
            href="https://abhishek2005pal.github.io/weather-app/"
            className="w-full h-full no-underline"
          >
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt="Weather App"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className={`flex flex-col align-center mx-auto gap-4 justify-center flex-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <h2 className="font-bold text-3xl text-center">
            <a
              className="no-underline cursor-pointer"
              href="https://abhishek2005pal.github.io/weather-app/"
            >
              Weather App
            </a>
          </h2>
          <p>A dynamic weather application providing real-time updates using APIs, built with HTML, CSS, and JavaScript.</p>
        </div>
      </div>

      {/* Temperature Converter */}
      <div
        className={`p-10 flex flex-col justify-center items-center gap-5 lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${
          darkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="w-80 rounded">
          <a
            href="https://abhishek2005pal.github.io/temperature-converter/"
            className="w-full h-full no-underline"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlHocaDR-3ou3EPli4XU84zWTiolwExOJAQ&s"
              alt="Temperature Converter"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className={`flex flex-col align-center mx-auto gap-4 justify-center flex-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <h2 className="font-bold text-3xl text-center">
            <a
              className="no-underline cursor-pointer"
              href="https://abhishek2005pal.github.io/temperature-converter/"
            >
              Temperature Converter
            </a>
          </h2>
          <p>A simple tool to convert between Celsius, Fahrenheit, and Kelvin, built with a responsive design.</p>
        </div>
      </div>

      {/* DSA Tracker */}
      <div
        className={`p-10 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${
          darkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="w-80 rounded">
          <a
            href="https://abhishek2005pal.github.io/dsaTracker/"
            className="w-full h-full no-underline"
          >
            <img
              src="https://www.notion.so/en-us/front-api/og-image/templates/dsa-progress-tracker"
              alt="DSA Tracker"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className={`flex flex-col align-center mx-auto gap-4 justify-center flex-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <h2 className="font-bold text-3xl text-center">
            <a
              className="no-underline cursor-pointer"
              href="https://abhishek2005pal.github.io/dsaTracker/"
            >
              DSA Progress Tracker
            </a>
          </h2>
          <p>A React app to track your progress in Data Structures and Algorithms with a clean interface.</p>
        </div>
      </div>

      {/* 15 Puzzle Game */}
      <div
        className={`p-10 flex flex-col justify-center items-center gap-5 lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${
          darkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="w-80 rounded">
          <a
            href="https://abhishek2005pal.github.io/15Puzzle/"
            className="w-full h-full no-underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/15-puzzle_magical.svg/800px-15-puzzle_magical.svg.png"
              alt="15 Puzzle Game"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className={`flex flex-col align-center mx-auto gap-4 justify-center flex-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <h2 className="font-bold text-3xl text-center">
            <a
              className="no-underline cursor-pointer"
              href="https://abhishek2005pal.github.io/15Puzzle/"
            >
              15 Puzzle Game
            </a>
          </h2>
          <p>An interactive puzzle game developed with React, featuring smooth animations and responsive design.</p>
        </div>
      </div>
    </section>
  );
}

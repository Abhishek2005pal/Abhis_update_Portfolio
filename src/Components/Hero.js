import MyPDF from './Abhishek-Resume.pdf';
import MyAnimation from './ap.mp4';

export default function Hero({ darkMode }) {
  return (
    <>
      <section
        id="hero"
        className={`px-5 sm:px-10 w-full flex gap-8 flex-col lg:flex-row justify-center items-center pt-28 lg:pt-32 mb-16 max-w-5xl mx-auto min-h-[80vh] ${
          darkMode ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-5 lg:gap-10">
          <div>
            <h2
              className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold animate-pulse ${
                darkMode ? 'text-emerald-400' : 'text-emerald-500'
              }`}
            >
              Welcome to My Portfolio!
            </h2>
          </div>
          <p className={`text-center text-base sm:text-lg ${darkMode ? 'text-white' : 'text-black'}`}>
            My name is{' '}
            <span className={`font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`}>
              Abhishek Pal
            </span>
            ,<br /> a passionate student at{' '}
            <span className={`font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`}>
              IIIT Kalyani
            </span>
            .<br /> I'm dedicated to learning and growing in the field of technology.
          </p>
          <a
            href={MyPDF}
            download="Abhishek_Resume.pdf"
            className={`mt-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-lg py-2 px-6 text-base sm:text-lg font-semibold transition transform hover:scale-105 hover:shadow-xl ${
              darkMode ? 'text-white no-underline' : 'text-black no-underline'
            }`}
          >
            Download My Resume
          </a>
        </div>

        {/* Increased gap for larger screens */}
        <div className="flex-1 mt-10 lg:mt-0 flex justify-center lg:ml-20"> 
          <video
            className="rounded-full h-auto w-[100%] max-w-[420px] object-cover aspect-square"
            autoPlay
            loop
            muted
          >
            <source src={MyAnimation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Bouncing Arrow below the Hero section */}
      <div className="flex justify-center mt-4">
        <a href="#about">
          <svg
            className="animate-bounce w-8 h-8 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

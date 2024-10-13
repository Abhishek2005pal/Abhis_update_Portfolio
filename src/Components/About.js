import Abhishek from "./Indiagate.jpg";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`px-10 w-full flex flex-col lg:flex-row py-20 max-w-5xl mx-auto ${
        darkMode ? 'bg-black' : 'bg-gray-100'
      }`}
    >
      <div className="flex-1">
        <img
          style={{ height: "550px", borderRadius: "20%" }}
          src={Abhishek}
          alt="About"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
        <div>
          <h2 className={`text-center text-5xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            About Me
          </h2>
        </div>
        <p className={`text-lg text-justify leading-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          I am a passionate{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            Computer Science student
          </span>{" "}
          at the Indian Institute of Information Technology Kalyani, West Bengal.
          My journey in technology has ignited a keen interest in{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            web development
          </span>
          , where I have honed my skills in{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            HTML
          </span>
          ,{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            CSS
          </span>
          ,{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            JavaScript
          </span>
          ,{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            React
          </span>
          , and{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            Node.js
          </span>
          .
        </p>
        <p className={`text-lg text-justify leading-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          My dedication to mastering{" "}
          <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            Data Structures and Algorithms (DSA)
          </span>{" "}
          underpins my problem-solving abilities. I am committed to continuous
          learning and am driven by a desire to excel in software development.
          My goal is to leverage my technical knowledge and innovative thinking
          to make meaningful contributions to the tech industry. As a proactive
          learner, I stay abreast of the latest technologies and best practices
          to enhance my skill set continually.
        </p>
      </div>
    </section>
  );
}

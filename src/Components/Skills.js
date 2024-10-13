import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiLeetcode } from 'react-icons/si';

export default function Skills({ darkMode }) {
  const skills = [
    { icon: <SiC className="w-16 h-16" style={{ color: "#00599C" }} /> },
    { icon: <SiCplusplus className="w-16 h-16" style={{ color: "#00599C" }} /> },
    { icon: <SiLeetcode className="w-16 h-16" style={{ color: "#FFA116" }} /> },
    { icon: <FaPython className="w-16 h-16" style={{ color: "#306998" }} /> },
    { icon: <FaHtml5 className="w-16 h-16" style={{ color: "#E34F26" }} /> },
    { icon: <FaCss3Alt className="w-16 h-16" style={{ color: "#264DE4" }} /> },
    { icon: <FaJsSquare className="w-16 h-16" style={{ color: "#F7DF1E" }} /> },
    { icon: <FaReact className="w-16 h-16" style={{ color: "#61DBFB" }} /> },
    { icon: <FaNodeJs className="w-16 h-16" style={{ color: "#68A063" }} /> }
  ];

  return (
    <section
      id="skills"
      className={`px-10 w-full my-40 max-w-5xl mx-auto ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <h2 className={`text-center text-6xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
        My Skills...
      </h2>
      <div
        className={`mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl ${
          darkMode ? 'bg-black' : 'bg-white'
        }`}
      >
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className={`rounded-full p-6 flex items-center justify-center hover:shadow-xl cursor-pointer ${
                darkMode ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              style={{ width: '100px', height: '100px' }} // Box size
            >
              {skill.icon}
            </div>
          );
        })}
      </div>
    </section>
  );
}

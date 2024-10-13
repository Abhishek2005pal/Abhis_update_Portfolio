import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

export default function Contact({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs (Optional)
    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs.send(
      "abhishek_pal2005",  // Your EmailJS service ID
      "abhishek_2005pal",   // Your EmailJS template ID
      { name, email, message },
      "d6RbArTjTGvE273KQ"  // Your EmailJS user ID
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setError(null);
      },
      (error) => {
        console.error("Error:", error);
        setError("Failed to send message. Please try again.");
      }
    );
  };

  useEffect(() => {
    setError(null); // Reset error when inputs change
  }, [name, email, message]);

  return (
    <section 
      id="contact" 
      className={`my-20 max-w-md mx-auto p-3 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>
        Drop Me a Message
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`p-2 rounded ${darkMode ? 'text-black bg-gray-300' : 'text-black bg-gray-100'}`}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`p-2 rounded ${darkMode ? 'text-black bg-gray-300' : 'text-black bg-gray-100'}`}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={`p-2 rounded ${darkMode ? 'text-black bg-gray-300' : 'text-black bg-gray-100'}`}
          rows="3"
        />
        <button 
          type="submit" 
          className={`p-2 rounded transition ${darkMode ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
        >
          Send Message
        </button>

        {error && (
          <p className="text-red-500 text-center text-sm">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

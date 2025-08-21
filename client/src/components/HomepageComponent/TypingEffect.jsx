import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const phrases = ["Find Internships", "Explore Hackathons", "Join Tech Events"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const current = phrases[index % phrases.length];

    const type = () => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }

      setSpeed(isDeleting ? 100 : 150);
    };

    const timeout = setTimeout(type, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
      {text}
    </span>
  );
};

export default TypingEffect;

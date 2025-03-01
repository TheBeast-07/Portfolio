import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Ahtasham Pervaiz",
        "I'm a Full Stack Web Developer",
        "I specialize in MERN stack development",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>

        {/* Link to download the resume PDF */}
        <a
          href="/pdf/resume.pdf"
          download="Ahtasham Pervaiz CV.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>

      <div className="right">
        <div
          className="img"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          {/* Profile Image with relative path */}
          <img
            src="assets/hero/Img.png" // Relative path to the profile image
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

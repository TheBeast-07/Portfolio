import React from "react";

const Skills = () => {
  const skillsData = [
    {
      title: "HTML",
      imageSrc: "assets/skills/html.png"
    },
    {
      title: "CSS",
      imageSrc: "assets/skills/css.png"
    },
    {
      title: "JavaScript",
      imageSrc: "assets/skills/js.png"
    },
    {
      title: "React",
      imageSrc: "assets/skills/React.webp"
    },
    {
      title: "Node.js",
      imageSrc: "assets/skills/node.png"
    },
    {
      title: "Express",
      imageSrc: "assets/skills/express.png"
    },
    {
      title: "GitHub",
      imageSrc: "assets/skills/github.png"
    },
    {
      title: "MongoDB",
      imageSrc: "assets/skills/mongo.png"
    },
    {
      title: "Figma",
      imageSrc: "assets/skills/figma.png"
    }
  ];

  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skillsData.map((skill, index) => (
          <div
            className="item"
            key={index}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={skill.imageSrc} alt={skill.title} />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from "react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      imageSrc: "react.png",
      role: "Full Stack Developer",
      startDate: "10-10-2024",
      endDate:"1-10-2025",
      
      location: "Structures Limited , Hostel City",
      experiences: [
        "Developed and maintained dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js) to provide high-quality and scalable solutions.Designed and implemented RESTful APIs to support frontend functionality, ensuring smooth integration between the client-side and server-side components."
      ]
    },
    {
      id: 2,
      imageSrc: "pny.png",
      role: "IT Assistant",
      startDate: "10-9-2024,",
      endDate:"8-10-2024",
     
      location: "SINA , I-8 Islamabad",
      experiences: [
       "Proficiently used MS Office to prepare reports, presentations, and documentation, enhancing overall productivity.Led and supported Digital Marketing initiatives, including content creation, social media campaigns, and performance analysis to drive online engagement."
      ]
    },
    {
      id: 3,
      imageSrc: "react.png",
      role: "Full Stack Developer",
      startDate: "2023",
      
      location: "PNY Institute, Rwp",
      experiences: [
        "Created a photo portfolio website using React.",
        "Developed a user registration and login system for WhatsApp using the MERN stack."
      ]
    },
    
  ];

  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experienceData.map((data) => (
          <div
            key={data.id}
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              {/* <img src={`/assets/${data.imageSrc}`} alt={data.role} /> */}
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} - {data.endDate}{" "}
                </span>
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              {data.experiences.map((exp, index) => (
                <h5 key={index} style={{ color: "yellow" }}>
                  {exp}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;

// Certificate.jsx
import React from "react";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      issuer: "PNY Institute",
      issueDate: "2023",
      certificateLink: "/assets/certificates/pny_institute_certificate.pdf",
      imageSrc: "https://gnss.com.pk/assets/img/clients/pny%20logo%20dark.jpg.cfffffc2.png", // Corrected external image URL
    },
    {
      id: 2,
      title: "Full Stack Web Developer",
      issuer: "NAVTTC",
      issueDate: "2024",
      certificateLink: "/assets/certificates/navtacc_certificate.pdf",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEVLyHMmiEOPSwKHHDaoKAqkRZBUpEH0iA&s", // Corrected external image URL
    },
  ];

  return (
    <div className="container my-5" id="certificate">
      <h1 className="text-center mb-4 text-light">Certifications</h1>
      <div className="row justify-content-center">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="col-md-6 col-lg-4 certificate-item my-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="card text-center p-3" style={{ backgroundColor: "black", color: "white" }}>
              <div className="card-body">
                <div className="certificate-left mb-3">
                  {/* Display the certificate logo from the external URL */}
                  <img
                    src={certificate.imageSrc} // Directly use the image URL
                    alt={certificate.issuer}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h2>{certificate.title}</h2>
                <h4>
                  <span style={{ color: "yellowgreen" }}>{certificate.issuer}</span>
                  <span style={{ color: "yellow" }}> - {certificate.issueDate}</span>
                </h4>
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning my-3"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

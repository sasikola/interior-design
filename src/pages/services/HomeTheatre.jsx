import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";

const HomeTheatre = () => {
  const galleryImages = [
    "/assets/services/hts/hts1.jpeg",
    "/assets/services/hts/hts2.jpeg",
    "/assets/services/hts/hts3.jpeg",
    "/assets/services/hts/hts4.jpeg",
    "/assets/services/hts/hts5.jpeg",
    "/assets/services/hts/hts6.jpeg",
    "/assets/services/hts/hts7.jpeg",
    "/assets/services/hts/hts8.jpeg",
  ];

  return (
    <div>
      <ResponsiveBanner imageSrc="/assets/services/htb.jpg" alt="hts banner" />

      <div className="container-fluid p-5">
        <div className="row ">
          <div className="col-lg-6 ">
            <img
              src="/assets/services/hts/hts.png"
              className="img-fluid rounded-3"
              alt="about"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
          <div className="col-lg-6 ">
            <div className="d-flex justify-content-center align-items-center py-4">
              <h1>Home Theater Experience</h1>
            </div>
            <p style={{ textAlign: "justify" }}>
              Home Theater Experience At Infinity Store, immerse yourself in a home
              theater experience curated to redefine entertainment. Our
              cutting-edge home theater systems grant you seamless control from
              anywhere. Experience peace of mind with our state-of-the-art
              setup, providing real-time alerts for unauthorized access. Our
              dedication surpasses mere convenience; we aim to bring every
              aspect of superior home entertainment to your fingertips. Whether
              it's managing audio-visual equipment or ensuring an immersive
              cinematic experience, our comprehensive home theater solutions are
              designed to elevate your entertainment standards.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center py-5">
              <h1>Gallery</h1>
            </div>
          </div>
          {galleryImages.map((image, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="mx-auto d-flex align-items-center justify-content-center">
                <img
                  src={image}
                  className="img-fluid rounded-3"
                  loading="lazy"
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTheatre;

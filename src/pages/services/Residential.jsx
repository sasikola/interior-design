import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const Residential = () => {
  const galleryImages = [
    "/assets/services/ris/ris1.jpeg",
    "/assets/services/ris/ris2.jpeg",
    "/assets/services/ris/ris3.jpeg",
    "/assets/services/ris/ris4.jpeg",
    "/assets/services/ris/ris5.png",
    "/assets/services/ris/ris6.jpeg",
    "/assets/services/ris/ris7.jpeg",
    "/assets/services/ris/ris8.jpeg",
  ];

  return (
    <div>
      <ResponsiveBanner imageSrc="/assets/services/ris.webp" alt="ris banner" />

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6 ">
            <img
              src="/assets/home/cardImage/5.png"
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
              <h1>Residential Interior Services</h1>
            </div>
            <p style={{ textAlign: "justify" }}>
              At Infinity Store, we amalgamate your visions with our professional
              insights, transforming your residence into a heaven. Our
              comprehensive services encompass end-to-end interior design,
              infusing each space with distinctive artistry and refinement.
              Share your ideas and aspirations with us; we'll oversee every
              aspect, ensuring your absolute contentment. Beyond interior
              innovation, our expertise extends to fine-tuning landscaping to
              perfection.
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

export default Residential;

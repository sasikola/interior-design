import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const Commercial = () => {
  const galleryImages = [
    "/assets/services/cis/cis1.jpg",
    "/assets/services/cis/cis2.jpg",
    "/assets/services/cis/cis3.jpg",
    "/assets/services/cis/cis4.jpg",
    "/assets/services/cis/cis5.jpg",
    "/assets/services/cis/cis6.jpg",
    "/assets/services/cis/cis7.jpg",
    "/assets/services/cis/cis8.jpg",
  ];

  return (
    <div>
      <ResponsiveBanner imageSrc="/assets/services/cis.webp" alt="ris banner" />
      <div className="container-fluid p-5">
        <div className="row ">
          <div className="col-lg-6 ">
            <img
              src="/assets/services/cis/cis.jpg"
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
              <h1>Commercial Interior Services</h1>
            </div>
            <p style={{ textAlign: "justify" }}>
              At Infinity Store, we specialize in transforming your commercial and
              office spaces into vibrant, dynamic environments. Our designs aim
              to inspire productivity and enthusiasm among you and your team,
              fostering an environment that encourages success. In today's
              landscape, we recognize the significance of engaging shopping
              destinations and bustling malls. We craft innovative, inviting
              spaces where individuals love to spend leisure time. Rest assured,
              as an investor, we dedicate ourselves to creating novel,
              aesthetically pleasing infrastructure to support your business
              endeavors.
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

export default Commercial;

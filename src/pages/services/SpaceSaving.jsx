import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const SpaceSaving = () => {
  const galleryImages = [
    "/assets/services/ssf/ssf1.jpg",
    "/assets/services/ssf/ssf2.jpg",
    "/assets/services/ssf/ssf5.jpg",
    "/assets/services/ssf/ssf3.jpg",
    "/assets/services/ssf/ssf4.jpg",
    "/assets/services/ssf/ssf6.jpg",
    "/assets/services/ssf/ssf7.jpg",
    "/assets/services/ssf/ssf8.jpg",
  ];

  return (
    <div>
      <ResponsiveBanner imageSrc="/assets/services/ssf.webp" alt="ssf banner" />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6 ">
            <img
              src="/assets/services/ssf/ssf.jpg"
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
              <h1>Space saving Furniture</h1>
            </div>

            <p style={{ textAlign: "justify" }}>
              At Infinity Store, our space-saving furniture solutions revolutionize
              your living or work areas. Seamlessly merge functionality with
              style, optimizing every inch of your space. Our innovative designs
              transform compact rooms into versatile, organized sanctuaries.
              Experience intelligent, multipurpose furniture crafted for modern
              living, maximizing comfort without compromising elegance. From
              sleek foldable desks to hidden storage solutions, our pieces
              redefine practicality. Elevate your surroundings with our
              space-saving marvels, enabling you to savor spaciousness even in
              limited areas. Discover a new dimension of comfort and efficiency
              with Infinity Store’s transformative furniture. Redefine your space,
              expand possibilities, and reimagine your lifestyle with us.
            </p>
          </div>
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
  );
};

export default SpaceSaving;

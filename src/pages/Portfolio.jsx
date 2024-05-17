import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../Components/ResponsiveBanner";
import { portfoliogGallery } from "../_mock/portfolio_mock.js";
const Portfolio = () => {
  return (
    <div  >
      <ResponsiveBanner imageSrc="/assets/services/6.webp" alt="about banner" />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center py-4">
            <h2>Portfolio Gallery</h2>
          </div>
          {portfoliogGallery.map((image, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="d-flex align-items-center justify-content-center">
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

export default Portfolio;

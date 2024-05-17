import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const Automation = () => {
  return (
    <div>
      <ResponsiveBanner imageSrc="/assets/services/has.webp" alt="ris banner" />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/assets/services/has/has1.jpg"
              className="img-fluid rounded-3"
              alt="Automation"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
          <div className="col-lg-6 ">
            <h1 className="mb-4 colorhead mt-4">Automation Solutions</h1>
            <p className="serpara" style={{ textAlign: "justify" }}>
              At Infinity Store, our automation systems empower you to effortlessly
              control your home or office, regardless of your location. Our
              cutting-edge automation setup provides real-time alerts, ensuring
              your peace of mind by detecting any unauthorized access to doors
              or windows. Our commitment extends beyond convenience; we strive
              to ensure every facet of your home is at your fingertips. From
              managing electronic devices to detecting gas leaks and
              guaranteeing home security, our comprehensive automation system
              redefines convenience and safety for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const Senior = () => {
  return (
    <div>
      <div>
        <ResponsiveBanner
          imageSrc="/assets/services/scs.webp"
          alt="scs banner"
        />
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/assets/services/scs1.webp"
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
              <h1 className="mb-4 colorhead mt-4">Senior Citizen Homes</h1>
              <p className="serpara" style={{ textAlign: "justify" }}>
                Transform your senior living space effortlessly with Infinity Store's
                tailored for senior citizens. Our innovative designs seamlessly
                blend functionality with elegance, optimizing every corner of
                your area for ease of use and comfort. From cleverly hidden
                storage to versatile, stylish furniture designed with
                accessibility in mind, embrace a new level of practicality
                tailored to senior needs. Redefine your space and unlock endless
                possibilities to craft your dream environment with us, ensuring
                a safe, comfortable, and aesthetically pleasing home for
                seniors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Senior;

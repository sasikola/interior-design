import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";
const Remodel = () => {
  return (
    <div>
      <ResponsiveBanner
        imageSrc="/assets/services/remod.webp"
        alt="ris banner"
      />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/assets/services/remodel1.webp"
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
            <h1 className="mb-4 colorhead mt-4">Remodeling</h1>
            <p className="serpara" style={{ textAlign: "justify" }}>
              Revamp your living or workspace effortlessly with Infinity Store's
              remodeling solutions. Our innovative designs seamlessly blend
              functionality with elegance, optimizing every corner of your area.
              From cleverly hidden storage to versatile, stylish furniture,
              embrace a new level of practicality. Redefine your space and
              unlock endless possibilities to craft your dream environment with
              us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remodel;

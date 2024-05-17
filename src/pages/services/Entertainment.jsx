import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";

const Entertainment = () => {
  return (
    <div>
      <ResponsiveBanner
        imageSrc="/assets/services/entz.webp"
        alt="entertainment banner"
      />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/assets/services/ezs.webp"
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
            <h1 className="mb-4 colorhead mt-4">Entertainment Zone Services</h1>
            <p className="serpara" style={{ textAlign: "justify" }}>
              At Infinity Store, we redefine entertainment beyond conventional
              boundaries. You deserve an immersive experience that extends
              beyond a mere home theater. Picture an extended living space
              adorned with a personalized theater, diverse music selections, a
              relaxing pool, a stylish bar counter, and even a bespoke library.
              Our ethos revolves around providing you with holistic
              entertainment. With Infinity Store, envision the manifestation of an
              enchanting realm within your home an epitome of luxury and
              leisure, brought to life through our innovative concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;

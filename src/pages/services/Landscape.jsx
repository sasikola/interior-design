import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../../Components/ResponsiveBanner";

const Landscape = () => {
  return (
    <div>
      <ResponsiveBanner
        imageSrc="/assets/services/music.webp"
        alt="music banner"
      />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/assets/services/music1.webp"
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
            <h1 className="mb-4 colorhead mt-4">Landscape Music Services</h1>
            <p className="serpara" style={{ textAlign: "justify" }}>
              Harmonious Landscape Services At Infinity Store, we understand the
              allure of spending quality time in your garden with loved ones.
              Imagine a meticulously designed music station seamlessly
              integrated into your garden, poolside, or even adjacent to your
              shuttle court an audio experience crafted to harmonize with the
              ambiance. Enjoy the enchantment of music at your fingertips,
              enhancing every moment spent amidst nature's embrace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landscape;

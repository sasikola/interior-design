import React from "react";
import "./responsiveBanner.css";
const ResponsiveBanner = ({ imageSrc, alt }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt={alt} loading="lazy" />
      
    </div>
  );
};

export default ResponsiveBanner;

import Carousel from "react-bootstrap/Carousel";
import React from "react";

import "../pages/Carousel.css";
import vidSrc from "../pages/dmagi_video.mp4";
import DmagicaBot from "../Components/DmagicaBot";

function Homecarousel() {
  const staticItems = [
    {
      bannerImage: "/assets/home/banner/1.jpeg",
      bannertitle: "Banner 1",
    },
    {
      bannerImage: "/assets/home/banner/3.jpeg",
      bannertitle: "Banner 3",
    },
    {
      bannerImage: "/assets/home/banner/4.png",
      bannertitle: "Banner 4",
    },
  ];

  return (
    <Carousel fade interval={5000}>
      {staticItems.map((res, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image">
            <img
              src={res.bannerImage}
              alt=""
              style={{
                width: "100vw",
                height: "90vh",
                objectFit: "fill",
              }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Homecarousel;

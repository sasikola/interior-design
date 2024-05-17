import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveBanner from "../Components/ResponsiveBanner";
import TeamMembers from "./TeamMembers";
const Aboutus = () => {
  return (
    <div>
      <ResponsiveBanner
        imageSrc="/assets/about/InteriorDesignBanner.webp"
        alt="about banner"
      />
      <div className="container-fluid p-5 ">
        <div className="d-flex justify-content-center align-items-center py-4">
          <h1>About Us</h1>
        </div>
        <div className="row py-4">
          <div className="col-lg-6">
            <img
              src="/assets/about/1.png"
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
            <p style={{ padding: 4 }}>
              Infinity Store, earlier known as Melbourne Design Factory, is a
              versatile company that offers a diverse spectrum of services.
              Leveraging our broad expertise across various sectors, we
              guarantee a team equipped with extensive design knowledge. We
              meticulously assess project requirements, delivering designs that
              surpass expectations. Our hallmark is presenting distinctive ideas
              for every project, fostering unparalleled creativity. With an
              organized and methodical approach, we ensure unwavering quality
              and efficient delivery of products and services.
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-6 ">
            <h1 className="my-2 ">Mission and Vision</h1>
            <p style={{ padding: 4 }}>
              "With a diverse portfolio spanning residential, commercial, and
              hospitality projects DMagica has earned a reputation for
              delivering exceptional design solutions tailored to our clients'
              needs. we believe that everyone deserves to live in a space that
              brings them joy. Whether you're embarking on a full-scale
              renovation, simply looking to refresh your interiors, or to design
              your new dream home we're here to turn your dreams into reality."
            </p>
            <p style={{ padding: 4 }}>
              "At Infinity Store Interior Design Firm, our vision is to seamlessly
              merge aesthetic brilliance with functional excellence. We believe
              that beauty should not compromise utility, and functionality
              should never sacrifice style. Our approach is to craft spaces that
              not only mesmerize the eye but also serve practical needs with
              effortless grace. Through meticulous attention to detail and
              innovative design solutions, we create environments that inspire
              and uplift while enhancing the daily lives of our clients. Whether
              it's optimizing space utilization in a small apartment or infusing
              elegance into a commercial setting, we prioritize both form and
              function to ensure every project we undertake exceeds
              expectations. At Infinity Store, we believe that true magic lies in the
              harmony between aesthetic appeal and functional purpose.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/about/8.webp"
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
        </div>
        <div className="row py-4">
          <div className="col-lg-6">
            <img
              src="/assets/about/2.png"
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
            <h1 className="my-2 ">Why Infinity Store</h1>
            <p style={{ padding: 4 }}>
              Our aim is to create the best spaces, buildings and places with a
              level of design excellence that satisfy, delight and inspire our
              clients. Projects will be executed efficiently with a
              well-established internal control system. All our advanced and
              aesthetic designs will promote environmental health and human
              well-being. Network of acquaintances who can share their vibrant
              endurance with us is our strength. We don’t compromise on the
              quality or timeline since we analyze Client exigency.
            </p>
          </div>
        </div>

          
           
        
      </div>
    </div>
  );
};

export default Aboutus;

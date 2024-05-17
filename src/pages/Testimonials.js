import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = [
  {
    id: 1,

    text: "Amazing experience getting service from MDF team . Quality work at reasonable cost, exquisite designs and wonderful on time execution! Highly recommended.",
    author: "Surendiran S",
  },
  {
    id: 2,

    text: "Very Professional interiors..MDF team was really very good. He understood our budget and requirements and accordingly he gave us the design and quotation . They have a very good team of people..And their team work is great.. Each and every person is dedicated in giving the perfect look and finishing needed..I would definitely recommend them..",
    author: "Sushma Vijay",
  },
  {
    id: 3,

    text: "Melbourne Design Factory and their team are very supportive and understand the customer requirements quite well. The final output, project completion and handover has been good. The overall service and support is excellent....and I would recommend them as they are ready to go that extra mile to satisfy their customers",
    author: "Raksha padekal",
  },
  {
    id: 4,

    text: "Excellent team!!!catching point is they do the work with immense sincerity.i did my interior when I was not in station... Never ever throughout the journey I felt my physical presence was required. They lived up beyond my expectations..",
    author: "Shamrooq Ummer",
  },
  {
    id: 5,

    text: "They provided good quality materials and rate is also reasonable. Also, best part is post completion proactive follow up for feedback and providing the services to fix it.Services: Closet design, Interior decorating, Bedroom design, Kitchen design.",
    author: "Mr Robin Kumar",
  },
  {
    id: 6,

    text: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value.The company is very trustworthy and the workers are also very efficient and punctual.Service: Interior architectural design.",
    author: "Heera Ranjeev",
  },
  {
    id: 7,

    text: "Quality, Responsiveness, Value. We are glad that we decided to go with Melbourne Design factory to do our interiors, A big thanks to MDF Team for guiding us, for being so patient and for providing valuable suggestions as a friend. The design, the quality, the timelines definitely met our expectations and that too within our budget..",
    author: "Faisal Iqbal",
  },
  {
    id: 8,

    text: "Professionalism, Punctuality, Quality, Responsiveness, Value. I have visited the flat A 1704 in Shriram Greenfields and seen the quality of work. The finish was very professional and the material were of good quality and their designs were very functional and friendly.",
    author: "Abi Kochi",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div style={{ my: 5, padding: "6px" }}>
      <div className="text-center mb-2">
        <h2 style={{ fontSize: "2rem", color: "#333" }}>ENDORSEMENT</h2>
      </div>
      <Slider {...settings}>
        {Slides?.map((slide, index) => (
          <div key={index.toString()} width="100%">
            <div
              style={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                margin: 4,
                padding: "20px",
                borderRadius: "10px",
                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
              width="100%"
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: "3px",
                }}
              >
                <p
                  variant="body1"
                  style={{
                    textAlign: "center",
                    fontSize: "1rem",
                    color: "#555",
                  }}
                >
                  {slide.text}
                </p>
                <p
                  variant="h6"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                    marginTop: 2,
                    alignSelf: "center",
                  }}
                >
                  {slide.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

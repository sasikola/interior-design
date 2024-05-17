import React, { useState, useEffect, useRef } from "react";
import "../Components/style.css";
import { Link } from "react-router-dom";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { portfolioImages, trustedCollabs, cardData } from "../_mock/home_mock";
import Homecarousel from "../pages/Homecarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../pages/Testimonials";
import CountdownRow from "../Components/CountdownRow";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { saveAs } from "file-saver";

function Main() {
  const form1 = useRef();
  const [show, setShow] = useState(false);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const portfolioImage = "/assets/portfolio/portfolio.png";

  const HandleDownload = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    const SERVICE_ID = "service_ksnwv3m";
    const TEMPLATE_ID = "template_0m3zgy8";
    const USER_ID = "Yog1lqgD1gkrMI8w2";
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log(response);
        e.target.reset();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thanks! Our team will connect with you in 48 hours.",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });

    // Use FileSaver.js to trigger the download
    saveAs(portfolioImage, "portfolio.png");
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    const SERVICE_ID = "service_ksnwv3m";
    const TEMPLATE_ID = "template_0m3zgy8";
    const USER_ID = "Yog1lqgD1gkrMI8w2";
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        console.log(response);
        e.target.reset();

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thanks! Our team will connect with you in 48 hours.",
        });
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  };

  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <>
      <Homecarousel />
      <div id="downloadBrochure" className="container-fluid pt-2 ">
        <div className="d-flex ">
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 mt-3">
            <p style={{ textAlign: "justify" }}>
              Infinity Store, earlier known as Melbourne Design Factory, is a
              versatile company that offers a diverse spectrum of services.
              Leveraging our broad expertise across various sectors, we
              guarantee a team equipped with extensive design knowledge. We
              meticulously assess project requirements, delivering designs that
              surpass expectations. Our hallmark is presenting distinctive ideas
              for every project, fostering unparalleled creativity. With an
              organized and methodical approach, we ensure unwavering quality
              and efficient delivery of products and services.{" "}
            </p>
            <p>
              If you are like many others, you may have accumulated a ton of
              stuff that you no longer need - or want. Maybe the kids are off to
              college and no longer playing baseball, or you might not be
              interested in the activities you once enjoyed. Moving to a new
              downsized home is a good time to clear the clutter and take Marie
              Kondo's advice by only moving with the things that "spark joy."
            </p>
            <div className="col-12">
              <div className="d-grid">
                <Link to="/about-us">
                  <button
                    className="btn btn px-4 py-2"
                    type="button"
                    style={{ backgroundColor: "#000000 ", color:"white" }}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <div className="d-flex justify-content-center">
                <h2 style={{ marginTop: "20px", marginBottom: "4px" }}>
                  Get in touch
                </h2>
              </div>
              <form ref={form1} onSubmit={HandleDownload}>
                <div className="row gy-2 p-2 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="col-12 ">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg"
                        type="submit"
                        style={{
                          backgroundColor: "#000000 ", color:"white",
                          marginTop: "10px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-2">
        <div className=" w-100">
          <CountdownRow />
        </div>
      </div>
      {/* WHY CHOOSE DMAGICA */}
      <div className="container-fluid pt-2">
        <div className="d-flex justify-content-center align-items-center py-6">
          <h2>WHY INFINITY STORE</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-6 mt-3">
            <div className=" row justify-content-center d-flex">
              {[
                {
                  icon: "/assets/home/4.png",
                  text: "Personalised Designs",
                },
                {
                  icon: "/assets/home/2.png",
                  text: "20% Extra Storage",
                },
                {
                  icon: "/assets/home/6.png",
                  text: "No Cost EMIs",
                },
                {
                  icon: "/assets/home/7.png",
                  text: "10 Year on site Warranty",
                },
                { icon: "/assets/home/1.png", text: "Timely completion" },
                {
                  icon: "/assets/home/5.png",
                  text: "Pay back policy",
                },
                {
                  icon: "/assets/home/3.png",
                  text: "Competitive pricing",
                },
                {
                  icon: "/assets/home/9.png",
                  text: "Branded and quality materials",
                },
              ].map((item, index) => (
                <div key={index} className=" col-3 text-center mt-3 col-md-3">
                  <img
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    className="img-fluid iconextra"
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                    loading="lazy"
                  />
                  <h6 style={{ fontSize: "1rem" }}>{item.text}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-2">
        <div className="d-flex justify-content-center align-items-center ">
          <h2>OUR SIGNATURE</h2>
        </div>
        <div className="my-5">
          <Row xs={1} md={2} lg={3} className="g-4">
            {portfolioImages.map((image, index) => (
              <Col key={index}>
                <img
                  src={image}
                  loading="lazy"
                  alt={`portfolio Images ${index + 1}`}
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <Link to="/portfolio" className="mx-2 my-1">
            <button
              className="btn btn-primary px-md-4 py-md-2 px-3 py-1"
              type="button"
              style={{ backgroundColor: "#000000 ", color:"white" }}
            >
              View More
            </button>
          </Link>
          <a href="#downloadBrochure" className="mx-2 my-1">
            <button
              className="btn btn-primary px-md-4 py-md-2 px-3 py-1"
              type="button"
              style={{ backgroundColor: "#000000 ", color:"white" }}
            >
              Download Brochure
            </button>
          </a>
        </div>
      </div>

      {/* design PROCESS */}
      <div className="container-fluid pt-2" >
        <div className="d-flex justify-content-center align-items-center">
          <h2>Interior Design Process</h2>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 col-md-12 mt-3">
            <div className="row justify-content-center d-flex">
              <img
                className="interiorImage"
                src="/assets/home/8.png"
                alt="Why Choose Us"
                loading="lazy"
                style={{
                  height: "76vh",
                  width: "80vw",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* WHAT YOU GET */}
      <div className="container-fluid pt-2">
        <h2 className="d-flex justify-content-center align-items-center py-4">
          WHAT WE DO
        </h2>
        <div className="row">
          {cardData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 w-100">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "70%",
                    aspectRatio: 3 / 2,
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          id="ourSignature"
          className="d-flex justify-content-center align-items-center "
        >
          <Link to="/contact">
            <button
              className="btn "
              type="button"
              style={{ backgroundColor: "#000000 " }}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
      <Testimonials />
      {/* OUR COLLABORATIONS */}
      <div className="container-fluid pt-2">
        <div className="d-flex justify-content-center align-items-center py-4">
          <h2>OUR COLLABORATIONS</h2>
        </div>
        <Slider {...carouselSettings}>
          {trustedCollabs.map((item, index) => (
            <div
              key={index}
              className="logo-slide d-flex align-items-center justify-content-center mt-3"
            >
              <img
                src={item}
                alt={item}
                className="rounded"
                loading="lazy"
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  width: "100%",
                  height: "100%",
                  aspectRatio: 3 / 2,
                  objectFit: "contain",
                  mixBlendMode: "color-burn",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title>Get a quote</Modal.Title>
        </Modal.Header>
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
          }}
        >
          X
        </Button>

        <Modal.Body>
          <form onSubmit={sendMessage}>
            <div className="row gy-2 gy-xl-3 p-3">
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number<span className="text-danger">*</span>
                </label>

                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button
                    className="btn btn-lg"
                    type="submit"
                    style={{ backgroundColor: "#000000 ", color:"white" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Main;

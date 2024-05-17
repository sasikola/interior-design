import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="page-footer font-small  text-white p-4 "
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 ">
            <Link to="/">
              <img
                src="/logo.png"
                height="200px"
                alt="Logo"
                style={{ width: "150px", height: "150px" }}
              />
            </Link>
          </div>
          <div className="col-lg-3 ">
            <h5 className="text-uppercase" style={{ textAlign: "justify" }}>
              Quick Links
            </h5>
            <div className="d-flex align-items-start  gap-2 align-item-center flex-column ">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>

              <Link
                to="/about-us"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                About us
              </Link>
              <Link
                to="/portfolio"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Portfolio
              </Link>
              <Link
                to="/our-projects"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Our Projects
              </Link>
              <Link
                to="/career"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Career
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="col-lg-3 ">
            <h5
              className="text-uppercase"
              style={{ textDecoration: "none", textAlign: "justify" }}
            >
              WHAT WE DO
            </h5>
            <div className="d-flex align-items-start  gap-2 align-item-center flex-column ">
              <Link
                to="/residential-interiors"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Residential Interiors
              </Link>
              <Link
                to="/commercial-nteriors"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {" "}
                Commercial Interiors
              </Link>
              <Link
                to="/space-saving-furniture"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Space-saving furniture
              </Link>{" "}
              <Link
                to="/home-automation"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Home Automation
              </Link>{" "}
              <Link
                to="/home-theatre"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Home Theater
              </Link>{" "}
              <Link
                to="/entertainment-zone"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Entertainment Zone
              </Link>{" "}
              <Link
                to="/landscape-music"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Landscape music
              </Link>{" "}
              <Link
                to="/remodeling"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Remodeling
              </Link>{" "}
              <Link
                to="/senior-citizen-homes"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Senior Citizen Homes
              </Link>
            </div>
          </div>
          <div className="col-lg-3 ">
            <h5
              className="text-uppercase"
              style={{ textDecoration: "none", textAlign: "justify" }}
            >
              Contact Us
            </h5>
            <div className="d-flex align-items-start  gap-2 align-item-center flex-column ">
              <Link
                to="tel:+917411444232"
                className="text-decoration-none"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                <BsTelephoneFill
                  className="icon"
                  style={{ color: "#ffffff " }}
                />
                <span className="brand-text">+91 7411444232</span>
              </Link>
              <Link
                to="tel:+917411444252"
                className="text-decoration-none "
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                <BsTelephoneFill
                  className="icon"
                  style={{ color: "#ffffff " }}
                />
                <span className="brand-text ">+91 7411444252</span>
              </Link>

              <Link
                to="mailto:sasikola5@gmail.com"
                className="d-flex align-items-start align-item-center flex-row"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                <BsFillEnvelopeFill
                  className="icon"
                  style={{ color: "#ffffff " }}
                />
                <span className="brand-text">support@infinitystore.com</span>
              </Link>
            </div>

            <div className="d-flex align-items-start  gap-2 align-item-center py-3">
              <Link
                to=""
                target="_blank"
              >
                {/* <BsFacebook color="blue" size={25} /> */}
                <MDBBtn
                  size="lg"
                  floating
                  style={{ backgroundColor: "#3b5998", color: "white" }}
                  href="#"
                >
                  <MDBIcon fab icon="facebook" />
                </MDBBtn>
              </Link>
              <Link
                to=""
                target="_blank"
              >
                {/* <BsInstagram color="#fd2a3b" size={25} /> */}
                <MDBBtn
                  size="lg"
                  floating
                  style={{ backgroundColor: "#ac2bac", color: "white" }}
                  href="#"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>
              </Link>
              <Link to="" target="_blank">
                {/* <BsTwitter color="blue" size={25} /> */}
                <MDBBtn
                  size="lg"
                  floating
                  style={{ backgroundColor: "#55acee", color: "white" }}
                  href="#"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </Link>
              <Link to="" target="_blank">
                {/* <BsPinterest color="red" size={25} /> */}
                <MDBBtn
                  size="lg"
                  floating
                  style={{ backgroundColor: "#c61118", color: "white" }}
                  href="#"
                >
                  <MDBIcon fab icon="pinterest" />
                </MDBBtn>
              </Link>
              <Link
                to=""
                target="_blank"
              >
                {/* <BsYoutube color="red" size={25} /> */}
                <MDBBtn
                  size="lg"
                  floating
                  style={{ backgroundColor: "#ed302f", color: "white" }}
                  href="#"
                >
                  <MDBIcon fab icon="youtube" />
                </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-copyright text-center text-decoration-none text-white"
        style={{ color: "white", fontSize: "1.0em", textDecoration: "none" }}
      >
        <hr className="my-4 bg-primary text-white " />
        <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row  gap-4">
          <span>
            Copyright © {currentYear} Infinity Store | All Rights Reserved.
          </span>
          <span>
            Design & Developed by{" "}
            <a
              href="https://sasikiran-portfolio.netlify.app/"
              rel="noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#ffffff",
              }}
            >
              Sasi Kiran
            </a>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

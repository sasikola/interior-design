import React, { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import "./Navbar.css";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    const SERVICE_ID = "service_ksnwv3m";
    const TEMPLATE_ID = "template_0m3zgy8";
    const USER_ID = "Yog1lqgD1gkrMI8w2";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        e.target.reset();
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thanks! Our team will connect with you in 48 hours.",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className=" text-center d-none d-sm-block"
        style={{ backgroundColor: " #0DBD9D", color: "white" }}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-item-center px-4 py-3"
        >
         <div className="d-flex align-items-start  gap-2 align-item-center">
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
          <div className="d-flex align-items-center  gap-4 align-item-center ">
           

            <a
              href="mailto:sasikola5@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <BsFillEnvelopeFill
                className="icon"
                fontSize={"25px"}
                color="#000000"
              />
              <span style={{ color: "#000000" }}>
                support@infinitystore.com
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        
        variant="dark"
        sticky="top"
        className="text-white custom-dropdown"
        ref={navRef}
      >
        <Container >
          <Navbar.Brand href="/" className="p-0">
            <img src="/logo.png" alt="Logo" width="100%" height="80px" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarCollapse"
            className="text-white text-end "

          />
          <Navbar.Collapse
            id="navbarCollapse"
            className="justify-content-center"
          >
            <Nav className="ms-auto mb-2 mb-md-0 text-start w-100">
              <Nav.Link href="/" className="ps-3 pe-3 text">
                Home
              </Nav.Link>
              <Nav.Link href="/about-us" className="ps-3 pe-3">
                About Us
              </Nav.Link>
              <Nav.Link href="/portfolio" className="ps-3 pe-3">
                Portfolio
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                className="text-white "
                show={dropdownOpen}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="col-lg-12 col-md-12">
                  <NavDropdown.Item
                    href="/residential-interiors"
                    className="dropdown-item text-dark"
                    sty
                  >
                    Residential Interiors
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/commercial-nteriors"
                    className="dropdown-item text-dark"
                  >
                    Commercial Interiors
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/space-saving-furniture"
                    className="dropdown-item text-dark"
                  >
                    Space-saving furniture
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/home-automation"
                    className="dropdown-item text-dark"
                  >
                    Home Automation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/home-theatre"
                    className="dropdown-item text-dark"
                  >
                    Home Theater
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/entertainment-zone"
                    className="dropdown-item text-dark"
                  >
                    Entertainment Zone
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/landscape-music"
                    className="dropdown-item text-dark"
                  >
                    Landscape music
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/remodeling"
                    className="dropdown-item text-dark"
                  >
                    Remodeling
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/senior-citizen-homes"
                    className="dropdown-item text-dark"
                  >
                    Senior Citizen Homes
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="/faq" className="ps-3 pe-3">
                FAQ
              </Nav.Link>
              <Nav.Link href="/career" className="ps-3 pe-3">
                Careers
              </Nav.Link>
              <Nav.Link href="/blog" className="ps-3 pe-3">
                Blog
              </Nav.Link>
              <Nav.Link href="/Themes" className="ps-3 pe-3">
                Themes
              </Nav.Link>
              <Nav.Link href="/contact" className="ps-3 pe-3">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav.Link href="" className="ps-4 pe-4 ">
              <button
                className="btn px-2 py-2 "
                style={{ backgroundColor: "#ffffff  ", whiteSpace: "nowrap" }}
                onClick={handleShow}
              >
                Enquire Now
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="text-center">
          <Modal.Title>Get In Touch</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
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
                <label htmlFor="subject" className="form-label">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button
                    className="btn btn-lg"
                    type="submit"
                    style={{ backgroundColor: "#000000", color:"white" }}
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

export default Header;

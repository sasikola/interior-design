import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const CallToAction = () => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${9010631389}`;
  };
  return (
    <>
      <div className="whatsapp-container">
        <ReactWhatsapp
          number="+91 9010631389"
          message="next"
          className="whatsapp"
        >
          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#25d366",fontSize:"23px" }}
            href="#"
          >
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>
        </ReactWhatsapp>
      </div>

      <div className="phone-container">
        <button className="phonecall" onClick={handlePhoneClick}>
          {/* <MdOutlinePermPhoneMsg /> */}
          <MDBIcon fas icon="phone" />
        </button>
      </div>
    </>
  );
};

export default CallToAction;

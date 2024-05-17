import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Career = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your career information has been submitted successfully!",
    });

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong! Please try again later.",
    });
  };

  return (
    <div className="container-fluid p-5">
      <h2 className="d-flex justify-content-center align-items-center py-4">
        Career
      </h2>
      <div className="row p-4">
        <div className="col-md-6">
          <div className="steps">
            <div className="step">
              <h2>Step 1: Apply</h2>
              <p>Fill out the form below with your details and submit.</p>
            </div>
            <div className="step">
              <h2>Step 2: Review</h2>
              <p>Our hiring team will review your application.</p>
            </div>
            <div className="step">
              <h2>Step 3: Interview</h2>
              <p>If selected, you will be contacted for an interview.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white border rounded shadow-sm p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="form-control"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="form-control"
                  placeholder="Enter the position you are applying for"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="resumeLink" className="form-label">
                  Resume Link
                </label>
                <input
                  type="url"
                  id="resumeLink"
                  name="resumeLink"
                  className="form-control"
                  placeholder="Enter the link to your resume"
                  required
                />
              </div>

              <button
                className="btn btn-lg my-2 w-100"
                type="submit"
                style={{ backgroundColor: "#000000 ", color: "white" }}
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

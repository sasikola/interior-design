import React from "react";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = React.useState(null);
  const faqData = [
    {
      headingId: "headingOne",
      collapseId: "collapseOne",
      question:
        "What are the services included in our Interior Design Solutions?",
      answer:
        "We offer comprehensive home solutions. Our consultant will take you through our modular kitchen, bed room wardrobes, Tv Unit, Crockery Unit, Pooja/Payer unit, shoe rack etc. After the first visit we work with our designer to create a proposal so you can see your home as we envision it. Upon your approval, we take the process forward and iterate the proposal to your satisfaction. Here, we also share a 3D rendering as per request of what your home will look like. Post the order confirmation, we take care of installing modular kitchens, wardrobes and lighting. We also assemble and arrange all the selected furniture and or furnishings to your fullest satisfaction.",
    },
    {
      headingId: "headingTwo",
      collapseId: "collapseTwo",
      question: "Could I engage your services for only 1-2 rooms in my house?",
      answer:
        "We do undertake 1-2 room projects as well as available for those looking to decorate their entire house/villa.",
    },
    {
      headingId: "headingThree",
      collapseId: "collapseThree",
      question: "What if I already have furniture that I want to use?",
      answer:
        "No problem! We will work with any existing furniture you have. We will make sure that our suggestions take it into consideration.",
    },
    {
      headingId: "headingFour",
      collapseId: "collapseFour",
      question: "What if I already have a kitchen and wardrobes?",
      answer:
        "That is perfectly ok. We will work with you to furnish the remaining rooms in your house.",
    },
    {
      headingId: "headingFive",
      collapseId: "collapseFive",
      question: "How long does it take from Proposal to Completion?",
      answer:
        "That is really up to you. Some of our customers decide quicker than others, while some of them like to take their time. And that is completely ok. Creating your dream home does not happen in a snap, and we will take the time with you. However, from order confirmation to completion it takes up to 45days.",
    },
    {
      headingId: "headingSix",
      collapseId: "collapseSix",
      question: "How many iterations does the service include?",
      answer:
        "We know that making your perfect home a reality takes time, and plenty of changes as well. We will work with you to make as many iterations of the proposal as needed, before sharing the 3D rendering with you.",
    },
    {
      headingId: "headingSeven",
      collapseId: "collapseSeven",
      question:
        "All that's fine, but what if I don't like the design proposal?",
      answer:
        "We completely understand if you don't warm up to our designer's suggestions. You can simply let us know at any point during the process, and we can part ways, with no hard feelings.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      className="p-4 container-fluid"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "80%" }}>
        <h2 className="d-flex justify-content-center align-items-center py-4">
          Frequently Asked Questions
        </h2>
        <div className="accordion accordion-flush" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div
              className="accordion-item my-2 rounded-3 bg-none border-none"
              key={index}
            >
              <h2 className="accordion-header" id={faq.headingId}>
                <button
                  className="accordion-button rounded-3 "
                  type="button"
                  style={{
                    backgroundColor: "#000000 ", color:"white",
                    borderColor: "#000000 ",
                  }}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordion === index ? "true" : "false"}
                  aria-controls={faq.collapseId}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={faq.collapseId}
                className={`accordion-collapse collapse rounded-3 ${
                  openAccordion === index ? "show" : ""
                }`}
                aria-labelledby={faq.headingId}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

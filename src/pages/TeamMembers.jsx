import React from "react";
// import img1 from "../../public/assets/team/Picture1.png";

const TeamMembers = () => {
  const teamMembersData = [
    {
      image: "/assets/team/Picture1.png",
      name: "Ajak Darsha",
      role: "Founder & CEO",
      description:
        "Mr. Ajak Darsha the esteemed CEO and visionary leader of Infinity Store Interior design firm, boasts two decades of invaluable expertise within the corporate landscape.",
    },
    {
      image: "/assets/team/Picture2.png",
      name: "Sinoy Rajan",
      role: "Operational Excellence & Growth",
      description:
        " Mr. Sinoy, with over two decades of experience in interior design, epitomizes operational excellence and growth within our industry.",
    },
    {
      image: "/assets/team/Picture3.png",
      name: "Brijeena",
      role: "Project and Process",
      description:
        "Introducing Ms. Brijeena, a seasoned professional with a decade-long tenure in corporate customer relations management, brings a wealth of expertise to her role as a project consultant at Infinity Store.",
    },
    {
      image: "/assets/team/Picture4.png",
      name: "Bibin Lohidaskhan",
      role: "Operations",
      description:
        " Introducing Mr. Bibin, the driving force behind operational brilliance at Infinity Store Interior Design Firm. With a remarkable 18-year journey navigating the intricate landscape of execution and general operations. ",
    },
    {
      image: "/assets/team/Picture5.png",
      name: "Neethu",
      role: "Admin",
      description:
        "Introducing Ms. Neethu, the indispensable backbone of operations at Infinity Store Interior Design Firm with a wealth of experience in administrative roles.",
    },
    {
      image: "/assets/team/Picture6.png",
      name: "Akash",
      role: "Design",
      description:
        " Meet Mr. Akash, the visionary creator at Infinity Store Interior Design Firm, renowned for crafting actionable designs that redefine spaces.  With a blend of creativity and practicality. ",
    },
    // {
    //   image: "/assets/team/Picture7.png",
    //   name: "Jerin C Josh",
    //   role: "Business Development",
    //   description:
    //     " Introducing Ms. Jerin, the innovative force behind strategic growth at Infinity Store Interior Design Firm, with six years of diverse experience spanning content creation and business development across various brands.",
    // },
  ];
  return (
    <div className="py-5 bg-light team1">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-md-7 text-center">
            <h3 className="mb-3">Experienced & Professional Team</h3>
          </div>
        </div>
        <div className="row">
          {teamMembersData.map((member, index) => (
            <div className="col-lg-6 ml-1" key={index}>
              <div className="card card-shadow border-0 mb-4 ">
                <div className="row no-gutters">
                  <div className="col-md-5 pro-pic">
                    <img src={member.image} alt="" style={{objectFit:"cover", height:"290px", width:"100%" }} className="rounded-2"  />
                    <div className="card-img-overlay">
                      <ul className="list-inline position-relative text-center">
                        <li className="list-inline-item">
                          <a
                            href="# "
                            className="text-decoration-none d-block text-white px-1"
                          >
                            
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href=" #"
                            className="text-decoration-none d-block text-white px-1"
                          >
                            <i className="icon-social-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href=" #"
                            className="text-decoration-none d-block text-white px-1"
                          >
                            <i className="icon-social-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href=" #"
                            className="text-decoration-none d-block text-white px-1"
                          >
                            <i className="icon-social-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-7 bg-white">
                    <div className="p-4">
                      <div>
                        <h6 className="mb-1" style={{ fontWeight: "bolder" }}>
                          {member.name}
                        </h6>
                        <p>{member.role}</p>
                      </div>
                      <p style={{ fontSize: "15px" }}>{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

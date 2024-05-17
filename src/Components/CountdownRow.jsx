import React, { useEffect } from "react";
import $ from "jquery";
import "./CountdownRow.css";

const CountdownRow = () => {
  useEffect(() => {
    // Countdown for 100+ Projects
    let projectsCount = 0;
    const projectsInterval = setInterval(() => {
      projectsCount++;
      if (projectsCount <= 100) {
        $("#projects-count").text(projectsCount);
      } else {
        clearInterval(projectsInterval);
      }
    }, 60);

    // Countdown for 20+ Years of experience
    // let experienceCount = 0;
    // const experienceInterval = setInterval(() => {
    //   experienceCount++;
    //   if (parseFloat(experienceCount) <= 99.73) {
    //     $("#experience-count").text(parseFloat(experienceCount) );
    //     console.log(parseFloat(experienceCount))
    //   } else {
    //     clearInterval(experienceInterval);
    //   }
    // }, 100);
    let experienceCount = 0;
    const experienceInterval = setInterval(() => {
      experienceCount++;
      if (parseFloat(experienceCount) <= 99.73) {
        $("#experience-count").text(
          parseFloat(experienceCount) !== 99
            ? parseFloat(experienceCount)
            : "99.73"
        );
       
      } else {
        clearInterval(experienceInterval);
      }
    }, 60);

    // Countdown for 99% Happy clients
    let clientsCount = 0;
    const clientsInterval = setInterval(() => {
      clientsCount++;
      if (clientsCount <= 100) {
        $("#clients-count").text(clientsCount);
      } else {
        clearInterval(clientsInterval);
      }
    }, 50);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(experienceInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <>
      <div className="container text-center " style={{backgroundColor:"#ffffff"}}>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 row-cols-lg-3 g-2 g-lg-3">
          <div className="col ">
            <h2>
              <span>
                <strong id="projects-count">0</strong>
                <strong>+</strong>
              </span>
            </h2>
            <p>Projects</p>
          </div>
          <div className="col">
            <h2>
              <span>
                {" "}
                <strong id="experience-count">0</strong> <strong>%</strong>
              </span>
            </h2>
            <p>Timely completion</p>
          </div>
          <div className="col">
            <h2>
              <span>
                {" "}
                <strong id="clients-count">0</strong> <strong>%</strong>
              </span>
            </h2>
            <p>Customer satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownRow;

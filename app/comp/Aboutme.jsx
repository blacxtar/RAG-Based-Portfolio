import React, { useState } from "react";

import Projects from "./Projects";


import { education, projects } from "@/utils/contants";
import EducationCard from "./EducationCard";

function Aboutme() {
  return (
    <div className="overflow-scroll max-h-[600px] ">
      {/* {Education Section} */}
      <div className="overflow-hidden relative flex flex-col gap-2 md:p-4   text-sm ">
        <h2 className=" text-lg font-quicksand mb-2">Education</h2>
        {education.map((ed) => (
          <div key={ed.id}>
            <EducationCard
              degree={ed.degree}
              schoolName={ed.name}
              image={ed.image}
              link={ed.link}
            />
            <hr className=" mx-4" />
          </div>
        ))}
      </div>

      {/* {Projects} */}
      <div className=" overflow-hidden  relative  p-2 md:p-4  flex flex-col  text-sm ">
        <h2 className=" text-lg font-quicksand mb-2">Projects</h2>
        {projects.map((project, i) => (
          <div key={i}>
            <Projects
              title={project.title}
              description={project.description}
              link={project.link}
              logo={project.logo}
              duration={project.duration}
              info={project.info}
            />
             <hr className=" mx-1 md:mx-5" />
          </div>
        ))}

       
      </div>
    </div>
  );
}

export default Aboutme;

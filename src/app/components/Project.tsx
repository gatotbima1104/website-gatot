import React from "react";
import ProjectLayout from "./layout/ProjectLayout";
import { ProjectList } from "../constant/ProjectsList";

export default function Project() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0A192F] text-white font-geist-mono gap-10 py-5">
      <h2 className='text-3xl py-5 min-w-[80%]'><span className='text-[#59E3C6] text-xl'>03.</span> Project <hr /></h2> 
      {ProjectList.map((el) => {
        return (
          <ProjectLayout
            key={el.key}
            desc={el.desc}
            image={el.image}
            index={el.key}
            tags={el.tags}
            title={el.title}
            deployment={el.deployment}
            github={el.github}
          />
        );
      })}
    </div>
  );
}

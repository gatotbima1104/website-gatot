import React from "react";
import ProjectLayout from "./layout/ProjectLayout";
import { ProjectList } from "../constant/ProjectsList";
import Link from "next/link";
import { generateSlug } from "../utils/Slug";
import Image from "next/image";

export default function Project() {

  // const lists = ProjectList.slice(0,3)
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0A192F] text-white font-geist-mono py-5" id="project">
      <h2 className='text-3xl py-5 min-w-[80%]'><span className='text-[#59E3C6] text-xl'>03.</span> Project <hr /></h2> 
      {/* {lists.map((el) => {
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
      })} */}

<div className="grid sm:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto gap-1 py-5">
        {ProjectList.map((el, idx) => {
          return (
            <Link href={"/portfolio/" + generateSlug(el.title)} key={idx}>
              <div
                className="border rounded-xl hover:scale-110 hover:cursor-pointer hover:transition-all"
                // key={idx}
              >
                <Image
                  alt={el.title}
                  className="w-full object-cover h-48 rounded-xl"
                  src={el.image}
                />
              </div>
            </Link>
          );
        })}
      </div>
      {/* <Link className="pb-5 w-[80%] text-center text-[#59E3C6] hover:cursor-pointer hover:text-blue-600 underline" href={'/portfolio'}>View More Projects</Link> */}
    </div>
  );
}

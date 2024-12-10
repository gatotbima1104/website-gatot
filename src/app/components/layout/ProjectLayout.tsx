import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "../atom/Tag";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

export default function ProjectLayout({
  image,
  index,
  title,
  desc,
  tags,
  deployment,
  github,
}: {
  image: StaticImageData;
  index: number;
  title: string;
  desc: string;
  tags: string[];
  deployment?: string;
  github?: string;
}) {
  const isOdd = index % 2 != 0;

  return (
    <div className={`w-[80%] min-h-[400px] lg:grid grid-cols-2 gap-10 md:flex flex-col space-y-5 sm:pb-5 sm:mb-5 sm:border-b-2 lg:border-none ${!isOdd? 'sm:flex-col-reverse' : ''}`}>
      {isOdd ? (
        <>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              alt={title}
              src={image}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-5">
            <h4
              className={`text-xl ${
                isOdd ? "text-right" : "text-left"
              } border p-3 rounded border-[#59E3C6]`}
            >
              <span className="text-xs text-[#59E3C6]">
                {index < 10 ? `0${index}.` : `0${index}.`}
              </span>{" "}
              {title}
            </h4>
            <p className="text-sm text-justify">{desc}</p>
            <ul className="grid grid-cols-4 gap-4">
              {tags.map((el, _) => {
                return <Tag key={_} text={el} />;
              })}
            </ul>

            <div className="flex gap-5 ml-3">
              <a
                href={deployment}
                target="_blank"
                className="cursor-pointer hover:text-[#59E3C6]"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={github}
                target="_blank"
                className="cursor-pointer hover:text-[#59E3C6]"
              >
                <FaGithubAlt size={19} />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center space-y-5">
            <h4 className="text-xl text-start border p-3 rounded border-[#59E3C6]">
              <span className="text-xs text-[#59E3C6]">
                {index < 10 ? `0${index}.` : `0${index}.`}
              </span>{" "}
              {title}
            </h4>
            <p className="text-sm text-justify">{desc}</p>
            <ul className="grid grid-cols-4 gap-4">
              {tags.map((el, _) => {
                return <Tag key={_} text={el} />;
              })}
            </ul>
            <div className="flex gap-5 ml-3">
              {deployment && (
                <a
                  href={deployment}
                  target="_blank"
                  className="cursor-pointer hover:text-[#59E3C6]"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="cursor-pointer hover:text-[#59E3C6]"
                >
                  <FaGithubAlt size={19} />
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <Image
              alt="project_1"
              src={image}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </>
      )}
    </div>
  );
}

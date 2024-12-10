import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export interface IProject {
  title: string;
  image: StaticImageData;
  desc: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  pathname?: string
}

export default function ProjectDetail(props: IProject) {
  return (
    <div className="w-full mx-auto lg:grid grid-cols-2">
      <div className="flex items-center flex-col sm:py-5 lg:py-0">
        <Link
          href="/"
          className="text-blue-500 hover:underline mb-10 lg:mr-[450px] text-left"
        >
          Back to Home
        </Link>
        <p className="w-[80%] mb-2">{props.pathname}</p>
        <Image
          alt={props.title}
          src={props.image}
          className="w-[80%] object-cover rounded-xl mb-5"
        />
      </div>
      <div className="rounded-lg p-5 mb-5 text-justify mr-5 border sm:ml-5 lg:ml-0">
        <h1 className="text-3xl mb-3 w-[80%]">{props.title}</h1>
        <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What is this
          product?
        </p>
        <p className="text-base mb-5">{props.desc}</p>

        <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What purpose
          does this serve?
        </p>
        <p className="text-base mb-5">{props.situation}</p>

        <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What tasks does
          this product perform?
        </p>
        <p className="text-base mb-5">{props.task}</p>

        <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What actions
          are taken by this product?
        </p>
        <p className="text-base mb-5">{props.action}</p>

        <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What are the
          outcomes of using this product?
        </p>
        <p className="text-base mb-5">{props.result}</p>
      </div>
    </div>
  );
}

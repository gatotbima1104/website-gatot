"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { generateSlug } from "@/app/utils/Slug";
import { ProjectList } from "@/app/constant/ProjectsList";


export default function ProductDetail() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extract the slug from the URL

  // Find the product that matches the slug
  const product = ProjectList.find((item) => generateSlug(item.title) === slug);

  if (!product) {
    return (
      <div className="w-full min-h-[100vh] bg-[#0A192F] text-white font-geist-mono flex items-center justify-center">
        <h1 className="text-2xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100vh] bg-[#0A192F] text-white font-geist-mono pt-5">
      <div className="w-full mx-auto lg:grid grid-cols-2" >
        <div className="flex items-center flex-col sm:py-5 lg:py-0">
            <Link href="/" className="text-blue-500 underline mb-10 lg:mr-[450px] text-left">
            Back to Home
            </Link>
            <p className="w-[80%] mb-2">{pathname}</p>
            <Image
            alt={product.title}
            src={product.image}
            className="w-[80%] object-cover rounded-xl mb-5"
            />
        </div>
        <div className="rounded-lg p-5 mb-5 mr-5 border sm:ml-5 lg:ml-0 ml-5">
            <h1 className="text-3xl mb-3 w-[80%]">{product.title}</h1>
            <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center"><MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What is this product?</p>
            <p className="text-base mb-5">{product.desc}</p>

            <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center"><MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What purpose does this serve?</p>
            <p className="text-base mb-5">{product.situation}</p>

            <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center"><MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What tasks does this product perform?</p>
            <p className="text-base mb-5">{product.task}</p>

            <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center"><MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What actions are taken by this product?</p>
            <p className="text-base mb-5">{product.action}</p>

            <p className="text-[#59E3C6] hover:text-blue-600 text-sm pb-3 flex items-center"><MdOutlineKeyboardDoubleArrowRight className="mr-2" /> What are the outcomes of using this product?</p>
            <p className="text-base mb-5">{product.result}</p>

        </div>
      </div>
    </div>
  );
}

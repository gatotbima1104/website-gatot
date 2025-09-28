"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

import { generateSlug } from "@/app/utils/Slug";
import { ProjectList } from "@/app/constant/ProjectsList";

export default function ProductDetail() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const product = ProjectList.find((item) => generateSlug(item.title) === slug);

  if (!product) {
    return (
      <div className="w-full min-h-[100vh] bg-[#0A192F] text-white font-geist-mono flex items-center justify-center">
        <h1 className="text-2xl">❌ Product not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100vh] bg-[#0A192F] text-white font-geist-mono pb-10">
      <div className="w-[90%] max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Image
            alt={product.title}
            src={product.image}
            width={900}
            height={500}
            className="rounded-2xl shadow-lg object-cover mb-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/5 rounded-xl p-8 shadow-lg space-y-8 pb-5"
        >
          <h1 className="text-4xl font-bold text-[#59E3C6] mb-6">
            {product.title}
          </h1>

          {[
            { label: "What is this product?", value: product.desc },
            { label: "What purpose does this serve?", value: product.situation },
            { label: "What tasks does this product perform?", value: product.task },
            { label: "What actions are taken by this product?", value: product.action },
            { label: "What are the outcomes of using this product?", value: product.result },
          ].map((section, i) => (
            <div key={i}>
              <p className="flex items-center text-[#59E3C6] text-lg mb-2">
                <MdOutlineKeyboardDoubleArrowRight className="mr-2 text-xl" />
                {section.label}
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                {section.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

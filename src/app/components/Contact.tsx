"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const isFormFilled = !form.email || !form.subject || !form.message;

  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_msdc4xo",
        "template_157utxt",
        formElement,
        "FtpzWg9abEKaxGzea"
      )
      .then(() => {
        setForm({
          email: "",
          subject: "",
          message: "",
        });

      })
      .catch((error) => {
        console.error("Failed to send message:", error);
      });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#0A192F] text-white font-geist-mono gap-10 py-10" id="contact">
      <h2 className='text-3xl pt-5 min-w-[80%]'><span className='text-[#59E3C6] text-xl'>05.</span> Contact <hr /></h2> 
      <h2 className="text-4xl font-bold pb-10">Contact me</h2>
      <form
        onSubmit={handleEmail}
        className="flex flex-col justify-center items-center gap-5 min-w-[50%]"
      >
        <label className="pb-5 text-start">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-[#0A192F] border-b-2 min-w-[65%]"
          placeholder="email@example.com"
        />
        <label className="py-5">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="bg-[#0A192F] border-b-2 min-w-[65%]"
          placeholder="your subject"
        />
        <label className="py-5">Message</label>
        <textarea
          value={form.message}
          id="message"
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-[rgb(10,25,47)] border-b-2 min-w-[65%] placeholder:bottom-0 "
          rows={3}
          placeholder="message"
        ></textarea>
        <button
          disabled={isFormFilled}
          type="submit"
          className="py-2 px-4 disabled:text-gray-500 rounded-lg border-[#59E3C6] border border-dashed hover:border-dotted hover:text-[#59E3C6]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

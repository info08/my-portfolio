import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Professional Experience
        </h1>
        <div className="flex-wrap m-1">
          {testimonials.map((testimonial) => (
            <div className="p-4  w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded" style={{textAlign:'justify'}}>
                <div className="flex mb-4">
                  <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                   <h2 className="text-white text-lg title-font font-medium leading-relaxed">
                    {testimonial.name}
                  </h2>
                </div>
                 <p className="leading-relaxed mb-6" style={{marginBottom:'0px'}}><b>Duration : </b>{testimonial.duration}</p>
                 <p className="leading-relaxed mb-6" style={{marginBottom:'0px'}}><b>Role : </b>{testimonial.role}</p>
                 <p className="leading-relaxed mb-6" style={{marginBottom:'0px'}}>{testimonial.quote}</p>
                <a href={testimonial.link} target="_blank" rel="noopener noreferrer" style={{textAlign:'justify'}} className="text-blue-400 hover:text-blue-600 mb-4 inline-block underline hover:no-underline">
                  Get more details here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  direction?: "up" | "down";
}) => {
  const isDown = props.direction === "down";
  return (
    <div className={props.className}>
      <motion.ul
        initial={{ translateY: isDown ? "-50%" : "0%" }}
        animate={{
          translateY: isDown ? "0%" : "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-4 w-[280px] h-[160px] border border-[#F4522A]/20 bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 relative flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
                  style={{
                    borderRadius: '4px',
                  }}
                >
                  <blockquote className="m-0 p-0 relative z-0 flex flex-col h-full">
                    <p className="text-neutral-600 dark:text-neutral-400 leading-snug font-normal m-0 transition-colors duration-300 text-sm line-clamp-3">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-auto pt-2">
                      <img
                        width={32}
                        height={32}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-8 w-8 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-primary/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-4 text-neutral-900 dark:text-white transition-colors duration-300 text-xs">
                          {name}
                        </cite>
                        <span className="text-[10px] leading-3 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialV2() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-[#FAF9F7] py-20 relative overflow-hidden border-b border-[#F4522A]/20"
    >
      {/* Section Dot Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(244, 82, 42, 0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />

      <div className="container px-4 z-10 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display',serif] text-[3rem] text-[#111] mb-2 tracking-tight">
            Client <span className="text-[#F4522A]">Voices</span>
          </h2>
          <p className="text-black/60 font-medium text-lg">
            What our partners say about working with us
          </p>
        </div>

        <div className="relative mt-10 max-w-5xl mx-auto">
          {/* Main Bordered Container */}
          <div className="border border-[#F4522A]/25 rounded bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative z-10">
            {/* Corner Handles */}
            <div className="absolute -top-[4px] -left-[4px] -right-[4px] -bottom-[4px] pointer-events-none z-20"
              style={{
                backgroundImage: `
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A)
                `,
                backgroundSize: '8px 8px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left, top right, bottom left, bottom right'
              }}
            />
            
            {/* Scrolling Area Wrapper */}
            <div 
              className="max-h-[200px] overflow-hidden p-4 flex justify-center gap-6"
              role="region"
              aria-label="Scrolling Testimonials"
            >
              <TestimonialsColumn testimonials={firstColumn} duration={15} direction="up" />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} direction="down" />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

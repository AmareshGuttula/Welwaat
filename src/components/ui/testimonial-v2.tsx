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
    text: "Welwaat helped us dominate the local market with a high-performance site that handles millions of visitors during our peak sales.",
    image: "/testimonials/21.jpg",
    name: "Arjun Mehta",
    role: "",
  },
  {
    text: "The engineering quality is top-notch. Our custom dashboard is a game-changer for our fintech startup's internal operations.",
    image: "/testimonials/22.jpg",
    name: "Deepak Sharma",
    role: "",
  },
  {
    text: "Stunning visual system that works across all our European markets. Clean, minimal, and premium design at its best.",
    image: "/testimonials/23.jpg",
    name: "Luca Rossi",
    role: "",
  },
  {
    text: "They built a sub-second loading experience for our platform, making it accessible even on slower networks across India.",
    image: "/testimonials/26.jpg",
    name: "Rohan Gupta",
    role: "",
  },
  {
    text: "Most professional branding team I've worked with. They delivered a world-class visual language for our US-wide product launch.",
    image: "/testimonials/download (10).jpeg",
    name: "Robert Sullivan",
    role: "",
  },
  {
    text: "We've seen a massive boost in organic traffic from the US and UK. Their technical SEO foundation is built for global scale.",
    image: "/testimonials/download (18).jpeg",
    name: "James Wilson",
    role: "",
  },
  {
    text: "Innovative and reliable. They delivered a complex bespoke application that our customers in London absolutely love.",
    image: "/testimonials/download (19).jpeg",
    name: "Emily Watson",
    role: "",
  },
  {
    text: "Sharp, recognizable identity. Welwaat is our go-to for all high-end digital design work for our New York based clients.",
    image: "/testimonials/download (20).jpeg",
    name: "Thomas Miller",
    role: "",
  },
  {
    text: "99+ PageSpeed score on our global app. The performance difference is night and day compared to our previous agency in California.",
    image: "/testimonials/download (22).jpeg",
    name: "Michael Smith",
    role: "",
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
                  className="p-3.5 w-[280px] h-[160px] border border-[#F4522A]/20 bg-[var(--card-bg)] transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 relative flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
                  style={{
                    borderRadius: '4px',
                  }}
                >
                  <blockquote className="m-0 p-0 relative z-0 flex flex-col h-full">
                    <p className="text-[var(--text-muted)] leading-snug font-normal m-0 transition-colors duration-300 text-sm line-clamp-3">
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
                        <span className="font-bold not-italic tracking-tight leading-tight text-[var(--text-main)] transition-colors duration-300 text-sm">
                          {name}
                        </span>
                        {role && (
                          <span className="text-[10px] leading-3 tracking-tight text-neutral-500 dark:text-neutral-500 mt-0.5 transition-colors duration-300">
                            {role}
                          </span>
                        )}
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
      className="bg-[var(--bg-color)] py-20 relative overflow-hidden border-b border-[#F4522A]/20"
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
          <h2 className="font-['Playfair_Display',serif] text-[3rem] text-[var(--text-main)] mb-2 tracking-tight">
            Client <span className="text-[#F4522A]">Voices</span>
          </h2>
          <p className="text-[var(--text-muted)] font-medium text-lg">
            What our partners say about working with us
          </p>
        </div>

        <div className="relative mt-10 max-w-5xl mx-auto">
          {/* Main Bordered Container */}
          <div className="border border-[#F4522A]/25 rounded bg-[var(--card-bg)] shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative z-10">
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
              className="max-h-[320px] overflow-hidden p-4 flex justify-center gap-4"
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

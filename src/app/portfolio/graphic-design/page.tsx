"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import styles from "./graphic-design.module.css";
import Link from "next/link";
import { Car, Palette, PenTool, Layers, Frame, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GraphicDesignPortfolio() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });
  
  // Move from 0% to 100% width
  const carPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Visual Identity Engineering</span>
            <h1 className={styles.title}>
              Graphic <span className={styles.accent}>Design</span>
            </h1>
            <p className={styles.description}>
              High-performance visual systems and brand identities engineered for 99+ performance, 100% responsiveness, and global market impact.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>SVG</span>
                <span className={styles.statLabel}>Optimized</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4K+</span>
                <span className={styles.statLabel}>Resolution</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Brand</span>
                <span className={styles.statLabel}>Strategy</span>
              </div>
            </div>

            <div className={styles.heroDivider}></div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Architectural Design Blueprint Illustration */}
              <svg viewBox="0 0 500 400" className={styles.blueprintSvg}>
                <defs>
                  <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4522a" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f4522a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background Grid */}
                <path d="M0,50 L500,50 M0,100 L500,100 M0,150 L500,150 M0,200 L500,200 M0,250 L500,250 M0,300 L500,300 M0,350 L500,350" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />
                <path d="M50,0 L50,400 M100,0 L100,400 M150,0 L150,400 M200,0 L200,400 M250,0 L250,400 M300,0 L300,400 M350,0 L350,400 M400,0 L400,400 M450,0 L450,400" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />

                {/* Poster/Canvas Frame */}
                <rect x="80" y="60" width="340" height="280" rx="4" fill="white" stroke="#f4522a" strokeWidth="1.5" strokeOpacity="0.2" />
                
                {/* Geometric Abstract Shapes (Brand Design Mockup) */}
                <motion.path 
                  d="M120,120 L250,120 L185,250 Z" fill="url(#designGrad)" stroke="#f4522a" strokeWidth="1" strokeOpacity="0.3"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="320" cy="180" r="40" fill="rgba(244, 82, 42, 0.03)" stroke="#f4522a" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Color Palette Grid */}
                <rect x="120" y="280" width="30" height="30" rx="2" fill="#f4522a" />
                <rect x="160" y="280" width="30" height="30" rx="2" fill="rgba(244, 82, 42, 0.6)" />
                <rect x="200" y="280" width="30" height="30" rx="2" fill="rgba(244, 82, 42, 0.3)" />
                <rect x="240" y="280" width="30" height="30" rx="2" fill="rgba(244, 82, 42, 0.1)" />
                
                {/* Typography Lines */}
                <rect x="280" y="280" width="100" height="8" rx="4" fill="rgba(0, 0, 0, 0.05)" />
                <rect x="280" y="295" width="80" height="8" rx="4" fill="rgba(0, 0, 0, 0.05)" />
                
                {/* Bezier Handles (Design Tool feel) */}
                <line x1="185" y1="250" x2="185" y2="320" stroke="#f4522a" strokeWidth="0.5" strokeOpacity="0.3" />
                <circle cx="185" cy="320" r="3" fill="#f4522a" opacity="0.5" />
                
                <motion.path 
                  d="M320,140 C360,140 400,180 400,220" stroke="#f4522a" strokeWidth="1.5" fill="none" strokeOpacity="0.2"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </svg>
              
              {/* Floating Tech Labels */}
              <div className={`${styles.techLabel} ${styles.labelNext}`}>Illustrator</div>
              <div className={`${styles.techLabel} ${styles.labelReact}`}>Photoshop</div>
              <div className={`${styles.techLabel} ${styles.labelTS}`}>Figma</div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <PortfolioSection 
          defaultCategory="Graphic Design" 
          hideHeader={true} 
          hideLoadMore={true} 
        />

        {/* Development Roadmap */}
        <section className={styles.roadmapSection} ref={roadmapRef}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Our Process</span>
            <h2>The Creative <span className={styles.accent}>Roadmap.</span></h2>
            <p className={styles.description}>From strategic brand discovery to final asset delivery and global roll-out.</p>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.blueprintAxis}>
            <div className={styles.axisLine}></div>
            
            {/* Desktop Animated Orange Car */}
            <motion.div 
              className={`${styles.animatedCar} ${styles.desktopCar}`} 
              style={{ left: carPosition }}
            >
              <Car size={36} color="white" fill="#f4522a" strokeWidth={1.5} />
            </motion.div>

            {/* Mobile Animated Orange Car */}
            <motion.div 
              className={`${styles.animatedCar} ${styles.mobileCar}`} 
              style={{ top: carPosition }}
            >
              <Car size={36} color="white" fill="#f4522a" strokeWidth={1.5} />
            </motion.div>

            <div className={styles.axisMarks}>
              {[
                "Discovery", 
                "Moodboard", 
                "Concepting", 
                "Refinement", 
                "Visual QA", 
                "Delivery"
              ].map((step, i) => (
                <div className={styles.axisMark} key={i}>
                  <div className={styles.markDot}></div>
                  <div className={styles.markNumber}>0{i + 1}</div>
                  <div className={styles.markLabel}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className={styles.stackSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.stackTitle}>Design <span className={styles.accent}>Toolkit</span></h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.stackCategories}>
            {/* Primary Design Tools */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Industry Standards</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <PenTool size={32} color="#f4522a" />
                  </div>
                  <span>Illustrator</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Layers size={32} color="#f4522a" />
                  </div>
                  <span>Photoshop</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Frame size={32} color="#f4522a" />
                  </div>
                  <span>Figma</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Palette size={32} color="#f4522a" />
                  </div>
                  <span>After Effects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.title}>Ready to <span className={styles.accent}>Stand Out?</span></h2>
            <p className={styles.description}>Let&apos;s build a brand identity that commands attention and defines your future.</p>
            <div className={styles.divider}></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

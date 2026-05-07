"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import styles from "./web-design.module.css";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WebDesignPortfolio() {
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
            <span className={styles.badge}>Bespoke Digital Engineering</span>
            <h1 className={styles.title}>
              Web Design & <span className={styles.accent}>Development</span>
            </h1>
            <p className={styles.description}>
              High-end digital products, bespoke websites, and enterprise platforms engineered for performance and impact.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99+</span>
                <span className={styles.statLabel}>Performance</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Responsive</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>SEO</span>
                <span className={styles.statLabel}>Optimized</span>
              </div>
            </div>

            <div className={styles.heroDivider}></div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Architectural Web Illustration */}
              <svg viewBox="0 0 500 400" className={styles.blueprintSvg}>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4522a" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f4522a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background Grid */}
                <path d="M0,50 L500,50 M0,100 L500,100 M0,150 L500,150 M0,200 L500,200 M0,250 L500,250 M0,300 L500,300 M0,350 L500,350" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />
                <path d="M50,0 L50,400 M100,0 L100,400 M150,0 L150,400 M200,0 L200,400 M250,0 L250,400 M300,0 L300,400 M350,0 L350,400 M400,0 L400,400 M450,0 L450,400" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />

                {/* Main Browser Window Frame */}
                <rect x="50" y="80" width="380" height="260" rx="4" fill="white" stroke="#f4522a" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="50" y="80" width="380" height="30" rx="4" fill="#faf9f7" stroke="#f4522a" strokeWidth="1.5" strokeOpacity="0.2" />
                <circle cx="70" cy="95" r="3" fill="#f4522a" opacity="0.3" />
                <circle cx="85" cy="95" r="3" fill="#f4522a" opacity="0.3" />
                <circle cx="100" cy="95" r="3" fill="#f4522a" opacity="0.3" />

                {/* Layout Components */}
                <rect x="70" y="130" width="100" height="100" rx="2" fill="url(#grad1)" stroke="#f4522a" strokeWidth="1" strokeDasharray="4 2" strokeOpacity="0.5" />
                <rect x="190" y="130" width="220" height="20" rx="2" fill="rgba(244, 82, 42, 0.05)" />
                <rect x="190" y="160" width="220" height="12" rx="2" fill="rgba(0, 0, 0, 0.03)" />
                <rect x="190" y="180" width="180" height="12" rx="2" fill="rgba(0, 0, 0, 0.03)" />
                
                <rect x="70" y="250" width="340" height="60" rx="2" fill="rgba(244, 82, 42, 0.02)" stroke="#f4522a" strokeWidth="1" strokeOpacity="0.1" />
                
                {/* Cursor & Interactive Points */}
                <motion.circle 
                  cx="120" cy="180" r="4" fill="#f4522a" 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path 
                  d="M250,150 L300,200" stroke="#f4522a" strokeWidth="1.5" 
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
              
              {/* Floating Tech Labels */}
              <div className={`${styles.techLabel} ${styles.labelNext}`}>Next.js</div>
              <div className={`${styles.techLabel} ${styles.labelReact}`}>React</div>
              <div className={`${styles.techLabel} ${styles.labelTS}`}>TypeScript</div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <PortfolioSection defaultCategory="Website Design" hideHeader={true} hideLoadMore={true} />

        {/* Development Roadmap */}
        <section className={styles.roadmapSection} ref={roadmapRef}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Our Process</span>
            <h2>The Engineering <span className={styles.accent}>Roadmap.</span></h2>
            <p className={styles.description}>From initial strategic discovery to global deployment and continuous growth.</p>
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
                "Strategy", 
                "Architecture", 
                "Design", 
                "Engineering", 
                "QA Testing", 
                "Deployment"
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
            <h2 className={styles.stackTitle}>Technology <span className={styles.accent}>Stack</span></h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.stackCategories}>
            {/* Design & Prototyping */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Design & UX</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 38 57" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 1 1-19 0z" fill="#1abcfe"/>
                      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
                      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/>
                      <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
                      <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
                    </svg>
                  </div>
                  <span>Figma</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 256 256" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                      <rect width="256" height="256" rx="40" fill="#001e36"/>
                      <path d="M60 186h24v-40h20c24 0 38-12 38-34 0-22-14-34-38-34H60v108zm24-62v-26h18c11 0 16 4 16 11s-5 11-16 11H84zm65 62c-15 0-26-8-26-22h16c1 6 5 10 11 10 6 0 9-3 9-8s-4-7-10-9l-9-4c-11-5-17-11-17-21 0-14 11-22 26-22 15 0 26 8 26 22h-16c-1-6-5-10-11-10-6 0-9 3-9 8s4 7 10 9l9 4c11 5 17 11 17 21-.1 14-11 22-26 22z" fill="#31a8ff"/>
                    </svg>
                  </div>
                  <span>Photoshop</span>
                </div>
              </div>
            </div>

            {/* Frontend Development */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Frontend</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#111111"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
                  </div>
                  <span>Next.js</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                  </div>
                  <span>React</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
                  </div>
                  <span>TypeScript</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                  </div>
                  <span>Tailwind</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#111111"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
                  </div>
                  <span>Framer</span>
                </div>
              </div>
            </div>

            {/* Backend & Data */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Backend & Logic</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#339933"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
                  </div>
                  <span>Node.js</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#336791">
                      <path d="M21.5,14.7c-0.1-0.1-0.1-0.1-0.1-0.1c-0.1-0.3-0.5-0.3-1-0.2c-1.7,0.3-2.3,0.1-2.5,0c1.3-2,2.4-4.5,3-6.8 c0.3-1.1,0.8-3.5,0.1-4.7c0,0-0.1-0.2-0.2-0.2c-1.1-1-3-1.9-5.3-1.9c-1.5,0-2.8,0.3-3.1,0.5C12,1.2,11.5,1.2,11,1.2 c-1.3,0-2.4,0.1-3,0.8c-0.9-0.3-4.8-1.6-7.2,0.1c-1.7,1.2-2.3,2.9-2.2,5.3c0,0.8,0.5,3.3,1.2,5.7c0.5,1.5,0.9,2.7,1.4,3.6 c0.6,1,1.1,1.6,1.7,1.8c0.4,0.1,1.1,0.1,1.9-0.7c0.8-1,1.6-1.8,1.9-2.2c0.4,0.2,0.9,0.4,1.4,0.4c0,0,0,0,0,0.1 c-0.1,0.1-0.2,0.2-0.2,0.3c-0.3,0.4-0.4,0.5-1.5,0.7c-0.3,0.1-1.1,0.2-1.1,0.8c0,0.1,0,0.2,0.1,0.3c0.2,0.4,0.9,0.6,1,0.6 c1.3,0.3,2.5,0.1,3.4-0.7c0,2.2,0.1,4.4,0.3,5.1c0.2,0.6,0.8,1.9,2.5,1.9c0.3,0,0.5,0,0.8-0.1c1.8-0.4,2.6-1.2,2.9-2.9 c0.2-0.9,0.4-2.9,0.5-4.1c0-0.1,0-0.1,0.1-0.1c0,0,0.1,0,0.4,0c0,0,0,0,0,0l0.3,0c0.8,0,1.9-0.1,2.5-0.4 C22.6,16.4,23.8,15.6,21.5,14.7z"/>
                    </svg>
                  </div>
                  <span>PostgreSQL</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>
                  </div>
                  <span>Supabase</span>
                </div>
              </div>
            </div>

            {/* Deployment & Infrastructure */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Deployment</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#111111"><path d="m12 1.608 12 20.784H0Z"/></svg>
                  </div>
                  <span>Vercel</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#111111"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.title}>Ready to <span className={styles.accent}>Build?</span></h2>
            <p className={styles.description}>Let&apos;s create a digital presence that doesn&apos;t just exist, but excels.</p>
            <div className={styles.divider}></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

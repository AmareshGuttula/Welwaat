"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import styles from "./app-dev.module.css";
import Link from "next/link";
import { Car, Smartphone, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AppDevelopmentPortfolio() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });
  
  // Move from 0% to 100% width/height
  const carPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Next-Gen Mobile Engineering</span>
            <h1 className={styles.title}>
              App <span className={styles.accent}>Development</span>
            </h1>
            <p className={styles.description}>
              High-performance iOS, Android, and cross-platform mobile solutions designed to scale your business and engage your users.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>60fps</span>
                <span className={styles.statLabel}>Performance</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Native</span>
                <span className={styles.statLabel}>Feel</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Global</span>
                <span className={styles.statLabel}>Deployment</span>
              </div>
            </div>

            <div className={styles.heroDivider}></div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Architectural Mobile Blueprint Illustration */}
              <svg viewBox="0 0 500 400" className={styles.blueprintSvg}>
                <defs>
                  <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4522a" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f4522a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background Grid */}
                <path d="M0,50 L500,50 M0,100 L500,100 M0,150 L500,150 M0,200 L500,200 M0,250 L500,250 M0,300 L500,300 M0,350 L500,350" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />
                <path d="M50,0 L50,400 M100,0 L100,400 M150,0 L150,400 M200,0 L200,400 M250,0 L250,400 M300,0 L300,400 M350,0 L350,400 M400,0 L400,400 M450,0 L450,400" stroke="rgba(244, 82, 42, 0.05)" strokeWidth="1" />

                {/* iPhone Frame */}
                <rect x="170" y="40" width="160" height="320" rx="20" fill="white" stroke="#f4522a" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="175" y="45" width="150" height="310" rx="16" fill="#faf9f7" stroke="#f4522a" strokeWidth="1" strokeOpacity="0.1" />
                
                {/* Dynamic Notch */}
                <rect x="225" y="55" width="50" height="15" rx="7.5" fill="rgba(244, 82, 42, 0.1)" />
                
                {/* App Content Mockup */}
                <rect x="185" y="85" width="130" height="60" rx="4" fill="url(#appGrad)" stroke="#f4522a" strokeWidth="1" strokeDasharray="4 2" strokeOpacity="0.4" />
                <circle cx="210" cy="115" r="15" fill="rgba(244, 82, 42, 0.1)" stroke="#f4522a" strokeWidth="1" strokeOpacity="0.2" />
                
                <rect x="185" y="155" width="60" height="60" rx="4" fill="rgba(0, 0, 0, 0.02)" />
                <rect x="255" y="155" width="60" height="60" rx="4" fill="rgba(0, 0, 0, 0.02)" />
                
                <rect x="185" y="225" width="130" height="80" rx="4" fill="rgba(244, 82, 42, 0.02)" stroke="#f4522a" strokeWidth="1" strokeOpacity="0.1" />
                
                {/* Animated Interactive Pointers */}
                <motion.circle 
                  cx="250" cy="265" r="4" fill="#f4522a" 
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                
                {/* UI Connections */}
                <motion.path 
                  d="M100,100 Q150,100 170,150" stroke="#f4522a" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.2"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.path 
                  d="M400,300 Q350,300 330,250" stroke="#f4522a" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.2"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </svg>
              
              {/* Floating Tech Labels */}
              <div className={`${styles.techLabel} ${styles.labelNext}`}>React Native</div>
              <div className={`${styles.techLabel} ${styles.labelReact}`}>Flutter</div>
              <div className={`${styles.techLabel} ${styles.labelTS}`}>Swift</div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <PortfolioSection defaultCategory="App Development" hideHeader={true} hideLoadMore={true} />

        {/* Development Roadmap */}
        <section className={styles.roadmapSection} ref={roadmapRef}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Mobile Lifecycle</span>
            <h2>The App <span className={styles.accent}>Roadmap.</span></h2>
            <p className={styles.description}>From initial architectural discovery to App Store launch and continuous optimization.</p>
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
                "UX Design", 
                "Prototyping", 
                "Development", 
                "QA testing", 
                "Store Launch"
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
            {/* Engineering */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Core Engineering</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Smartphone size={32} color="#f4522a" />
                  </div>
                  <span>React Native</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Zap size={32} color="#f4522a" />
                  </div>
                  <span>Flutter</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Shield size={32} color="#f4522a" />
                  </div>
                  <span>Swift</span>
                </div>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <TrendingUp size={32} color="#f4522a" />
                  </div>
                  <span>Kotlin</span>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className={styles.categoryGroup}>
              <h4 className={styles.categoryName}>Infrastructure & Ops</h4>
              <div className={styles.stackGrid}>
                <div className={styles.stackItem}>
                  <div className={styles.stackIcon}>
                    <Sparkles size={32} color="#f4522a" />
                  </div>
                  <span>Firebase</span>
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
            <h2 className={styles.title}>Ready to <span className={styles.accent}>Launch?</span></h2>
            <p className={styles.description}>Let&apos;s build an app that users love and businesses trust.</p>
            <div className={styles.divider}></div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

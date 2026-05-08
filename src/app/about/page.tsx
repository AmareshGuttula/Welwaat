"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { Zap, Shield, Target, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const roadmapSteps = [
    {
      year: "2024",
      title: "The Genesis",
      description: "Welwaat was born out of a passion for simplifying complex digital systems. Founded by Amaresh Guttula, the vision was clear: build brands that are not just visible, but vital."
    },
    {
      year: "2025",
      title: "Innovation & Expansion",
      description: "Integration of AI-driven design workflows and expanding our footprint globally. We redefined how modern brands interact with their audience through immersive digital experiences."
    },
    {
      year: "2026 & Beyond",
      title: "Setting the Standard",
      description: "Continuing to push boundaries in digital architecture, focusing on sustainable, high-performance, and future-proof digital assets for global impact."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <Header />
      
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.bgDots}`}>
        <div className={styles.container}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.badge}
          >
            Behind the Brand
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            Engineering the <span className={styles.accent}>Future</span> <br /> of Digital Brands.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.description}
          >
            We don't just build websites; we create digital architectures that stand the test of time. 
            Focused on minimalist design and maximum impact.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Clients Globally</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statLabel}>Projects Done</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Strategic Designs</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className={`${styles.founderSection} ${styles.bgGrid}`}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.architectCard}
          >
            {/* Technical Detail Overlays */}
            <div className={styles.cardCornerLabelTL}>ARCH-TYPE / 001</div>
            <div className={styles.cardCornerLabelTR}>CO-ORD: 14.8 / 92.4</div>
            <div className={styles.cardCornerLabelBL}>VER: 2024.GNS</div>
            <div className={styles.cardCornerLabelBR}>STATUS: ACTIVE</div>

            <div className={styles.cardContent}>
              <div className={styles.cardMain}>
                <div className={styles.cardHeader}>
                  <span className={styles.labelMono}>FOUNDER & CHIEF ARCHITECT</span>
                  <h2 className={styles.nameModern}>Amaresh Guttula</h2>
                </div>
                
                <div className={styles.bioModern}>
                  <p>
                    Amaresh founded Welwaat with a singular mission: to strip away the noise of the digital world and focus on what truly matters—clarity, performance, and longevity.
                  </p>
                  <p>
                    With a background in engineering and a keen eye for minimalist aesthetics, he has led the company to become a trusted partner for businesses looking to scale their digital presence with integrity.
                  </p>
                </div>
              </div>

              <div className={styles.cardSidebar}>
                <div className={styles.quoteModern}>
                  <div className={styles.quoteAccent}></div>
                  <p>Design is not just what it looks like; it's how it functions at the core.</p>
                </div>

                <div className={styles.cardFooterWide}>
                  <div className={styles.socialGroup}>
                    <a href="https://linkedin.com/in/amareshguttula" target="_blank" rel="noopener noreferrer" className={styles.socialIconMini} aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://instagram.com/amarguttula" target="_blank" rel="noopener noreferrer" className={styles.socialIconMini} aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://x.com/amarguttula" target="_blank" rel="noopener noreferrer" className={styles.socialIconMini} aria-label="X">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                    </a>
                    <a href="https://github.com/amareshguttula" target="_blank" rel="noopener noreferrer" className={styles.socialIconMini} aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                  </div>
                  <div className={styles.serialNumber}>#WLWT-ADM-001</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      {/* Philosophy Section */}
      <section className={`${styles.philosophy} ${styles.bgDots}`}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Our Philosophy</h3>
            <p>
              At Welwaat, we believe that the best solutions are the simplest ones. 
              We approach every project with an architectural mindset.
            </p>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <h4>Precision</h4>
                <p>Every pixel and line of code is intentional, aimed at perfect execution.</p>
              </div>
              <div className={styles.gridItem}>
                <h4>Clarity</h4>
                <p>Removing unnecessary complexity to reveal the core value of your brand.</p>
              </div>
              <div className={styles.gridItem}>
                <h4>Longevity</h4>
                <p>Building scalable systems that evolve alongside your business journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      {/* Roadmap Section */}
      <section className={`${styles.roadmapSection} ${styles.bgGrid}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Timeline</span>
            <h2>The Roadmap</h2>
          </div>

          <div className={styles.roadmapContainer}>
            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.roadmapItem}
              >
                <span className={styles.year}>{step.year}</span>
                <div className={styles.itemContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      {/* Values Section */}
      <section className={`${styles.valuesSection} ${styles.bgDots}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Core Values</span>
            <h2>Our DNA</h2>
          </div>
          <div className={styles.valuesGrid}>
            <motion.div 
              whileHover={{ y: -5 }}
              className={styles.valueCard}
            >
              <Zap className={styles.valueIcon} />
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries of what's possible.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className={styles.valueCard}
            >
              <Shield className={styles.valueIcon} />
              <h3>Integrity</h3>
              <p>Transparent processes and building trust.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className={styles.valueCard}
            >
              <Target className={styles.valueIcon} />
              <h3>Precision</h3>
              <p>Meticulous attention to detail in every line.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className={styles.valueCard}
            >
              <Award className={styles.valueIcon} />
              <h3>Excellence</h3>
              <p>Aiming for perfection in every result.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

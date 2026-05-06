"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { Zap, Shield, Target, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const roadmapSteps = [
    {
      year: "2022",
      title: "The Genesis",
      description: "Welwaat was born out of a passion for simplifying complex digital systems. Founded by Amaresh Guttula, the vision was clear: build brands that are not just visible, but vital."
    },
    {
      year: "2023",
      title: "Expanding Horizons",
      description: "We grew from a small design studio to a full-service digital architecture firm, helping over 50+ businesses establish their digital foundations."
    },
    {
      year: "2024",
      title: "Innovation Era",
      description: "Integration of AI-driven design workflows. We redefined how modern brands interact with their audience through immersive digital experiences."
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Expanding our footprint globally, Welwaat now operates as a distributed powerhouse, delivering world-class design across 3 continents."
    },
    {
      year: "2026 & Beyond",
      title: "Setting the Standard",
      description: "Continuing to push boundaries in web design, focusing on sustainable, high-performance, and future-proof digital assets."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <Header />
      
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
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
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
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
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Creative Awards</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Retention Rate</span>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className={styles.founderSection}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.founderImageWrapper}
          >
            <div className={styles.founderPlaceholder}>
              <svg viewBox="0 0 200 200" width="120" height="120" style={{ opacity: 0.3 }}>
                <rect x="40" y="40" width="120" height="120" fill="none" stroke="#F4522A" strokeWidth="1" />
                <line x1="40" y1="40" x2="160" y2="160" stroke="#F4522A" strokeWidth="1" />
                <line x1="160" y1="40" x2="40" y2="160" stroke="#F4522A" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#F4522A" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.founderText}
          >
            <span className={styles.founderRole}>Founder & Architect</span>
            <h2>Amaresh Guttula</h2>
            <p>
              Amaresh founded Welwaat with a singular mission: to strip away the noise of the digital world and focus on what truly matters—clarity, performance, and longevity.
            </p>
            <p>
              With a background in engineering and a keen eye for minimalist aesthetics, he has led the company to become a trusted partner for businesses looking to scale their digital presence with integrity.
            </p>
            <div className={styles.founderQuote}>
              "Design is not just what it looks like; it's how it functions at the core."
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className={styles.philosophy}>
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
        </section>

        {/* Roadmap Section */}
        <section className={styles.roadmapSection}>
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
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
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
        </section>
      </div>

      <Footer />
    </div>
  );
}

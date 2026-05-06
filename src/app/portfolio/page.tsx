"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./portfolio.module.css";

const sectors = [
  {
    title: "Web Design & Development",
    description: "Custom websites, landing pages, and enterprise platforms built for performance.",
    href: "/portfolio/web-design",
    count: 10,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "High-performance mobile applications for iOS and Android platforms.",
    href: "/portfolio/app-development",
    count: 6,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Brand Identity & Graphic Design",
    description: "Logos, packaging, and visual identity systems that define brands.",
    href: "/portfolio/graphic-design",
    count: 6,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description: "Strategic campaigns and content that drive engagement and growth.",
    href: "/portfolio/social-media",
    count: 3,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "User-centered interfaces and experiences designed for conversion.",
    href: "/portfolio/web-design",
    count: 3,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Our <span className={styles.accent}>Portfolio</span>
            </h1>
            <p className={styles.description}>
              A showcase of our digital excellence, architectural precision, and brand-defining projects.
            </p>
          </div>
        </section>

        {/* Sectors Section */}
        <section className={styles.sectorsSection}>
          <div className={styles.sectorsContainer}>
            <div className={styles.sectorsGrid}>
              {sectors.map((sector, index) => (
                <Link
                  key={index}
                  href={sector.href}
                  className={styles.sectorCard}
                >
                  <div className={styles.sectorIconWrapper}>
                    {sector.icon}
                  </div>
                  <div className={styles.sectorInfo}>
                    <h3 className={styles.sectorName}>{sector.title}</h3>
                    <p className={styles.sectorDesc}>{sector.description}</p>
                  </div>
                  <div className={styles.sectorFooter}>
                    <span className={styles.sectorCount}>{sector.count} Projects</span>
                    <span className={styles.sectorArrow}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


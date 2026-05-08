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
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Graphic & Brand Identity Design",
    description: "High-performance visual systems and brand identities optimized for 99+ speed and SEO impact.",
    href: "/portfolio/graphic-design",
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
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Visual & Content",
    description: "High-performance photography, video editing, and content creation.",
    href: "/portfolio/visual-content",
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
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
            <div className={styles.badgeWrapper}>
              <span className={styles.heroBadge}>Excellence Portfolio</span>
            </div>
            <h1 className={styles.title}>
              Our <span className={styles.accent}>Portfolio.</span>
            </h1>
            <p className={styles.description}>
              A curated showcase of our <span className={styles.textHighlight}>digital excellence</span>, architectural precision, and brand-defining systems engineered for global impact.
            </p>
            <div className={styles.heroDivider}>
              <div className={styles.dividerLine}></div>
              <div className={styles.dividerNode}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                </svg>
              </div>
              <div className={styles.dividerLine}></div>
            </div>
          </div>

          {/* Floating Visual Elements */}
          <div className={styles.floatingNodes}>
            <div className={`${styles.floatNode} ${styles.node1}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className={`${styles.floatNode} ${styles.node2}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </div>
            <div className={`${styles.floatNode} ${styles.node3}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className={styles.sectorsSection}>
          <div className={styles.sectorsContainer}>
            <div className={styles.sectorsGrid}>
              {sectors.map((sector, index) => {
                const isComingSoon = (sector as any).isComingSoon;
                const CardContent = (
                  <>
                    <div className={styles.sectorIconWrapper}>
                      {sector.icon}
                      {isComingSoon && (
                        <div className={styles.sectorCardBadge}>Coming Soon</div>
                      )}
                    </div>
                    <div className={styles.sectorInfo}>
                      <h3 className={styles.sectorName}>{sector.title}</h3>
                      <p className={styles.sectorDesc}>{sector.description}</p>
                    </div>
                    <div className={styles.sectorFooter}>
                      <span className={`${styles.sectorCount} ${isComingSoon ? styles.availableSoonText : ""}`}>
                        {isComingSoon ? (
                          <>
                            <span className={styles.pulseDot}></span>
                            Available Soon
                          </>
                        ) : "View Showcase"}
                      </span>
                      <span className={styles.sectorArrow}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </>
                );

                if (isComingSoon) {
                  return (
                    <div key={index} className={`${styles.sectorCard} ${styles.disabledSectorCard}`}>
                      {CardContent}
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={sector.href}
                    className={styles.sectorCard}
                  >
                    {CardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


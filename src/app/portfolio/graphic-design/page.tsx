import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import styles from "./graphic-design.module.css";
import Link from "next/link";

export default function GraphicDesignPortfolio() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Bespoke Digital Engineering</span>
            <h1 className={styles.title}>
              Graphic <span className={styles.accent}>Design</span>
            </h1>
            <p className={styles.description}>
              Visual storytelling and brand identities that capture attention and build lasting connections.
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
        </section>

        {/* Reverting back to PortfolioSection for the gallery */}
        <PortfolioSection defaultCategory="Brand Identity" hideHeader={true} hideLoadMore={true} />

        {/* Keeping "The Creative Process" section */}
        <section className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <h2>The Creative <span className={styles.accent}>Process</span></h2>
            <p className={styles.description}>From initial concept to pixel-perfect execution.</p>
          </div>
          
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h4>Discovery</h4>
              <p>We dive deep into your brand values, target audience, and market competition.</p>
            </div>
            
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
              </div>
              <h4>Sketching</h4>
              <p>Rapid prototyping and conceptualization of various visual directions.</p>
            </div>
            
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
              </div>
              <h4>Refinement</h4>
              <p>Polishing the chosen direction until every curve and pixel is flawless.</p>
            </div>
            
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>04</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4>Delivery</h4>
              <p>Handing over a complete brand toolkit ready for any platform or medium.</p>
            </div>
          </div>
        </section>

        {/* Keeping "Design Toolkit" section */}
        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <h2>Design <span className={styles.accent}>Toolkit</span></h2>
          </div>
          <div className={styles.toolsGrid}>
            <div className={styles.toolItem}>
              <div className={styles.toolIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#F24E1E"><path d="M12 24c3.314 0 6-2.686 6-6V12h-6c-3.314 0-6 2.686-6 6s2.686 6 6 6z"/><path d="M0 6c0-3.314 2.686-6 6-6h6v12H6c-3.314 0-6-2.686-6-6z"/><path d="M12 0h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V0z"/><path d="M0 18c0-3.314 2.686-6 6-6h6v6c0 3.314-2.686 6-6 6s-6-2.686-6-6z"/><path d="M6 12c3.314 0 6-2.686 6-6S9.314 0 6 0 0 2.686 0 6s2.686 6 6 6z"/></svg>
              </div>
              <span>Figma</span>
            </div>
            <div className={styles.toolItem}>
              <div className={styles.toolIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#FF9A00"><path d="M12 2L2 19.74l2.12 2.26L12 17.5l7.88 4.5L22 19.74z"/></svg>
              </div>
              <span>Illustrator</span>
            </div>
            <div className={styles.toolItem}>
              <div className={styles.toolIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#31A8FF"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <span>Photoshop</span>
            </div>
            <div className={styles.toolItem}>
              <div className={styles.toolIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#FF3366"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <span>InDesign</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.title} style={{ fontSize: '3rem' }}>Ready to <span className={styles.accent}>Stand Out?</span></h2>
          <p className={styles.description}>Let's collaborate to build a brand identity that defines your future.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Design Project
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

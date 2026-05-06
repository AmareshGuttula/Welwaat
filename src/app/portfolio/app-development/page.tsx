import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import styles from "./app-dev.module.css";
import Link from "next/link";

export default function AppDevelopmentPortfolio() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              App <span className={styles.accent}>Development</span>
            </h1>
            <p className={styles.description}>
              High-performance iOS, Android, and cross-platform mobile solutions designed to scale your business and engage your users.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <PortfolioSection defaultCategory="App Development" hideHeader={true} hideLoadMore={true} />

        {/* Core Principles Section */}
        <section className={styles.principlesSection}>
          <div className={styles.sectionHeader}>
            <h2>Core <span className={styles.accent}>Principles</span></h2>
            <p className={styles.description}>We build apps that are not just functional, but exceptional in every dimension.</p>
          </div>
          
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>⚡</div>
              <h3>Performance</h3>
              <p>Optimized code and efficient data handling for a lightning-fast user experience.</p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>🛡️</div>
              <h3>Security</h3>
              <p>Enterprise-grade encryption and security protocols to protect your users' data.</p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>📈</div>
              <h3>Scalability</h3>
              <p>Built with the future in mind, ensuring your app grows seamlessly with your user base.</p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleIcon}>✨</div>
              <h3>Experience</h3>
              <p>Intuitive design and micro-interactions that keep users engaged and coming back.</p>
            </div>
          </div>
        </section>

        {/* Development Lifecycle */}
        <section className={styles.lifecycleSection}>
          <div className={styles.sectionHeader}>
            <h2>Development <span className={styles.accent}>Lifecycle</span></h2>
            <p className={styles.description}>Our systematic approach to building world-class mobile applications.</p>
          </div>
          
          <div className={styles.lifecycleGrid}>
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h4>Discovery</h4>
              <p>Defining project goals, user personas, and core functional requirements.</p>
            </div>
            
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>Creating intuitive interfaces and seamless user journeys through interactive wireframes.</p>
            </div>
            
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h4>Development</h4>
              <p>Writing clean, scalable code using modern frameworks and agile methodologies.</p>
            </div>
            
            <div className={styles.stepCard}>
              <span className={styles.stepNumber}>04</span>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h4>QA & Launch</h4>
              <p>Rigorous testing across devices followed by a smooth deployment to app stores.</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className={styles.stackSection}>
          <div className={styles.sectionHeader}>
            <h2>Technology <span className={styles.accent}>Stack</span></h2>
          </div>
          <div className={styles.stackGrid}>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#61DAFB"><path d="M23.32 10.648a.504.504 0 0 0-.197-.28c-1.357-.926-3.8-1.51-6.126-1.51-2.327 0-4.77.584-6.127 1.51a.504.504 0 0 0-.197.28c-.12.443-.12.923 0 1.365a.504.504 0 0 0 .197.28c1.357.926 3.8 1.51 6.127 1.51s4.77-.584 6.126-1.51a.504.504 0 0 0 .197-.28c.12-.442.12-.922 0-1.365zm-14.657 0a.504.504 0 0 0-.197-.28c-1.357-.926-3.8-1.51-6.127-1.51S-2.42 9.442-3.777 10.368a.504.504 0 0 0-.197.28c-.12.443-.12.923 0 1.365a.504.504 0 0 0 .197.28c1.357.926 3.8 1.51 6.127 1.51s4.77-.584 6.127-1.51a.504.504 0 0 0 .197-.28c.12-.442.12-.922 0-1.365z"/></svg>
              </div>
              <span>React Native</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#45D1FD"><path d="M14.314 0L2.3 12l12.014 12L24 12 14.314 0z"/></svg>
              </div>
              <span>Flutter</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#F05138"><path d="M12 2L2 19.74l2.12 2.26L12 17.5l7.88 4.5L22 19.74z"/></svg>
              </div>
              <span>Swift</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#7F52FF"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <span>Kotlin</span>
            </div>
            <div className={styles.stackItem}>
              <div className={styles.stackIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="#FFCA28"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <span>Firebase</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.title} style={{ fontSize: '3rem' }}>Ready to <span className={styles.accent}>Build Your App?</span></h2>
          <p className={styles.description}>From ideation to the App Store, we're your partner in mobile innovation.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Launch Your App Project
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

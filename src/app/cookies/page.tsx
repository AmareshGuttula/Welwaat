"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../privacy/legal.module.css";

export default function CookiePolicy() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Transparency</span>
            <h1 className={styles.title}>Cookie <span className={styles.accent}>Policy.</span></h1>
            <p className={styles.subtitle}>Last Updated: May 2024</p>
            <div className={styles.divider}></div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies to understand how you use our website, remember your settings, and provide personalized content. We also use third-party analytics cookies to track site performance.
            </p>

            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytical Cookies:</strong> Help us measure and improve site performance.</li>
              <li><strong>Preference Cookies:</strong> Remember your choices (like language or theme).</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
            </p>

            <h2>5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy as technology or legal requirements change. Please check back regularly for updates.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

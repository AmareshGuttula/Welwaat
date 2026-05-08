"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../privacy/legal.module.css";

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Legal & Compliance</span>
            <h1 className={styles.title}>Terms of <span className={styles.accent}>Service.</span></h1>
            <p className={styles.subtitle}>Last Updated: May 2024</p>
            <div className={styles.divider}></div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Welwaat website or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
            </p>

            <h2>2. Services</h2>
            <p>
              Welwaat provides digital engineering, design, and consulting services. We reserve the right to modify or discontinue any part of our services at any time.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including designs, text, and code, is the property of Welwaat or its clients and is protected by copyright laws.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              Welwaat shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services or website.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Hyderabad, Telangana.
            </p>

            <h2>6. Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@welwaat.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

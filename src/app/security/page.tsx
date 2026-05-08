"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../privacy/legal.module.css";

export default function Security() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Trust & Safety</span>
            <h1 className={styles.title}>System <span className={styles.accent}>Security.</span></h1>
            <p className={styles.subtitle}>Our commitment to data integrity and protection.</p>
            <div className={styles.divider}></div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>1. Infrastructure Security</h2>
            <p>
              We use industry-leading cloud providers with high security standards. Our infrastructure is designed for maximum uptime and data protection.
            </p>

            <h2>2. Data Encryption</h2>
            <p>
              All data transmitted to and from our platform is encrypted using SSL/TLS protocols. We ensure that sensitive information is never stored in plain text.
            </p>

            <h2>3. Access Control</h2>
            <p>
              We implement strict access control policies. Access to internal systems is limited to authorized personnel only and requires multi-factor authentication.
            </p>

            <h2>4. Vulnerability Monitoring</h2>
            <p>
              We continuously monitor our systems for vulnerabilities and potential threats. Regular security audits are conducted to maintain the highest level of safety.
            </p>

            <h2>5. Reporting Security Issues</h2>
            <p>
              If you believe you have found a security vulnerability in our platform, please report it to us immediately at security@welwaat.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

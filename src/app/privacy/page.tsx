"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Legal & Compliance</span>
            <h1 className={styles.title}>Privacy <span className={styles.accent}>Policy.</span></h1>
            <p className={styles.subtitle}>Last Updated: May 2024</p>
            <div className={styles.divider}></div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2>1. Introduction</h2>
            <p>
              Welwaat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you visit our website welwaat.com or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you book a meeting, contact us, or sign up for our newsletter. This may include your name, email address, company name, and project details.
            </p>

            <h2>3. How We Use Information</h2>
            <p>
              We use the information we collect to provide and improve our services, communicate with you, and ensure the security of our platform. We do not sell your personal information to third parties.
            </p>

            <h2>4. Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@welwaat.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

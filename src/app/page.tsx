"use client";

import styles from "./page.module.css";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import PortfolioSection from "@/components/PortfolioSection";
import { TestimonialV2 } from "@/components/ui/testimonial-v2";
import BookMeetingButton from "@/components/BookMeetingButton";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.rating}>
          <span className={styles.reviewText}>Trusted by 100+ businesses globally</span>
        </div>

        <h1 className={styles.heading}>
          The foundation behind<br />
          modern <span className={styles.accent}>brands.</span>
        </h1>

        <p className={styles.subtitle}>
          Simple systems. Strong presence. Built to last.
        </p>

        <div className={styles.heroActions}>
          <Link href="/portfolio" className={styles.exploreBtn}>Explore Work</Link>
          <BookMeetingButton className={styles.getStartedBtn} />
        </div>

        <div className={styles.visuals}>
          <svg viewBox="0 0 1000 400" className={styles.linesContainer} preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff5630" stopOpacity="0" />
                <stop offset="100%" stopColor="#ff5630" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ff5630" stopOpacity="0" />
                <stop offset="100%" stopColor="#ff5630" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Left lines */}
            <path d="M0,40 C250,40 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,90 C250,90 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,140 C250,140 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,190 C250,190 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,240 C250,240 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,290 C250,290 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,340 C250,340 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />
            <path d="M0,390 C250,390 400,200 500,200" fill="none" stroke="url(#lineGradLeft)" strokeWidth="1.5" />

            {/* Right lines */}
            <path d="M1000,40 C750,40 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,90 C750,90 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,140 C750,140 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,190 C750,190 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,240 C750,240 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,290 C750,290 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,340 C750,340 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
            <path d="M1000,390 C750,390 600,200 500,200" fill="none" stroke="url(#lineGradRight)" strokeWidth="1.5" />
          </svg>

          {/* Icon Nodes */}
          {/* Top Left - Generic */}
          <div className={styles.iconNode} style={{ top: "22%", left: "20%" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff5630" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M9 12h6M12 9v6" />
            </svg>
          </div>

          {/* Mid Left - Mailchimp approx */}
          <div className={styles.iconNode} style={{ top: "68%", left: "33%" }}>
            <svg viewBox="0 0 24 24" width="32" height="32">
              <circle cx="12" cy="12" r="12" fill="#ffe01b"/>
              <path d="M8 12C8 10 10 8 12 8C14 8 16 10 16 12C16 14 14 16 12 16C10 16 8 14 8 12Z" fill="#241c15"/>
            </svg>
          </div>

          {/* Bot Left - Figma */}
          <div className={styles.iconNode} style={{ top: "85%", left: "20%" }}>
            <svg viewBox="0 0 38 57" width="24" height="24">
              <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1abcfe"/>
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 1 1 0 47.5z" fill="#0acf83"/>
              <path d="M19 0v19h9.5A9.5 9.5 0 1 0 19 0z" fill="#ff7262"/>
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
            </svg>
          </div>

          {/* Center */}
          <div className={styles.centerIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
            </svg>
          </div>

          {/* Top Right - Notion */}
          <div className={styles.iconNode} style={{ top: "22%", left: "80%" }}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M4 6h16v12H4V6z" fill="#fff" stroke="#000" strokeWidth="2" strokeLinejoin="round"/>
              <text x="7" y="16" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#000">N</text>
            </svg>
          </div>

          {/* Mid Right - Evernote approx */}
          <div className={styles.iconNode} style={{ top: "68%", left: "67%" }}>
            <svg viewBox="0 0 24 24" width="32" height="32">
              <rect width="24" height="24" rx="12" fill="#ff4d4d"/>
              <path d="M14 8C14 8 16 10 16 12C16 14 14 16 12 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="10" cy="11" r="1.5" fill="#fff"/>
            </svg>
          </div>

          {/* Bot Right - Slack */}
          <div className={styles.iconNode} style={{ top: "85%", left: "80%" }}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M6 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm2.5 0h-5A2.5 2.5 0 0 0 1 13a2.5 2.5 0 0 0 2.5 2.5h5A2.5 2.5 0 0 0 11 13a2.5 2.5 0 0 0-2.5-2.5z" fill="#36c5f0"/>
              <path d="M13.5 6a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm0 2.5v-5A2.5 2.5 0 0 0 11 1a2.5 2.5 0 0 0-2.5 2.5v5A2.5 2.5 0 0 0 11 11a2.5 2.5 0 0 0 2.5-2.5z" fill="#2eb67d"/>
              <path d="M18 13.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-2.5 0h5A2.5 2.5 0 0 0 23 11a2.5 2.5 0 0 0-2.5-2.5h-5A2.5 2.5 0 0 0 13 11a2.5 2.5 0 0 0 2.5 2.5z" fill="#e01e5a"/>
              <path d="M10.5 18a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zm0-2.5v5A2.5 2.5 0 0 0 13 23a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 13 13a2.5 2.5 0 0 0-2.5 2.5z" fill="#ecb22e"/>
            </svg>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Portfolio Section */}
      <PortfolioSection limit={6} viewAllPath="/portfolio" />

      {/* Testimonials Section */}
      <TestimonialV2 />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </>
  );
}

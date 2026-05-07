"use client";

import React from "react";
import { Monitor, Smartphone, Megaphone, Search, Palette } from "lucide-react";
import styles from "./ServicesSection.module.css";
import Link from "next/link";
import { serviceNameToSlug } from "@/app/services/services-data";

const services = [
  { icon: <Monitor size={24} />, name: "Website Design & Development", highlight: true },
  { icon: <Smartphone size={24} />, name: "App Development" },
  { icon: <Megaphone size={24} />, name: "Social Media Marketing & Management" },
  { icon: <Search size={24} />, name: "SEO & Google Presence" },
  { icon: <Palette size={24} />, name: "Graphic Design" },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services <span className={styles.accent}>We Provide</span></h2>
          <p className={styles.quote}>Make 10X growth with WELWAAT</p>
        </div>

        <div className={styles.minimalGrid}>
          {/* Highlighted Banner Card (Image Replication) */}
          <Link href="/services/website-design-development" className={`${styles.serviceCard} ${styles.highlightedCard}`}>
            <h3 className={styles.heroText}>
              Website <span className={styles.glassText}>Design</span>
              <br />& Development
            </h3>
            <div className={`${styles.cardArrow} ${styles.whiteArrow}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

          {/* Regular Services */}
          {services.filter(s => !s.highlight).map((service, index) => (
            <Link key={index} href={`/services/${serviceNameToSlug[service.name] || "#"}`} className={styles.serviceCard}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <span className={styles.serviceName}>{service.name}</span>
              <div className={styles.cardArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/services" className={styles.viewAllBtn}>
            <span>View All Services</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

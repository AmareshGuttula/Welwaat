"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./services.module.css";
import { useState } from "react";
import {
  Globe, Layout, ShoppingCart, Settings,
  Smartphone, Database, Cpu, Code2,
  Palette, PenTool, Layers, Frame,
  Camera, Video, FileText, Share2,
  Search, Mail, BarChart3,
  ArrowRight, Users, Package,
  Megaphone, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { serviceNameToSlug } from "./services-data";

const categories = [
  {
    id: "web",
    number: "01",
    label: "Web & Digital",
    tagline: "Crafting digital experiences with precision and architectural integrity.",
    services: [
      { name: "Website Design & Development", icon: <Globe size={22} />, desc: "High-end digital products, bespoke websites, and enterprise platforms engineered for performance and impact.", highlighted: true },
      { name: "Landing Page Design", icon: <Layout size={22} />, desc: "Conversion-optimized entry points." },
      { name: "E-commerce Website", icon: <ShoppingCart size={22} />, desc: "Scalable online stores with seamless UX." },
      { name: "Website Redesign", icon: <Layers size={22} />, desc: "Modernize your existing digital presence." },
      { name: "Website Maintenance", icon: <Settings size={22} />, desc: "Ongoing support and performance tuning." }
    ]
  },
  {
    id: "dev",
    number: "02",
    label: "Development",
    tagline: "Building scalable digital engines that power modern innovation.",
    services: [
      { name: "App Development (iOS & Android)", icon: <Smartphone size={22} />, desc: "Native and cross-platform mobile experiences.", highlighted: true },
      { name: "SaaS Product Development", icon: <Cpu size={22} />, desc: "Zero-to-one product engineering." },
      { name: "Web App Development", icon: <Code2 size={22} />, desc: "Complex web applications at scale." },
      { name: "API & Backend Development", icon: <Database size={22} />, desc: "Robust server-side architectures." }
    ]
  },
  {
    id: "design",
    number: "03",
    label: "Design & Branding",
    tagline: "Defining the visual DNA of brands that stand the test of time.",
    services: [
      { name: "UI/UX Design", icon: <Frame size={22} />, desc: "User-centric interfaces that convert.", highlighted: true },
      { name: "Graphic & Brand Identity Design", icon: <Palette size={22} />, desc: "High-performance visual systems, bespoke brand DNA, and strategic design architecture.", highlighted: true },
      { name: "Logo Design", icon: <PenTool size={22} />, desc: "Timeless marks and symbols." },
      { name: "Personal Branding", icon: <Users size={22} />, desc: "Build your personal digital identity." },
      { name: "Packaging Design", icon: <Package size={22} />, desc: "Product-first packaging design." }
    ]
  },
  {
    id: "content",
    number: "04",
    label: "Visual & Content",
    tagline: "Capturing stories through high-performance imagery and media.",
    services: [
      { name: "Video Editing & Reels", icon: <Video size={22} />, desc: "Scroll-stopping video content.", highlighted: true },
      { name: "Model Photography", icon: <Camera size={22} />, desc: "High-end portrait and fashion shoots." },
      { name: "Product Photography", icon: <Camera size={22} />, desc: "E-commerce and catalog-ready photos." },
      { name: "Content Writing", icon: <FileText size={22} />, desc: "SEO-driven articles and blogs." },
      { name: "Copywriting", icon: <PenTool size={22} />, desc: "Words that sell." }
    ]
  },
  {
    id: "growth",
    number: "05",
    label: "Marketing & Growth",
    tagline: "Accelerating your digital reach with strategic marketing architectures.",
    services: [
      { name: "Social Media Marketing & Management", icon: <Share2 size={22} />, desc: "Full-service platform management and campaign-driven growth.", highlighted: true },
      { name: "SEO & Google Presence", icon: <Search size={22} />, desc: "Rank higher where customers look." },
      { name: "Email Marketing", icon: <Mail size={22} />, desc: "Automated nurture sequences." },
      { name: "Paid Ads (Meta & Google)", icon: <BarChart3 size={22} />, desc: "High-ROI performance campaigns." }
    ]
  }
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState("web");
  const active = categories.find(c => c.id === activeId) || categories[0];

  return (
    <div className={styles.servicesPage}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Our Capabilities</span>
          <h1 className={styles.title}>
            Services built to<br />
            <span className={styles.accent}>scale your vision.</span>
          </h1>
          <p className={styles.heroDesc}>
            From first pixel to global launch — we architect, design, build, and grow digital products that define industries.
          </p>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Services</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Sectors</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className={styles.tabsSection}>
        <div className={styles.tabsWrapper}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ""}`}
            >
              <span className={styles.tabNumber}>{cat.number}</span>
              <span className={styles.tabLabel}>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Active Category Content ── */}
      <section className={styles.categorySection}>
        <div className={styles.categoryHeader}>
          <div className={styles.categoryMeta}>
            <span className={styles.categoryNumber}>{active.number}</span>
            <h2 className={styles.categoryTitle}>{active.label}</h2>
          </div>
          <p className={styles.categoryTagline}>{active.tagline}</p>
        </div>

        {/* Services List */}
        <div className={styles.servicesList}>
          {active.services.map((svc, idx) => (
            <Link
              key={idx}
              href={`/services/${serviceNameToSlug[svc.name] || "#"}`}
              className={`${styles.serviceRow} ${svc.highlighted ? styles.serviceRowFeatured : ""}`}
            >
              <div className={styles.serviceLeft}>
                <div className={styles.serviceIcon}>{svc.icon}</div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceName}>{svc.name}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </div>
              </div>
              <div className={styles.serviceRight}>
                {svc.highlighted && <span className={styles.featuredBadge}>Popular</span>}
                <ChevronRight size={20} className={styles.serviceArrow} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── All Services Overview ── */}
      <section className={styles.overviewSection}>
        <div className={styles.overviewHeader}>
          <h2 className={styles.overviewTitle}>
            All <span className={styles.accent}>Services</span> at a Glance
          </h2>
        </div>

        <div className={styles.overviewGrid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.overviewCard}>
              <div className={styles.overviewCardHeader}>
                <span className={styles.overviewNumber}>{cat.number}</span>
                <h3 className={styles.overviewCardTitle}>{cat.label}</h3>
              </div>
              <ul className={styles.overviewList}>
                {cat.services.map((svc, i) => (
                  <li key={i}>
                    <Link
                      href={`/services/${serviceNameToSlug[svc.name] || "#"}`}
                      className={styles.overviewLink}
                    >
                      {svc.icon}
                      <span>{svc.name}</span>
                      <ArrowRight size={14} className={styles.overviewArrow} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
}

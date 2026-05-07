"use client";

import styles from "./ServicesOverview.module.css";
import { 
  Globe, Layout, ShoppingCart, Settings,
  Smartphone, Database, Cpu, Code2,
  Palette, PenTool, Layers, Frame,
  Camera, Video, FileText, Share2,
  Search, Mail, BarChart3,
  ArrowRight, Users, Package,
  Megaphone
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "web",
    number: "01",
    label: "Web & Digital",
    icon: <Globe size={18} />,
    services: [
      { name: "Website Design & Development", slug: "website-design-development" },
      { name: "Landing Page Design", slug: "landing-page-design" },
      { name: "E-commerce Website", slug: "e-commerce-website" },
      { name: "Website Redesign", slug: "website-design-development" },
      { name: "Website Maintenance", slug: "website-design-development" }
    ]
  },
  {
    id: "dev",
    number: "02",
    label: "Development",
    icon: <Cpu size={18} />,
    services: [
      { name: "App Development (iOS & Android)", slug: "app-development" },
      { name: "SaaS Product Development", slug: "saas-product-development" },
      { name: "Web App Development", slug: "saas-product-development" },
      { name: "API & Backend Development", slug: "saas-product-development" }
    ]
  },
  {
    id: "design",
    number: "03",
    label: "Design & Branding",
    icon: <Palette size={18} />,
    services: [
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "Graphic & Brand Identity Design", slug: "brand-identity-design" },
      { name: "Logo Design", slug: "brand-identity-design" },
      { name: "Personal Branding", slug: "brand-identity-design" },
      { name: "Packaging Design", slug: "brand-identity-design" }
    ]
  },
  {
    id: "content",
    number: "04",
    label: "Visual & Content",
    icon: <Video size={18} />,
    services: [
      { name: "Model Photography", slug: "social-media-management" },
      { name: "Product Photography", slug: "social-media-management" },
      { name: "Content Writing", slug: "social-media-management" },
      { name: "Video Editing & Reels", slug: "social-media-management" },
      { name: "Copywriting", slug: "social-media-management" }
    ]
  },
  {
    id: "growth",
    number: "05",
    label: "Marketing & Growth",
    icon: <Share2 size={18} />,
    services: [
      { name: "Social Media Marketing & Management", slug: "social-media-management" },
      { name: "SEO & Google Presence", slug: "seo-google-presence" },
      { name: "Email Marketing", slug: "seo-google-presence" },
      { name: "Paid Ads (Meta & Google)", slug: "seo-google-presence" }
    ]
  }
];

export default function ServicesOverview() {
  return (
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
              <span className={styles.overviewIcon}>{cat.icon}</span>
              <h3 className={styles.overviewCardTitle}>{cat.label}</h3>
            </div>
            <ul className={styles.overviewList}>
              {cat.services.map((svc, i) => (
                <li key={i}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className={styles.overviewLink}
                  >
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
  );
}

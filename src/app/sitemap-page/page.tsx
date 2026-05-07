import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sitemapData = [
  { group: "Main", links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]},
  { group: "Services", links: [
    { name: "All Services", href: "/services" },
    { name: "Website Design & Development", href: "/services/website-design-development" },
    { name: "Landing Page Design", href: "/services/landing-page-design" },
    { name: "E-commerce Website", href: "/services/e-commerce-website" },
    { name: "App Development", href: "/services/app-development" },
    { name: "SaaS Product Development", href: "/services/saas-product-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Graphic & Brand Identity Design", href: "/services/brand-identity-design" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "SEO & Google Presence", href: "/services/seo-google-presence" },
  ]},
  { group: "Portfolio", links: [
    { name: "All Work", href: "/portfolio" },
    { name: "Web Design", href: "/portfolio/web-design" },
    { name: "App Development", href: "/portfolio/app-development" },
    { name: "Graphic Design", href: "/portfolio/graphic-design" },
    { name: "Social Media", href: "/portfolio/social-media" },
  ]},
  { group: "Company", links: [
    { name: "Careers", href: "/career" },
    { name: "Partners", href: "/partners" },
    { name: "Press Kit", href: "/press-kit" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
  ]},
  { group: "Resources", links: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Changelog", href: "/changelog" },
    { name: "Community", href: "/community" },
  ]},
];

export default function SitemapPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Navigation</span>
          <h1 className={styles.title}>Site <span className={styles.accent}>Map.</span></h1>
          <p className={styles.heroDesc}>A complete overview of every page on the WELWAAT website. Find exactly what you're looking for.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid3}>
            {sitemapData.map((group, i) => (
              <div key={i} className={styles.sitemapGroup}>
                <div className={styles.sitemapGroupTitle}>{group.group}</div>
                {group.links.map((link, j) => (
                  <Link key={j} href={link.href} className={styles.sitemapLink}>
                    <ChevronRight size={14} />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

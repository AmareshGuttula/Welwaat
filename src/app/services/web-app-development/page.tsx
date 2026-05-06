"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allServices } from "../services-data";
import styles from "../[slug]/service-detail.module.css";
import Link from "next/link";
import {
  ArrowRight, Check, ChevronRight,
  Zap, Target, Layers, Wrench
} from "lucide-react";

// Brand Icon Mapping (Same as dynamic page)
const brandIcons: Record<string, React.ReactNode> = {
  figma: (
    <svg viewBox="0 0 38 57" width="28" height="28">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 1 1-19 0z" fill="#1abcfe"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/>
      <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
      <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
    </svg>
  ),
  "next.js": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#111111"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
  ),
  "nextjs": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#111111"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#111111"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#339933"><path d="M11.996 0c-.394 0-.788.106-1.13.315L2.13 5.37C1.442 5.79.878 6.77.878 7.575v10.1c0 .805.564 1.785 1.252 2.205l8.736 5.055c.691.4 1.822.4 2.513 0l8.736-5.055c.691-.42 1.252-1.4 1.252-2.205v-10.1c0-.805-.561-1.785-1.252-2.205L13.38.315C13.037.106 12.483 0 11.996 0zm-.016 3.125c.162 0 .324.043.466.126l7.11 4.11c.282.164.513.565.513.89v8.22c0 .326-.23.727-.513.89l-7.11 4.11a.952.952 0 0 1-.933 0l-7.11-4.11c-.282-.163-.513-.564-.513-.89V8.25c0-.325.23-.726.513-.89l7.11-4.11c.142-.083.304-.125.466-.125z"/></svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#111111"><path d="m12 1.608 12 20.784H0Z"/></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#111111"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ),
  sentry: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#362D59"><path d="M12.012 3.018c-.372 0-.74.14-1.02.42l-5.6 5.6c-.56.56-.56 1.48 0 2.04l2.58 2.58-4.62 4.62c-.56.56-.56 1.48 0 2.04l1.02 1.02c.56.56 1.48.56 2.04 0l4.62-4.62 2.58 2.58c.56.56 1.48.56 2.04 0l5.6-5.6c.56-.56.56-1.48 0-2.04l-2.58-2.58 4.62-4.62c.56-.56.56-1.48 0-2.04l-1.02-1.02c-.56-.56-1.48-.56-2.04 0l-4.62 4.62-2.58-2.58c-.28-.28-.648-.42-1.02-.42z"/></svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.7a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.7z"/></svg>
  )
};

export default function WebAppDevelopmentPage() {
  const service = allServices["web-app-development"];

  if (!service) {
    return <div>Service not found</div>;
  }

  // Split name for creative styling
  const words = service.name.split(" ");
  const lastWord = words.pop();
  const firstWords = words.join(" ");

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/services" className={styles.breadcrumbLink}>Services</Link>
              <ChevronRight size={14} />
              <span className={styles.breadcrumbCurrent}>{service.category}</span>
            </div>

            <h1 className={styles.heroTitle}>
              {firstWords}{" "}
              <span className={styles.accent}>{lastWord}</span>
            </h1>

            <p className={styles.heroDesc}>{service.heroDescription}</p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta}>
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <span className={styles.heroCategoryTag}>{service.category}</span>
            </div>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutLeft}>
                <span className={styles.sectionLabel}>Technical Overview</span>
                <h2 className={styles.sectionTitle}>
                  Building for <span className={styles.accent}>Performance.</span>
                </h2>
              </div>
              <div className={styles.aboutRight}>
                <p className={styles.aboutText}>{service.fullDescription}</p>
                <div className={styles.featuresTags}>
                  {service.features.map((f, i) => (
                    <span key={i} className={styles.featureTag}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Client Goals ── */}
        <section className={styles.goalsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCenter}>
              <span className={styles.sectionLabel}>Client Vision</span>
              <h2 className={styles.sectionTitle}>
                What We <span className={styles.accent}>Achieve.</span>
              </h2>
            </div>

            <div className={styles.goalsGrid}>
              {service.clientGoals.map((goal, i) => (
                <div key={i} className={styles.goalCard}>
                  <div className={styles.goalNumber}>0{i + 1}</div>
                  <div className={styles.goalContent}>
                    <Check size={20} className={styles.goalCheck} />
                    <span className={styles.goalText}>{goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCenter}>
              <span className={styles.sectionLabel}>Execution Roadmap</span>
              <h2 className={styles.sectionTitle}>
                From Logic to <span className={styles.accent}>Scale.</span>
              </h2>
            </div>

            <div className={styles.processTimeline}>
              {service.process.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <div className={styles.processMarker}>
                    <div className={styles.processDot} />
                    {i < service.process.length - 1 && <div className={styles.processLine} />}
                  </div>
                  <div className={styles.processCard}>
                    <span className={styles.processStepLabel}>Phase {String(i + 1).padStart(2, "0")}</span>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack ── */}
        <section className={styles.stackSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCenter}>
              <span className={styles.sectionLabel}>Technology Stack</span>
              <h2 className={styles.sectionTitle}>
                Professional <span className={styles.accent}>Pipeline.</span>
              </h2>
            </div>

            <div className={styles.stackCategories}>
              {service.categorizedTools?.map((group, gIdx) => (
                <div key={gIdx} className={styles.categoryGroup}>
                  <h4 className={styles.categoryName}>{group.category}</h4>
                  <div className={styles.stackGrid}>
                    {group.items.map((item, i) => {
                      const iconKey = item.name.toLowerCase();
                      const brandIcon = brandIcons[iconKey] || brandIcons.default;
                      
                      return (
                        <div key={i} className={styles.stackItem}>
                          <div className={styles.stackIcon}>
                            {brandIcon}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

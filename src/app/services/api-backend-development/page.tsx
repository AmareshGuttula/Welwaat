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

// Brand Icon Mapping
const brandIcons: Record<string, React.ReactNode> = {
  node: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#339933"><path d="M11.996 0c-.394 0-.788.106-1.13.315L2.13 5.37C1.442 5.79.878 6.77.878 7.575v10.1c0 .805.564 1.785 1.252 2.205l8.736 5.055c.691.4 1.822.4 2.513 0l8.736-5.055c.691-.42 1.252-1.4 1.252-2.205v-10.1c0-.805-.561-1.785-1.252-2.205L13.38.315C13.037.106 12.483 0 11.996 0zm-.016 3.125c.162 0 .324.043.466.126l7.11 4.11c.282.164.513.565.513.89v8.22c0 .326-.23.727-.513.89l-7.11 4.11a.952.952 0 0 1-.933 0l-7.11-4.11c-.282-.163-.513-.564-.513-.89V8.25c0-.325.23-.726.513-.89l7.11-4.11c.142-.083.304-.125.466-.125z"/></svg>
  ),
  db: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#336791"><path d="M21.5,14.7c-0.1-0.1-0.1-0.1-0.1-0.1c-0.1-0.3-0.5-0.3-1-0.2c-1.7,0.3-2.3,0.1-2.5,0c1.3-2,2.4-4.5,3-6.8 c0.3-1.1,0.8-3.5,0.1-4.7c0,0-0.1-0.2-0.2-0.2c-1.1-1-3-1.9-5.3-1.9c-1.5,0-2.8,0.3-3.1,0.5C12,1.2,11.5,1.2,11,1.2 c-1.3,0-2.4,0.1-3,0.8c-0.9-0.3-4.8-1.6-7.2,0.1c-1.7,1.2-2.3,2.9-2.2,5.3c0,0.8,0.5,3.3,1.2,5.7c0.5,1.5,0.9,2.7,1.4,3.6 c0.6,1,1.1,1.6,1.7,1.8c0.4,0.1,1.1,0.1,1.9-0.7c0.8-1,1.6-1.8,1.9-2.2c0.4,0.2,0.9,0.4,1.4,0.4c0,0,0,0,0,0.1 c-0.1,0.1-0.2,0.2-0.2,0.3c-0.3,0.4-0.4,0.5-1.5,0.7c-0.3,0.1-1.1,0.2-1.1,0.8c0,0.1,0,0.2,0.1,0.3c0.2,0.4,0.9,0.6,1,0.6 c1.3,0.3,2.5,0.1,3.4-0.7c0,2.2,0.1,4.4,0.3,5.1c0.2,0.6,0.8,1.9,2.5,1.9c0.3,0,0.5,0,0.8-0.1c1.8-0.4,2.6-1.2,2.9-2.9 c0.2-0.9,0.4-2.9,0.5-4.1c0-0.1,0-0.1,0.1-0.1c0,0,0.1,0,0.4,0c0,0,0,0,0,0l0.3,0c0.8,0,1.9-0.1,2.5-0.4 C22.6,16.4,23.8,15.6,21.5,14.7z"/></svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#2496ED"><path d="M13.983 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.95 0h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.95 0h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.95-2.95h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.308c0-.102.084-.186.186-.186z"/></svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#326CE5"><path d="M12 0L2.1 4.5l1.6 11.2L12 24l8.3-8.3 1.6-11.2L12 0zm0 3.3l6.5 3L17.1 14 12 19.1 6.9 14 5.5 6.3l6.5-3z"/></svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#FF9900"><path d="M11.758 16.536c-1.32.228-2.652.336-3.936.336-1.344 0-2.436-.18-3.324-.54-1.044-.42-1.584-1.092-1.584-1.992 0-.852.48-1.56 1.344-2.028.984-.528 2.376-.804 4.092-.804.516 0 1.056.024 1.62.06V9.456c0-.528-.108-.948-.336-1.248-.3-.408-.852-.6-1.656-.6-1.08 0-2.316.324-3.528.936l-.684-1.356c1.392-.768 2.892-1.152 4.476-1.152 1.488 0 2.592.36 3.312 1.056.66.624.996 1.548.996 2.76v5.82c0 1.236.084 2.22.252 2.976h-1.74l-.108-.912h-.036c-.528.624-1.344.972-2.328.972-.756 0-1.416-.204-1.92-.612-.492-.408-.744-.948-.744-1.608 0-.744.324-1.344.948-1.764.696-.468 1.644-.732 2.784-.816l2.1-.144v-1.332zm-1.896 1.32c.564 0 1.056-.12 1.488-.348.432-.24.744-.564.936-.972V14.5l-1.668.108c-.768.048-1.38.168-1.848.36-.456.192-.696.504-.696.936 0 .384.156.684.444.888.276.216.744.312 1.344.312z"/></svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.7a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.7z"/></svg>
  )
};

export default function ApiBackendDevelopmentPage() {
  const service = allServices["api-backend-development"];

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
                <span className={styles.sectionLabel}>Backend Excellence</span>
                <h2 className={styles.sectionTitle}>
                  The Engine of <span className={styles.accent}>Innovation.</span>
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
              <span className={styles.sectionLabel}>Project Outcomes</span>
              <h2 className={styles.sectionTitle}>
                Built for <span className={styles.accent}>Reliability.</span>
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
              <span className={styles.sectionLabel}>Engineering Roadmap</span>
              <h2 className={styles.sectionTitle}>
                From Schema to <span className={styles.accent}>Security.</span>
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
                Robust <span className={styles.accent}>Infrastructure.</span>
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

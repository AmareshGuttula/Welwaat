import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { GitCommit, Sparkles, Bug, Rocket } from "lucide-react";
import ServicesOverview from "@/components/ServicesOverview";

const logs = [
  { version: "v2.0.0", date: "May 2026", title: "Complete Platform Redesign", type: "major", icon: <Rocket size={16} />, desc: "We've completely overhauled the WELWAAT platform with a new design system, improved performance, and enhanced services." },
  { version: "v1.5.2", date: "April 2026", title: "Performance Improvements", type: "minor", icon: <Sparkles size={16} />, desc: "Optimized image loading and reduced bundle size for faster page loads." },
  { version: "v1.5.1", date: "March 2026", title: "Bug Fixes", type: "patch", icon: <Bug size={16} />, desc: "Fixed an issue with the contact form submission on mobile devices." },
  { version: "v1.5.0", date: "February 2026", title: "New Service Added", type: "minor", icon: <Sparkles size={16} />, desc: "Introduced our new SaaS Product Development service." },
];

export default function ChangelogPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Updates</span>
          <h1 className={styles.title}>Change<span className={styles.accent}>log.</span></h1>
          <p className={styles.heroDesc}>Track all new features, improvements, and bug fixes for the WELWAAT platform.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {logs.map((log, i) => (
                    <div key={i} className={styles.timelineItem}>
                        <div className={styles.timelineDot}>
                            <div className={styles.dot} />
                            {i < logs.length - 1 && <div className={styles.line} />}
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineDate}>{log.date}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span className={styles.tag} style={{ padding: '2px 8px', fontSize: '0.65rem' }}>{log.version}</span>
                                <h3 className={styles.timelineTitle} style={{ margin: 0 }}>{log.title}</h3>
                            </div>
                            <p className={styles.timelineDesc}>{log.desc}</p>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '0.8rem', marginTop: '12px' }}>
                                {log.icon} <span style={{ textTransform: 'capitalize' }}>{log.type} update</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <ServicesOverview />
      
      <Footer />
    </div>
  );
}

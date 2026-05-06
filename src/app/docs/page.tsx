import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { Book, Code, Puzzle, Settings, ChevronRight } from "lucide-react";
import ServicesOverview from "@/components/ServicesOverview";
import Link from "next/link";

const docs = [
  { title: "Getting Started", desc: "Basic concepts, setup, and first steps.", icon: <Book size={18} /> },
  { title: "API Reference", desc: "Detailed API endpoints and parameters.", icon: <Code size={18} /> },
  { title: "Integrations", desc: "Connecting with third-party tools.", icon: <Puzzle size={18} /> },
  { title: "Configuration", desc: "Advanced settings and environment vars.", icon: <Settings size={18} /> },
];

export default function DocumentationPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Developer Resources</span>
          <h1 className={styles.title}>Documentation.</h1>
          <p className={styles.heroDesc}>Everything you need to integrate, build, and scale with WELWAAT's digital infrastructure.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {docs.map((doc, i) => (
              <div key={i} className={styles.listItem}>
                <div className={styles.listLeft}>
                  <div className={styles.listIcon}>{doc.icon}</div>
                  <div>
                    <div className={styles.listTitle}>{doc.title}</div>
                    <div className={styles.listMeta}>{doc.desc}</div>
                  </div>
                </div>
                <ChevronRight size={18} className={styles.listArrow} />
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

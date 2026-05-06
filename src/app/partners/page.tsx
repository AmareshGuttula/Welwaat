import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { Handshake, Globe, Shield, Zap, Star, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import ServicesOverview from "@/components/ServicesOverview";

const partners = [
  { name: "Technology Partners", desc: "We integrate with leading platforms to deliver cutting-edge solutions.", icon: <Zap size={22} />, items: ["Vercel", "AWS", "Google Cloud", "Shopify Plus"] },
  { name: "Agency Partners", desc: "Collaborating with top creative studios and digital agencies globally.", icon: <Globe size={22} />, items: ["Design Studios", "Media Agencies", "PR Firms", "Growth Agencies"] },
  { name: "Strategic Alliances", desc: "Long-term partnerships that drive innovation and mutual growth.", icon: <Shield size={22} />, items: ["Enterprise Clients", "Venture Capital", "Incubators", "Universities"] },
];

export default function PartnersPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Partnerships</span>
          <h1 className={styles.title}>Our <span className={styles.accent}>Partners.</span></h1>
          <p className={styles.heroDesc}>We believe in the power of collaboration. Our ecosystem of partners enables us to deliver world-class digital solutions at scale.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Partner Ecosystem</span>
          <h2 className={styles.sectionTitle}>How We <span className={styles.accent}>Collaborate.</span></h2>
          <div className={styles.grid3}>
            {partners.map((p, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{p.icon}</div>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {p.items.map((item, j) => (
                    <span key={j} className={styles.tag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Become a Partner</span>
          <h2 className={styles.sectionTitle}>Join Our <span className={styles.accent}>Network.</span></h2>
          <div className={styles.grid2}>
            {[
              { title: "Referral Program", desc: "Earn commissions by referring clients to our services. Simple, transparent, rewarding.", icon: <Star size={22} /> },
              { title: "White Label Services", desc: "Offer our design and development capabilities under your own brand.", icon: <Handshake size={22} /> },
            ].map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { Briefcase, TrendingUp, ChevronRight } from "lucide-react";
import ServicesOverview from "@/components/ServicesOverview";

const studies = [
  { title: "Scaling a D2C Brand from $0 to $2M Revenue", industry: "E-Commerce", services: ["Website Design", "SEO", "Paid Ads"], result: "340% increase in organic traffic" },
  { title: "Enterprise SaaS Dashboard Redesign", industry: "Technology", services: ["UI/UX Design", "Web App Development"], result: "52% improvement in user retention" },
  { title: "National Restaurant Chain Digital Transformation", industry: "Food & Beverage", services: ["Brand Identity", "Social Media", "Website"], result: "200+ locations onboarded digitally" },
  { title: "Fintech App Launch: Zero to 50K Users", industry: "Finance", services: ["App Development", "UI/UX Design"], result: "50K users in first 3 months" },
  { title: "Global Fashion Brand Social Strategy", industry: "Fashion", services: ["Social Media Management", "Content Writing"], result: "5M+ monthly impressions" },
  { title: "Real Estate Platform Complete Overhaul", industry: "Real Estate", services: ["Website Redesign", "SEO"], result: "180% increase in lead generation" },
];

export default function CaseStudiesPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Proven Results</span>
          <h1 className={styles.title}>Case <span className={styles.accent}>Studies.</span></h1>
          <p className={styles.heroDesc}>Real projects, real results. See how we've helped businesses across industries achieve measurable growth.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            {studies.map((study, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}><Briefcase size={22} /></div>
                <span className={styles.tag} style={{ marginBottom: '16px' }}>{study.industry}</span>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardDesc} style={{ marginBottom: '16px' }}>
                  Services: {study.services.join(" · ")}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f4522a', fontWeight: 700, fontSize: '0.88rem' }}>
                  <TrendingUp size={16} />
                  <span>{study.result}</span>
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

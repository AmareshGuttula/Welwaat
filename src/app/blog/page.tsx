import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { PenTool, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import ServicesOverview from "@/components/ServicesOverview";

const posts = [
  { title: "Why Your Brand Needs a Digital-First Strategy in 2026", category: "Branding", date: "Coming Soon", desc: "How leading companies are shifting their brand strategy to prioritize digital touchpoints." },
  { title: "The Architecture of High-Converting Landing Pages", category: "Design", date: "Coming Soon", desc: "A breakdown of the psychological principles behind landing pages that convert." },
  { title: "Building Scalable SaaS: Lessons from 50+ Projects", category: "Development", date: "Coming Soon", desc: "Technical insights from our engineering team on building products that scale." },
  { title: "Social Media in 2026: Content That Actually Works", category: "Marketing", date: "Coming Soon", desc: "Data-driven insights into what content formats drive engagement today." },
  { title: "The ROI of Premium Design: Why Cheap Costs More", category: "Strategy", date: "Coming Soon", desc: "How investing in premium design delivers measurable business returns." },
  { title: "SEO Beyond Keywords: The New Rules of Ranking", category: "Marketing", date: "Coming Soon", desc: "Why technical SEO and user experience now matter more than keyword density." },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Insights & Ideas</span>
          <h1 className={styles.title}>The <span className={styles.accent}>Blog.</span></h1>
          <p className={styles.heroDesc}>Thoughtful articles on design, development, branding, and the future of digital — written by the WELWAAT team.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {posts.map((post, i) => (
              <div key={i} className={styles.listItem}>
                <div className={styles.listLeft}>
                  <div className={styles.listIcon}><PenTool size={18} /></div>
                  <div>
                    <div className={styles.listTitle}>{post.title}</div>
                    <div className={styles.listMeta}>
                      <span className={styles.tag} style={{ marginRight: '8px' }}>{post.category}</span>
                      <Clock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> {post.date}
                    </div>
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

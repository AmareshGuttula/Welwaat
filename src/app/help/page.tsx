import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import styles from "../(info)/info.module.css";
import { HelpCircle, FileQuestion, MessageCircle, Mail } from "lucide-react";

const faqs = [
  { question: "How do we start a project?", answer: "Reach out via our contact page, and we'll schedule a discovery call to understand your needs." },
  { question: "What is your typical timeline?", answer: "Timelines vary by project scope. A typical website takes 4-8 weeks, while full apps may take 3-6 months." },
  { question: "Do you offer post-launch support?", answer: "Yes, we offer various maintenance and support packages to keep your digital assets secure and up-to-date." },
  { question: "What is your pricing structure?", answer: "We provide custom quotes based on your specific requirements and goals. Contact us for an estimate." },
];

export default function HelpCenterPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Support</span>
          <h1 className={styles.title}>Help <span className={styles.accent}>Center.</span></h1>
          <p className={styles.heroDesc}>Find answers to common questions, or get in touch with our team for personalized assistance.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><FileQuestion size={22} /></div>
              <h3 className={styles.cardTitle}>FAQs</h3>
              <p className={styles.cardDesc}>Browse answers to the most frequently asked questions.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><MessageCircle size={22} /></div>
              <h3 className={styles.cardTitle}>Live Chat</h3>
              <p className={styles.cardDesc}>Chat directly with our support team during business hours.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Mail size={22} /></div>
              <h3 className={styles.cardTitle}>Email Support</h3>
              <p className={styles.cardDesc}>Send us an email anytime, and we'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
         <div className={styles.container}>
            <span className={styles.sectionLabel}>Frequent Questions</span>
            <h2 className={styles.sectionTitle}>Common <span className={styles.accent}>Inquiries.</span></h2>
            <div className={styles.grid2}>
                {faqs.map((faq, i) => (
                    <div key={i} className={styles.card} style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                             <HelpCircle size={18} color="#f4522a" />
                             <h3 className={styles.cardTitle} style={{ margin: 0 }}>{faq.question}</h3>
                        </div>
                        <p className={styles.cardDesc}>{faq.answer}</p>
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

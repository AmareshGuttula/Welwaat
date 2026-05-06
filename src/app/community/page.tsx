import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import styles from "../(info)/info.module.css";
import { Users, MessagesSquare, Code, Globe, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { platform: "Twitter", desc: "Follow us for the latest updates and industry news.", icon: <Globe size={18} />, link: "#" },
  { platform: "LinkedIn", desc: "Connect with our team and see our professional network.", icon: <Briefcase size={18} />, link: "#" },
  { platform: "GitHub", desc: "Check out our open-source projects and contributions.", icon: <Code size={18} />, link: "#" },
];

export default function CommunityPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Network</span>
          <h1 className={styles.title}>Comm<span className={styles.accent}>unity.</span></h1>
          <p className={styles.heroDesc}>Join the conversation. Connect with other creators, developers, and industry leaders in our network.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><MessagesSquare size={22} /></div>
              <h3 className={styles.cardTitle}>Discord Server</h3>
              <p className={styles.cardDesc}>Join our Discord to chat with the team, get help, and share your work.</p>
              <button className={styles.tag} style={{ marginTop: '16px', background: 'transparent', cursor: 'pointer' }}>Join Discord</button>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Users size={22} /></div>
              <h3 className={styles.cardTitle}>Events & Meetups</h3>
              <p className={styles.cardDesc}>Attend our virtual and in-person events to learn and network.</p>
              <button className={styles.tag} style={{ marginTop: '16px', background: 'transparent', cursor: 'pointer' }}>View Events</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
         <div className={styles.container}>
            <span className={styles.sectionLabel}>Social Media</span>
            <h2 className={styles.sectionTitle}>Follow <span className={styles.accent}>Us.</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {socialLinks.map((social, i) => (
                    <Link key={i} href={social.link} className={styles.listItem}>
                        <div className={styles.listLeft}>
                            <div className={styles.listIcon}>{social.icon}</div>
                            <div>
                                <div className={styles.listTitle}>{social.platform}</div>
                                <div className={styles.listMeta}>{social.desc}</div>
                            </div>
                        </div>
                        <ChevronRight size={18} className={styles.listArrow} />
                    </Link>
                ))}
            </div>
         </div>
      </section>
      
      <ServicesOverview />

      <Footer />
    </div>
  );
}

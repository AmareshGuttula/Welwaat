import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../(info)/info.module.css";
import { Download, Image, FileText, Palette, Type, ChevronRight } from "lucide-react";

const assets = [
  { title: "Primary Logo", desc: "Full-color WELWAAT logo in SVG, PNG, and EPS formats.", icon: <Image size={22} />, format: "SVG / PNG / EPS" },
  { title: "Logo Mark", desc: "Standalone icon mark for favicons and app icons.", icon: <Image size={22} />, format: "SVG / PNG / ICO" },
  { title: "Brand Guidelines", desc: "Comprehensive brand usage manual with dos and don'ts.", icon: <FileText size={22} />, format: "PDF" },
  { title: "Color Palette", desc: "Official brand colors with HEX, RGB, and CMYK values.", icon: <Palette size={22} />, format: "PDF / ASE" },
  { title: "Typography", desc: "Licensed font files and typographic scale documentation.", icon: <Type size={22} />, format: "OTF / WOFF2" },
  { title: "Media Kit", desc: "Founder bios, company facts, and boilerplate copy for press.", icon: <FileText size={22} />, format: "PDF / DOCX" },
];

const colors = [
  { name: "Primary Orange", hex: "#F4522A", rgb: "244, 82, 42" },
  { name: "Background", hex: "#FAF9F7", rgb: "250, 249, 247" },
  { name: "Text Primary", hex: "#111111", rgb: "17, 17, 17" },
  { name: "Text Muted", hex: "#666666", rgb: "102, 102, 102" },
];

export default function PressKitPage() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Media Resources</span>
          <h1 className={styles.title}>Press <span className={styles.accent}>Kit.</span></h1>
          <p className={styles.heroDesc}>Everything you need to represent the WELWAAT brand accurately. Download logos, brand guidelines, and media assets.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Brand Colors</span>
          <h2 className={styles.sectionTitle}>Official <span className={styles.accent}>Palette.</span></h2>
          <div className={styles.grid4}>
            {colors.map((c, i) => (
              <div key={i} className={styles.card} style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: c.hex, margin: '0 auto 16px', border: c.hex === '#FAF9F7' ? '1px solid rgba(0,0,0,0.1)' : 'none' }} />
                <h3 className={styles.cardTitle}>{c.name}</h3>
                <p className={styles.cardDesc}>{c.hex} · RGB({c.rgb})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Downloadable Assets</span>
          <h2 className={styles.sectionTitle}>Brand <span className={styles.accent}>Assets.</span></h2>
          <div className={styles.grid3}>
            {assets.map((a, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{a.icon}</div>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
                <span className={styles.tag} style={{ marginTop: '16px' }}>{a.format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

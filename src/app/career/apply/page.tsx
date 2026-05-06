"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../career.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, CheckCircle, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const target = e.target as HTMLFormElement;
    const formData = new FormData();
    formData.append("name", (target.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("email", (target.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("message", (target.elements.namedItem("message") as HTMLTextAreaElement).value);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormState("success");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setFormState("idle");
    }
  };

  if (formState === "success") {
    return (
      <div className={styles.careerPage}>
        <Header />
        <main className={styles.dashboardContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', position: 'relative', paddingBottom: '0' }}>
          <div className={styles.successGrid}></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.emptyState}
            style={{ maxWidth: '550px', position: 'relative', zIndex: 1, padding: '48px 40px' }}
          >
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Decorative architectural circles */}
                <div style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', width: '80%', height: '80%', border: '1px dashed rgba(34, 197, 94, 0.3)', borderRadius: '50%', animation: 'spin 10s linear infinite' }}></div>
                
                {/* Premium Check Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    d="M5 13L10 18L20 6" 
                    stroke="#22c55e" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <motion.circle 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    cx="12" cy="12" r="11" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2 2" 
                  />
                </svg>
              </div>
            </div>
            <h2 className={styles.emptyTitle} style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Application Received</h2>
            <p className={styles.emptyText} style={{ maxWidth: '450px', margin: '0 auto 32px', fontSize: '0.95rem' }}>
              Thank you for sharing your portfolio. We&apos;ve received your information and our team will reach out to you at welwaat@gmail.com if there&apos;s a match.
            </p>
            <Link href="/career" className={styles.resetBtn} style={{ padding: '14px 32px' }}>
              BACK TO CAREERS
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.careerPage}>
      <Header />
      
      <main className={styles.dashboardContainer} style={{ position: 'relative', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '0' }}>
        <div className={styles.successGrid}></div>
        <div style={{ marginTop: '0', marginBottom: '0', position: 'relative', zIndex: 1 }}>
          <Link href="/career" className={styles.backLink} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4522A', textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Back to Careers
          </Link>
        </div>

        <section className={styles.hero} style={{ textAlign: 'left', padding: '0 0 40px' }}>
          <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>Join the <span className={styles.accent}>Talent Pool.</span></h1>
          <p className={styles.heroDescription} style={{ margin: '0', maxWidth: '600px' }}>
            We&apos;re always looking for exceptional architects, engineers, and designers. 
            Tell us about yourself and what you&apos;re looking for.
          </p>
        </section>

        <div className={styles.dashboardLayout} style={{ gridTemplateColumns: '1fr' }}>
          <div className={styles.filterPanel} style={{ padding: '40px', maxWidth: '800px' }}>
            <form onSubmit={handleSubmit} className={styles.applyForm}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)' }}>Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    className={styles.searchInput} 
                    style={{ background: 'rgba(0,0,0,0.02)' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)' }}>Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required 
                    placeholder="Enter your email"
                    className={styles.searchInput} 
                    style={{ background: 'rgba(0,0,0,0.02)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)' }}>What are you looking for?</label>
                <textarea 
                  name="message"
                  required 
                  rows={5}
                  placeholder="Tell us about your ideal role, your skills, and what you'd like to build with us..."
                  className={styles.searchInput} 
                  style={{ background: 'rgba(0,0,0,0.02)', resize: 'vertical' }}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', display: 'block', marginBottom: '12px' }}>Portfolio / Resume</label>
                <div 
                  style={{ 
                    border: '2px dashed var(--border-color)', 
                    padding: '32px', 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: file ? 'rgba(244, 82, 42, 0.03)' : 'transparent',
                    borderColor: file ? '#F4522A' : 'var(--border-color)'
                  }}
                  onClick={() => document.getElementById('file-upload')?.click()}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#F4522A'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = file ? '#F4522A' : 'var(--border-color)'}
                >
                  <Upload size={32} color={file ? "#F4522A" : "#ccc"} style={{ marginBottom: '12px' }} />
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {file ? file.name : "Click to upload or drag and drop"}
                  </p>
                  <p style={{ margin: '4px 0 0', fontSize: '0.7rem', opacity: 0.5 }}>PDF, DOCX up to 10MB</p>
                  <input 
                    id="file-upload" 
                    type="file" 
                    hidden 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formState === "submitting"}
                className={styles.ctaBtn} 
                style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
              >
                {formState === "submitting" ? "Sending..." : "Submit Application"} 
                <Send size={16} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

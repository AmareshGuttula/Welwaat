"use client";

import styles from "@/app/page.module.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false);

  useEffect(() => {
    // Check local storage - default to light if nothing is found
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
            </svg>
          </div>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Welwaat</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          
          <div className={styles.servicesDropdownContainer}>
            <Link href="/services" className={styles.servicesTrigger}>
              Service
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownIcon}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuGrid}>
                  {/* Column 1 — Web & Digital */}
                  <div className={styles.menuColumn}>
                    <div className={styles.menuGroupHeading}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      </span>
                      Web & Digital
                    </div>
                    <Link href="/services/website-design-development" className={`${styles.menuLink} ${styles.featuredLink}`}>Website Design & Development</Link>
                    <Link href="/services/landing-page-design" className={styles.menuLink}>Landing Page Design</Link>
                    <Link href="/services/e-commerce-website" className={styles.menuLink}>E-commerce Website</Link>
                    <Link href="/services/website-redesign" className={styles.menuLink}>Website Redesign</Link>
                    <Link href="/services/website-maintenance" className={styles.menuLink}>Website Maintenance</Link>
                  </div>
                  
                  {/* Column 2 — Development */}
                  <div className={styles.menuColumn}>
                    <div className={styles.menuGroupHeading}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      </span>
                      Development
                    </div>
                    {/* <Link href="/services/app-development" className={styles.menuLink}>App Development (iOS & Android)</Link> */}
                    <Link href="/services/saas-product-development" className={styles.menuLink}>SaaS Product Development</Link>
                    <Link href="/services/web-app-development" className={styles.menuLink}>Web App Development</Link>
                    <Link href="/services/api-backend-development" className={styles.menuLink}>API & Backend Development</Link>
                  </div>

                  {/* Column 3 — Design & Branding */}
                  <div className={styles.menuColumn}>
                    <div className={styles.menuGroupHeading}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="#F4522A"></circle><circle cx="17.5" cy="10.5" r=".5" fill="#F4522A"></circle><circle cx="8.5" cy="7.5" r=".5" fill="#F4522A"></circle><circle cx="6.5" cy="12.5" r=".5" fill="#F4522A"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                      </span>
                      Design & Branding
                    </div>
                    <Link href="/services/ui-ux-design" className={styles.menuLink}>UI/UX Design</Link>
                    <Link href="/services/brand-identity-design" className={`${styles.menuLink} ${styles.featuredLink}`}>Graphic & Brand Identity Design</Link>
                    <Link href="/services/brand-identity-design" className={styles.menuLink}>Logo Design</Link>
                    <Link href="/services/brand-identity-design" className={styles.menuLink}>Personal Branding</Link>
                    <Link href="/services/brand-identity-design" className={styles.menuLink}>Packaging Design</Link>
                  </div>

                  {/* Column 4 — Visual & Content */}
                  <div className={styles.menuColumn}>
                    <div className={styles.menuGroupHeading}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                      </span>
                      Visual & Content
                    </div>
                    <Link href="/services/social-media-management" className={styles.menuLink}>Model Photography</Link>
                    <Link href="/services/social-media-management" className={styles.menuLink}>Product Photography</Link>
                    <Link href="/services/social-media-management" className={styles.menuLink}>Content Writing</Link>
                    <Link href="/services/social-media-management" className={styles.menuLink}>Video Editing & Reels</Link>
                    <Link href="/services/social-media-management" className={styles.menuLink}>Copywriting</Link>
                  </div>

                  {/* Column 5 — Marketing & Growth */}
                  <div className={styles.menuColumn}>
                    <div className={styles.menuGroupHeading}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      </span>
                      Marketing & Growth
                    </div>
                    {/* <Link href="/services/social-media-management" className={styles.menuLink}>Social Media Marketing & Management</Link> */}
                    <Link href="/services/seo-google-presence" className={styles.menuLink}>SEO & Google Presence</Link>
                    <Link href="/services/seo-google-presence" className={styles.menuLink}>Email Marketing</Link>
                    <Link href="/services/seo-google-presence" className={styles.menuLink}>Paid Ads (Meta & Google)</Link>
                  </div>
                </div>
              </div>
              
              <div className={styles.megaMenuBottomStrip}>
                <div className={styles.megaMenuBottomContainer}>
                  <div className={styles.megaMenuBottomLeft}>
                    Not sure what you need? <a href="https://wa.me/919110775913" target="_blank" rel="noopener noreferrer" className={styles.freeConsultationLink}>Book a Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.servicesDropdownContainer}>
            <Link href="/portfolio" className={styles.servicesTrigger}>
              Portfolio
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownIcon}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuGrid}>
                  {/* Column 1 */}
                  <div className={styles.menuColumn}>
                    <Link href="/portfolio/web-design" className={styles.portfolioLargeLink}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      </span>
                      <span className={styles.portfolioLargeLinkTitle}>Web Design & Development</span>
                      <span className={styles.portfolioLargeLinkDesc}>Explore our latest custom websites and platforms.</span>
                    </Link>
                  </div>
                  
                  {/* Column 2 */}
                  <div className={styles.menuColumn}>
                    <div className={`${styles.portfolioLargeLink} ${styles.disabledLink}`}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      </span>
                      <span className={styles.portfolioLargeLinkTitle}>App Development <span className={styles.comingSoonBadge}>Coming Soon</span></span>
                      <span className={styles.portfolioLargeLinkDesc}>Discover our high-performance mobile applications.</span>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className={styles.menuColumn}>
                    <Link href="/portfolio/graphic-design" className={styles.portfolioLargeLink}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="#F4522A"></circle><circle cx="17.5" cy="10.5" r=".5" fill="#F4522A"></circle><circle cx="8.5" cy="7.5" r=".5" fill="#F4522A"></circle><circle cx="6.5" cy="12.5" r=".5" fill="#F4522A"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                      </span>
                      <span className={styles.portfolioLargeLinkTitle}>Graphic Design</span>
                      <span className={styles.portfolioLargeLinkDesc}>View our brand identity and design projects.</span>
                    </Link>
                  </div>

                  {/* Column 4 */}
                  <div className={styles.menuColumn}>
                    <div className={`${styles.portfolioLargeLink} ${styles.disabledLink}`}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      </span>
                      <span className={styles.portfolioLargeLinkTitle}>Social Media Management <span className={styles.comingSoonBadge}>Soon</span></span>
                      <span className={styles.portfolioLargeLinkDesc}>See how we drive engagement and growth.</span>
                    </div>
                  </div>

                  {/* Column 5 */}
                  <div className={styles.menuColumn}>
                    <div className={`${styles.portfolioLargeLink} ${styles.disabledLink}`}>
                      <span className={styles.menuGroupIcon}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#F4522A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                      </span>
                      <span className={styles.portfolioLargeLinkTitle}>Visual & Content <span className={styles.comingSoonBadge}>Soon</span></span>
                      <span className={styles.portfolioLargeLinkDesc}>Photography, video editing, and content creation.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.megaMenuBottomStrip}>
                <div className={styles.megaMenuBottomContainer}>
                  <div className={styles.megaMenuBottomLeft}>
                    Ready to start your project? <a href="https://wa.me/919110775913" target="_blank" rel="noopener noreferrer" className={styles.freeConsultationLink}>Book a Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={styles.navActions}>
          <div className={styles.headerControls}>
            <button 
              className={`${styles.themeSwitch} ${isDark ? styles.isDark : ""}`}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <div className={styles.switchKnob}>
                {isDark ? <Moon size={14} fill="currentColor" /> : <Sun size={14} fill="currentColor" />}
              </div>
              <div className={styles.switchIcons}>
                <Sun size={12} className={styles.sunIcon} />
                <Moon size={12} className={styles.moonIcon} />
              </div>
            </button>
          </div>
          <WhatsAppButton className={styles.startBtn} />
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNavOverlay} ${isMobileMenuOpen ? styles.mobileNavOverlayOpen : ""}`}>
        <div className={styles.mobileNavContent}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <div className={styles.mobileServicesSection}>
            <button 
              className={styles.mobileAccordionToggle} 
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
            >
              Services
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${styles.mobileAccordionIcon} ${isServicesExpanded ? styles.mobileAccordionIconOpen : ""}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.mobileAccordionContent} ${isServicesExpanded ? styles.mobileAccordionContentOpen : ""}`}>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link>
              <Link href="/services/website-design-development" onClick={() => setIsMobileMenuOpen(false)}>Web Design & Dev</Link>
              {/* <Link href="/services/app-development" onClick={() => setIsMobileMenuOpen(false)}>App Development</Link> */}
              <Link href="/services/seo-google-presence" onClick={() => setIsMobileMenuOpen(false)}>SEO Optimization</Link>
              <Link href="/services/brand-identity-design" onClick={() => setIsMobileMenuOpen(false)}>Graphic & Brand Identity</Link>
            </div>
          </div>
          <div className={styles.mobileServicesSection}>
            <button 
              className={styles.mobileAccordionToggle} 
              onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
            >
              Portfolio
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${styles.mobileAccordionIcon} ${isPortfolioExpanded ? styles.mobileAccordionIconOpen : ""}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`${styles.mobileAccordionContent} ${isPortfolioExpanded ? styles.mobileAccordionContentOpen : ""}`}>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>All Work</Link>
              <Link href="/portfolio/web-design" onClick={() => setIsMobileMenuOpen(false)}>Web Design</Link>
              <div className={`${styles.mobileAccordionLink} ${styles.disabledLink}`}>App Dev <span className={styles.comingSoonBadge}>Soon</span></div>
              <Link href="/portfolio/graphic-design" onClick={() => setIsMobileMenuOpen(false)}>Graphic Design</Link>
              <div className={`${styles.mobileAccordionLink} ${styles.disabledLink}`}>Social Media <span className={styles.comingSoonBadge}>Soon</span></div>
              <div className={`${styles.mobileAccordionLink} ${styles.disabledLink}`}>Visual & Content <span className={styles.comingSoonBadge}>Soon</span></div>
            </div>
          </div>
          <Link href="/career" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <div className={styles.mobileNavFooter}>
            <WhatsAppButton className={styles.mobileStartBtn} />
          </div>
        </div>
      </div>
    </header>
  );
}

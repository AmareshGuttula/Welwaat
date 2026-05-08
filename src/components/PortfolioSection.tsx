"use client";

import React, { useState, useEffect } from "react";
import styles from "./PortfolioSection.module.css";
import { X, Minus, ExternalLink, Maximize2 } from "lucide-react";

const categories = [
  "All",
  "Website Design",
  // "App Development",
  "Graphic Design",
  // "Social Media Management",
];

const projects = [
  // ── Website Design (with cover images) ──
  {
    title: "Fuel Snack Premium Nutrition E-commerce",
    client: "Fuel Snack Inc",
    category: "Website Design",
    image: "/website covers/12.png",
    url: "https://fuelsnack.lovable.app/",
  },
  {
    title: "Pure Healthy Banana Protein Snack Website",
    client: "Pure Banana Inc",
    category: "Website Design",
    image: "/website covers/1.png",
    url: "https://banananan.lovable.app/",
  },
  {
    title: "Vishvarupa Divine Experience Website",
    client: "Pooja Scripts",
    category: "Website Design",
    image: "/website covers/2.png",
    url: "https://poojascripts.lovable.app/",
  },
  {
    title: "Charmsy: Future of Wellness 2026 Website",
    client: "Wellness Lab",
    category: "Website Design",
    image: "/website covers/3.png",
    url: "https://charmsy.lovable.app/",
  },
  {
    title: "Restroy: Culinary Excellence Website",
    client: "Restroy Kitchen",
    category: "Website Design",
    image: "/website covers/4.png",
    url: "https://restroy.lovable.app/",
  },
  {
    title: "Connectrey: Business Analytics Platform",
    client: "Connectrey",
    category: "Website Design",
    image: "/website covers/5.png",
    url: "https://connectrey.lovable.app/",
  },
  {
    title: "ClubSparkle: SocialFi Platform Website",
    client: "SocialFi DAO",
    category: "Website Design",
    image: "/website covers/6.png",
    url: "https://clubsparkle.lovable.app/",
  },
  {
    title: "Comic Chaos: Digital Storytelling Platform",
    client: "Ink & Chaos Studios",
    category: "Website Design",
    image: "/website covers/7.png",
    url: "https://cartooncomic.lovable.app/",
  },
  {
    title: "Zest & Citrus: Pure Natural Juice Website",
    client: "Pure Squeeze Co",
    category: "Website Design",
    image: "/website covers/8.png",
    url: "https://zestcititrus.lovable.app/",
  },
  {
    title: "Paninilayam: Sparkling Water Experience",
    client: "Alpine Mist source",
    category: "Website Design",
    image: "/website covers/9.png",
    url: "https://paninilayam.lovable.app/",
  },
  {
    title: "Picklesy: Spice & Flavors Marketplace Website",
    client: "Flavor Fusion Lab",
    category: "Website Design",
    image: "/website covers/10.png",
    url: "https://priyapicklesy.lovable.app/",
  },
  {
    title: "Digistu: Creative Digital Studio Website",
    client: "Pixel & Pulse Agency",
    category: "Website Design",
    image: "/website covers/11.png",
    url: "https://digistu.lovable.app/",
  },

  // ── App Development ──
  /* {
    title: "Fitness Tracker Mobile App",
    client: "FitLife Co",
    category: "App Development",
    image: "",
  },
  {
    title: "On-Demand Delivery Platform",
    client: "QuickDash",
    category: "App Development",
    image: "",
  },
  {
    title: "FinTech Wallet & Banking App",
    client: "SilverPay",
    category: "App Development",
    image: "",
  },
  {
    title: "Smart Home Control System",
    client: "Domus AI",
    category: "App Development",
    image: "",
  },
  {
    title: "Social Networking for Creatives",
    client: "Artisan Hub",
    category: "App Development",
    image: "",
  },
  {
    title: "Real-time Event Management App",
    client: "Eventify",
    category: "App Development",
    image: "",
  }, */

  // ── Graphic Design ──
  {
    title: "Cinematic Visual Narrative for Documentary Series",
    client: "Pulse Media Studios",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/1.jpeg",
  },
  {
    title: "Cultural Brand Identity for Heritage Vlog",
    client: "Global Explorers",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/2.jpeg",
  },
  {
    title: "Strategic Visual Identity for Psychology Research",
    client: "Mind Lab International",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/3.jpeg",
  },
  {
    title: "Performance-Driven Automotive News Graphics",
    client: "AutoTrend Network",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/4.jpeg",
  },
  {
    title: "Investigative Gaming Industry Visual Systems",
    client: "Pixel Insight",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/5.jpeg",
  },
  {
    title: "Visual Communication for Culinary Reviews",
    client: "Epicurean Guide",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/6.jpeg",
  },
  {
    title: "High-Performance Tech Strategy Graphics",
    client: "TechStream Solutions",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/7.jpeg",
  },
  {
    title: "Socio-Economic Visual Storytelling Architecture",
    client: "Society Watch",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/8.jpeg",
  },
  {
    title: "Educational Chemistry Visual Identity System",
    client: "EduStream Global",
    category: "Graphic Design",
    subCategory: "Logos",
    image: "/graphic design/9.jpeg",
  },
  {
    title: "Bespoke Travel Destination Visual Identity",
    client: "Voyage Elite",
    category: "Graphic Design",
    subCategory: "Logos",
    image: "/graphic design/10.jpeg",
  },
  {
    title: "Premium Interior Design Visual Narrative",
    client: "Living Spaces Co",
    category: "Graphic Design",
    subCategory: "UI/UX",
    image: "/graphic design/11.jpeg",
  },
  {
    title: "Advanced Psychological Profile Visual Systems",
    client: "Human Insight Lab",
    category: "Graphic Design",
    subCategory: "UI/UX",
    image: "/graphic design/12.jpeg",
  },
  {
    title: "Global Education Strategic Brand Identity",
    client: "Academy One",
    category: "Graphic Design",
    subCategory: "Logos",
    image: "/graphic design/13.jpeg",
  },
  {
    title: "Geopolitical Commentary Visual Architecture",
    client: "Policy Pulse",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/14.jpeg",
  },
  {
    title: "High-End Real Estate Visual Communication",
    client: "Prime Realty Group",
    category: "Graphic Design",
    subCategory: "Logos",
    image: "/graphic design/15.jpeg",
  },
  {
    title: "Responsive Cultural Celebration Graphics",
    client: "Unity Festivals",
    category: "Graphic Design",
    subCategory: "Thumbnails",
    image: "/graphic design/16.jpg",
  },
  {
    title: "SEO-Optimized Podcast Brand Identity",
    client: "Voice Network",
    category: "Graphic Design",
    subCategory: "Logos",
    image: "/graphic design/17.jpg",
  },

  // ── Social Media Management ──
  /* {
    title: "Eco-Brand Social Growth Strategy",
    client: "GreenLife",
    category: "Social Media Management",
    image: "",
  },
  {
    title: "B2B LinkedIn Thought Leadership",
    client: "TechStream",
    category: "Social Media Management",
    image: "",
  },
  {
    title: "Instagram Aesthetic Grid Curation",
    client: "Vogue Styles",
    category: "Social Media Management",
    image: "",
  }, */
];

const loadingPhrases = [
  "Connecting to the creative universe...",
  "Pixelating the canvas...",
  "Gathering the finest details...",
  "Brewing some digital magic...",
  "Waking up the servers...",
  "Aligning the grids...",
  "Almost ready for you..."
];

interface PortfolioSectionProps {
  defaultCategory?: string;
  hideHeader?: boolean;
  hideLoadMore?: boolean;
  limit?: number;
  viewAllPath?: string;
  subFilters?: string[];
}

export default function PortfolioSection(props: PortfolioSectionProps) {
  const {
    defaultCategory = "All",
    hideHeader = false,
    hideLoadMore = false,
    limit,
    viewAllPath,
    subFilters
  } = props;
  const [activeFilter, setActiveFilter] = useState(defaultCategory);
  const [activeSubFilter, setActiveSubFilter] = useState("All");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isPreviewMinimized, setIsPreviewMinimized] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isIframeLoading) {
      interval = setInterval(() => {
        setLoadingTextIndex((prev) => (prev + 1) % loadingPhrases.length);
      }, 2000);
    } else {
      setLoadingTextIndex(0);
    }
    return () => clearInterval(interval);
  }, [isIframeLoading]);

  const openPreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
    setIsPreviewMinimized(false);
    setIsIframeLoading(true);
  };

  const openImagePreview = (imagePath: string, title: string) => {
    setPreviewImage(imagePath);
    setPreviewTitle(title);
  };

  const closePreview = () => {
    setPreviewUrl(null);
    setPreviewImage(null);
    setIsPreviewMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPreviewMinimized(!isPreviewMinimized);
  };

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = activeFilter === "All" || p.category === activeFilter;
    const subCategoryMatch = activeSubFilter === "All" || p.subCategory === activeSubFilter;
    return categoryMatch && subCategoryMatch;
  });

  const displayLimit = limit ? Number(limit) : filteredProjects.length;
  const displayedProjects = filteredProjects.slice(0, displayLimit);
  const hasMore = filteredProjects.length > (limit || 0);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        {!hideHeader && (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>
                Our <span className={styles.accent}>Portfolio</span>
              </h2>
              <p className={styles.subtitle}>
                Explore our latest projects and creative works
              </p>
            </div>

            {/* Filter Tabs */}
            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ""
                    }`}
                  onClick={() => {
                    setActiveFilter(cat);
                    setActiveSubFilter("All");
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </>
        )}

        {subFilters && subFilters.length > 0 && (
          <div className={styles.subFilters}>
            {["All", ...subFilters].map((sub) => (
              <button
                key={sub}
                className={`${styles.subFilterBtn} ${activeSubFilter === sub ? styles.subFilterActive : ""}`}
                onClick={() => setActiveSubFilter(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Project Grid */}
        <div className={styles.grid}>
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.card} ${(project.url || project.image) ? styles.clickableCard : ""}`}
              onClick={() => {
                if (project.url) {
                  openPreview(project.url, project.title);
                } else if (project.image) {
                  openImagePreview(project.image, project.title);
                }
              }}
            >
              {/* Image Placeholder */}
              <div className={styles.imageWrapper}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.cardMeta}>
                  <div className={styles.metaInfo}>
                    <div className={styles.metaItem}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{project.client}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <button className={styles.arrowBtn}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        {(!hideLoadMore && (limit ? hasMore : true)) && (
          <div className={styles.loadMoreWrapper}>
            {viewAllPath ? (
              <a href={viewAllPath} className={styles.loadMoreBtn}>
                <span>View All Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            ) : (
              <button className={styles.loadMoreBtn}>
                <span>View All Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Floating Website Preview */}
      {previewUrl && !isPreviewMinimized && (
        <div className={styles.previewOverlay} onClick={closePreview}>
          <div className={styles.previewContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.previewHeader}>
              <div className={styles.previewTitle}>{previewTitle}</div>
              <div className={styles.previewActions}>
                <button
                  className={styles.actionBtn}
                  onClick={toggleMinimize}
                  title="Minimize"
                >
                  <Minus size={18} />
                </button>

                <button
                  className={`${styles.actionBtn} ${styles.closeBtn}`}
                  onClick={closePreview}
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className={styles.iframeWrapper}>
              {isIframeLoading && (
                <div className={styles.loadingOverlay}>
                  <div className={styles.loader}>
                    <div className={styles.loaderAtomic}>
                      <div className={`${styles.loaderOrbit} ${styles.orbit1}`}></div>
                      <div className={`${styles.loaderOrbit} ${styles.orbit2}`}></div>
                      <div className={`${styles.loaderOrbit} ${styles.orbit3}`}></div>
                      <div className={styles.loaderLogoCore}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.loaderTextWrapper}>
                      <p className={styles.loaderTextDynamic}>{loadingPhrases[loadingTextIndex]}</p>
                      <div className={styles.loaderProgressLine}></div>
                    </div>
                  </div>
                </div>
              )}
              <iframe
                src={previewUrl}
                className={styles.previewIframe}
                title="Website Preview"
                onLoad={() => setIsIframeLoading(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Image Preview */}
      {previewImage && (
        <div className={styles.previewOverlay} onClick={closePreview}>
          <div className={styles.imagePreviewContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.previewHeader}>
              <div className={styles.previewTitle}>{previewTitle}</div>
              <div className={styles.previewActions}>
                <button
                  className={`${styles.actionBtn} ${styles.closeBtn}`}
                  onClick={closePreview}
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className={styles.previewImageWrapper}>
              <img
                src={previewImage}
                alt={previewTitle}
                className={styles.fullPreviewImage}
              />
            </div>
          </div>
        </div>
      )}

      {/* Minimized Preview Hook */}
      {previewUrl && isPreviewMinimized && (
        <div className={styles.minimizedPreview} onClick={() => setIsPreviewMinimized(false)}>
          <div className={styles.minimizedHeader}>
            <div className={styles.minimizedTitle}>{previewTitle}</div>
            <div className={styles.previewActions}>
              <button
                className={styles.actionBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPreviewMinimized(false);
                }}
                title="Restore"
              >
                <Maximize2 size={14} />
              </button>
              <button
                className={`${styles.actionBtn} ${styles.closeBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  closePreview();
                }}
                title="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <iframe
            src={previewUrl}
            className={styles.minimizedIframe}
            title="Minimized Preview"
          />
        </div>
      )}
    </section>
  );
}

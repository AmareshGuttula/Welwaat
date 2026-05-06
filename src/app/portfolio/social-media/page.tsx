import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./social-media.module.css";
import Link from "next/link";

export default function SocialMediaPortfolio() {
  const posts = [
    {
      id: 1,
      type: "Instagram Reel",
      title: "Luxury Brand Storytelling",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      metrics: "1.2M Views"
    },
    {
      id: 2,
      type: "LinkedIn Carousel",
      title: "B2B Thought Leadership",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1000&auto=format&fit=crop",
      metrics: "450+ Shares"
    },
    {
      id: 3,
      type: "YouTube Series",
      title: "Educational Brand Channel",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
      metrics: "50k+ Subscribers"
    },
    {
      id: 4,
      type: "YouTube Shorts",
      title: "Viral Product Teasers",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      metrics: "2.5M Views"
    },
    {
      id: 5,
      type: "Brand Identity",
      title: "Aesthetic Grid Curation",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop",
      metrics: "Consistent Voice"
    },
    {
      id: 6,
      type: "X (Twitter) Thread",
      title: "Viral Industry Insights",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop",
      metrics: "2.5k Retweets"
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Social Media <span className={styles.accent}>Architects</span>
            </h1>
            <p className={styles.description}>
              We don't just post content; we build digital communities, spark conversations, and drive measurable growth through data-backed social strategies.
            </p>
            
            <div className={styles.platforms}>
              <span className={styles.platformPill}>Instagram</span>
              <span className={styles.platformPill}>LinkedIn</span>
              <span className={styles.platformPill}>YouTube</span>
              <span className={styles.platformPill}>X (Twitter)</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>15M+</span>
              <span className={styles.statLabel}>Monthly Reach</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>22%</span>
              <span className={styles.statLabel}>Avg. Engagement</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>500k+</span>
              <span className={styles.statLabel}>Community Growth</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>5.5x</span>
              <span className={styles.statLabel}>Avg. Ad ROAS</span>
            </div>
          </div>
        </section>

        {/* Feed Experience */}
        <section className={styles.feedSection}>
          <div className={styles.sectionHeader}>
            <h2>Featured <span className={styles.accent}>Campaigns</span></h2>
          </div>
          
          <div className={styles.feedGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div 
                  className={styles.postImage} 
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className={styles.postOverlay}>
                    <span className={styles.statValue} style={{ fontSize: '1.5rem' }}>{post.metrics}</span>
                  </div>
                </div>
                <div className={styles.postInfo}>
                  <div className={styles.postType}>{post.type}</div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Section */}
        <section className={styles.strategySection}>
          <div className={styles.strategyGrid}>
            <div className={styles.strategyContent}>
              <h3>Our Content <span className={styles.accent}>Ecosystem</span></h3>
              <div className={styles.strategyList}>
                <div className={styles.strategyItem}>
                  <span className={styles.strategyNumber}>01</span>
                  <div className={styles.strategyText}>
                    <h4>Visual Storytelling</h4>
                    <p>High-end aesthetic direction that aligns perfectly with your brand identity and stops the scroll.</p>
                  </div>
                </div>
                <div className={styles.strategyItem}>
                  <span className={styles.strategyNumber}>02</span>
                  <div className={styles.strategyText}>
                    <h4>Data-Driven Distribution</h4>
                    <p>We analyze peak activity times and platform-specific algorithms to ensure maximum visibility.</p>
                  </div>
                </div>
                <div className={styles.strategyItem}>
                  <span className={styles.strategyNumber}>03</span>
                  <div className={styles.strategyText}>
                    <h4>Active Management</h4>
                    <p>Real-time community engagement and reputation management to build trust and loyalty.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.strategyVisual}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneDynamicIsland}></div>
                </div>
                <div className={styles.phoneScreen}>
                  <div className={styles.instagramHeader}>
                    <div className={styles.instaHeaderTop}>
                      <span className={styles.instaUser}>welwaat</span>
                      <div className={styles.instaDots}>...</div>
                    </div>
                  </div>
                  
                  <div className={styles.instaProfile}>
                    <div className={styles.instaProfileTop}>
                      <div className={styles.instaAvatar}>
                        <div className={styles.avatarInner} style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>W</div>
                      </div>
                      <div className={styles.instaStats}>
                        <div className={styles.statItem}>
                          <strong>84</strong>
                          <span>Posts</span>
                        </div>
                        <div className={styles.statItem}>
                          <strong>10K</strong>
                          <span>Followers</span>
                        </div>
                        <div className={styles.statItem}>
                          <strong>1</strong>
                          <span>Following</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.instaBio}>
                      <p className={styles.bioName}>Website Designer | Web Developer</p>
                      <p className={styles.bioText}>Website<br/>👉 Websites | SaaS | Web Apps | Mobile Apps<br/>🎯 Available for New Project<br/>📌 Founder @amarguttula<br/>📍 Contact Now⬇️</p>
                      <a href="#" className={styles.bioLink}>welwaat.com and 1 more</a>
                    </div>
                    
                    <div className={styles.instaButtons}>
                      <button className={styles.instaFollowBtn}>Follow</button>
                      <button className={styles.instaActionBtn}>Message</button>
                    </div>
                  </div>

                  <div className={styles.instaHighlights}>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightCircle} style={{ background: 'linear-gradient(45deg, #2af598 0%, #009efd 100%)' }}></div>
                      <span>Designs</span>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightCircle} style={{ background: 'linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%)' }}></div>
                      <span>Built site</span>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightCircle} style={{ background: 'linear-gradient(45deg, #84fab0 0%, #8fd3f4 100%)' }}></div>
                      <span>Results</span>
                    </div>
                  </div>

                  <div className={styles.instaTabs}>
                    <div className={`${styles.instaTab} ${styles.active}`}>
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
                    </div>
                    <div className={styles.instaTab}>
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                  </div>

                  <div className={styles.instaFeed}>
                    <div className={styles.instaGrid}>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=300&auto=format&fit=crop)` }}></div>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=300&auto=format&fit=crop)` }}></div>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1598550476439-6847785fce6a?q=80&w=300&auto=format&fit=crop)` }}></div>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=300&auto=format&fit=crop)` }}></div>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop)` }}></div>
                      <div className={styles.instaPostSmall} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=300&auto=format&fit=crop)` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Pillars */}
        <section className={styles.pillarsSection}>
          <div className={styles.sectionHeader}>
            <h2>Content <span className={styles.accent}>Pillars</span></h2>
            <p className={styles.description}>Our 4-pronged approach to social growth</p>
          </div>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>Educate</h3>
              <p>Establishing authority through high-value insights.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3>Entertain</h3>
              <p>Building connection through relatable brand stories.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </svg>
              </div>
              <h3>Inspire</h3>
              <p>Driving aspiration with visionary content.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3>Convert</h3>
              <p>Strategic CTAs that drive measurable ROI.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.title} style={{ fontSize: '3rem' }}>Ready to go <span className={styles.accent}>Viral?</span></h2>
          <p className={styles.description}>Let's craft a social strategy that actually converts followers into customers.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Campaign
          </Link>
        </section>
      </main>

      <Footer />

    </div>
  );
}

import React from 'react';
import BookMeetingButton from './BookMeetingButton';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-[#FAF9F7] py-12 relative overflow-hidden font-inter">
        {/* Dot Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(244, 82, 42, 0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        />

        <div className="container px-4 z-10 mx-auto relative max-w-5xl">
          {/* CTA Card — mirrors .highlightedCard exactly */}
          <div 
            className="relative overflow-hidden group cursor-pointer"
            style={{
              background: 'radial-gradient(120% 120% at 50% 0%, #FFA860 0%, #FF6C22 40%, #E64500 100%)',
              border: '1px solid #F4522A',
              borderRadius: '4px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {/* Corner handles + blueprint grid (mirrors .highlightedCard::before) */}
            <div 
              className="absolute pointer-events-none z-[1]"
              style={{
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                backgroundImage: `
                  radial-gradient(circle, #F4522A 100%, transparent 100%), 
                  radial-gradient(circle, #F4522A 100%, transparent 100%), 
                  radial-gradient(circle, #F4522A 100%, transparent 100%), 
                  radial-gradient(circle, #F4522A 100%, transparent 100%),
                  linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '8px 8px, 8px 8px, 8px 8px, 8px 8px, 60px 60px, 60px 60px',
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat',
                backgroundPosition: 'top left, top right, bottom left, bottom right, 0 0, 0 0',
              }}
            />

            {/* Shimmer sweep (mirrors .highlightedCard::after) */}
            <div 
              className="absolute top-0 w-full h-full pointer-events-none z-[2] transition-all duration-700 -left-[150%] group-hover:left-[150%]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
                transform: 'skewX(-25deg)',
              }}
            />

            <div className="relative z-10 text-center py-8 px-8 md:py-10 md:px-16">
              <h2 className="font-['Playfair_Display',serif] text-white text-[2rem] md:text-[2.5rem] font-medium tracking-tight mb-3 leading-tight">
                Ready to Transform Your<br />
                <span className="italic">Digital Presence?</span>
              </h2>
              <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
                From websites to full digital strategies, we build solutions that help your business grow and stand out.
              </p>
              <BookMeetingButton 
                className="inline-flex items-center gap-2 bg-white text-[#F4522A] font-semibold px-8 py-4 rounded-md text-base hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.1)] cursor-pointer border-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-white border-t border-[#F4522A]/10 font-inter">
        <div className="container px-4 mx-auto max-w-6xl py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand Column — spans 2 cols on lg */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-5 group cursor-pointer">
                <div className="w-8 h-8 bg-[#F4522A] group-hover:bg-[#e04320] rounded-md flex items-center justify-center transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                  </svg>
                </div>
                <span className="text-[#111] text-lg font-bold tracking-tight group-hover:!text-[#F4522A] transition-colors">WELWAAT</span>
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-xs hover:!text-[#F4522A] transition-colors cursor-default">
                AI-powered digital agency helping businesses, creators, and founders build stunning digital experiences that drive real growth.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="text-[#888] hover:!text-[#F4522A] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-[#888] hover:!text-[#F4522A] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-[#888] hover:!text-[#F4522A] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-[#888] hover:!text-[#F4522A] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="text-[#888] hover:!text-[#F4522A] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-[#E64500] font-bold text-sm tracking-widest mb-5 uppercase">Services</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                <li><Link href="/services/website-design-development" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Web Design</Link></li>
                <li><Link href="/services/website-design-development" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Web Development</Link></li>
                <li><Link href="/services/app-development" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">App Development</Link></li>
                <li><Link href="/services/seo-google-presence" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">SEO Optimization</Link></li>
                <li><Link href="/services/social-media-management" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services/brand-identity-design" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Brand Identity</Link></li>
                <li><Link href="/services" className="text-[#F4522A] text-sm font-semibold hover:!text-[#e04320] transition-colors inline-flex items-center gap-1">View All <span>→</span></Link></li>
              </ul>
            </div>



            {/* Resources Column */}
            <div>
              <h4 className="text-[#E64500] font-bold text-sm tracking-widest mb-5 uppercase">Resources</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                <li><Link href="/blog" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Blog</Link></li>
                <li><Link href="/case-studies" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Case Studies</Link></li>
                <li><Link href="/docs" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Help Center</Link></li>
                <li><Link href="/changelog" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Changelog</Link></li>
                <li><Link href="/community" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Community</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[#E64500] font-bold text-sm tracking-widest mb-5 uppercase">Company</h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                <li><Link href="/about" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Portfolio</Link></li>
                <li><Link href="/career" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Careers</Link></li>
                <li><Link href="/partners" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Partners</Link></li>
                <li><Link href="/press-kit" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Press Kit</Link></li>
                <li><Link href="/contact" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Contact</Link></li>
                <li><Link href="/sitemap-page" className="text-[#666] hover:!text-[#F4522A] text-sm transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#eee]">
          <div className="container px-4 mx-auto max-w-5xl py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#999] text-xs hover:!text-[#F4522A] transition-colors cursor-default">
              © 2026 WELWAAT. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#999] text-xs hover:!text-[#F4522A] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#999] text-xs hover:!text-[#F4522A] transition-colors">Terms of Service</a>
              <a href="#" className="text-[#999] text-xs hover:!text-[#F4522A] transition-colors">Security</a>
              <a href="#" className="text-[#999] text-xs hover:!text-[#F4522A] transition-colors">Cookie</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

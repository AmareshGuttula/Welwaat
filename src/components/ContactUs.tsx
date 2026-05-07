import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#FAF9F7] py-12 md:py-20 relative overflow-hidden border-b border-[#F4522A]/20 font-inter">
      {/* Section Dot Pattern */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(244, 82, 42, 0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />

      <div className="container px-4 z-10 mx-auto relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-['Playfair_Display',serif] text-[2.2rem] md:text-[3rem] text-[#111] mb-2 md:mb-4 tracking-tight">
            Contact <span className="text-[#F4522A]">Us</span>
          </h2>
          <p className="text-black/60 font-medium text-base md:text-lg max-w-2xl mx-auto px-2 md:px-0">
            We're here to help! Whether you have questions, feedback, or need support, our team is ready to assist you.
          </p>
        </div>

        <div className="relative mt-6 md:mt-10 max-w-5xl mx-auto">
          {/* Main Bordered Container */}
          <div className="border border-[#F4522A]/25 rounded-md bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative z-10">
            {/* Corner Handles */}
            <div className="hidden md:block absolute -top-[4px] -left-[4px] -right-[4px] -bottom-[4px] pointer-events-none z-20"
              style={{
                backgroundImage: `
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A), 
                  linear-gradient(#F4522A, #F4522A)
                `,
                backgroundSize: '8px 8px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left, top right, bottom left, bottom right'
              }}
            />
            
            {/* Inner Content */}
            <div className="p-6 md:p-14 flex flex-col-reverse md:flex-row gap-10 md:gap-20">
              {/* Left Column */}
              <div className="flex-1 border-t md:border-t-0 border-[#eee] pt-8 md:pt-0">
                <h3 className="font-['Playfair_Display',serif] text-[2rem] md:text-[2.5rem] text-[#111] italic font-medium mb-6 md:mb-10">
                  Get in touch
                </h3>
                
                <div className="mb-6">
                  <span className="block text-[#888] text-[0.85rem] mb-1 font-medium">Email:</span>
                  <a href="mailto:welwaat@gmail.com" className="text-[#111] text-[1.05rem] font-semibold hover:text-[#F4522A] transition-colors">
                    welwaat@gmail.com
                  </a>
                </div>

                <div className="mb-6">
                  <span className="block text-[#888] text-[0.85rem] mb-1 font-medium">Phone:</span>
                  <a href="tel:+919110775913" className="text-[#111] text-[1.05rem] font-semibold hover:text-[#F4522A] transition-colors">
                    +91 9110775913
                  </a>
                </div>

                <div className="mb-6">
                  <span className="block text-[#888] text-[0.85rem] mb-1 font-medium">Address:</span>
                  <address className="text-[#333] text-[1.05rem] font-medium not-italic leading-relaxed">
                    Gachibowli, Hyderabad,<br />
                    India. 500032
                  </address>
                </div>

                <div className="mt-8 md:mt-10">
                  <span className="block text-[#888] text-[0.85rem] mb-3 font-medium">Follow Us</span>
                  <div className="flex gap-4">
                    <a href="#" aria-label="YouTube" className="text-[#111] hover:text-[#F4522A] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/welwaat/" aria-label="Instagram" className="text-[#111] hover:text-[#F4522A] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://www.tiktok.com/@welwaat" aria-label="TikTok" className="text-[#111] hover:text-[#F4522A] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0012.67-1.12V8.71a8.29 8.29 0 004.33 1.21V6.52a4.95 4.95 0 01-2.41-.83z"/></svg>
                    </a>
                    <a href="https://twitter.com/welwaat" aria-label="Twitter" className="text-[#111] hover:text-[#F4522A] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="flex-[1.2]">
                <form className="flex flex-col gap-5 md:gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                    <div className="flex flex-col flex-1 gap-2">
                      <label htmlFor="name" className="text-[0.85rem] font-semibold text-[#111]">Your Name</label>
                      <input type="text" id="name" placeholder="Your name" 
                        className="bg-[#F7F7F7] border border-transparent rounded-md px-4 md:px-6 py-3 md:py-4 text-[0.95rem] text-[#111] outline-none transition-all duration-200 focus:bg-white focus:border-[#F4522A] placeholder:text-[#aaa]" 
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <label htmlFor="email" className="text-[0.85rem] font-semibold text-[#111]">Email address</label>
                      <input type="email" id="email" placeholder="Your email address" 
                        className="bg-[#F7F7F7] border border-transparent rounded-md px-4 md:px-6 py-3 md:py-4 text-[0.95rem] text-[#111] outline-none transition-all duration-200 focus:bg-white focus:border-[#F4522A] placeholder:text-[#aaa]" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.85rem] font-semibold text-[#111]">Message</label>
                    <textarea id="message" rows={5} placeholder="Write something..." 
                      className="bg-[#F7F7F7] border border-transparent rounded-md px-4 md:px-6 py-3 md:py-4 text-[0.95rem] text-[#111] outline-none transition-all duration-200 focus:bg-white focus:border-[#F4522A] placeholder:text-[#aaa] resize-y"
                    ></textarea>
                  </div>

                  <button type="button" 
                    className="w-full bg-[#F4522A] text-white border-none rounded-md py-[14px] md:py-[18px] px-8 text-base font-medium cursor-pointer transition-all duration-200 mt-2 hover:bg-[#e04320] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,82,42,0.3)] shadow-[0_4px_14px_0_rgba(244,82,42,0.39)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

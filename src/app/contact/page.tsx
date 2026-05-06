"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F7]">
      <Header />
      
      {/* 
        We use flex-grow to ensure the footer is pushed to the bottom 
        if the content isn't tall enough. The ContactUs component 
        already has generous padding, so it will look good here.
      */}
      <main className="flex-grow flex flex-col justify-center py-10">
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}

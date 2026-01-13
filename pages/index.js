import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import BentoSection from '@/components/landing/BentoSection';
import CustomersSection from '@/components/landing/CustomersSection';
import StatsSection from '@/components/landing/StatsSection';
import ProductsSection from '@/components/landing/ProductsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <HeroSection />
        <BentoSection />
        <CustomersSection />
        <StatsSection />
        <ProductsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

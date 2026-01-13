import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import CustomersSection from '@/components/landing/CustomersSection';
import WhatSection from '@/components/landing/WhatSection';
import KubeGrafProofSection from '@/components/landing/KubeGrafProofSection';
import PlatformSection from '@/components/landing/PlatformSection';
import ProductsSection from '@/components/landing/ProductsSection';
import VisionSection from '@/components/landing/VisionSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <HeroSection />
        <CustomersSection />
        <WhatSection />
        <KubeGrafProofSection />
        <PlatformSection />
        <ProductsSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

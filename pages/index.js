import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import ProblemSolutionSection from '@/components/landing/ProblemSolutionSection';
import PlatformSection from '@/components/landing/PlatformSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import ROISection from '@/components/landing/ROISection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import SectionDivider from '@/components/landing/SectionDivider';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Hero - First impression with futuristic visuals */}
        <HeroSection />

        {/* Divider: Dark to White */}
        <SectionDivider
          fillColor="#FFFFFF"
          invert={true}
          height={120}
        />

        {/* Social Proof - Build trust with metrics and logos */}
        <SocialProofSection />

        {/* Divider: White to Dark */}
        <SectionDivider
          fillColor="#08080f"
          invert={true}
          height={120}
        />

        {/* Problem-Solution - Narrative that resonates */}
        <ProblemSolutionSection />

        {/* Platform - Show the architecture and products */}
        <PlatformSection />

        {/* Divider: Dark to White */}
        <SectionDivider
          fillColor="#FFFFFF"
          invert={true}
          height={120}
        />

        {/* Features - Detailed capabilities */}
        <FeaturesSection />

        {/* Use Cases - Industry-specific success stories */}
        <UseCasesSection />

        {/* ROI - Business value calculator */}
        <ROISection />

        {/* Divider: White to Dark */}
        <SectionDivider
          fillColor="#08080f"
          invert={true}
          height={120}
        />

        {/* Final CTA - Convert visitors */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

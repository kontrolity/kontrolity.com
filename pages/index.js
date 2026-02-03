import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import ProblemSolutionSection from '@/components/landing/ProblemSolutionSection';
import PlatformSection from '@/components/landing/PlatformSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import ROISection from '@/components/landing/ROISection';
import TeamSection from '@/components/landing/TeamSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Hero - First impression with futuristic visuals */}
        <HeroSection />

        {/* Social Proof - Build trust with metrics and logos */}
        <SocialProofSection />

        {/* Problem-Solution - Narrative that resonates */}
        <ProblemSolutionSection />

        {/* Platform - Show the architecture and products */}
        <PlatformSection />

        {/* Features - Detailed capabilities */}
        <FeaturesSection />

        {/* Use Cases - Industry-specific success stories */}
        <UseCasesSection />

        {/* ROI & Pricing - Business value and pricing */}
        <ROISection />

        {/* Team - Build VC credibility */}
        <TeamSection />

        {/* Final CTA - Convert visitors */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

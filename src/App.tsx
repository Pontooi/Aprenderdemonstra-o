import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeacherSection } from './components/TeacherSection';
import { EnrollmentSection } from './components/EnrollmentSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Watermark } from './components/Watermark';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#262320] flex flex-col relative selection:bg-[#C52228] selection:text-white">
      
      {/* Demonstration Watermark (Requested by user) */}
      <Watermark />

      {/* Sticky 3-zone Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About / Pillars of the Course */}
        <AboutSection />

        {/* Teacher Profile (Prof. Leonardo Borges - UFJF & Salamanca) */}
        <TeacherSection />

        {/* Direct WhatsApp Enrollment */}
        <EnrollmentSection />

        {/* Location Section (Av. Barão do Rio Branco, 2872 / Sala 1002 Centro Juiz de Fora - MG) */}
        <LocationSection />

        {/* Instagram Community Section */}
        <InstagramSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating Speed-dial WhatsApp button */}
      <FloatingWhatsApp />

    </div>
  );
}

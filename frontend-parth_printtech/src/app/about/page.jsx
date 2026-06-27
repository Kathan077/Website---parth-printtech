"use client";

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutVisionMission from '@/components/About/AboutVisionMission';
import AboutProcess from '@/components/About/AboutProcess';
import AboutExperience from '@/components/About/AboutExperience';
import AboutCoCreation from '@/components/About/AboutCoCreation';
import GlobalReach from '@/components/About/GlobalReach/GlobalReach';
import AboutHistory from '@/components/About/AboutHistory';
import Footer from '@/components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <AboutHero />
        <AboutVisionMission />
        <AboutProcess />
        <AboutExperience />
        <AboutCoCreation />
        <GlobalReach />
        <AboutHistory />
      </main>
      <Footer />
    </>
  );
}


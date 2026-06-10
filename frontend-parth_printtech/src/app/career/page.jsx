"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import CareerHero from '@/components/Career/CareerHero';
import CareerCulture from '@/components/Career/CareerCulture';
import CareerProcess from '@/components/Career/CareerProcess';
import CareerOpenRoles from '@/components/Career/CareerOpenRoles';
import CareerApply from '@/components/Career/CareerApply';
import Footer from '@/components/Footer/Footer';

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <CareerHero />
        <CareerCulture />
        <CareerProcess />
        <CareerOpenRoles onSelectRole={setSelectedRole} />
        <CareerApply selectedRole={selectedRole} onChangeRole={setSelectedRole} />
      </main>
      <Footer />
    </>
  );
}


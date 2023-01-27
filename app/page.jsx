'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Hero, Services } from '@/containers';

export default function Home() {
  const [isActive, setIsActive] = useState(true);

  const handleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="border-l-[1px] border-r-[1px] border-slate-400 md:border-0">
      <header className="bg-black text-white overflow-x-hidden">
        <Navbar isActive={isActive} handleNavbar={handleNavbar} />
        <Hero />
      </header>
      <main>
        <Services />
      </main>
    </div>
  );
}

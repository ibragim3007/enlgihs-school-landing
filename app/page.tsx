"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Advantages from "@/components/sections/Advantages";
import Programs from "@/components/sections/Programs";
import Lessons from "@/components/sections/Lessons";
import Reading from "@/components/sections/Reading";
import Cabinet from "@/components/sections/Cabinet";
import Ecosystem from "@/components/sections/Ecosystem";
import Packages from "@/components/sections/Packages";
import Psychologist from "@/components/sections/Psychologist";
import ForParents from "@/components/sections/ForParents";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <>
      <Header onOpenForm={openForm} />
      <main>
        <Hero onOpenForm={openForm} />
        <About />
        <Advantages />
        <Programs />
        <Lessons />
        <Reading />
        <Cabinet />
        <Ecosystem />
        <Packages onOpenForm={openForm} />
        <Psychologist />
        <ForParents />
        <Founder />
        <Testimonials />
        <FinalCTA onOpenForm={openForm} />
      </main>
      <Footer />
      <ContactForm isOpen={formOpen} onClose={closeForm} />
    </>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Advantages from "@/components/sections/Advantages";
import Diagnostics from "@/components/sections/Diagnostics";
import Testimonials from "@/components/sections/Testimonials";
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
        <Problems />
        <About />
        <Programs />
        <Advantages />
        <Diagnostics onOpenForm={openForm} />
        <Testimonials />
      </main>
      <Footer />
      <ContactForm isOpen={formOpen} onClose={closeForm} />
    </>
  );
}

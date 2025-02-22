import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import SunriseSunset from '@/components/sections/SunriseSunset';
import DailyPanchang from '@/components/sections/DailyPanchang';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Antariksh Life Energy Healing Center</title>
        <meta name="description" content="Transform your life through energy healing at Antariksh Life Energy Healing Center. We offer services including energy healing, guided meditation, chakra balancing, and distance healing." />
        <meta name="keywords" content="energy healing, meditation, chakra balancing, spiritual healing, wellness center" />
        <meta property="og:title" content="Antariksh Life Energy Healing Center" />
        <meta property="og:description" content="Transform your life through energy healing at Antariksh Life Energy Healing Center." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://antariksh.com" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
        <About />
        <Testimonials />
        <Contact />
        <SunriseSunset />
        <DailyPanchang />
      </main>
      <Footer />
    </>
  );
}

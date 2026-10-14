import { Component, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ScrollContext } from "./lib/scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-paper p-8 text-center">
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              Something went wrong.
            </p>
            <p className="mt-2 text-sm text-smoke">{String(this.state.error)}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Landing() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -72, duration: 1.3 });
      return;
    }
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={scrollTo}>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Process />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollContext.Provider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>
  );
}

export default App;

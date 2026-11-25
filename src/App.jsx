import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import SiteLoader from './components/SiteLoader';
import SmoothScroll from './components/SmoothScroll';
import { resetScroll } from './components/scrollManager';
import Home from './pages/Home';
import Members from './pages/Members';
import Events from './pages/Events';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';
import Abhivyakti from './pages/Abhivyakti';

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Cancel Lenis inertia and reset instantly on route change.
    resetScroll();
    gsap.fromTo(wrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power1.out' });
  }, [pathname]);

  return <div ref={wrapperRef} className="w-full">{children}</div>;
}

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink overflow-x-hidden">
      <SmoothScroll />
      <SiteLoader />
      <Navbar />
      {/* 44px global nav */}
      <main className="w-full pt-11">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/abhivyakti" element={<Abhivyakti />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

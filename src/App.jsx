import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import SiteLoader from './components/SiteLoader';
import SmoothScroll from './components/SmoothScroll';
import PageSkeleton from './components/PageSkeleton';
import { resetScroll } from './components/scrollManager';

// Each page is its own chunk; the skeleton holds the layout while it loads.
const Home = lazy(() => import('./pages/Home'));
const Members = lazy(() => import('./pages/Members'));
const Events = lazy(() => import('./pages/Events'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Abhivyakti = lazy(() => import('./pages/Abhivyakti'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Cancel Lenis inertia and reset instantly on route change.
    resetScroll();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(wrapperRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', clearProps: 'transform' });
  }, [pathname]);

  return <div ref={wrapperRef} className="w-full">{children}</div>;
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <SmoothScroll />
      <SiteLoader />
      <Navbar />
      {/* 72px global nav */}
      <main id="main" className="w-full pt-[72px]">
        <PageTransition>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/abhivyakti" element={<Abhivyakti />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

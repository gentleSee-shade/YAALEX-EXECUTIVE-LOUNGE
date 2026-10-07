import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryPanel } from './components/EnquiryPanel';

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Dining } from './pages/Dining';
import { Amenities } from './pages/Amenities';
import { Gallery } from './pages/Gallery';
import { LocationContact } from './pages/LocationContact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <EnquiryProvider>
        <div className="min-h-screen flex flex-col bg-[#F6F2EC] text-[#1C1814] pb-14 lg:pb-0">
          <ScrollToTop />
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/location" element={<LocationContact />} />
              {/* Alias for /contact */}
              <Route path="/contact" element={<Navigate to="/location" replace />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <StickyMobileBar />
          <EnquiryPanel />
        </div>
      </EnquiryProvider>
    </BrowserRouter>
  );
}

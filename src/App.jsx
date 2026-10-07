import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { CustomCursor } from './components/CustomCursor';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { LocationsPage } from './pages/LocationsPage';
import { FranchisePage } from './pages/FranchisePage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { VisitUsPage } from './pages/VisitUsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

import './styles/App.css';

export default function App() {
  const [activeItemModal, setActiveItemModal] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-story" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage setActiveItemModal={setActiveItemModal} />} />
            <Route path="/locations" element={<VisitUsPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/visit-us" element={<VisitUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />

        {/* Global Recipe Details Modal */}
        <ItemModal activeItem={activeItemModal} onClose={() => setActiveItemModal(null)} />
      </div>
    </BrowserRouter>
  );
}

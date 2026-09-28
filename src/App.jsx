import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { LocationsPage } from './pages/LocationsPage';
import { FranchisePage } from './pages/FranchisePage';
import { ContactPage } from './pages/ContactPage';

import './styles/App.css';

export default function App() {
  const [activeItemModal, setActiveItemModal] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage setActiveItemModal={setActiveItemModal} />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/contact" element={<ContactPage />} />
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

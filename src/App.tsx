import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Chatbot } from './components/Chatbot';

import { Home } from './pages/Home';
import { Club } from './pages/Club';
import { Teams } from './pages/Teams';
import { TeamDetail } from './pages/TeamDetail';
import { PlayerDetail } from './pages/PlayerDetail';
import { Calendar } from './pages/Calendar';
import { Results } from './pages/Results';
import { Gallery } from './pages/Gallery';
import { Sponsors } from './pages/Sponsors';
import { Join } from './pages/Join';
import { News } from './pages/News';
import { ArticleDetail } from './pages/ArticleDetail';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Fans } from './pages/Fans';
import { Admin } from './pages/Admin';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen w-full flex-col bg-teranga-cream">
          <Navbar />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/club" element={<Club />} />
              <Route path="/equipes" element={<Teams />} />
              <Route path="/equipe/:id" element={<TeamDetail />} />
              <Route path="/joueur/:id" element={<PlayerDetail />} />
              <Route path="/calendrier" element={<Calendar />} />
              <Route path="/resultats" element={<Results />} />
              <Route path="/galerie" element={<Gallery />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/rejoindre" element={<Join />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/actualite/:slug" element={<ArticleDetail />} />
              <Route path="/boutique" element={<Shop />} />
              <Route path="/supporters" element={<Fans />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/mentions-legales" element={<Legal kind="mentions" />} />
              <Route path="/confidentialite" element={<Legal kind="privacy" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </CartProvider>);

}
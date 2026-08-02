import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Experience } from './components/Experience';
import { Meats } from './components/Meats';
import { Communal } from './components/Communal';
import { Featured } from './components/Featured';
import { Testimonials } from './components/Testimonials';
import { Contact as ContactSection } from './components/Contact';
import { Menu } from './pages/Menu';
import { Contact as ContactPage } from './pages/Contact';
function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#121212]">
      <Hero />
      <Story />
      <Experience />
      <Meats />
      <Communal />
      <Featured />
      <Testimonials />
      <ContactSection />
    </div>);

}
export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>);

}
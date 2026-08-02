import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };
  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path);
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      } else {
        const element = document.querySelector(path);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      navigate(path);
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-zinc-200/50">
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1615799998603-7c6270a45196?w=1200')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-7">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            
            <div className="w-1 h-10 sm:h-12 bg-red-600 rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-3xl font-serif font-bold text-zinc-900 leading-none tracking-tight">
                {t('nav.brandName').split(' ')[0]}{' '}
                <span className="text-red-500">
                  {t('nav.brandName').split(' ')[1]}
                </span>
              </h1>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1">
                {t('nav.brandTagline')}
              </span>
            </div>
          </button>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => handleNavigation('/')}
              className={`relative font-semibold text-sm tracking-wider uppercase transition-colors duration-300 group ${location.pathname === '/' ? 'text-red-600' : 'text-zinc-900 hover:text-red-600'}`}>
              
              {t('nav.home')}
              {location.pathname === '/' &&
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-600" />
              }
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => handleNavigation('/menu')}
              className={`relative font-semibold text-sm tracking-wider uppercase transition-colors duration-300 group ${location.pathname === '/menu' ? 'text-red-600' : 'text-zinc-900 hover:text-red-600'}`}>
              
              {t('nav.menu')}
              {location.pathname === '/menu' &&
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-600" />
              }
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`relative font-semibold text-sm tracking-wider uppercase transition-colors duration-300 group ${location.pathname === '/contact' ? 'text-red-600' : 'text-zinc-900 hover:text-red-600'}`}>
              
              {t('nav.contact')}
              {location.pathname === '/contact' &&
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-600" />
              }
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-900"
              title="Toggle language">
              
              <GlobeIcon size={18} />
              <span className="font-semibold text-sm">
                {i18n.language === 'en' ? '한국어' : 'EN'}
              </span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-900"
              title="Toggle language">
              
              <GlobeIcon size={16} />
              <span className="font-semibold text-xs">
                {i18n.language === 'en' ? '한국어' : 'EN'}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Toggle menu">
              
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen &&
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-zinc-200 shadow-lg">
            <div className="flex flex-col py-4">
              <button
              onClick={() => handleNavigation('/')}
              className={`px-6 py-3 text-left font-semibold text-base tracking-wider uppercase transition-colors ${location.pathname === '/' ? 'text-red-600 bg-red-50' : 'text-zinc-900 hover:bg-zinc-50'}`}>
              
                {t('nav.home')}
              </button>
              <button
              onClick={() => handleNavigation('/menu')}
              className={`px-6 py-3 text-left font-semibold text-base tracking-wider uppercase transition-colors ${location.pathname === '/menu' ? 'text-red-600 bg-red-50' : 'text-zinc-900 hover:bg-zinc-50'}`}>
              
                {t('nav.menu')}
              </button>
              <button
              onClick={() => handleNavigation('/contact')}
              className={`px-6 py-3 text-left font-semibold text-base tracking-wider uppercase transition-colors ${location.pathname === '/contact' ? 'text-red-600 bg-red-50' : 'text-zinc-900 hover:bg-zinc-50'}`}>
              
                {t('nav.contact')}
              </button>
            </div>
          </div>
        }
      </div>
    </nav>);

}
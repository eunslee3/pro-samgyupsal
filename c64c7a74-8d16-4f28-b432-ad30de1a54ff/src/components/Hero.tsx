import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1920&q=80"
          alt="Korean BBQ grill table"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(18,18,18,0.3)_100%)]" />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="max-w-4xl">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#F8F5F0] mb-4 sm:mb-6 tracking-tight leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F8F5F0]/90 mb-8 sm:mb-12 font-light px-4 sm:px-0">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/menu" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#B23A35] text-white text-base sm:text-lg font-medium rounded-sm hover:bg-[#C44A40] transition-colors">
                
                {t('hero.viewMenu')}
              </motion.button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#C49A6C] text-[#C49A6C] text-base sm:text-lg font-medium rounded-sm hover:bg-[#C49A6C] hover:text-[#121212] transition-all">
                
                {t('hero.reserve')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="w-6 h-10 border-2 border-[#F8F5F0]/50 rounded-full flex items-start justify-center p-2">
          
          <div className="w-1 h-2 bg-[#F8F5F0]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>);

}
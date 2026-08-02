import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
export function Communal() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <section
      ref={ref}
      className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
          alt="Friends enjoying Korean BBQ"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={
          inView ?
          {
            opacity: 1,
            scale: 1
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="max-w-3xl">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#F8F5F0] mb-4 sm:mb-6 px-4">
            {t('communal.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#F8F5F0]/90 mb-6 sm:mb-8 font-light px-4">
            {t('communal.description')}
          </p>
          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-[#C49A6C] text-[#121212] text-base sm:text-lg font-medium rounded-sm hover:bg-[#D4AA7C] transition-colors">
            
            {t('communal.cta')}
          </motion.button>
        </motion.div>
      </div>
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#B23A35]/20 rounded-full blur-3xl" />
    </section>);

}
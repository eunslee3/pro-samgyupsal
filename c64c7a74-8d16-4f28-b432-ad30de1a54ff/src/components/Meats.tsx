import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
const meatImages = [
'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80',
'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80',
'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80',
'https://images.unsplash.com/photo-1582378683879-e7ff5e921c00?w=600&q=80'];

const meatKeys = ['porkBelly', 'galbi', 'bulgogi', 'spicyPork'];
export function Meats() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#121212] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          inView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#F8F5F0] mb-3 sm:mb-4 px-4">
            {t('meats.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F8F5F0]/70 max-w-2xl mx-auto px-4">
            {t('meats.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {meatKeys.map((key, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            inView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group cursor-pointer">
            
              <div className="relative overflow-hidden rounded-lg border-2 border-[#B23A35]/30 hover:border-[#B23A35] transition-colors">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
                  <img
                  src={meatImages[index]}
                  alt={t(`meats.${key}.name`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-[#C49A6C] text-xs sm:text-sm mb-1">
                    {t(`meats.${key}.korean`)}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#F8F5F0] mb-1 sm:mb-2">
                    {t(`meats.${key}.name`)}
                  </h3>
                  <p className="text-[#F8F5F0]/70 text-xs sm:text-sm">
                    {t(`meats.${key}.desc`)}
                  </p>
                </div>
                {/* Hover accent */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#B23A35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
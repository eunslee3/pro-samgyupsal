import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TvIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function Featured() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#1a1a1a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      
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
        className="max-w-4xl mx-auto text-center">
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <TvIcon className="text-[#B23A35]" size={28} />
          <div className="h-px w-12 sm:w-16 bg-[#C49A6C]" />
          <p className="text-[#C49A6C] text-xs sm:text-sm uppercase tracking-wider">
            {t('featured.label')}
          </p>
          <div className="h-px w-12 sm:w-16 bg-[#C49A6C]" />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#F8F5F0] mb-3 sm:mb-4 px-4">
          {t('featured.title')}
        </h3>
        <p className="text-base sm:text-lg text-[#F8F5F0]/70 max-w-2xl mx-auto px-4">
          {t('featured.description')}
        </p>
        {/* Decorative accent */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#B23A35] to-transparent" />
        </div>
      </motion.div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function MenuPreview() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const menuCategories = [
  {
    titleKey: 'menuPreview.premiumCuts',
    items: [
    {
      nameKey: 'menuPreview.items.primePorkBelly',
      price: '$28'
    },
    {
      nameKey: 'menuPreview.items.galbiShortRib',
      price: '$35'
    },
    {
      nameKey: 'menuPreview.items.wagyuBrisket',
      price: '$42'
    }]

  },
  {
    titleKey: 'menuPreview.beefSpecials',
    items: [
    {
      nameKey: 'menuPreview.items.spicyPork',
      price: '$24'
    },
    {
      nameKey: 'menuPreview.items.bulgogiBeef',
      price: '$26'
    },
    {
      nameKey: 'menuPreview.items.marinatedChicken',
      price: '$22'
    }]

  },
  {
    titleKey: 'menuPreview.classics',
    items: [
    {
      nameKey: 'menuPreview.items.kimchiJjigae',
      price: '$16'
    },
    {
      nameKey: 'menuPreview.items.bibimbap',
      price: '$18'
    },
    {
      nameKey: 'menuPreview.items.japchae',
      price: '$14'
    }]

  }];

  return (
    <section
      ref={ref}
      className="w-full bg-[#F8F5F0] py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background texture with more circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#121212] rounded-full" />
        <div className="absolute top-32 right-32 w-52 h-52 border-2 border-[#121212] rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-40 left-20 w-56 h-56 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#121212] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-44 h-44 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-1/3 left-1/2 w-60 h-60 border-2 border-[#121212] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#121212] mb-3 sm:mb-4 px-4">
            {t('menuPreview.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#121212]/70 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            {t('menuPreview.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {menuCategories.map((category, categoryIndex) =>
          <motion.div
            key={categoryIndex}
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
              delay: categoryIndex * 0.1
            }}
            className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            
              <h3 className="text-xl sm:text-2xl font-serif text-[#B23A35] mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-[#C49A6C]/30">
                {t(category.titleKey)}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.items.map((item, itemIndex) =>
              <div
                key={itemIndex}
                className="flex justify-between items-baseline gap-2">
                
                    <span className="text-sm sm:text-base text-[#121212] font-medium">
                      {t(item.nameKey)}
                    </span>
                    <span className="text-sm sm:text-base text-[#C49A6C] font-serif flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={
          inView ?
          {
            opacity: 1
          } :
          {}
          }
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-center mt-8 sm:mt-12">
          
          <Link to="/menu">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#121212] text-[#F8F5F0] text-base sm:text-lg font-medium rounded-sm hover:bg-[#2a2a2a] transition-colors">
              {t('menuPreview.viewFullMenu')}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>);

}
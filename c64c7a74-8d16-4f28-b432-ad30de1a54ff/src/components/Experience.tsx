import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlameIcon, DropletIcon, LeafIcon, UsersIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const stepImages = [
'https://s3-media0.fl.yelpcdn.com/bphoto/QeQBONyq1WhG7U4SplBNnw/o.jpg',
'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
'https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=600&q=80',
'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80'];

const stepIcons = [FlameIcon, DropletIcon, LeafIcon, UsersIcon];
export function Experience() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#F8F5F0] py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#121212] rounded-full" />
        <div className="absolute top-40 right-20 w-48 h-48 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-80 h-80 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#121212] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-[#121212] rounded-full" />
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
            {t('experience.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#121212]/70 max-w-2xl mx-auto px-4">
            {t('experience.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[1, 2, 3, 4].map((step, index) => {
            const Icon = stepIcons[index];
            return (
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
                className="relative group">
                
                <div className="bg-white rounded-lg overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#B23A35] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    {index + 1}
                  </div>
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={stepImages[index]}
                      alt={t(`experience.step${step}Title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4 text-[#C49A6C]">
                      <Icon size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#121212] mb-2 sm:mb-3">
                      {t(`experience.step${step}Title`)}
                    </h3>
                    <p className="text-sm sm:text-base text-[#121212]/70 leading-relaxed">
                      {t(`experience.step${step}Desc`)}
                    </p>
                  </div>
                </div>
                {/* Arrow connector (hidden on mobile and last item) */}
                {index < 3 &&
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#C49A6C] opacity-30 z-20">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor">
                    
                      <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                    
                    </svg>
                  </div>
                }
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
export function Story() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#1a1a1a] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={
            inView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="space-y-4 sm:space-y-6 order-2 md:order-1">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#F8F5F0] leading-tight">
              {t('story.title')}
            </h2>
            <div className="border-l-4 border-[#B23A35] pl-4 sm:pl-6">
              <p className="text-lg sm:text-xl md:text-2xl text-[#C49A6C] italic font-light">
                "{t('story.quote')}"
              </p>
              <p className="text-base sm:text-lg text-[#F8F5F0]/70 mt-2">
                {t('story.quoteAuthor')}
              </p>
            </div>
            <p className="text-base sm:text-lg text-[#F8F5F0]/80 leading-relaxed">
              {t('story.paragraph1')}
            </p>
            <p className="text-base sm:text-lg text-[#F8F5F0]/80 leading-relaxed">
              {t('story.paragraph2')}
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={
            inView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative order-1 md:order-2">
            
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80"
                alt="Family cooking Korean BBQ"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-[#B23A35]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>);

}
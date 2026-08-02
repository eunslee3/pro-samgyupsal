import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
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
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F8F5F0]/70 mb-6 sm:mb-8 px-4">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
              duration: 0.6,
              delay: 0.1
            }}
            className="text-center">
            
            <MapPinIcon
              className="text-[#B23A35] mx-auto mb-3 sm:mb-4"
              size={36} />
            
            <h3 className="text-lg sm:text-xl font-serif text-[#F8F5F0] mb-2">
              {t('contact.location')}
            </h3>
            <p className="text-sm sm:text-base text-[#F8F5F0]/70 whitespace-pre-line px-4">
              {t('contact.address')}
            </p>
          </motion.div>
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
              duration: 0.6,
              delay: 0.2
            }}
            className="text-center">
            
            <PhoneIcon
              className="text-[#B23A35] mx-auto mb-3 sm:mb-4"
              size={36} />
            
            <h3 className="text-lg sm:text-xl font-serif text-[#F8F5F0] mb-2">
              {t('contact.phone')}
            </h3>
            <p className="text-sm sm:text-base text-[#F8F5F0]/70">
              {t('contact.phoneNumber')}
            </p>
          </motion.div>
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
              duration: 0.6,
              delay: 0.3
            }}
            className="text-center">
            
            <ClockIcon
              className="text-[#B23A35] mx-auto mb-3 sm:mb-4"
              size={36} />
            
            <h3 className="text-lg sm:text-xl font-serif text-[#F8F5F0] mb-2">
              {t('contact.hours')}
            </h3>
            <p className="text-sm sm:text-base text-[#F8F5F0]/70 whitespace-pre-line px-4">
              {t('contact.schedule')}
            </p>
          </motion.div>
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
          className="text-center">
          
          <Link to="/contact">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#B23A35] text-white text-base sm:text-lg font-medium rounded-sm hover:bg-[#C44A40] transition-colors">
              {t('contact.getInTouch')}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>);

}
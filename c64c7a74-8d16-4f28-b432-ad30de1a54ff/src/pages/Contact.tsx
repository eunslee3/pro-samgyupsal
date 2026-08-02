import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPinIcon, PhoneIcon, ClockIcon, Navigation2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Contact() {
  const { t } = useTranslation();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [locationRef, locationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [communityRef, communityInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const location = {
    address: '3420 Milwaukee Ave, Northbrook, IL 60062',
    phone: '(847) 715-9073',
    hours: 'Mon-Sat: 4PM - 10:45PM\nSun: 4PM - 9:45PM',
    mapUrl: 'https://maps.google.com/?q=3420+Milwaukee+Ave+Northbrook+IL+60062'
  };
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="w-full min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[70vh] overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant interior"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 sm:pt-0">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            heroInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}>
            
            <Link
              to="/"
              className="text-[#C49A6C] hover:text-[#D4AA7C] mb-4 sm:mb-6 inline-block text-sm sm:text-base">
              
              {t('contactPage.backToHome')}
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F8F5F0] mb-4 sm:mb-6">
              {t('contactPage.title')}
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-[#B23A35] mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl text-[#F8F5F0]/90 mb-3 sm:mb-4 font-light max-w-3xl px-4">
              {t('contactPage.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-[#C49A6C] italic mb-6 sm:mb-8 px-4">
              {t('contactPage.tagline')}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={scrollToForm}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#B23A35] text-white text-base sm:text-lg font-medium rounded-sm hover:bg-[#C44A40] transition-colors">
              
              {t('contactPage.sendMessage')}
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Visit Us Section */}
      <section
        ref={locationRef}
        className="w-full bg-[#F8F5F0] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            locationInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-8 sm:mb-12">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#121212] mb-3 sm:mb-4">
              {t('contactPage.visitUs')}
            </h2>
            <p className="text-lg sm:text-xl text-[#121212]/70">
              {t('contactPage.visitSubtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Location Card - Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              animate={
              locationInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
              className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow h-fit">
              
              <div className="flex flex-col gap-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-4">
                  <MapPinIcon
                    className="text-[#B23A35] flex-shrink-0 mt-1"
                    size={28} />
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#121212] mb-2">
                      {t('contact.location')}
                    </h3>
                    <p className="text-base sm:text-lg text-[#121212]/70">
                      {location.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon
                    className="text-[#C49A6C] flex-shrink-0 mt-1"
                    size={24} />
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#121212]/70 mb-1">
                      {t('contact.phone')}
                    </h4>
                    <a
                      href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                      className="text-base sm:text-lg text-[#121212] hover:text-[#B23A35] transition-colors">
                      
                      {location.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClockIcon
                    className="text-[#C49A6C] flex-shrink-0 mt-1"
                    size={24} />
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#121212]/70 mb-1">
                      {t('contact.hours')}
                    </h4>
                    <p className="text-sm sm:text-base text-[#121212]/70 whitespace-pre-line">
                      {location.hours}
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B23A35] text-white rounded-lg hover:bg-[#C44A40] transition-colors text-sm sm:text-base">
                
                <Navigation2Icon size={18} />
                {t('contactPage.getDirections')}
              </a>
            </motion.div>
            {/* Map - Right */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              animate={
              locationInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="w-full h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.8!2d-87.8!3d42.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA2JzAwLjAiTiA4N8KwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pro Samgyupsal Location" />
              
            </motion.div>
          </div>
        </div>
      </section>
      {/* Community Callout */}
      <section
        ref={communityRef}
        className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=1920&q=80"
            alt="Korean banchan"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            communityInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#F8F5F0] mb-4 sm:mb-6 px-4">
              {t('contactPage.communityTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-[#F8F5F0]/80 mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
              {t('contactPage.communitySubtitle')}
            </p>
            <p className="text-base sm:text-lg text-[#C49A6C] italic px-4">
              {t('contactPage.communitySignature')}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Featured On Section */}
      <section
        ref={featuredRef}
        className="w-full bg-[#1a1a1a] py-12 sm:py-16 px-4 sm:px-6">
        
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          featuredInView ?
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
            <div className="h-px w-12 sm:w-16 bg-[#C49A6C]" />
            <p className="text-[#C49A6C] text-xs sm:text-sm uppercase tracking-wider">
              {t('contactPage.featuredLabel')}
            </p>
            <div className="h-px w-12 sm:w-16 bg-[#C49A6C]" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F8F5F0] mb-3 sm:mb-4 px-4">
            {t('contactPage.featuredTitle')}
          </h3>
          <p className="text-base sm:text-lg text-[#F8F5F0]/70 mb-4 sm:mb-6 px-4">
            {t('contactPage.featuredDesc')}
          </p>
          <a
            href="#"
            className="text-[#C49A6C] hover:text-[#D4AA7C] transition-colors underline text-sm sm:text-base">
            
            {t('contactPage.readFeature')}
          </a>
        </motion.div>
      </section>
      {/* Footer CTA */}
      <section className="w-full bg-[#121212] py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
            }} />
          
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F5F0] mb-6 sm:mb-8 px-4">
            {t('contactPage.readyTitle')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#B23A35] text-white text-base sm:text-lg font-medium rounded-sm hover:bg-[#C44A40] transition-colors">
              
              {t('contactPage.reserveTable')}
            </motion.button>
            <Link to="/menu" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="w-full px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#C49A6C] text-[#C49A6C] text-base sm:text-lg font-medium rounded-sm hover:bg-[#C49A6C] hover:text-[#121212] transition-all">
                
                {t('contactPage.viewMenu')}
              </motion.button>
            </Link>
          </div>
          <p className="text-sm sm:text-base text-[#F8F5F0]/70 px-4">
            {t('contactPage.walkInsWelcome')}
          </p>
        </div>
      </section>
    </div>);

}
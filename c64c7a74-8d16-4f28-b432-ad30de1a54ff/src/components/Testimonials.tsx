import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QuoteIcon } from 'lucide-react';
const testimonials = [
{
  quote:
  "The pork belly here is absolutely incredible. Best Korean BBQ I've had outside of Seoul. The family that runs this place makes you feel right at home.",
  author: 'Michael Chen',
  location: 'Chicago, IL'
},
{
  quote:
  'We come here for every celebration. The tableside grilling experience is so fun, and the meat quality is unmatched. Our kids love it too!',
  author: 'Sarah Johnson',
  location: 'Northbrook, IL'
},
{
  quote:
  "First time trying Korean BBQ and the staff walked us through everything. The galbi short rib melts in your mouth. We're already planning our next visit.",
  author: 'David Martinez',
  location: 'Evanston, IL'
}];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#F8F5F0] py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-[#121212] rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border-2 border-[#121212] rounded-full" />
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
            What Our Guests Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#121212]/70 max-w-2xl mx-auto px-4">
            Stories from the table — in their own words.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) =>
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
              delay: index * 0.15
            }}
            className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative">
            
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-[#B23A35]/10">
                <QuoteIcon size={48} fill="currentColor" />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 sm:mb-6">
                  <QuoteIcon
                  className="text-[#B23A35] mb-3 sm:mb-4"
                  size={32} />
                
                  <p className="text-base sm:text-lg text-[#121212]/80 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t-2 border-[#C49A6C]/20 pt-4">
                  <p className="text-base sm:text-lg font-serif text-[#121212] mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#121212]/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        {/* Decorative element */}
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
            duration: 1,
            delay: 0.6
          }}
          className="text-center mt-8 sm:mt-12">
          
          <div className="inline-flex items-center gap-2 text-[#C49A6C]">
            <div className="w-12 h-px bg-[#C49A6C]" />
            <p className="text-sm uppercase tracking-wider">
              Join our family of regulars
            </p>
            <div className="w-12 h-px bg-[#C49A6C]" />
          </div>
        </motion.div>
      </div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FlameIcon,
  DropletIcon,
  LeafIcon,
  UsersIcon,
  WineIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
const premiumCuts = [
{
  name: 'Pork Belly',
  korean: '삼겹살 (Samgyupsal)',
  price: '$28',
  description: 'Thick-cut, scored pork belly grilled to perfection.',
  image:
  'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80'
},
{
  name: 'Premium Pork Jowl',
  korean: '항정살',
  price: '$32',
  description: 'Tender, marbled cut from the neck — rich and flavorful.',
  image:
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80'
},
{
  name: 'Pork Shoulder',
  korean: '목살',
  price: '$26',
  description: 'Well-marbled shoulder cut with deep, savory flavor.',
  image:
  'https://images.unsplash.com/photo-1582378683879-e7ff5e921c00?w=600&q=80'
}];

const beefSpecials = [
{
  name: 'Galbi Short Rib',
  korean: '갈비',
  price: '$35',
  description: 'Tender, sweet, and savory beef short rib.',
  image:
  'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80'
},
{
  name: 'Bulgogi',
  korean: '불고기',
  price: '$26',
  description: 'Marinated thin-sliced beef, caramelized to perfection.',
  image:
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80'
},
{
  name: 'Wagyu Brisket',
  korean: '와규 양지',
  price: '$42',
  description: 'Premium wagyu brisket with exceptional marbling.',
  image:
  'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80'
}];

const classics = [
{
  name: 'Kimchi Jjigae',
  korean: '김치찌개',
  price: '$16',
  description: 'Spicy kimchi stew with pork and tofu.',
  icon: '🍲'
},
{
  name: 'Galbi-Tang',
  korean: '갈비탕',
  price: '$18',
  description: 'Hearty short rib soup with radish and glass noodles.',
  icon: '🔥'
},
{
  name: 'Mul-Naengmyeon',
  korean: '물냉면',
  price: '$14',
  description: 'Cold buckwheat noodles in refreshing broth.',
  icon: '🍜'
},
{
  name: 'Bibimbap',
  korean: '비빔밥',
  price: '$18',
  description: 'Mixed rice bowl with vegetables, egg, and gochujang.',
  icon: '🍚'
},
{
  name: 'Japchae',
  korean: '잡채',
  price: '$14',
  description: 'Stir-fried glass noodles with vegetables.',
  icon: '🥢'
},
{
  name: 'Doenjang Jjigae',
  korean: '된장찌개',
  price: '$16',
  description: 'Savory soybean paste stew with vegetables.',
  icon: '🍲'
}];

const drinks = [
{
  name: 'Makgeolli',
  description: 'Traditional rice wine',
  price: '$12'
},
{
  name: 'Soju',
  description: 'Classic Korean spirit',
  price: '$8'
},
{
  name: 'Korean Beer',
  description: 'Cass, Hite, or OB',
  price: '$6'
},
{
  name: 'Soft Drinks',
  description: 'Coke, Sprite, or Calpico',
  price: '$3'
}];

const enjoySteps = [
{
  icon: FlameIcon,
  title: 'Grill Your Meat',
  description: 'Watch as premium cuts sizzle on your personal grill.'
},
{
  icon: DropletIcon,
  title: 'Dip in Sesame Oil',
  description: 'Enhance the flavor with our house-made sauces.'
},
{
  icon: LeafIcon,
  title: 'Wrap & Enjoy',
  description: 'Bundle in crisp lettuce or pickled radish.'
},
{
  icon: UsersIcon,
  title: 'Share the Moment',
  description: 'Korean BBQ is meant to be shared with loved ones.'
}];

export function Menu() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [cutsRef, cutsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [beefRef, beefInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [classicsRef, classicsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [enjoyRef, enjoyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [drinksRef, drinksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="w-full min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[70vh] overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1920&q=80"
            alt="Korean BBQ table"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
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
              className="text-[#C49A6C] hover:text-[#D4AA7C] mb-4 inline-block">
              
              ← Back to Home
            </Link>
            <h1 className="text-6xl md:text-7xl font-serif text-[#F8F5F0] mb-6">
              Our Menu
            </h1>
            <div className="w-32 h-1 bg-[#B23A35] mx-auto mb-6" />
            <p className="text-2xl text-[#F8F5F0]/90 mb-4 font-light">
              High-quality meats, prepared tableside — crafted for sharing.
            </p>
            <p className="text-lg text-[#C49A6C] italic">
              "No appetizers, no desserts — just exceptional BBQ."
            </p>
          </motion.div>
        </div>
      </section>
      {/* Premium Cuts Section */}
      <section
        ref={cutsRef}
        className="w-full bg-[#121212] py-24 px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 border border-[#F8F5F0] rounded-full" />
          <div className="absolute bottom-20 left-20 w-64 h-64 border border-[#F8F5F0] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            cutsInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-16">
            
            <h2 className="text-5xl md:text-6xl font-serif text-[#F8F5F0] mb-4">
              Premium Cuts
            </h2>
            <p className="text-xl text-[#F8F5F0]/70 max-w-2xl mx-auto">
              Our specialty — five unique pork cuts, prepared for perfect
              grilling.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {premiumCuts.map((item, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              cutsInView ?
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
              
                <div className="relative overflow-hidden rounded-lg border-2 border-[#B23A35]/30 hover:border-[#B23A35] transition-all hover:shadow-2xl hover:shadow-[#B23A35]/20">
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C49A6C] text-sm mb-2">{item.korean}</p>
                    <h3 className="text-2xl font-serif text-[#F8F5F0] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[#F8F5F0]/70 text-sm mb-3">
                      {item.description}
                    </p>
                    <p className="text-[#C49A6C] text-xl font-serif">
                      {item.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* Divider Wave */}
      <div className="w-full h-24 bg-gradient-to-b from-[#121212] to-[#1a1a1a]" />
      {/* Beef & Specials Section */}
      <section ref={beefRef} className="w-full bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            beefInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-16">
            
            <h2 className="text-5xl md:text-6xl font-serif text-[#F8F5F0] mb-4">
              Beef & Specials
            </h2>
            <p className="text-xl text-[#F8F5F0]/70 max-w-2xl mx-auto">
              Signature Korean beef selections, cut and grilled for tenderness
              and flavor.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {beefSpecials.map((item, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              beefInView ?
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
              
                <div className="relative overflow-hidden rounded-lg border-2 border-[#B23A35]/30 hover:border-[#B23A35] transition-all hover:shadow-2xl hover:shadow-[#B23A35]/20">
                  <div className="aspect-[4/3] overflow-hidden bg-[#121212]">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C49A6C] text-sm mb-2">{item.korean}</p>
                    <h3 className="text-2xl font-serif text-[#F8F5F0] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[#F8F5F0]/70 text-sm mb-3">
                      {item.description}
                    </p>
                    <p className="text-[#C49A6C] text-xl font-serif">
                      {item.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* Hearty Korean Classics Section */}
      <section
        ref={classicsRef}
        className="w-full bg-[#F8F5F0] py-24 px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 border-2 border-[#121212] rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-[#121212] rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#121212] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            classicsInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-16">
            
            <h2 className="text-5xl md:text-6xl font-serif text-[#121212] mb-4">
              Hearty Korean Classics
            </h2>
            <p className="text-xl text-[#121212]/70 max-w-2xl mx-auto">
              Soups, stews, and noodles that complete your BBQ experience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {classics.map((item, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              classicsInView ?
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
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-[#C49A6C] text-sm mb-2">{item.korean}</p>
                <h3 className="text-2xl font-serif text-[#121212] mb-3">
                  {item.name}
                </h3>
                <p className="text-[#121212]/70 mb-4">{item.description}</p>
                <p className="text-[#B23A35] text-xl font-serif">
                  {item.price}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* How to Enjoy Section */}
      <section ref={enjoyRef} className="w-full bg-[#F9F7F5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            enjoyInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-16">
            
            <h2 className="text-5xl md:text-6xl font-serif text-[#121212] mb-4">
              How to Enjoy
            </h2>
            <p className="text-xl text-[#121212]/70 max-w-2xl mx-auto">
              The dining ritual that makes Korean BBQ special.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {enjoySteps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              enjoyInView ?
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
              className="text-center">
              
                <div className="w-20 h-20 bg-[#B23A35] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <step.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[#121212] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#121212]/70">{step.description}</p>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={
            enjoyInView ?
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
            
            <button className="px-10 py-4 bg-[#B23A35] text-white text-lg font-medium rounded-sm hover:bg-[#C44A40] transition-colors">
              Book a Table and Try It Yourself
            </button>
          </motion.div>
        </div>
      </section>
      {/* Drinks Section */}
      <section
        ref={drinksRef}
        className="w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-24 px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            drinksInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.8
            }}
            className="text-center mb-16">
            
            <WineIcon className="text-[#C49A6C] mx-auto mb-6" size={48} />
            <h2 className="text-5xl md:text-6xl font-serif text-[#F8F5F0] mb-4">
              Drinks
            </h2>
            <p className="text-xl text-[#F8F5F0]/70">
              Classic Korean drinks that pair perfectly with grilled meat.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {drinks.map((drink, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={
              drinksInView ?
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
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#C49A6C]/20 hover:border-[#C49A6C]/40 transition-colors">
              
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-[#F8F5F0] mb-2">
                      {drink.name}
                    </h3>
                    <p className="text-[#F8F5F0]/70">{drink.description}</p>
                  </div>
                  <p className="text-[#C49A6C] text-xl font-serif">
                    {drink.price}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* As Seen On Section */}
      <section className="w-full bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#C49A6C]" />
            <p className="text-[#C49A6C] text-sm uppercase tracking-wider">
              As Featured On
            </p>
            <div className="h-px w-16 bg-[#C49A6C]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-[#F8F5F0] mb-4">
            ABC 7 News Chicago
          </h3>
          <p className="text-lg text-[#F8F5F0]/70">
            Recognized for one of the best Korean BBQ experiences in the region.
          </p>
        </div>
      </section>
    </div>);

}
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClockIcon, FlameIcon, LeafIcon, MapPinIcon, PhoneIcon, TvIcon, UsersIcon } from 'lucide-react';

const meats = [
  ['Premium Pork Belly','삼겹살','Thick-cut, marbled perfection. Our signature cut.','https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80'],
  ['Galbi Short Rib','갈비','Tender, sweet, and savory beef short rib.','https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=80'],
  ['Beef Bulgogi','불고기','Marinated thin-sliced beef, caramelized to perfection.','https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=900&q=80'],
  ['Spicy Pork','제육볶음','Bold, spicy, and incredibly flavorful.','https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&q=80'],
];

export default function HomePage() {
  return <main className="bg-[#121212] pt-20 sm:pt-24">
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden text-center">
      <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1920&q=80" alt="Korean BBQ grill table" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85"/>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-10 max-w-5xl px-5">
        <h1 className="mb-6 font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">Family. Fire. Flavor.</h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-white/85 sm:text-2xl">High-quality meats, grilled tableside — where first-timers become regulars.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row"><Link href="/menu" className="bg-[#B23A35] px-8 py-4 font-semibold hover:bg-[#C44A40]">View Menu</Link><Link href="/contact" className="border-2 border-[#C49A6C] px-8 py-4 font-semibold text-[#C49A6C] hover:bg-[#C49A6C] hover:text-black">Reserve a Table</Link></div>
      </motion.div>
    </section>

    <section className="grid gap-10 bg-[#F8F5F0] px-6 py-20 text-[#121212] md:grid-cols-2 md:px-12 lg:px-24">
      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80" alt="Family restaurant interior" className="h-full min-h-96 w-full object-cover"/>
      <div className="flex flex-col justify-center"><p className="mb-4 uppercase tracking-[.25em] text-[#B23A35]">Our Story</p><h2 className="mb-6 font-serif text-4xl sm:text-6xl">A Family Business, Rooted in Flavor.</h2><blockquote className="mb-6 border-l-4 border-[#C49A6C] pl-5 text-2xl italic">“We want people to feel at home here.”</blockquote><p className="mb-4 text-lg leading-8 text-black/70">Pro Samgyupsal began as a dream to share authentic Korean BBQ with our community. Every cut of meat, every side dish, and every warm welcome comes from our family to yours.</p><p className="text-lg leading-8 text-black/70">From tableside service to carefully sourced ingredients, we treat every guest like family.</p></div>
    </section>

    <section className="bg-[#F8F5F0] px-6 py-20 text-[#121212]"><div className="mx-auto max-w-7xl"><h2 className="mb-4 text-center font-serif text-4xl sm:text-6xl">How to Enjoy Korean BBQ</h2><p className="mb-12 text-center text-xl text-black/65">New to Korean BBQ? Let us guide you through the experience.</p><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[[FlameIcon,'Grill Your Meat'],[LeafIcon,'Dip & Savor'],[UsersIcon,'Wrap & Enjoy'],[UsersIcon,'Share the Moment']].map(([Icon,title],i)=>{const C=Icon as typeof FlameIcon;return <div key={title as string} className="bg-white p-7 shadow-lg"><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B23A35] text-white">{i+1}</span><C className="mb-4 text-[#C49A6C]" size={36}/><h3 className="mb-3 font-serif text-2xl">{title as string}</h3><p className="text-black/65">Enjoy premium cuts, house sauces, fresh wraps, and a shared tableside experience.</p></div>})}</div></div></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="mb-4 text-center font-serif text-4xl sm:text-6xl">Our Premium Cuts</h2><p className="mb-12 text-center text-xl text-white/65">Hand-selected meats, sourced for quality and flavor.</p><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{meats.map(([name,korean,desc,image])=><article key={name} className="overflow-hidden bg-[#1a1a1a]"><img src={image} alt={name} className="h-56 w-full object-cover transition duration-500 hover:scale-105"/><div className="p-6"><p className="mb-2 text-[#C49A6C]">{korean}</p><h3 className="mb-3 font-serif text-2xl">{name}</h3><p className="text-white/65">{desc}</p></div></article>)}</div></div></section>

    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden px-6 text-center"><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80" alt="Friends enjoying Korean BBQ" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-black/65"/><div className="relative max-w-4xl"><h2 className="mb-6 font-serif text-4xl sm:text-7xl">Best Enjoyed with Friends</h2><p className="mb-8 text-xl text-white/85">Bring your group and share the table. Korean BBQ is about connection, laughter, and memories around the grill.</p><Link href="/contact" className="inline-block bg-[#C49A6C] px-9 py-4 font-semibold text-black">Book for Groups</Link></div></section>

    <section className="bg-[#1a1a1a] px-6 py-16 text-center"><TvIcon className="mx-auto mb-5 text-[#B23A35]" size={36}/><p className="mb-3 uppercase tracking-[.25em] text-[#C49A6C]">As Featured On</p><h2 className="mb-4 font-serif text-4xl">ABC 7 News Chicago</h2><p className="mx-auto max-w-3xl text-white/65">Recognized as one of the best Korean BBQ experiences in the region.</p></section>

    <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><h2 className="mb-12 text-center font-serif text-5xl">Visit Us</h2><div className="grid gap-10 text-center md:grid-cols-3"><div><MapPinIcon className="mx-auto mb-4 text-[#B23A35]"/><h3 className="mb-2 font-serif text-2xl">Location</h3><p className="text-white/65">3420 Milwaukee Ave<br/>Northbrook, IL 60062</p></div><div><PhoneIcon className="mx-auto mb-4 text-[#B23A35]"/><h3 className="mb-2 font-serif text-2xl">Phone</h3><p className="text-white/65">(847) 715-9073</p></div><div><ClockIcon className="mx-auto mb-4 text-[#B23A35]"/><h3 className="mb-2 font-serif text-2xl">Hours</h3><p className="text-white/65">Mon–Sat: 4PM–10:45PM<br/>Sun: 4PM–9:45PM</p></div></div><div className="mt-12 text-center"><Link href="/contact" className="inline-block bg-[#B23A35] px-8 py-4 font-semibold">Get in Touch</Link></div></div></section>
  </main>;
}

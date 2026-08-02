import Link from 'next/link';

const sections = [
  ['Premium Cuts','Our specialty — unique pork cuts prepared for perfect grilling.',[
    ['Pork Belly','삼겹살','Thick-cut, scored pork belly grilled to perfection.'],
    ['Premium Pork Jowl','항정살','Tender, marbled, rich, and flavorful.'],
    ['Pork Shoulder','목살','Well-marbled shoulder with deep savory flavor.'],
  ]],
  ['Beef & Specials','Signature Korean beef selections cut for tenderness and flavor.',[
    ['Galbi Short Rib','갈비','Tender, sweet, and savory beef short rib.'],
    ['Bulgogi','불고기','Marinated thin-sliced beef, caramelized to perfection.'],
    ['Wagyu Brisket','와규 양지','Premium wagyu brisket with exceptional marbling.'],
  ]],
  ['Hearty Korean Classics','Soups, stews, rice, and noodles that complete your meal.',[
    ['Kimchi Jjigae','김치찌개','Spicy kimchi stew with pork and tofu.'],
    ['Galbi-Tang','갈비탕','Short rib soup with radish and glass noodles.'],
    ['Bibimbap','비빔밥','Mixed rice bowl with vegetables, egg, and gochujang.'],
    ['Japchae','잡채','Stir-fried glass noodles with vegetables.'],
  ]],
] as const;

export default function MenuPage(){return <main className="min-h-screen bg-[#F8F5F0] px-6 pb-20 pt-36 text-[#121212]"><div className="mx-auto max-w-6xl"><Link href="/" className="text-[#B23A35]">← Back to Home</Link><header className="py-14 text-center"><h1 className="mb-5 font-serif text-5xl sm:text-7xl">Our Menu</h1><p className="text-xl text-black/65">High-quality meats, prepared tableside — crafted for sharing.</p><p className="mt-3 text-[#B23A35]">No appetizers, no desserts — just exceptional BBQ.</p></header>{sections.map(([title,subtitle,items])=><section key={title} className="mb-16"><h2 className="font-serif text-4xl">{title}</h2><p className="mb-7 mt-2 text-black/60">{subtitle}</p><div className="grid gap-5 md:grid-cols-2">{items.map(([name,korean,desc])=><article key={name} className="border border-black/10 bg-white p-6 shadow-sm"><p className="text-sm text-[#B23A35]">{korean}</p><h3 className="my-2 font-serif text-2xl">{name}</h3><p className="text-black/60">{desc}</p></article>)}</div></section>)}<div className="mt-16 text-center"><Link href="/contact" className="inline-block bg-[#B23A35] px-9 py-4 font-semibold text-white">Book a Table and Try It Yourself</Link></div></div></main>}

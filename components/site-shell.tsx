'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeIcon, MenuIcon, XIcon } from 'lucide-react';
import { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'ko';
type Copy = Record<string, string>;
const copy: Record<Lang, Copy> = {
  en: { home:'Home', menu:'Menu', contact:'Contact', brand:'PRO SAMGYUPSAL', tagline:'Korean Barbeque' },
  ko: { home:'홈', menu:'메뉴', contact:'문의', brand:'프로 삼겹살', tagline:'코리안 바비큐' },
};
const LanguageContext = createContext({ lang:'en' as Lang, t:(key:string)=>key, toggle:()=>{} });
export const useLanguage = () => useContext(LanguageContext);

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = (key:string) => copy[lang][key] ?? key;
  const links = [['/', 'home'], ['/menu', 'menu'], ['/contact', 'contact']] as const;
  return <LanguageContext.Provider value={{ lang, t, toggle:()=>setLang(lang === 'en' ? 'ko' : 'en') }}>
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white text-zinc-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <Link href="/" className="flex items-center gap-3"><span className="h-11 w-1 rounded bg-red-600"/><span><strong className="block font-serif text-xl sm:text-3xl">{t('brand')}</strong><small className="tracking-[.2em] text-zinc-500">{t('tagline')}</small></span></Link>
        <div className="hidden items-center gap-9 lg:flex">{links.map(([href,key])=><Link key={href} href={href} className={`text-sm font-semibold uppercase tracking-wider ${pathname===href?'text-red-600':'hover:text-red-600'}`}>{t(key)}</Link>)}<button onClick={()=>setLang(lang==='en'?'ko':'en')} className="flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2"><GlobeIcon size={18}/>{lang==='en'?'한국어':'EN'}</button></div>
        <div className="flex items-center gap-2 lg:hidden"><button onClick={()=>setLang(lang==='en'?'ko':'en')} className="rounded bg-zinc-100 px-3 py-2 text-xs">{lang==='en'?'한국어':'EN'}</button><button onClick={()=>setOpen(!open)}>{open?<XIcon/>:<MenuIcon/>}</button></div>
      </div>
      {open && <div className="border-t bg-white lg:hidden">{links.map(([href,key])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block px-6 py-3 font-semibold uppercase hover:bg-zinc-50">{t(key)}</Link>)}</div>}
    </nav>
    {children}
  </LanguageContext.Provider>;
}

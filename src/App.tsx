import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Instagram, Youtube, Linkedin, Download, ExternalLink, 
  Video, Image as ImageIcon, PenTool, MonitorPlay, Camera, 
  Layers, Menu, X, Moon, Sun, PlayCircle, MessageCircle, Send, Mail
} from 'lucide-react';

import fotoScreenshot from './assets/fotoportofolio/Screenshot_20260417_125508.png';
import amv1 from './assets/fotoportofolio/amv1.png';
import amv2 from './assets/fotoportofolio/amv2.png';
import foto1 from './assets/fotoportofolio/IDG_20260411_144636_137.jpg';
import foto2 from './assets/fotoportofolio/IDG_20260411_144752_313.jpg';
import foto3 from './assets/fotoportofolio/IDG_20260411_144814_133.jpg';
import foto4 from './assets/fotoportofolio/IDG_20260411_144541_125.jpg';
import foto5 from './assets/fotoportofolio/IMG_6178.JPG';
import foto6 from './assets/fotoportofolio/IMG_6183.JPG';
import foto7 from './assets/fotoportofolio/IMG_6422.JPG';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { name: 'Software', href: '#software' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Kontak', href: '#kontak' },
];

const SOFTWARE = [
  { name: 'Alight Motion', icon: MonitorPlay },
  { name: 'CapCut', icon: Video },
  { name: 'Affinity', icon: PenTool },
  { name: 'Canva', icon: Layers },
  { name: 'Lightroom', icon: Camera },
  { name: 'Photoshop', icon: ImageIcon },
];

const VIDEOS = [
  { id: 1, title: 'Video Portfolio 1', img: 'https://img.youtube.com/vi/yYEral7BWzw/hqdefault.jpg', url: 'https://youtu.be/yYEral7BWzw?si=MEzewTV4UoIdLA8m' },
  { id: 2, title: 'Video Portfolio 2', img: 'https://img.youtube.com/vi/zvOS7wBUp-o/hqdefault.jpg', url: 'https://youtu.be/zvOS7wBUp-o?si=Z1858I5z0CRN4Wem' },
  { id: 3, title: 'Instagram Reel Portfolio', img: fotoScreenshot, url: 'https://www.instagram.com/reel/DWyMzr6DKla/?utm_source=ig_web_copy_link' },
  { id: 4, title: 'Video Portfolio 3', img: 'https://img.youtube.com/vi/O6DiEJBS3Dk/hqdefault.jpg', url: 'https://youtu.be/O6DiEJBS3Dk?si=henCEtxekdw4p9Vf' },
];

const PHOTOS = [
  { id: 1, title: 'Jakarta Pusat', img: foto1 },
  { id: 2, title: 'Street Photography 1', img: foto2 },
  { id: 3, title: 'Nature Landscape', img: foto3 },
  { id: 4, title: 'Architecture Study', img: foto4 },
  { id: 5, title: 'Portofolio IMG 6178', img: foto5 },
  { id: 6, title: 'Portofolio IMG 6183', img: foto6 },
  { id: 7, title: 'Portofolio IMG 6422', img: foto7 },
];

const AMV_VIDEOS = [
  { id: 1, title: 'AMV Project 1', img: 'https://img.youtube.com/vi/93C1MVgwxB4/hqdefault.jpg', url: 'https://youtu.be/93C1MVgwxB4?si=T_WvfXldhkwPtymI' },
  { id: 2, title: 'AMV Project 2', img: 'https://img.youtube.com/vi/0A5GgwfVDA8/hqdefault.jpg', url: 'https://youtu.be/0A5GgwfVDA8?si=-8rhv0a2DMeAsPJY' },
  { id: 3, title: 'Motion Graph 1', img: amv1, url: 'https://www.instagram.com/reel/DVRUR86EriA/?utm_source=ig_web_copy_link' },
  { id: 4, title: 'Motion Graph 2', img: amv2, url: 'https://www.instagram.com/reel/DQ5QQzCkq4F/?utm_source=ig_web_copy_link' },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState<'video' | 'photo'>('video');

  useEffect(() => {
    // Sync theme with html class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="scroll-smooth">
      <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-[#ffffff] font-sans transition-colors duration-500 overflow-x-hidden">
        
        {/* Navbar */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-[#262626] py-3' : 'bg-transparent py-5'}`}>
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-lg font-bold tracking-tight">
              Rafif <span className="text-[#3b82f6]">.</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                {NAV_LINKS.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-[13px] font-medium text-zinc-600 dark:text-[#a1a1aa] hover:text-[#3b82f6] dark:hover:text-[#3b82f6] transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>
              <button onClick={toggleTheme} className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-[#262626] transition-colors" aria-label="Toggle theme">
                 {isDark ? <Sun className="w-4 h-4 text-zinc-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-[#262626]">
                 {isDark ? <Sun className="w-4 h-4 text-zinc-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 -mr-2 text-zinc-600 dark:text-zinc-400">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg pt-20 px-6 md:hidden">
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                {NAV_LINKS.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="border-b border-zinc-100 dark:border-[#262626] pb-3 text-zinc-700 dark:text-zinc-200">
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bento Grid Layout Container */}
        <main className="max-w-5xl mx-auto px-4 pb-16 pt-24">
           <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-3 md:grid-flow-dense">
              
              {/* 1. Intro Card (2x2) */}
              <section id="home" className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-6 flex flex-col justify-start relative overflow-hidden group">
                  <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit mb-3 font-semibold">Profil Kreatif</div>
                  <h1 className="text-2xl md:text-[28px] font-bold text-[#3b82f6] mb-3">Rafif Ahmad Darmawan</h1>
                  <div className="text-[13px] leading-[1.6] text-zinc-600 dark:text-[#a1a1aa] text-justify space-y-2 overflow-y-auto no-scrollbar pr-1 pb-2 flex-1">
                    <p>Perkenalkan, saya memiliki antusiasme yang besar dalam dunia visual dan teknologi, terutama di bidang videografi, fotografi, dan editing. Minat ini menuntun saya untuk mendalami jurusan DKV di SMK Negeri 1 Tangerang.</p>
                    <p>Di luar dunia visual, saya juga sangat tertarik untuk mengulik segala hal tentang komputer, baik dari sisi hardware maupun software.</p>
                    <p>Perpaduan antara hasrat kreatif dan ketertarikan teknologi menjadikan saya pribadi yang senang mencari solusi teknis untuk mewujudkan ide-ide visual.</p>
                  </div>
              </section>

              {/* 2 & 4. Consolidated Education (1x2) */}
              <section id="education" className="md:col-span-1 md:row-span-2 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-5 flex flex-col gap-4">
                 <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit font-semibold">Pendidikan</div>
                 
                 <div className="flex flex-col gap-4 flex-1">
                   {/* SMK */}
                   <a href="https://smkn1tangerang.sch.id/" target="_blank" rel="noopener noreferrer" className="flex flex-col group text-decoration-none border-b border-zinc-100 dark:border-[#262626] pb-4">
                      <h3 className="text-[14px] font-bold text-zinc-900 dark:text-white group-hover:text-[#3b82f6] transition-colors mb-1">SMK Negeri 1 Tangerang</h3>
                      <p className="text-[12px] text-zinc-600 dark:text-[#a1a1aa]">DKV (Desain Komunikasi Visual)</p>
                      <p className="text-[11px] font-medium text-zinc-400 dark:text-[#a1a1aa]/60 mt-1">2022 - 2026</p>
                   </a>

                   {/* SMPIT */}
                   <div onClick={() => showToast('Maaf, tidak ada website untuk satu ini.')} className="flex flex-col cursor-pointer group">
                      <h3 className="text-[14px] font-bold text-zinc-900 dark:text-white group-hover:text-[#3b82f6] transition-colors mb-1">SMPIT Qurrata'ayun</h3>
                      <p className="text-[12px] text-zinc-600 dark:text-[#a1a1aa]">Kandangan, Kalsel</p>
                      <p className="text-[11px] font-medium text-zinc-400 dark:text-[#a1a1aa]/60 mt-1">2018 - 2021</p>
                   </div>
                 </div>
              </section>

              {/* 3. Software (1x2) */}
              <section id="software" className="md:col-span-1 md:row-span-2 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-5 flex flex-col items-start gap-2 overflow-hidden">
                 <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit font-semibold">Software</div>
                 <div className="flex flex-col gap-2 w-full mt-1 overflow-y-auto no-scrollbar pb-2">
                   {SOFTWARE.map(tool => (
                      <div key={tool.name} className="flex items-center gap-3 bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-xl p-2.5 w-full">
                         <tool.icon className="w-4 h-4 text-zinc-600 dark:text-[#a1a1aa]" />
                         <span className="text-[11px] font-medium text-zinc-800 dark:text-white truncate">{tool.name}</span>
                      </div>
                   ))}
                 </div>
              </section>

              {/* 5. Portfolio (2x2) */}
              <section id="portfolio" className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-6 flex flex-col overflow-hidden">
                 <div className="flex items-center justify-between mb-4">
                   <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded font-semibold">Portfolio</div>
                   <div className="flex bg-zinc-100 dark:bg-[#222] rounded-full p-1 border border-zinc-200 dark:border-[#262626]">
                     <button onClick={() => setActivePortfolioTab('video')} className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${activePortfolioTab === 'video' ? 'bg-[#3b82f6] text-white' : 'text-zinc-500 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white'}`}>Videos</button>
                     <button onClick={() => setActivePortfolioTab('photo')} className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${activePortfolioTab === 'photo' ? 'bg-[#3b82f6] text-white' : 'text-zinc-500 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white'}`}>Photos</button>
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto no-scrollbar pb-1">
                    <AnimatePresence mode="popLayout">
                       {(activePortfolioTab === 'video' ? VIDEOS : PHOTOS).map((item: any) => (
                         <motion.a 
                           key={item.id} 
                           href={item.url || item.img}
                           target="_blank"
                           rel="noopener noreferrer"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.2 }}
                           className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-200 dark:border-[#262626] block"
                         >
                           <img src={item.img} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                             {activePortfolioTab === 'video' && <PlayCircle className="w-5 h-5 text-white/90 mb-1" />}
                             <h4 className="text-white text-[11px] font-semibold line-clamp-2">{item.title}</h4>
                           </div>
                         </motion.a>
                       ))}
                    </AnimatePresence>
                 </div>
              </section>

              {/* 10. Portfolio 2 - AMV/Motion (2x2) */}
              <section className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-6 flex flex-col overflow-hidden">
                 <div className="flex items-center justify-between mb-4">
                   <div className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-500 px-2 py-1 rounded font-semibold">AMV / Motion</div>
                   <div className="flex bg-zinc-100 dark:bg-[#222] rounded-full p-1 border border-zinc-200 dark:border-[#262626]">
                     <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-purple-500 text-white transition-all">Videos</span>
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto no-scrollbar pb-1">
                    {AMV_VIDEOS.map((item) => (
                       <a 
                         key={item.id} 
                         href={item.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-200 dark:border-[#262626] block"
                       >
                         <img src={item.img} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                           <PlayCircle className="w-5 h-5 text-white/90 mb-1" />
                           <h4 className="text-white text-[11px] font-semibold line-clamp-2">{item.title}</h4>
                         </div>
                       </a>
                    ))}
                 </div>
              </section>

              {/* 11. Social Media AMV (2x1) */}
              <div className="md:col-span-2 md:row-span-1 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-5 flex flex-col justify-center items-center gap-3">
                 <div className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-500 px-2 py-1 rounded w-fit font-semibold mb-1">Akun AMV & Motion</div>
                 <div className="flex gap-4 w-full justify-center">
                   <a href="https://www.instagram.com/rc6rd/" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-purple-500 hover:scale-110 transition-all"><Instagram className="w-5 h-5"/></a>
                   <a href="https://www.youtube.com/@rc6rd27" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-red-500 hover:scale-110 transition-all"><Youtube className="w-5 h-5"/></a>
                 </div>
              </div>

              {/* 12. AMV Details (2x1) */}
              <div className="md:col-span-2 md:row-span-1 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-5 flex flex-col justify-center gap-3">
                 <div className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-500 px-2 py-1 rounded w-fit font-semibold">Fokus Ekstra</div>
                 <p className="text-[12px] text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">Selain videografi profesional, saya juga mengerjakan proyek-proyek AMV (Anime Music Video) dan Motion Graphic dinamis yang menggabungkan estetika animasi dengan sync irama.</p>
              </div>

              {/* 6. CV Download (1x1) */}
              <a href="https://drive.google.com/file/d/1r3Yn3dxM85K9_-kKggYUaNfm_AGByL4q/view?usp=sharing" target="_blank" className="md:col-span-1 md:row-span-1 bg-[#3b82f6] text-white rounded-3xl p-5 flex flex-col items-center justify-center hover:opacity-90 transition-opacity hover:scale-[1.02] cursor-pointer text-decoration-none">
                <Download className="w-6 h-6 mb-2" />
                <span className="font-bold text-[16px]">UNDUH CV</span>
                <p className="text-[10px] mt-1 opacity-80 uppercase tracking-widest font-medium">Format PDF</p>
              </a>

              {/* 7. Social Media (1x1) */}
              <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-4 flex flex-col justify-center items-center gap-3">
                 <div className="grid grid-cols-2 gap-3 w-full max-w-[120px] place-items-center">
                   <a href="https://www.instagram.com/skysounds.w/" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#3b82f6] hover:scale-110 transition-all"><Instagram className="w-4 h-4"/></a>
                   <a href="mailto:rafifplayxdz@gmail.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#ea4335] hover:scale-110 transition-all"><Mail className="w-4 h-4"/></a>
                   <a href="https://www.youtube.com/@roasty3" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-red-500 hover:scale-110 transition-all"><Youtube className="w-4 h-4"/></a>
                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-zinc-50 dark:bg-[#222] border border-zinc-200 dark:border-[#262626] rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all"><Github className="w-4 h-4"/></a>
                 </div>
              </div>

              {/* 8. Status (1x1) */}
              <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-5 flex flex-col justify-center gap-2">
                 <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit font-semibold">Status</div>
                 <p className="text-[12px] text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">Tersedia untuk proyek freelance fotografi dan editing video.</p>
              </div>

              {/* 9. Visi (1x1) */}
              <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-[#141414] dark:to-[#1a1a1a] border border-zinc-200 dark:border-[#262626] border-dashed rounded-3xl p-5 flex flex-col justify-center gap-3">
                 <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit font-semibold">Visi</div>
                 <p className="text-[12px] italic text-zinc-800 dark:text-[#ffffff]">"Menghubungkan estetika visual dengan fungsionalitas teknologi."</p>
              </div>

              {/* 13. Kontak (4x1) */}
              <section id="kontak" className="md:col-span-4 md:row-span-1 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-[#262626] rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-2">
                 <div className="flex flex-col gap-2 text-center md:text-left flex-1">
                   <div className="text-[10px] uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 rounded w-fit mx-auto md:mx-0 font-semibold">Kontak</div>
                   <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">Mari Bekerja Sama!</h2>
                   <p className="text-[13px] text-zinc-600 dark:text-[#a1a1aa] max-w-md mx-auto md:mx-0">Tertarik untuk berdiskusi tentang proyek atau kolaborasi visual? Jangan ragu untuk menghubungi saya melalui pesan.</p>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                    <a href="https://wa.me/6281348273756" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd58] text-white px-5 py-3 rounded-2xl font-medium transition-colors text-[13px] shadow-lg shadow-[#25D366]/20">
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                    <a href="mailto:rafifplayxdz@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#EA4335] hover:bg-[#d83a2b] text-white px-5 py-3 rounded-2xl font-medium transition-colors text-[13px] shadow-lg shadow-[#EA4335]/20">
                       <Mail className="w-5 h-5" />
                       <span>Email</span>
                     </a>
                     <a href="https://t.me/akurafif" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1c8ec4] text-white px-5 py-3 rounded-2xl font-medium transition-colors text-[13px] shadow-lg shadow-[#229ED9]/20">
                      <Send className="w-5 h-5" />
                      <span>Telegram</span>
                    </a>
                 </div>
              </section>
              
           </div>
        </main>

        <AnimatePresence>
          {toastMessage && (
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-800 text-white font-medium text-[12px] rounded-xl shadow-xl flex items-center border border-zinc-700">
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

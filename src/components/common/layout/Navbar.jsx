'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Reset overflow just in case
    };
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const links = mainNavigation;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[100] bg-white transition-all duration-300 ${scrolled
        ? 'py-3 shadow-md shadow-primary/5 border-b border-slate-100'
        : 'py-5 xl:py-[38px]'
        }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center px-5 sm:px-8 lg:px-10 xl:grid xl:grid-cols-[190px_minmax(0,1fr)_190px] xl:gap-5 2xl:grid-cols-[230px_minmax(0,1fr)_230px] 2xl:gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 xl:flex xl:justify-start">
          <Link href="/" className="flex items-center group">
            <motion.img
              src="/admire-nutra-logo.png"
              alt="Admire Nutra"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-14 xl:h-[60px] 2xl:h-[72px]'
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-7">
          {links.map((link) => (
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.name === 'Products') setProductsDropdownOpen(true);
                  else if (link.name === 'Services') setServicesDropdownOpen(true);
                  else setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.name === 'Products') setProductsDropdownOpen(false);
                  else if (link.name === 'Services') setServicesDropdownOpen(false);
                  else setDropdownOpen(false);
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (link.name === 'Products') {
                      setProductsDropdownOpen((open) => !open);
                    } else if (link.name === 'Services') {
                      setServicesDropdownOpen((open) => !open);
                    } else {
                      setDropdownOpen((open) => !open);
                    }
                  }}
                  aria-haspopup="menu"
                  aria-expanded={
                    (link.name === 'Products' && productsDropdownOpen) ||
                    (link.name === 'Services' && servicesDropdownOpen) ||
                    (link.name === 'Range Of Products' && dropdownOpen)
                  }
                  className={`relative py-2 text-[15px] 2xl:text-[17px] font-semibold transition-colors duration-300 flex items-center gap-2 ${
                    (link.name === 'Our Company' && (pathname === '/about' || pathname === '/leaders')) ||
                    (link.name === 'Products' && pathname?.startsWith('/products')) ||
                    (link.name === 'Range Of Products' && pathname?.startsWith('/range-of-products')) ||
                    (link.name === 'Services' && (pathname === '/services' || pathname === '/export' || pathname === '/customize'))
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      (link.name === 'Products' && productsDropdownOpen) ||
                      (link.name === 'Services' && servicesDropdownOpen) ||
                      (link.name === 'Range Of Products' && dropdownOpen)
                        ? 'rotate-180'
                        : ''
                    }`}
                  />
                </button>
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {((link.name === 'Products' && productsDropdownOpen) ||
                    (link.name === 'Services' && servicesDropdownOpen) ||
                    (link.name === 'Range Of Products' && dropdownOpen)) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-96 overflow-y-auto"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setDropdownOpen(false);
                            setProductsDropdownOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                          className={`block px-4 py-3 text-xs font-semibold transition-colors ${
                            pathname === item.href
                              ? 'text-primary bg-primary/5'
                              : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-[15px] 2xl:text-[17px] font-semibold transition-colors duration-300 group ${pathname === link.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            )
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden justify-end xl:flex">
          <Link
            href="/customize"
            className="group relative inline-flex min-w-[190px] items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent to-primary px-6 py-4 text-[15px] font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-95 2xl:min-w-[230px] 2xl:px-8 2xl:py-5 2xl:text-base"
          >
            {/* Glow effect on hover */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

            <span>Start Your Brand</span>
            <ArrowRight size={21} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="ml-auto p-2 text-slate-900 focus:outline-none xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="xl:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[110] p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-3.5 max-w-md mx-auto">
              {links.map((link, i) => (
                link.dropdown ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-slate-100 pb-2"
                  >
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="w-full flex justify-between items-center text-xl font-black uppercase tracking-tighter text-slate-900 focus:outline-none"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-400 transition-transform duration-300 ${
                          mobileDropdowns[link.name] ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileDropdowns[link.name] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-2.5 pl-4 pt-2 border-l-2 border-primary/20 mt-1.5">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-[11px] font-bold uppercase tracking-wider py-1 transition-colors ${pathname === item.href ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                  }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-slate-100 pb-2"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl font-black uppercase tracking-tighter ${pathname === link.href ? 'text-primary' : 'text-slate-900'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-slate-100 mt-1 pb-10"
              >
                <Link
                  href="/customize"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-full text-sm shadow-lg"
                >
                  Start Your Brand
                </Link>
                <div className="mt-4 text-center text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  Ready to Disrupt the Market?
                </div>
              </motion.div>
            </div>

            {/* Close button inside overlay */}
            <button
              className="absolute top-8 right-8 p-2 text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
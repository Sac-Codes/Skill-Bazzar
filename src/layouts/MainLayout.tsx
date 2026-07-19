import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, MessageCircle, Share2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Stalls', path: '/stalls' },
    { name: 'Map', path: '/map' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Rules', path: '/rules' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Mobile UX: lock body scroll while drawer is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  // Mobile UX: close on ESC + outside click + focus restore (+ basic focus trap)
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector<HTMLElement>('[data-mobile-menu-dialog="true"]');

    const focusFirst = () => {
      const first = dialog?.querySelector<HTMLAnchorElement>('a[data-mobile-nav="first"]');
      first?.focus();
    };

    const getFocusable = () => {
      if (!dialog) return [] as HTMLElement[];
      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'));
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== 'Tab') return;
      const focusables = getFocusable();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    const t = window.setTimeout(focusFirst, 50);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isMobileMenuOpen]);


  useEffect(() => {
    // Keep active indicator accurate across scroll restoration
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3 glass-nav shadow-sm' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                <img src="/src/assets/Skill_bazaar_logo.png" alt="Skill Bazaar logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl leading-none tracking-tight text-gray-900 group-hover:text-primary transition-colors">Skill Bazaar</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mt-1">2026</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="relative py-2 text-sm font-semibold transition-colors group text-gray-600 hover:text-gray-900"
                      >
                        {link.name}
                        {isActive && (
                          <motion.div 
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          />
                        )}
                        <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-300 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive ? 'hidden' : 'block'}`}></div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link to="/register" className="btn-primary text-sm group">
                Register Stall
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center text-gray-900 bg-white/50 backdrop-blur-md rounded-full border border-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-24 pb-6 overflow-hidden" data-mobile-menu-dialog="true"
              role="dialog"
              aria-modal="true"
            >
              {/* Backdrop click-to-close layer */}
              <button
                type="button"
                aria-label="Close menu"
                className="absolute inset-0"
                onClick={closeMenu}
              />

              <div className="relative flex-1 overflow-y-auto px-4">
                <nav className="flex flex-col gap-1.5 mb-6">

                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.08 }}
                      key={link.path}
                    >
                    <Link
                        data-mobile-nav={i === 0 ? 'first' : undefined}
                        to={link.path}
                        className={`block text-2xl sm:text-3xl font-heading font-bold py-4 border-b border-gray-100 transition-colors leading-tight ${
                          location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                        }`}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>

                    </motion.div>
                  ))}
                </nav>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="px-4"
              >
                <Link
                  to="/register"
                  className="btn-primary w-full justify-center text-lg py-4 mb-4"
                  onClick={closeMenu}
                >
                  Register Your Stall
                </Link>

                <div className="flex gap-3 justify-center">
                  {[Globe, MessageCircle, Share2].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200"
                    >
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative pt-24 lg:pt-0">
        <Outlet />
      </main>

      {/* Footer - Premium Redesign */}
      <footer className="bg-[#0A0F1C] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 p-1">
                  <img src="/src/assets/Skill_bazaar_logo.png" alt="Skill Bazaar logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white">Skill Bazaar</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mt-1">2026</span>
                </div>
              </Link>
              <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed font-light">
                Where Creativity Meets Entrepreneurship. The premier platform for student innovation and real-world business experience.
              </p>
              <div className="flex gap-4">
                {[Globe, MessageCircle, Share2, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-7">
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Explore</h3>
              <ul className="flex flex-col gap-4">
                {['Home', 'About', 'Stalls', 'Gallery'].map((link) => (
                  <li key={link}>
                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Information</h3>
              <ul className="flex flex-col gap-4">
                {['Event Map', 'Rules', 'FAQ', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link to={`/${link.replace(' ', '').toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <div className="lg:col-span-3">
              <h3 className="font-heading font-bold text-lg mb-6 text-white">Participate</h3>
              <p className="text-gray-400 mb-6 font-light">Ready to showcase your skills? Register your stall today.</p>
              <Link to="/register" className="btn-primary w-full justify-between group py-3.5">
                Register Now
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 font-medium">
              &copy; 2026 Skill Bazaar. All rights reserved.
            </p>
            <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-gray-400 text-sm font-medium">
                Designed & Built by <span className="text-white font-bold">Student Council</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

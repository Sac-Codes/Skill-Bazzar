import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Map, Lightbulb, TrendingUp, Sparkles, Timer, Rocket, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import organizerLogo from '../assets/sacs_logo.jpg';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date for countdown (event on August 9, 2026)
    const targetDate = new Date('2026-08-09T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const bentoItems = [
    { icon: TrendingUp, title: "Real Business Experience", desc: "Manage inventory, handle customers, and close real sales.", colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-blue-500 to-blue-600", text: "text-white" },
    { icon: Target, title: "Keep Your Profits", desc: "100% of the money you make belongs to your team.", colSpan: "md:col-span-1", bg: "bg-white border border-gray-200", text: "text-gray-900" },
    { icon: Users, title: "Network & Grow", desc: "Meet like-minded students and build lasting connections.", colSpan: "md:col-span-1", bg: "bg-white border border-gray-200", text: "text-gray-900" },
    { icon: Lightbulb, title: "Showcase Creativity", desc: "Turn your passion for art, tech, or food into a brand.", colSpan: "md:col-span-2", bg: "bg-gray-900", text: "text-white" },
  ];



  return (
    <PageWrapper>
      {/* Premium Hero Banner (Landscape cover) */}
      <section className="relative pt-[72px] sm:pt-[76px]">
        <div className="relative w-full overflow-hidden rounded-b-[2.25rem] shadow-[0_20px_60px_rgba(2,8,23,0.15)]">
          <div className="absolute inset-0">
            <img
              src="/src/assets/sacs_building.jpg"
              alt="SkillVerse 2026 event banner"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            {/* Gradient for readability + premium depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/70 via-[#0A0F1C]/25 to-[#0A0F1C]/10" aria-hidden="true" />
            <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden="true" />
            {/* Soft highlight */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-[90px]" aria-hidden="true" />
          </div>

          <div className="relative h-[240px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
            {/* Banner overlay content (responsive, cinematic focus) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* MOBILE + VERY SMALL: keep image primary; show only essential content and limit panel height */}
              <div className="absolute left-0 right-0 bottom-0 px-4 sm:px-6 pb-5 sm:pb-6">
                <div className="w-full max-w-3xl mx-auto">
                  {/* Essential-only strip (320-360) */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:hidden">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white shadow-sm self-start">
                      <Sparkles size={14} className="text-secondary" />
                      <span className="text-[11px] font-semibold leading-none">SkillVerse 2026</span>
                    </div>

                    {/* Glass stats card; limit visual dominance */}
                    <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-3">

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Stalls', value: '50+' },
                          { label: 'Duration', value: '1 Day' },
                        ].map((s, idx) => (
                          <div key={idx} className="min-w-0">
                            <div className="font-heading font-extrabold tracking-tight text-lg leading-none">{s.value}</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/70 mt-1 font-semibold">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TABLET/MOBILE (>=640px): full panel with reduced dominance */}
                  <div className="hidden md:block">
                    <div className="mb-6 sm:mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white shadow-sm">
                        <Sparkles size={16} className="text-secondary" />
                        <span className="text-sm font-semibold">SkillVerse 2026 • Entrepreneurship Festival</span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {[
                          { label: 'Stalls', value: '50+' },
                          { label: 'Duration', value: '1 Day' },
                          { label: 'Categories', value: '7+ ' },
                        ].map((s, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-3.5 py-3 text-white"
                          >
                            <div className="font-heading font-extrabold tracking-tight text-xl sm:text-2xl leading-none">{s.value}</div>
                            <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1 font-semibold">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop alignment: keep generous spacing above the bottom edge */}
              <div className="hidden md:block absolute inset-0">

                <div className="h-full flex items-end">
                  <div className="container mx-auto px-4">
                    <div className="mb-8 max-w-3xl w-full">
                      {/* Desktop panel already covered by md:block; keep structure clean */}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Decorative top grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_100%,#000_50%,transparent_100%)]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[130px] mix-blend-multiply animate-blob animation-delay-4000" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[92vw] max-w-[980px] h-28 sm:h-24 rounded-[2rem] bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 blur-0 opacity-70 pointer-events-none" aria-hidden="true" />
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-6">

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm text-sm font-semibold mb-8 group cursor-pointer hover:bg-white transition-colors"
            >
              <Sparkles size={16} className="text-secondary" />
              <span className="text-gray-800">Registrations are now open for 2026</span>
              <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col items-center justify-center gap-4 px-6 py-5 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-200/70 shadow-lg mb-10 max-w-xl mx-auto"
            >
              <img src={organizerLogo} alt="School Organizer Logo" className="w-20 h-20 object-contain rounded-2xl bg-white p-2 shadow-sm" />
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-1">Organized by</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">Sant Atulanand Convent School</h2>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sv-heading-1 font-heading font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.05] text-center"
            >
              <span className="block">Where Creativity Meets</span>
              {/* Single Entrepreneurship line only. Prevents any duplicate rendering artifacts on responsive resize. */}
              <span className="block text-transparent bg-clip-text bg-hero-gradient relative inline-block">
                Entrepreneurship
                <svg
                  className="absolute w-full h-4 -bottom-1 left-0 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>

            </motion.h1>


            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-light"
            >
              Skill Bazaar is the premier student festival where ideas turn into reality. Create, innovate, sell, and grow your own venture.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <Link to="/register" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto h-16">
                Register Your Stall
              </Link>
              <Link to="/about" className="btn-outline text-lg px-10 py-4 w-full sm:w-auto h-16 bg-white/50 backdrop-blur-md">
                Explore Event details
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-semibold"></span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Users, count: "100+", label: "Visitors Expected" },
              { icon: Map, count: "20+", label: "Stalls Setup" },
              { icon: Calendar, count: "1 Day", label: "Event Duration" },
              { icon: Lightbulb, count: "7+", label: "Categories" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-10 text-center hover:scale-105 transition-transform duration-500"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-6 shadow-inner">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-2 tracking-tight">{stat.count}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Why Participate */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="sv-heading-2 font-heading font-bold text-gray-900 mb-6 tracking-tight">More than just an event.</h2>
            <p className="text-xl text-gray-600 font-light">Skill Bazaar is a launchpad. It's your first taste of building a brand, managing finances, and leading a team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {bentoItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group ${item.colSpan} ${item.bg} ${item.text}`}
              >
                <div className="relative z-10">
                  <item.icon size={36} className={`mb-6 ${item.text.includes('white') ? 'text-white/80' : 'text-primary'}`} />
                  <h3 className="text-3xl font-bold font-heading mb-3">{item.title}</h3>
                  <p className={`text-lg max-w-md ${item.text.includes('white') ? 'text-white/80' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
                
                {/* Decorative background elements for bento boxes */}
                {idx === 0 && <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>}
                {idx === 3 && <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Countdown Section */}
      <section className="py-32 bg-[#0A0F1C] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-8 backdrop-blur-md border border-white/20">
            <Timer size={32} className="text-primary-light" />
          </div>
<h2 className="sv-heading-2 font-heading font-bold mb-16 tracking-tight">The countdown begins.</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map((time, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 glass-panel rounded-3xl flex items-center justify-center bg-white/5 border-white/10 mb-4 shadow-2xl">
                  <span className="text-4xl md:text-6xl font-bold font-mono text-white">{time.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-gray-400 uppercase tracking-widest font-semibold text-sm">{time.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <Rocket size={48} className="mx-auto text-primary mb-8" />
<h2 className="sv-heading-2 font-heading font-bold text-gray-900 mb-6 tracking-tight">
                Secure your spot today.
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
                Stalls are assigned on a first-come, first-served basis. Join the most anticipated event of the year.
              </p>
              <Link to="/register" className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-primary/30 group">
                Register Your Stall Now
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;

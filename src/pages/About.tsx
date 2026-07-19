import { Target, Flag, Calendar } from 'lucide-react';

import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import TeamSection from '../components/About/TeamSection';

const SectionDivider = () => (
  <div
    className="w-full h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"
    aria-hidden="true"
  />
);


const About = () => {
  const timeline = [
    { time: '09:00 AM', title: 'Inauguration Ceremony', desc: 'Opening speech by the Principal and ribbon cutting.' },
    { time: '10:00 AM', title: 'Stalls Open', desc: 'All stalls are officially open for visitors.' },
    { time: '01:00 PM', title: 'Cultural Performances', desc: 'Live music and dance performances at the main stage.' },
    { time: '04:00 PM', title: 'Award Ceremony', desc: 'Prizes for Best Stall, Highest Sales, and Most Innovative Idea.' },
    { time: '05:00 PM', title: 'Closing', desc: 'Event wraps up.' },
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-[#0A0F1C] py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
            className="sv-heading-2 font-heading font-extrabold mb-8 tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">Skill Bazaar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
          >
            Fostering the next generation of entrepreneurs, creators, and innovators.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-10">
          <SectionDivider />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm border border-gray-100">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                To create a dynamic ecosystem where students can discover their entrepreneurial potential, learn practical business skills, and turn their creative ideas into tangible realities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm border border-gray-100">
                <Flag size={32} />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                To provide a platform that bridges the gap between theoretical learning and real-world application by allowing students to manage their own micro-businesses in a supportive environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Timeline */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl mb-10">
          <SectionDivider />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Event Timeline</h2>
            <p className="text-gray-600 text-xl font-light">The schedule for the big day.</p>
          </div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
              >
                <div className="md:w-48 shrink-0 flex items-center gap-3 text-primary font-bold bg-primary/5 px-6 py-3 rounded-xl border border-primary/10">
                  <Calendar size={20} />
                  <span className="text-lg">{item.time}</span>
                </div>
                <div className="relative pb-12 md:pb-0 pt-2 flex-1">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[27px] top-12 bottom-0 w-px bg-gray-200 hidden md:block"></div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-4 tracking-tight group-hover:text-primary transition-colors">
                    <div className="w-3 h-3 rounded-full bg-accent hidden md:block z-10 shadow-sm"></div>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg font-light leading-relaxed md:pl-7">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Behind SkillVerse */}
      <TeamSection />
    </PageWrapper>
  );
};

export default About;


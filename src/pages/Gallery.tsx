import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', alt: 'Event Hall', size: 'large' },
    { id: 2, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Food Stall', size: 'small' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Students interacting', size: 'small' },
    { id: 4, url: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Presentation', size: 'medium' },
    { id: 5, url: 'https://images.unsplash.com/photo-1523580494112-071dcb851aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Crowd', size: 'medium' },
  ];

  return (
    <PageWrapper className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-[#0A0F1C] pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-light"
          >
            Memories from previous years and sneak peeks of what's to come.
          </motion.p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="container mx-auto px-4 md:px-8 -mt-16 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] overflow-hidden relative shadow-2xl group cursor-pointer max-w-5xl mx-auto border border-gray-100"
        >
          <div className="aspect-video bg-gray-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Skill Bazaar Aftermovie" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  <Play size={24} className="ml-2" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-heading font-bold mb-2">Skill Bazaar 2025 Aftermovie</h3>
              <p className="text-gray-300 font-medium">Relive the magic of last year's event.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Masonry Image Grid */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {images.map((img, index) => {
            const colSpan = img.size === 'large' ? 'md:col-span-8' : img.size === 'medium' ? 'md:col-span-6' : 'md:col-span-4';
            const rowSpan = img.size === 'large' ? 'row-span-2' : 'row-span-1';
            
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} ${rowSpan} rounded-3xl overflow-hidden relative group`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            )
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Gallery;

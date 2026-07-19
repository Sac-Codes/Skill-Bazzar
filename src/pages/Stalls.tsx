import { useState } from 'react';
import { Search, MapPin, QrCode, Filter, X } from 'lucide-react';
import QRCode from 'react-qr-code';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { stallsData, categories } from '../data/stalls';
import type { Stall } from '../data/stalls';

const Stalls = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStall, setSelectedStall] = useState<Stall | null>(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const filteredStalls = stallsData.filter((stall) => {
    const matchesSearch = 
      stall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stall.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stall.products.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || stall.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleShowQR = (stall: Stall) => {
    setSelectedStall(stall);
    setShowQRModal(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageWrapper className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-[#0A0F1C] pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Stall Directory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-light max-w-2xl mx-auto"
          >
            Explore over 50+ student-led stalls. Find your favorite food, games, and handcrafted products.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 md:p-6 mb-16 flex flex-col md:flex-row gap-4 bg-white/90 backdrop-blur-2xl shadow-xl shadow-gray-200/50"
        >
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by stall name, student, or product..."
              className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-gray-800 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative md:w-72 group">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <select
              className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl py-4 pl-14 pr-10 appearance-none focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-gray-800 font-medium cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Stalls Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStalls.length > 0 ? (
            filteredStalls.map((stall) => (
              <motion.div 
                key={stall.id} 
                variants={item}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group flex flex-col"
              >
                {/* Decorative glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full z-10 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                  {stall.category}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 pr-24 tracking-tight group-hover:text-primary transition-colors">{stall.name}</h3>
                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 font-medium">
                  By {stall.owner} <span className="w-1 h-1 rounded-full bg-gray-300"></span> {stall.classStr}
                </p>
                
                <div className="mb-8">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Products</p>
                  <div className="flex flex-wrap gap-2">
                    {stall.products.map((product, idx) => (
                      <span key={idx} className="bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-100 group-hover:border-primary/10 transition-colors">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Stall No.</span>
                    <span className="font-bold font-mono text-gray-900 text-lg">{stall.id}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm" title="View on Map">
                      <MapPin size={20} />
                    </button>
                    <button 
                      className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm" 
                      title="Show QR"
                      onClick={() => handleShowQR(stall)}
                    >
                      <QrCode size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-32 text-center"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">No stalls found</h3>
              <p className="text-gray-500 text-lg font-light">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-6 text-primary font-semibold hover:underline decoration-2 underline-offset-4"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRModal && selectedStall && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full relative shadow-2xl"
            >
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
                onClick={() => setShowQRModal(false)}
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-bold font-heading mb-2 tracking-tight">{selectedStall.name}</h3>
                <p className="text-gray-500 font-medium">
                  <span className="font-mono text-primary bg-primary/5 px-2 py-1 rounded-md mr-2">{selectedStall.id}</span>
                  {selectedStall.location}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.08)] mx-auto w-fit mb-8 border border-gray-100">
                <QRCode 
                  value={`skillbazaar://stall/${selectedStall.id}`} 
                  size={220}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
              
              <button className="btn-primary w-full py-4 text-lg shadow-lg shadow-primary/20" onClick={() => setShowQRModal(false)}>
                Done Scanning
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Stalls;

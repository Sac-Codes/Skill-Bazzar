import { useState } from 'react';
import { MapPin, Navigation, Info, Coffee, Gamepad2, Palette, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const EventMap = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const zones = [
    { id: 'food', name: 'Food Zone', icon: Coffee, color: 'bg-orange-50 border-orange-200 text-orange-600', active: 'bg-orange-500 text-white border-orange-500', desc: 'Delicious snacks and beverages (Stalls A1-A10)' },
    { id: 'games', name: 'Games Zone', icon: Gamepad2, color: 'bg-purple-50 border-purple-200 text-purple-600', active: 'bg-purple-500 text-white border-purple-500', desc: 'VR, Carnival Games, E-sports (Stalls G1-G8)' },
    { id: 'art', name: 'Art Zone', icon: Palette, color: 'bg-pink-50 border-pink-200 text-pink-600', active: 'bg-pink-500 text-white border-pink-500', desc: 'Paintings, Sketches, Resin Art (Stalls B1-B5)' },
    { id: 'craft', name: 'Craft Zone', icon: PenTool, color: 'bg-blue-50 border-blue-200 text-blue-600', active: 'bg-blue-500 text-white border-blue-500', desc: 'Handmade items, DIY, Decor (Stalls C1-C10)' },
    { id: 'stage', name: 'Main Stage', icon: Info, color: 'bg-gray-800 border-gray-900 text-white', active: 'bg-black text-white border-black', desc: 'Inauguration, Performances, Awards' },
    { id: 'help', name: 'Help Desk', icon: Info, color: 'bg-primary/10 border-primary/20 text-primary', active: 'bg-primary text-white border-primary', desc: 'Information, Lost & Found, First Aid' },
  ];

  return (
    <PageWrapper className="bg-gray-50 pb-24">
      <section className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Interactive Map
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light"
          >
            Navigate through Skill Bazaar easily. Click on a zone to see more details.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 mt-12">
        <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto">
          
          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white rounded-[2rem] p-6 md:p-10 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[500px] relative overflow-hidden flex flex-col"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Top row */}
            <div className="flex gap-4 md:gap-6 mb-4 md:mb-6 h-32 md:h-40 relative z-10">
              <div 
                className={`flex-1 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'food' ? zones[0].active + ' shadow-lg scale-[1.02]' : zones[0].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('food')}
              >
                <Coffee size={32} className="mb-2" />
                <span className="font-bold tracking-wide">Food Zone</span>
              </div>
              
              <div 
                className={`w-32 md:w-48 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'help' ? zones[5].active + ' shadow-lg scale-[1.02]' : zones[5].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('help')}
              >
                <Info size={28} className="mb-2" />
                <span className="font-bold tracking-wide text-sm md:text-base">Help Desk</span>
              </div>
            </div>

            {/* Middle row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6 h-64 md:h-56 relative z-10">
              <div 
                className={`md:w-48 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'games' ? zones[1].active + ' shadow-lg scale-[1.02]' : zones[1].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('games')}
              >
                <Gamepad2 size={36} className="mb-3" />
                <span className="font-bold tracking-wide text-center">Games<br/>Zone</span>
              </div>
              
              <div className="flex-1 rounded-3xl flex flex-col items-center justify-center pointer-events-none">
                <span className="text-gray-300 font-bold tracking-[0.3em] uppercase rotate-90 md:rotate-0">Walking Area</span>
              </div>
              
              <div 
                className={`md:w-56 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'stage' ? zones[4].active + ' shadow-lg scale-[1.02]' : zones[4].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('stage')}
              >
                <span className="font-bold text-2xl tracking-tight">Main Stage</span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex gap-4 md:gap-6 h-40 md:h-48 relative z-10">
              <div 
                className={`flex-1 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'art' ? zones[2].active + ' shadow-lg scale-[1.02]' : zones[2].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('art')}
              >
                <Palette size={32} className="mb-2" />
                <span className="font-bold tracking-wide">Art Zone</span>
              </div>
              
              <div 
                className={`flex-[1.5] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeZone === 'craft' ? zones[3].active + ' shadow-lg scale-[1.02]' : zones[3].color + ' hover:scale-[1.01] hover:shadow-md'}`}
                onClick={() => setActiveZone('craft')}
              >
                <PenTool size={32} className="mb-2" />
                <span className="font-bold tracking-wide">Craft Zone</span>
              </div>
            </div>

            {/* Entry/Exit markers */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-b-xl text-xs font-bold uppercase tracking-widest shadow-md z-20">
              Main Entrance
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-500 px-6 py-2 rounded-t-xl text-xs font-bold uppercase tracking-widest shadow-inner z-20">
              Exit Gate
            </div>
          </motion.div>

          {/* Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:w-96 flex flex-col gap-6"
          >
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[400px]">
              <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Navigation size={20} />
                </div>
                Zone Details
              </h2>
              
              <AnimatePresence mode="wait">
                {activeZone ? (
                  <motion.div 
                    key={activeZone}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {zones.map((zone) => (
                      zone.id === activeZone && (
                        <div key={zone.id}>
                          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${zone.color.split(' ')[0]} ${zone.color.split(' ')[2]}`}>
                            <zone.icon size={40} />
                          </div>
                          <h3 className="text-3xl font-bold font-heading text-gray-900 mb-3">{zone.name}</h3>
                          <p className="text-gray-600 mb-8 text-lg font-light leading-relaxed">{zone.desc}</p>
                          
                          {zone.id !== 'help' && zone.id !== 'stage' && (
                            <button className="btn-primary w-full justify-center py-4">
                              View Stalls
                            </button>
                          )}
                        </div>
                      )
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16 text-gray-400 flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                      <MapPin size={40} className="text-gray-300" />
                    </div>
                    <p className="text-lg font-light max-w-[200px]">Select a zone on the map to see details.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10">
              <h3 className="font-bold font-heading text-xl mb-3 flex items-center gap-2 text-gray-900">
                <Info size={20} className="text-primary" />
                Need Help?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Look for volunteers wearing the green Skill Bazaar t-shirts, or head to the Help Desk near the entrance.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default EventMap;

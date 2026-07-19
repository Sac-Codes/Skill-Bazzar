import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-[#0A0F1C] pt-32 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-light"
          >
            Have a question about sponsorships, stalls, or attending? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 h-full">
              <h3 className="text-3xl font-heading font-bold mb-8 text-gray-900">Contact Info</h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Location</h4>
                    <p className="text-gray-500 leading-relaxed font-light">
                      School Main Ground,<br />
                      123 Education Avenue,<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Email</h4>
                    <p className="text-gray-500 font-light">
                      skillbazaar@school.edu<br />
                      support@skillbazaar.in
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Phone</h4>
                    <p className="text-gray-500 font-light">
                      +91 98765 43210 (Teacher Coordinator)<br />
                      +91 98765 43211 (Student Head)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-3xl font-heading font-bold mb-8 text-gray-900">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder-gray-400"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none placeholder-gray-400"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>

        {/* Map Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 w-full max-w-6xl mx-auto h-[400px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
        >
          {/* This would be an iframe for Google Maps in production */}
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center relative group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 border-4 border-white">
                <MapPin size={32} />
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-xl">
                <p className="font-bold text-gray-900">Skill Bazaar Location</p>
                <p className="text-sm text-gray-500">School Main Ground</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Contact;

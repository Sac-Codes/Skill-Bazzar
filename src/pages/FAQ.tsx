import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const faqs = [
    {
      q: "Who can register a stall?",
      a: "Any current student of the school from Grade 8 to 12 can register. You can register individually or as a team of up to 4 members."
    },
    {
      q: "What is the stall registration fee?",
      a: "The registration fee is ₹500 per stall. This covers the cost of the table, two chairs, and a basic power outlet."
    },
    {
      q: "Do I keep the profits?",
      a: "Yes! 100% of the profits made from your sales belong to you and your team. This event is designed to teach you how to manage real money."
    },
    {
      q: "What items are prohibited?",
      a: "You cannot sell items requiring fire/gas cooking on the spot (induction is allowed), sharp objects, hazardous chemicals, or anything violating the school's code of conduct."
    },
    {
      q: "How does the payment system work?",
      a: "Visitors will purchase 'Bazaar Coupons' from the central help desk. You can only accept these coupons at your stall, not cash. Coupons will be exchanged for cash at the end of the event."
    }
  ];

  return (
    <PageWrapper className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6"
          >
            <MessageCircleQuestion size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light"
          >
            Got a question? We're here to answer.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-4xl mt-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border transition-colors duration-300 ${isOpen ? 'border-primary/20 shadow-lg shadow-primary/5' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold font-heading text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      size={20}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 text-lg font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gray-900 rounded-3xl p-10 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-heading mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-light">Can't find the answer you're looking for? Reach out to the student council directly.</p>
            <a href="/contact" className="btn-primary py-3 px-8 text-lg inline-block">
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;

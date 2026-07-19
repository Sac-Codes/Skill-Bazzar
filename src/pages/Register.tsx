import { ClipboardList, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe9WPDc7yCk2_f9vZARRNekRsIeGNHdI_FHAgm8h1bzJGJMQg/viewform?usp=publish-editor';

const Register = () => {
  return (
    <PageWrapper className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-[#0A0F1C] pt-32 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Register Your Stall
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl font-light"
          >
            Turn your idea into reality. Fill out the official form below.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                <ClipboardList size={32} />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6 text-gray-900 tracking-tight">Instructions</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0 border border-gray-200">1</span>
                  <p className="text-gray-600 font-light leading-relaxed">Fill out all the required fields in the Google Form carefully.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0 border border-gray-200">2</span>
                  <p className="text-gray-600 font-light leading-relaxed">Wait for the approval email from the Student Council within 48 hours.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0 border border-gray-200">3</span>
                  <p className="text-gray-600 font-light leading-relaxed">Pay the registration fee of ₹500 to the accounts office.</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0 border border-gray-200">4</span>
                  <p className="text-gray-600 font-light leading-relaxed">Receive your stall number and setup details.</p>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex gap-3 text-red-700 font-bold mb-2">
                  <AlertCircle size={20} />
                  <span>Important Note</span>
                </div>
                <p className="text-red-600 text-sm font-light">
                  Forms submitted without a proper business plan overview will be rejected.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Form Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 h-full min-h-[800px] flex flex-col">
              <div className="flex justify-between items-center mb-6 px-4">
                <h3 className="text-2xl font-bold font-heading">Official Registration Form</h3>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline decoration-2 underline-offset-4 flex items-center gap-1">
                  Open in new tab <ArrowRight size={14} />
                </a>
              </div>
              <div className="flex-1 w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
                <iframe 
                  src={`${googleFormUrl}&embedded=true`} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full h-full min-h-[800px]"
                  title="Stall Registration Form"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default Register;

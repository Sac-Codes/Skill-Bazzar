import { Shield, Droplets, Zap, Trash2, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Rules = () => {
  const rules = [
    {
      icon: Clock,
      title: 'Timings & Setup',
      desc: 'All stall owners must arrive by 8:00 AM on both days for setup. Stalls must remain operational until 5:00 PM. Early packing is not permitted.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Trash2,
      title: 'Cleanliness & Waste',
      desc: 'You are responsible for the cleanliness of your stall area. A dustbin must be present at every stall. A cleaning fine of ₹500 will be imposed for littering.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: Zap,
      title: 'Power & Appliances',
      desc: 'Only one 5A plug point is provided per stall. Heavy appliances like microwaves or large heaters are strictly prohibited. Only basic lighting and induction cooktops are allowed.',
      color: 'text-yellow-500',
      bg: 'bg-yellow-50'
    },
    {
      icon: Droplets,
      title: 'Food Safety',
      desc: 'All food stalls must maintain strict hygiene. Hairnets and gloves are mandatory. Raw meat is not allowed. Fire/gas cooking is strictly prohibited (only induction).',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Conduct & Behavior',
      desc: 'Maintain decorum at all times. Aggressive marketing, loud speakers, or disrupting neighboring stalls will lead to immediate disqualification.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Items',
      desc: 'Sale of weapons, hazardous chemicals, adult content, or anything violating the school code of conduct is strictly forbidden.',
      color: 'text-red-500',
      bg: 'bg-red-50'
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
            className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6 border border-red-100"
          >
            <Shield size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Rules & Regulations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            To ensure a safe and enjoyable event for everyone, all participants must strictly adhere to these guidelines.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rules.map((rule, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-gray-200 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/50 shadow-sm transition-transform duration-500 group-hover:scale-110 ${rule.bg} ${rule.color}`}>
                <rule.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 tracking-tight">{rule.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                {rule.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-red-50 border border-red-100 rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-20 h-20 shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-600">
            <AlertTriangle size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-heading text-red-900 mb-3">Zero Tolerance Policy</h3>
            <p className="text-red-700 font-light leading-relaxed text-lg">
              The organizing committee reserves the right to immediately shut down any stall and expel participants found violating these rules. No refunds will be provided in such cases.
            </p>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Rules;

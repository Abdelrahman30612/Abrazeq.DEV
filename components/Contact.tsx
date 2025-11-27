import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">دعنا نبني شيئاً <br /><span className="text-purple-500">مذهلاً</span> معاً</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                هل لديك فكرة مشروع؟ أو تبحث عن مطور للانضمام لفريقك؟ لا تتردد في التواصل معي عبر وسائل الاتصال التالية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              
              {/* Email Card */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-purple-900/50 p-8 rounded-2xl hover:border-purple-500 transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Mail size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-xl mb-2">البريد الإلكتروني</h4>
                  <a href="mailto:bbm771729@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors block text-sm sm:text-base break-all">
                    bbm771729@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-purple-900/50 p-8 rounded-2xl hover:border-purple-500 transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2">
                 <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Phone size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-xl mb-2">الهاتف</h4>
                  <p dir="ltr" className="text-gray-400 text-sm sm:text-base">01025565796</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-zinc-900/50 backdrop-blur-md border border-purple-900/50 p-8 rounded-2xl hover:border-purple-500 transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2">
                 <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <MapPin size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-xl mb-2">الموقع</h4>
                  <p className="text-gray-400 text-sm sm:text-base">القاهرة، مصر</p>
                </div>
              </div>

            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;
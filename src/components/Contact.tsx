import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {

  // const emailService = process.env.EMAIL_SERVICE;

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
       import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
      import.meta.env.VITE_EMAIL_PUBLIC
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <Toaster position="bottom-right" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-blue-500" />
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 8392032371",
                  href: "tel:+918392032371"
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "yousufali839203@gmail.com",
                  href: "mailto:yousufali839203@gmail.com"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Kolkata, West Bengal, India"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
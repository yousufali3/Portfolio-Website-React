import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { Github, Linkedin, Mail, Download, ChevronDown, Code2, Briefcase, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-gray-900 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,1))]"></div>
        </div>
        
        {/* Animated circles in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <span className="text-gray-300">👋 Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Hi, I'm Yousuf <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient">Ali</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A passionate Full Stack Developer specializing in building exceptional digital experiences
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Code2, text: "Full Stack Developer" },
                { icon: Briefcase, text: "Software Engineer" },
                { icon: Rocket, text: "Problem Solver" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
                    <Icon className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="./Yousuf_Ali_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/yousufali3", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/yousufali8", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:yousufali839203@gmail.com", label: "Email" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { number: "2+", label: "Years of Experience" },
                { number: "700+", label: "Problems Solved" },
                { number: "10+", label: "Projects Completed" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
                >
                  <div className="text-2xl font-bold text-purple-500 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop&auto=format"
                alt="Programming"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Main Content */}
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>© 2024 Yousuf Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
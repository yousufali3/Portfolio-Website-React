import { motion } from 'framer-motion';
import { Rocket, Github, ExternalLink } from 'lucide-react';
import img1 from './a1.png'
import img2 from './a2.png'
import img3 from './a3.png'
const projects = [
  {
    title: "EasyCompile",
    description: "Full-stack collaborative web development platform with real-time code editing and saving",
    image: img1,
    github: "https://github.com/yousufali3/easycompile",
    demo: "https://easycompile-1.onrender.com",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"]
  },
  {
    title: "TypeMaster",
    description: "Clean, ad-free typing test platform with 30-second challenges and conditional rendering",
    image: img2,
    github: "https://github.com/yousufali3/typemaster",
    demo: "https://type-master-three.vercel.app/",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Vite"]
  },
  {
    title: "TubeSync",
    description: "Real-time YouTube video synchronization platform with room creation and chat features",
    image: img3,
    github: "https://github.com/yousufali3/tubesync",
    demo: "#",
    tags: ["Next.js", "TypeScript", "Socket.IO", "Tailwind CSS"]
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 text-emerald-500" />
            Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-emerald-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
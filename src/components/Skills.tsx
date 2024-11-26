import { motion } from 'framer-motion';
import { Code2, Brain } from 'lucide-react';

const skills = {
  technical: [
    { name: "React/Next.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Node.js/Express.js", level: 85 },
    { name: "MongoDB/MySQL", level: 80 },
    { name: "Java", level: 75 },
    { name: "Python", level: 70 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Tailwind/Material-UI", level: 85 },
    { name: "RESTful APIs", level: 85 },
    { name: "Linux", level: 75 }
  ]
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-cyan-500" />
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-500" />
              Programming Skills
            </h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-cyan-500" />
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
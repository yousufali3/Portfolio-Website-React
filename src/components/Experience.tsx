import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: "CodeChip Studios",
    role: "Software Engineer Intern",
    period: "Aug 2024 - Oct 2024",
    description: "Collaborated on full-stack development projects utilizing MERN stack. Designed responsive UI components and developed scalable backend APIs.",
    type: "work"
  },
  {
    company: "Maulana Abul Kalam Azad University of Technology",
    role: "Bachelor of Computer Application",
    period: "July 2022 - Expected: June 2025",
    description: "Currently pursuing BCA with focus on computer science and software development.",
    type: "education"
  }
];

export default function Experience() {
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
            <Briefcase className="w-8 h-8 text-purple-500" />
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="flex items-start gap-4">
                {exp.type === 'work' ? (
                  <Briefcase className="w-12 h-12 text-purple-500" />
                ) : (
                  <GraduationCap className="w-12 h-12 text-purple-500" />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-purple-400 font-medium">{exp.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                  <p className="text-gray-300 mt-3">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
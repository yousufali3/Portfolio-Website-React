import { motion } from 'framer-motion';
import { Award, Medal, Trophy, Code } from 'lucide-react';

const achievements = [
  {
    title: "LeetCode Achievements",
    description: "100 Days Badge (2022) & Global Rank 1844 out of 29,939 participants in Biweekly Contest 111",
    icon: Trophy,
    color: "text-yellow-500"
  },
  {
    title: "Problem Solving",
    description: "700+ problems solved on LeetCode and GeeksForGeeks combined",
    icon: Code,
    color: "text-blue-500"
  },
  {
    title: "Codexcellence Runner-Up",
    description: "Secured second place in Makaut's Codexcellence contest in collaboration with Coding Ninja",
    icon: Medal,
    color: "text-pink-500"
  },
  {
    title: "HackerRank 5-Star",
    description: "Achieved 5-star ratings in C and Java on HackerRank",
    icon: Award,
    color: "text-green-500"
  }
];

export default function Achievements() {
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
            <Trophy className="w-8 h-8 text-yellow-500" />
            Achievements
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <div className={`inline-block p-3 rounded-full bg-gray-800 mb-4`}>
                  <Icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
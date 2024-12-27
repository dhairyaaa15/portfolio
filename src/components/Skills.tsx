import { motion } from 'framer-motion';
import { Code, Server, Brain} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: <Code className="w-8 h-8 mb-4 text-cyan-400" />,
      skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML&CSS'],
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-8 h-8 mb-4 text-cyan-400" />,
      skills: ['Node.js', 'Flask', 'Express', 'MongoDB', 'SQL'],
    },
    {
      name: 'Generative AI',
      icon: <Brain className="w-8 h-8 mb-4 text-cyan-400" />,
      skills: ['LangChain', 'Prompt Engineering', 'Open AI', 'Hugging Face','Machine Learning'],
    },
   
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text animate-glow"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500 border-opacity-30 hover:border-opacity-50 group"
            >
              <div className="flex flex-col items-center mb-4">
                {category.icon}
                <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-cyan-100 group-hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-1 w-full sm:max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text animate-glow"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-xl text-cyan-100 leading-relaxed"
          >
            I'm a passionate full-stack developer with expertise in building robust and scalable web applications. My
            journey in the world of programming has led me to work with a variety of technologies, including React,
            TypeScript, Node.js, and Tailwind CSS.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 text-xl text-cyan-100 leading-relaxed"
          >
            Recently, I've developed a strong interest in Generative AI, which has become a focal point of my
            professional growth. During my internship, I had the opportunity to work on exciting projects that
            leveraged the power of AI to create innovative solutions. I'm always eager to take on new challenges and continue learning in this ever-evolving field of
            technology.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-cyan-100 leading-relaxed"
          >
            Outside of technology, I have a passion for hiking, sports, and cycling. I’ve
            also played football at the I-League and inter-district tournament levels,
            which has taught me valuable teamwork and perseverance skills.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

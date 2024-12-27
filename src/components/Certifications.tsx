import React, { useState } from 'react';
import { motion } from 'framer-motion';
import codeunnati from '../assets/edu.png';
import skillup from '../assets/prompt.png';

interface Certification {
  title: string;
  issuer: string;
  imageUrl?: string;
}

const Certifications: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const certifications: Certification[] = [
    {
      title: 'Participating in Foundation Course and Completing Training on Python Programming, Data Analysis with Python, AI, and SAP Conversational AI Chatbot',
      issuer: 'Code Unnati Program, Edunet Foundation',
      imageUrl: codeunnati,
    },
    {
      title: 'Introduction to Prompt Engineering',
      issuer: 'Skillup',
      imageUrl: skillup,
    },
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text animate-glow"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-96 sm:h-80 md:h-96"
              style={{
                perspective: '1000px'
              }}
            >
              <div
                style={{
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s',
                  position: 'relative',
                  width: '100%',
                  height: '100%'
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full p-6 cursor-pointer bg-gray-800 bg-opacity-50 rounded-lg shadow-lg border border-cyan-500 border-opacity-30"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-cyan-400">
                    {cert.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-cyan-100">Issued by: {cert.issuer}</p>
                  <button className="text-cyan-400 mt-4 hover:text-cyan-300 text-sm sm:text-base">
                    Click to View Certificate
                  </button>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full cursor-pointer rounded-lg border border-cyan-500 border-opacity-30 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  onClick={() => toggleCard(index)}
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-contain bg-gray-800 bg-opacity-50 p-2"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

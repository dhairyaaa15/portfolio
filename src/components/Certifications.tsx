import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import codeunnati from '../assets/edu.png';
import skillup from '../assets/prompt.png';

interface Certification {
  title: string;
  issuer: string;
  imageUrl?: string;
}

const Certifications: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleCardInteraction = (index: number) => {
    if (isMobile) {
      setClickedCard(clickedCard === index ? null : index);
    }
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
              className="relative h-96 sm:h-80 md:h-96 group"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() => handleCardInteraction(index)}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: (isMobile ? clickedCard === index : hoveredCard === index) 
                    ? 'rotateY(180deg)' 
                    : 'rotateY(0)',
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg border border-cyan-500 border-opacity-30 transition-all duration-300 group-hover:shadow-cyan-500/20"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-cyan-400">
                        {cert.title}
                      </h3>
                      <p className="text-sm sm:text-base text-cyan-100">
                        Issued by: {cert.issuer}
                      </p>
                    </div>
                    <p className="text-cyan-400 text-sm sm:text-base italic">
                      {isMobile ? 'Tap to view certificate' : 'Hover to view certificate'}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full rounded-lg border border-cyan-500 border-opacity-30 overflow-hidden transition-all duration-300 group-hover:shadow-cyan-500/20"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-contain bg-gray-800 bg-opacity-50 p-2"
                  />
                  {isMobile && (
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-cyan-400 text-sm italic">
                        Tap again to flip back
                      </p>
                    </div>
                  )}
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
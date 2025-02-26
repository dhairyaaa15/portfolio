import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center -ml-3 gradient-text animate-glow"
        >
          Achievements
        </motion.h2>
        <div className="flex flex-col justify-center md:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 p-5 w-5xl rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500 border-opacity-30 hover:border-opacity-50 group"
          >
            <h3 className="text-white font-bold text-3xl text-center lg:text-4xl mb-4 group-hover:text-cyan-300 transition-colors">
              Winner – Illuminati'25 Hackathon 🏆
            </h3>
            <p className="text-cyan-100 mb-4 text-lg text-center lg:text-xl">
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Secured 1st place at Illuminati 2025, hosted by ITM SLS Baroda University.</li>
                <li>Developed Evencio, an NFT-based ticketing system that prioritizes real fans over scalpers.</li>
                <li>Integrated Spotify authentication to calculate a Fan Score based on listening activity, ensuring fair ticket distribution.</li>
                <li>Implemented a resale revenue-sharing model, allowing artists to earn from secondary sales.</li>
                <li>Designed and built a user-friendly UI under tight time constraints, delivering an innovative and functional product.</li>
              </ul>
            </p>

            <div className="mt-7">
              {/* <p className="text-white font-medium text-lg">
                First Place Winner
              </p> */}
              <p className="mt-1 text-secondary text-lg">
                FEB-2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
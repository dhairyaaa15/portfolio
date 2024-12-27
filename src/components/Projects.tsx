import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import chatbotimg from '../assets/6f2a90183090d93624c62d6af49e80856a57c566.jpg';
import inventoryimg from '../assets/a7aa98f5f05ffad8666b8aa82a65274bbf9d68ef.jpg';
import pokenftimg from '../assets/53dcfe5fb69e4578af18cadab8505a1f.jpg';
import playlistimg from '../assets/dbd43d56e544493cb4806de399706ea6.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'PokéNFT Website',
      description: 'Evolution and marketplace components for Pokémon NFTs. Features cool text styles, timer features, and a consistent dark theme.',
      image: pokenftimg,
      liveLink: '',  // Empty link for now
      githubLink: '', // Empty link for now
      tags: ['React', 'TypeScript', 'Web3.js', 'Tailwind CSS'],
    },
    {
      title: 'AI Playlist Maker',
      description: 'Generates playlists based on user prompts. Integrated with Spotify API for exporting playlists.',
      image: playlistimg,
      liveLink: '',  // Empty link for now
      githubLink: '', // Empty link for now
      tags: ['Python', 'Flask', 'Spotify API', 'NLP'],
    },
    {
      title: 'Full-Stack Inventory Project',
      description: 'An inventory management system developed using React (frontend), Node.js (backend), and integrated with TypeScript.',
      image: inventoryimg,
      liveLink: '',  // Empty link for now
      githubLink: '', // Empty link for now
      tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      title: 'Generative AI Chatbot',
      description: 'Industry-specific use cases with conversation summarization and progress tracking.',
      image: chatbotimg,
      liveLink: '',  // Empty link for now
      githubLink: '', // Empty link for now
      tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text animate-glow"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500 border-opacity-30 hover:border-opacity-50 group w-full sm:w-full"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink || '#'}  // Use '#' when there's no link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-cyan-400 hover:text-cyan-300 transition-colors ${!project.liveLink ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={(e) => !project.liveLink && e.preventDefault()}  // Prevent default click if no link
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {project.liveLink ? 'Live Demo' : 'Coming Soon'}
                  </a>
                  <a
                    href={project.githubLink || '#'}  // Use '#' when there's no link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-cyan-400 hover:text-cyan-300 transition-colors ${!project.githubLink ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={(e) => !project.githubLink && e.preventDefault()}  // Prevent default click if no link
                  >
                    <Github className="w-4 h-4 mr-1" />
                    {project.githubLink ? 'GitHub' : 'Coming Soon'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

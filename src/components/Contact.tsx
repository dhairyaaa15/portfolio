import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setStatusMessage('Your message has been sent successfully!');
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      setStatusMessage('Failed to send your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text animate-glow"
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 w-full lg:w-1/2"
          >
            <div className="flex items-center text-cyan-100">
              <MapPin className="w-6 h-6 mr-4 text-cyan-400" />
              <span>Vadodara, Gujarat,<br/>INDIA</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-cyan-400" />
              <a
                href="mailto:dhairychawda12@gmail.com"
                className="text-cyan-100 hover:text-cyan-400 transition-colors"
              >
                dhairychawda12@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 bg-gray-700 text-white rounded-md border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 bg-gray-700 text-white rounded-md border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="p-3 bg-gray-700 text-white rounded-md border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <button
                type="submit"
                className="p-3 bg-cyan-400 text-white rounded-md hover:bg-cyan-500 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && (
                <div className="mt-4 text-center text-cyan-400">{statusMessage}</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
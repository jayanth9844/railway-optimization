import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const contributors = [
  {
    name: 'K.R. Hemanth',
    image: 'https://example.com/path/to/kr_hemanth.jpg', // Replace with actual image URL
  },
  {
    name: 'Jayanth Raj',
    image: 'https://example.com/path/to/jayanthraj.jpg', // Replace with actual image URL
  },
  {
    name: 'Likith P.M.',
    image: 'https://example.com/path/to/likith.jpg', // Replace with actual image URL
  },
  // Add more contributors here if needed
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Contributors() {
  return (
    <div className="from-gray-900 via-gray-800 to-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-3xl text-white mb-8">Our Contributors</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-8 md:space-y-0 gap-5">
          {contributors.map((contributor, index) => (
            <motion.div
              key={contributor.name}
              className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              custom={index} // Pass index for animation delay
            >
              <motion.img
                src={contributor.image}
                alt={contributor.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 border-4 border-indigo-500 shadow-lg transition-transform duration-300 transform hover:scale-110"
                whileHover={{ rotate: 10, scale: 1.1 }} // Image hover animation
              />
              <h2 className="text-lg text-white text-center">{contributor.name}</h2>
            </motion.div>
          ))}
        </div>
        {/* GitHub Link with Animation */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animated state
          transition={{ duration: 0.5 }} // Fade-in transition
        >
          <Link
            href="https://github.com/jayanth9844/railway-optimization" // Replace with your project link
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition duration-300 flex items-center"
          >
            <FaGithub size={32} />
            <span className="ml-2 text-lg text-white">View Project on GitHub</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

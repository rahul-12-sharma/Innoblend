import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import { Link } from 'react-router-dom';

const backgroundImages = [
  "https://reallygooddesigns.com/wp-content/uploads/2022/11/Black-and-Orange-Website-Design-Examples.png",
  "https://i.pinimg.com/originals/46/b0/b3/46b0b3678d650b58eaaa01be45bd19ec.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/457/141/original/landing-page-template-of-website-design-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg",
  "https://colorlib.com/wp/wp-content/uploads/sites/2/1_product-mockup.jpg",
];

export default function Banner() {
  const [bgIndex, setBgIndex] = useState(0);

  // Preload background images
  useEffect(() => {
    backgroundImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // smoother experience
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center px-6 sm:px-12 md:px-20 py-16 bg-cover bg-center text-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        height: '450px',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background glows */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[30%] left-[20%] w-72 h-72 bg-purple-400 opacity-10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-pink-500 opacity-10 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-20 text-white max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <TypingEffect />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light mb-6 text-white"
        >
          Helping <span className="text-teal-400 font-medium">Creators</span>,{' '}
          <span className="text-teal-400 font-medium">Coaches</span>, and{' '}
          <span className="text-teal-400 font-medium">Brands</span> stand out with{' '}
          <span className="text-teal-400 font-medium">Website Development</span>,{' '}
          <span className="text-teal-400 font-medium">Graphic Design</span>,{' '}
          <span className="text-teal-400 font-medium">Product Mockups</span>, and{' '}
          <span className="text-teal-400 font-medium">AI-Driven Automation</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link
            to="/contact"
            className="bg-teal-400 text-black px-6 py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-300 inline-block text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

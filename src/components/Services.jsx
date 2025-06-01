import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brush } from 'lucide-react'; // cleaned up imports

const services = [
  {
    title: 'Website Development',
    description: 'Fast, responsive, SEO-optimized websites using the latest tools and frameworks.',
    tools: ['Next.js', 'Shopify', 'WordPress', 'AI Builder'],
    image: 'https://services-nine-chi.vercel.app/assets/website.png',
    link: '/website',
    icon: <Code className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching visuals and branding that bring your business identity to life.',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    image: 'https://services-nine-chi.vercel.app/assets/graphic.png',
    link: '/graphic',
    icon: <Brush className="w-6 h-6 text-cyan-400" />,
  }
];

function Services() {
  return (
    <section className="bg-[#0e0e10] text-white py-24 px-6">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
        🧩 Our Services
      </h2>

      <div className="space-y-16 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <article
            key={idx}
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10 md:gap-16 bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl shadow-md hover:shadow-cyan-500/10 transition-all duration-300`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full max-h-[360px] object-cover rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                {service.icon}
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{service.description}</p>

              <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                {service.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full text-white/90 border border-white/10 shadow-sm hover:bg-white/20 transition"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                aria-label={`View more about ${service.title}`}
                className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-500 text-black font-medium px-6 py-2 rounded-lg text-sm sm:text-base transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
              >
                Check Service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

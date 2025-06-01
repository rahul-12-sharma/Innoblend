import React from 'react';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Graphic() {
  const services = [
    {
      title: 'Custom Logo & Branding Kit',
      img: 'http://4.bp.blogspot.com/-YC9GanezlZM/URuvwvfcJbI/AAAAAAAAAD8/f3K6_G5xHD8/s1600/logos1.gif',
    },
    {
      title: 'Social Media Design',
      img: 'https://www.creativefabrica.com/wp-content/uploads/2022/09/29/Fashion-Social-Media-Post-Design-Graphics-39557771-1.jpg',
    },
    {
      title: 'Flyers & Brochures',
      img: 'https://graphicsfamily.com/wp-content/uploads/2020/07/Real-Estate-Brochure-Design-Template-Presentation-2048x1152.jpg',
    },
    {
      title: 'Web & App UI/UX',
      img: 'https://cms.pixso.net/images/articles/web-app-design.png',
    },
    {
      title: 'Products Mockups',
      img: 'https://www.freemockupworld.com/wp-content/uploads/2021/07/Cosmetics-Packaging-PSD-Mockup-01.jpg',
    },
    {
      title: 'Business Cards & Slides',
      img: 'https://downloadpsd.cc/wp-content/uploads/Graphic-Designer-Business-Card-Template-Free-PSD.jpg',
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            🎨 Graphic Design Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where human creativity meets AI precision—designs that deliver results, fast.
          </p>
          <p className="text-sm text-gray-500">🖌️ Visually compelling & strategically effective</p>
        </div>

        {/* Services with images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, img }, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow border border-white/10 hover:shadow-cyan-500/20 transition duration-300"
              title={title}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <p className="text-cyan-300 font-semibold text-lg">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        <Link
          to='/'
          className="bg-blue-100 hover:bg-blue-200 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300"
          title="Home"
        >
          <AiOutlineHome size={22} />
        </Link>

        <Link
          to="/contact"
          className="bg-green-100 hover:bg-green-200 text-green-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300"
          title="Contact"
        >
          <AiOutlinePhone size={22} />
        </Link>
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
        >
          🚀 Request a Custom Strategy
        </Link>
      </div>

    </section>
  );
}

export default Graphic;

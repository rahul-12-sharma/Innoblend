import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="bg-[#0d0d0f] text-white py-24 px-6 lg:px-12 relative">

      {/* Back to Home Icon */}
      <a
        href="/"
        aria-label="Back to Home"
        className="fixed bottom-20 right-6 z-50 bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all"
        title="Back to Home"
      >
        <AiOutlineHome size={20} />
        <span className="font-semibold text-sm hidden sm:inline">Home</span>
      </a>



      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent bg-clip-text">
            👋 Welcome to Innoblend
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We help creators, coaches, and brands unlock their digital presence with stunning design, web development, product visuals, and AI-powered automation — fast and affordably.
          </p>
          <p className="text-sm text-gray-500">📍 Based in India · Serving clients globally</p>
        </div>

        {/* Why Us + Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#16161a] p-8 rounded-xl border border-white/10 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">💡 Why People Work with Us</h3>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li><strong>⚡ Lightning Fast</strong> — AI-powered delivery at speed.</li>
              <li><strong>💰 Affordable</strong> — Cost-effective without sacrificing quality.</li>
              <li><strong>🌍 Global Standard</strong> — Clean, responsive, future-proof designs.</li>
              <li><strong>🧠 Fully Managed</strong> — You focus on the vision. We build the rest.</li>
            </ul>
          </div>

          <div className="bg-[#16161a] p-8 rounded-xl border border-white/10 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🎯 Our Mission</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              To make high-quality digital services accessible to everyone — using creativity, smart automation, and a commitment to clarity, speed, and value.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1a1a1e] to-[#121214] p-10 rounded-2xl shadow-lg border border-white/10 text-center space-y-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">🚀 Ready to Get Started?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Get a free sample or consult with us — no commitment, just results.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-full text-sm font-medium transition"
            >
              📧 Email Us
            </a>
            <a
              href="https://wa.me/8745030616"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Policy */}
        <div className="max-w-3xl mx-auto text-gray-400 text-sm space-y-5 pt-16 border-t border-white/10">
          <h3 className="text-xl font-semibold text-cyan-400">📜 Our Service Policy</h3>
          <p>We believe in transparency, quality, and respect. Here’s how we work:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Portfolio First:</strong> Browse our work before committing.</li>
            <li><strong>Clear Agreements:</strong> Scope, timeline & expectations aligned.</li>
            <li><strong>Simple Payment:</strong> 30–40% upfront. Start only after confirmation.</li>
            <li><strong>Fair Refunds:</strong> Cancel within 7 days = 70% refund. No refunds after production starts.</li>
          </ul>
          <p>Still have questions? We're just a message away.</p>
        </div>

      </div>
    </section>
  );
}

export default About;

import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { AiOutlineHome } from 'react-icons/ai';
import 'react-phone-number-input/style.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


function Contact() {
  const [phone, setPhone] = useState('');

  return (
    <>
      {/* Back to Home Icon */}
      <a
        href="/"
        className="fixed bottom-30 right-6 z-50 bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all"
        title="Back to Home"
      >
        <AiOutlineHome size={20} />
        <span className="font-semibold text-sm hidden sm:inline">Home</span>
      </a>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0e0e10] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
              📞 Contact Us
            </h2>
            <p className="text-gray-400 mt-2 text-lg">
              We’d love to hear from you! Let’s build something great together.
            </p>
          </div>

          {/* Contact Info & Form */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400">Email Us</h3>
                <p className="text-white/80">📩 sandilyrahul@gmail.com</p>
                <p className="text-white/80">🛠️ ankitrana0400@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61576977687802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-110"
                    title="Facebook"
                  >
                    <FaFacebookF size={20} className="text-blue-500" />
                  </a>
                  <a
                    href="https://www.instagram.com/innoblend.ai/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition transform hover:scale-110"
                    title="Instagram"
                  >
                    <FaInstagram size={20} className="text-pink-500" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400">Working Hours</h3>
                <p className="text-white/80">🕒 Mon–Sat: 10 AM – 7 PM IST</p>
                <p className="text-white/60 text-sm">Available 24/7 on email & WhatsApp</p>
              </div>
            </div>

            {/* Form */}
            <form
              action="https://formsubmit.co/b957a51b94936fbf47c982f389185097"
              method="POST"
              className="space-y-4 bg-[#121214] p-6 rounded-xl border border-white/10 shadow-sm"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="http://localhost:3000/" />

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {/* Phone Number with Country Picker */}
              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                defaultCountry="US"
                name="phone"
                className="w-full bg-white text-black border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />


              {/* Phone validation */}
              {typeof phone === 'string' && phone !== '' && !isValidPhoneNumber(phone) && (
                <p className="text-red-400 text-sm mt-1">Invalid phone number</p>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={!phone || !isValidPhoneNumber(phone)}
                className={`w-full px-6 py-3 rounded-md font-semibold transition ${phone && isValidPhoneNumber(phone)
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  }`}
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

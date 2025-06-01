import emailjs from 'emailjs-com';
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Footer() {

  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jpj3uh8', 'template_eiq6tge', form.current, 'SX3BenaUsSEL-tN_W')
      .then(
        (result) => {
          form.current.reset();
          setStatus('success');
          setTimeout(() => setStatus(null), 4000); // clear after 4s
        },
        (error) => {
          setStatus('error');
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <footer className="bg-[#0e0e10] text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#06b6d4" strokeWidth="4" fill="none" />
              <path d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 21c1 3 2 3 4 0" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 24c-2 4-2 8 0 12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 32h6M10 38h8M14 26h6" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-bold text-cyan-400">Innoblend</span>
          </div>
          <p className="text-center sm:text-left text-gray-400 max-w-md">
            AI-Powered Design, Video & Marketing. Fast. Affordable. Scalable.
          </p>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-700 pt-10">
          <div>
            <h4 className="text-lg font-semibold text-cyan-400">Our Services</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li><a href="/website" className="hover:text-white">Website Development</a></li>
              <li><a href="/graphic" className="hover:text-white">Graphic Design</a></li>
              <li><a href="/graphic" className="hover:text-white">Product Mockup</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-cyan-400">📬 Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:sandilyrahul@gmail.com" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#06b6d4' }} />
                  sandilyrahul@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:ankitrana0400@gmail.com" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#06b6d4' }} />
                  ankitrana0040@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918745030616" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#10b981' }} />
                  +91-87450-30616
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-cyan-400">FAQs</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white">Policy</a></li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span>New Thing Coming Soon..</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-400">Subscribe</h4>
            <p className="text-sm text-gray-400 mt-4">Get Started with Smarter Solutions — AI + Human, Perfectly Combined.</p>
            <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col sm:flex-row gap-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium"
              >
                Subscribe
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-2 text-green-400 font-semibold">Thank you for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-red-500 font-semibold">Oops! Something went wrong.</p>
            )}

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 mt-6 gap-4">
          <p className="text-sm text-gray-500">&copy; 2025 Innoblend. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61576977687802" // <-- Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-2xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/innoblend.ai/?next=%2F" // <-- Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://wa.me/8745030616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;

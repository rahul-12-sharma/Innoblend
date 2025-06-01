import { Link } from 'react-router-dom';
import React from 'react';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';


function Website() {
    const tools = [
        { name: 'WordPress', icon: '🌐' },
        { name: 'Webflow', icon: '🕸️' },
        { name: 'Framer', icon: '🎛️' },
        { name: 'MERN', icon: '🛠️' },
        { name: 'Python', icon: '🐍' },
        { name: 'AI', icon: '🤖' },
        { name: 'Shopify', icon: '🛒' },
    ];

    const projects = [
        {
            title: 'Corporate Business Website',
            img: 'https://www.freshdesignweb.com/wp-content/uploads/Presento-Bootstrap-Corporate-Template-1-780x851.jpg',
            description: 'Multi-page site for enterprise businesses with clean UI and strong branding.',
        },
        {
            title: 'E-commerce Storefront',
            img: 'https://essential-addons.com/wp-content/uploads/2024/02/image-9.png',
            description: 'Online store with payment gateway integration and user accounts.',
        },
        {
            title: 'Professional Portfolio Site',
            img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/victim-portfolio-website-template.jpg',
            description: 'Personal portfolio for freelancers and creatives to showcase their work.',
        },
        {
            title: 'Real Estate Listing Website',
            img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg',
            description: 'Property listings with search, map integration, and agent profiles.',
        },
        {
            title: 'SaaS Product Landing Page',
            img: 'https://cdn.dribbble.com/userupload/9802921/file/original-d1e08e7853e09c88e255077bb1cab7af.jpg?resize=1569x1338',
            description: 'High-conversion landing page optimized for user signups and subscriptions.',
        },
        {
            title: 'Healthcare & Medical Websites',
            img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/drcare-free-template.jpg',
            description: 'Online booking and appointment management for healthcare providers.',
        },
    ];


    return (
        <section id="services" className="bg-[#0e0e10] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
                        🌐 Web Development Services
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        We build responsive, SEO-optimized websites and e-commerce stores with modern UX/UI using top tools and technologies.
                    </p>
                    <p className="text-sm text-gray-500">💻 Reliable & Professional Web Solutions</p>
                </div>


                {/* Project Showcase */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {projects.map(({ title, img }) => (
                        <div
                            key={title}
                            className="bg-[#1a1a1e] rounded-xl shadow-md border border-white/10 overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                            title={title}
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />
                            <h4 className="text-cyan-400 font-semibold text-lg p-4">{title}</h4>
                        </div>
                    ))}
                </section>

                {/* Navigation Buttons */}
                <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                    <Link
                        to="/"
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


                {/* Tools & Technologies */}
                <div className="flex flex-wrap justify-center gap-10">
                    {tools.map(({ name, icon }) => (
                        <div
                            key={name}
                            className="relative flex flex-col items-center cursor-default select-none w-28"
                            title={name}
                            aria-label={name}
                            role="img"
                        >
                            {/* Circular dark glow background */}
                            <span
                                className="absolute rounded-full w-20 h-20 bg-cyan-700 opacity-20 blur-xl animate-pulse"
                                aria-hidden="true"
                                style={{ top: '0.5rem', left: '50%', transform: 'translateX(-50%)' }}
                            ></span>

                            {/* Icon */}
                            <span className="relative text-5xl mb-3 z-10">{icon}</span>

                            {/* Name */}
                            <small className="relative text-sm font-semibold tracking-wide text-cyan-300 z-10">{name}</small>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
                    >
                        🚀 Request a Custom Strategy
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Website;

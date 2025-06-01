import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Efficiency',
    desc: 'AI speeds up tasks by 40% for faster delivery.',
    percent: 50,
    color: '#22d3ee',
  },
  {
    icon: '🎨',
    title: 'Creativity',
    desc: 'AI fuels fresh ideas with human direction.',
    percent: 70,
    color: '#8b5cf6',
  },
  {
    icon: '📊',
    title: 'Insights',
    desc: 'AI analytics guide performance optimization.',
    percent: 65,
    color: '#facc15',
  },
  {
    icon: '💸',
    title: 'Cost-Effective',
    desc: 'Great results without high costs.',
    percent: 55,
    color: '#10b981',
  },
];

// Circle progress component with scroll animation
function CircleProgress({ percent, color }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const strokeDashoffset = circumference - (circumference * percent) / 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (circleRef.current) observer.observe(circleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={circleRef}
      className="transform -rotate-90"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#374151"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={visible ? strokeDashoffset : circumference}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1.8s ease-out' }}
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill={color}
        fontWeight="700"
        fontSize="20"
        fontFamily="Inter, sans-serif"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function HumanAI() {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-3xl"
      >
        <source src="https://cdn.pixabay.com/video/2024/11/24/243046_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 rounded-b-3xl" />

      {/* Heading and description */}
      <div className="relative z-20 max-w-6xl mx-auto text-center mb-20 px-4 sm:px-6 lg:px-0">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Human + AI = Smarter Solution
        </h2>
        <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          Experience the perfect blend of human creativity and AI efficiency.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-0">
        {features.map(({ icon, title, desc, percent, color }, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] bg-opacity-90 p-6 rounded-3xl shadow-lg hover:shadow-cyan-400/60 transition-shadow duration-400 flex flex-col items-center space-y-5"
          >
            <CircleProgress percent={percent} color={color} />

            <div
              className="text-4xl animate-bounce"
              style={{ animationDuration: '2.5s', animationTimingFunction: 'ease-in-out' }}
              aria-label={title}
              role="img"
            >
              {icon}
            </div>

            <h3 className="text-cyan-300 font-bold text-2xl text-center">{title}</h3>
            <p className="text-gray-300 text-center text-base sm:text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

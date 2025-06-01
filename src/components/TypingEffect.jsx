import { Typewriter } from 'react-simple-typewriter';

export default function TypingEffect() {
  return (
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl text-teal-400 font-space font-semibold text-center leading-snug sm:leading-normal">
      We specialize in{' '}
      <span className="text-white">
        <Typewriter
          words={[
            'Website Development',
            'Product Mockup',
            'Graphic Design',
          ]}
          loop={0} // 0 = Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </span>
    </h2>
  );
}

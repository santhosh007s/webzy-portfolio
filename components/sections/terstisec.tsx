'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

// Types
interface Testimonial {
  id: number;
  stars: number;
  text: string;
  name: string;
  title: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

interface ScrollingRowProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  speed?: number;
}

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div
    className="rounded-2xl p-4 md:p-6 border border-gray-600/30 hover:border-gray-500/50 transition-colors cursor-pointer min-w-[280px] md:min-w-[320px] max-w-80 md:max-w-lg mr-4 flex-shrink-0"
    style={{ backgroundColor: '#222222' }}
  >
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-600'}`}
        >
          ★
        </span>
      ))}
    </div>
    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
      {testimonial.text}
    </p>
    <div className="flex items-center gap-2 md:gap-3">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold">
        {testimonial.avatar}
      </div>
      <div>
        <div className="font-semibold text-white text-xs md:text-sm">
          {testimonial.name}
        </div>
        <div className="text-gray-400 text-xs">{testimonial.title}</div>
      </div>
    </div>
  </div>
);

// Scrolling Row Component
const ScrollingRow: React.FC<ScrollingRowProps> = ({
  testimonials,
  direction = 'left',
  speed = 50,
}) => {
  const controls = useAnimation();
  const [currentX, setCurrentX] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const cardWidth = 336;
  const totalWidth = testimonials.length * cardWidth;

  const duplicatedTestimonials = React.useMemo(() => {
    const copies = [];
    for (let i = 0; i < 6; i++) {
      copies.push(...testimonials);
    }
    return copies;
  }, [testimonials]);

  React.useEffect(() => {
    let isCancelled = false;

    const animateRightLoop = async () => {
      if (isHovered || direction !== 'right') return;
      await controls.set({ x: -totalWidth });
      await controls.start({
        x: 0,
        transition: { duration: speed, ease: 'linear' },
      });
      if (!isCancelled) requestAnimationFrame(animateRightLoop);
    };

    const animateRightResume = async (fromX: number) => {
      if (isHovered || direction !== 'right') return;
      const distance = Math.abs(fromX - 0);
      const duration = (distance / totalWidth) * speed;
      await controls.start({
        x: 0,
        transition: { duration, ease: 'linear' },
      });
      if (!isCancelled) requestAnimationFrame(animateRightLoop);
    };

    if (direction === 'right' && !isHovered) {
      if (currentX === 0 || currentX <= -totalWidth + 1) {
        animateRightLoop();
      } else {
        animateRightResume(currentX);
      }
    }

    return () => {
      isCancelled = true;
    };
  }, [controls, totalWidth, speed, isHovered, direction, currentX]);

  React.useEffect(() => {
    if (direction !== 'left') return;
    const startAnimation = async () => {
      if (!isHovered) {
        await controls.start({
          x: [currentX, currentX - totalWidth],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
            repeatDelay: 0,
          },
        });
      }
    };
    startAnimation();
  }, [controls, totalWidth, speed, isHovered, currentX, direction]);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    await controls.stop();
  };

  const handleMouseLeave = async () => {
    setIsHovered(false);
    if (direction === 'left') {
      await controls.start({
        x: [currentX, currentX - totalWidth],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
          repeatDelay: 0,
        },
      });
    }
  };

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex will-change-transform"
        animate={controls}
        onUpdate={(latest) => {
          if (typeof latest.x === 'number') setCurrentX(latest.x);
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

// Main Component
const TestimonialsSection: React.FC = () => {
  const row1Testimonials: Testimonial[] = [
    {
      id: 1,
      stars: 3,
      text: 'calendar app has been a lifesaver! I used to forget important events, but now I\'m always on top of my schedule.',
      name: 'Sophie Moore',
      title: 'Head of marketing',
      avatar: 'SM',
    },
    {
      id: 2,
      stars: 5,
      text: 'I love how user-friendly this app is! It\'s so easy to add events and set reminders, and it\'s made my life so much more organized.',
      name: 'Sophie More',
      title: 'CTO of Lambda',
      avatar: 'SM',
    },
    {
      id: 3,
      stars: 5,
      text: 'This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything.',
      name: 'Adam Gwadyr',
      title: 'Entrepreneur',
      avatar: 'AG',
    },
  ];

  const row2Testimonials: Testimonial[] = [
    {
      id: 4,
      stars: 5,
      text: 'I\'ve tried a lot of calendar apps, but this one is by far the best! It\'s so intuitive and customizable, and it has all the features I need.',
      name: 'Annie Deway',
      title: 'Designer',
      avatar: 'AD',
    },
    {
      id: 5,
      stars: 5,
      text: 'I don\'t know how I ever lived without this app! It\'s made scheduling appointments and meetings a breeze.',
      name: 'Michel O\'Neill',
      title: 'Head of Sales',
      avatar: 'MO',
    },
    {
      id: 6,
      stars: 5,
      text: 'As someone with a busy lifestyle, it\'s helped me stay organized with everything, and I couldn\'t be happier!',
      name: 'Bard De Costa',
      title: 'Entrepreneur',
      avatar: 'BC',
    },
  ];

  const row3Testimonials: Testimonial[] = [
    {
      id: 7,
      stars: 3,
      text: 'I recommended this app to all my friends and colleagues! It\'s made managing my schedule a breeze.',
      name: 'Ella Mondain',
      title: 'Product designer',
      avatar: 'EM',
    },
    {
      id: 8,
      stars: 5,
      text: 'This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.',
      name: 'Mary Cath',
      title: 'Solo-Entrepreneur',
      avatar: 'MC',
    },
    {
      id: 9,
      stars: 5,
      text: 'I\'m not the most organized person, but this app has made it easy for me to stay on top of things!',
      name: 'Johana Smith',
      title: 'Founder of something',
      avatar: 'JS',
    },
  ];

  return (
    <div className="text-white relative overflow-hidden min-h-screen md:mt-65">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight px-4"
          >
            See what our users say about us
          </motion.h1>
        </div>

        <div className="space-y-4 md:space-y-6">
          <ScrollingRow testimonials={row1Testimonials} direction="left" speed={24} />
          <ScrollingRow testimonials={row2Testimonials} direction="right" speed={48} />
          <ScrollingRow testimonials={row3Testimonials} direction="left" speed={24} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

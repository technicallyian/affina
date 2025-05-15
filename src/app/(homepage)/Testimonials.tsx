"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Heading } from "@/components/typography/Heading";
import { BlurredSphere } from "@/components/BlurredSphere";
const CARD_BACKGROUND_COLOR = "bg-[radial-gradient(151.31%_151.31%_at_97.84%_-21.65%,#00CCA8_0%,#1B98E0_97%)]";

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const cardVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.95,
    x: 0,
    y: 0,
    transformOrigin: "center center",
  },
  front: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "center center",
  },
  back: (i: number) => ({
    opacity: Math.max(0.3, 1 - i * 0.15),
    rotate: i * 3,
    scale: 1 - i * 0.02,
    x: 0,
    y: -i * 25,
    transformOrigin: "center center",
  }),
  exitingToBottom: {
    opacity: 0,
    rotate: 15,
    scale: 0.9,
    y: 150,
    transformOrigin: "center center",
    transition: { type: "tween", duration: 0.3, ease: "easeIn" },
  },
};

export default function Testimonials() {
  const testimonialData = [
    {
      text: "This is a placeholder for an amazing testimonial. It highlights the great service and wonderful experience!",
      name: "Alex Doe",
      title: "CEO, ExampleCorp",
    },
    {
      text: "Another fantastic review showcasing the incredible value and support we provide to our clients.",
      name: "Jamie Smith",
      title: "CTO, Innovate Ltd.",
    },
    {
      text: "A third testimonial emphasizing our commitment to excellence and customer satisfaction.",
      name: "Pat Jones",
      title: "Lead Designer, Creative Solutions",
    },
    {
      text: "Our fourth amazing testimonial, really driving home the point of our quality!",
      name: "Sam Lee",
      title: "Marketing Head, Growth Co.",
    },
  ];

  const [currentTestimonials, setCurrentTestimonials] = useState(testimonialData);
  const [exitingCardName, setExitingCardName] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimatedInView, setHasAnimatedInView] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimatedInView) {
      const timer = setTimeout(() => {
        setHasAnimatedInView(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimatedInView]);

  const handleNext = () => {
    if (isAnimating || currentTestimonials.length === 0) return;
    setIsAnimating(true);
    setExitingCardName(currentTestimonials[0].name);
  };

  const handlePrevious = () => {
    if (isAnimating || currentTestimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentTestimonials(prev => {
      const newStack = [...prev];
      const last = newStack.pop();
      if (last) {
        newStack.unshift(last);
      }
      return newStack;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleAnimationComplete = (definition: any, cardName: string) => {
    if (definition === "exitingToBottom" && exitingCardName === cardName) {
      setCurrentTestimonials(prev => {
        const newStack = [...prev];
        const indexToMove = newStack.findIndex(t => t.name === exitingCardName);
        if (indexToMove !== -1) {
          const [cardToMove] = newStack.splice(indexToMove, 1);
          newStack.push(cardToMove);
        }
        return newStack;
      });
      setExitingCardName(null);
      setIsAnimating(false);
    }
  };

  return (
    <>
      <div ref={ref} className="bg-primary-dark text-white text-center pb-40 pt-20 flex flex-col items-center">

        <Heading level={3} as="h2" className="text-center text-white mb-40 relative z-10">What people are saying</Heading>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="relative w-[800px] aspect-[3/2]">
            <BlurredSphere
              color="bg-primary"
              size="w-[50rem] h-[50rem]"
              opacity="opacity-90"
              blur="blur-[10rem]"
              position="absolute top-[10rem] left-1/2"
              transform="transform -translate-x-1/2 -translate-y-1/2"
              zIndex="z-0"
            />
            {currentTestimonials.map((testimonial, index) => {
              const isFrontCard = index === 0;
              const zIndex = currentTestimonials.length - index;

              let animateState = "back";
              if (exitingCardName === testimonial.name) {
                animateState = "exitingToBottom";
              } else if (isFrontCard) {
                animateState = "front";
              }

              const initialDelay = !hasAnimatedInView ? (isFrontCard ? 1 : 1 + index * 0.05) : 0;

              const currentTransition = {
                ...springTransition,
                ...(animateState !== 'exitingToBottom' && { delay: initialDelay })
              };

              return (
                <motion.div
                  key={testimonial.name}
                  layout
                  layoutId={testimonial.name}
                  className={`w-full h-full ${CARD_BACKGROUND_COLOR} p-[4rem] rounded-3xl flex flex-col justify-center absolute top-0 left-0 cursor-grab`}
                  style={{ zIndex }}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? animateState : "initial"}
                  custom={index}
                  transition={currentTransition}
                  onAnimationComplete={(definition) => handleAnimationComplete(definition, testimonial.name)}
                >
                  <div className="flex flex-col items-start text-left">
                    <p className="text-[2rem] mb-4">{testimonial.text}</p>
                    <p className="font-semibold text-[1.5rem]">{testimonial.name}</p>
                    <p className="text-[1.5rem]">{testimonial.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
}

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const CARD_BACKGROUND_COLOR = "bg-[radial-gradient(151.31%_151.31%_at_97.84%_-21.65%,#00CCA8_0%,#1B98E0_97%)]";

const cardVariants = {
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
    scale: 1,
    x: 0,
    y: -i * 25,
    transformOrigin: "center center",
  }),
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

  const handleNext = () => {
    setCurrentTestimonials(prev => {
      const newStack = [...prev];
      const first = newStack.shift();
      if (first) {
        newStack.push(first);
      }
      return newStack;
    });
  };

  return (
    <>
      <div className="bg-primary-dark text-white text-center pb-40 pt-20 flex flex-col items-center">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => console.log("Previous arrow clicked")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="relative w-[500px] aspect-[3/2]">
            {currentTestimonials.map((testimonial, index) => {
              const isFrontCard = index === 0;
              const zIndex = currentTestimonials.length - index;

              return (
                <motion.div
                  key={testimonial.name}
                  layout
                  layoutId={testimonial.name}
                  className={`w-full h-full ${CARD_BACKGROUND_COLOR} p-8 rounded-3xl flex flex-col justify-center absolute top-0 left-0 cursor-grab`}
                  style={{ zIndex }}
                  variants={cardVariants}
                  animate={isFrontCard ? "front" : "back"}
                  custom={index}
                  // Temporarily remove transition for diagnostics
                  // transition={{
                  //   type: "spring",
                  //   stiffness: 300,
                  //   damping: 30,
                  // }}
                >
                  <div className="flex flex-col items-start text-left">
                    <p className="text-lg italic mb-4">{testimonial.text}</p>
                    <p className="font-semibold text-xl">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
}

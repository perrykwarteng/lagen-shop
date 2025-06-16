"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const testimonials = [
  {
    name: "Emily Thompson",
    title: "Sydney, Australia",
    message:
      "Every piece I ordered exceeded my expectations. LA'GEN truly delivers luxury fashion!",
  },
  {
    name: "Liam Johnson",
    title: "Melbourne, Australia",
    message:
      "Fast shipping, premium fabrics, and elegant design. I feel confident every time I wear LA'GEN.",
  },
  {
    name: "Olivia Brown",
    title: "Brisbane, Australia",
    message:
      "The attention to detail is remarkable. LA'GEN's style is simply unmatched.",
  },
  {
    name: "Noah Williams",
    title: "Perth, Australia",
    message:
      "I was blown away by the quality and fit. It's now my favorite fashion brand.",
  },
  {
    name: "Ava Wilson",
    title: "Adelaide, Australia",
    message:
      "Chic, classy, and comfortable — LA'GEN makes me feel like I’m on the runway every day!",
  },
];

export const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 7000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real stories from real customers about LA'GEN.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <p className="text-gray-700 text-lg italic mb-4">
                “{item.message}”
              </p>
              <h3 className="text-xl font-semibold text-black">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

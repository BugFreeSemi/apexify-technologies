"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "They did a fantastic job! Responded to emails the same day. Most of the time within the half hour. Worked at my pace and explained things very well. Even after payment, they are still willing to help with any questions I have.",
    name: "Carri Chicurel",
    role: "Business Owner",
  },
  {
    quote: "Apexify built a website for me and they did a great job! I mostly worked with Muhammad. He was always responsive to whatever I needed and went the extra mile to make sure my site was exactly what I wanted.",
    name: "Brian Carter",
    role: "Marketing Manager",
  },
  {
    quote: "Apexify did a great job from start to finish with my project. They were able to accommodate all the wants I had for my website within a very timely manner. Will definitely be working with them on this website as it grows!",
    name: "Ana Turel",
    role: "Business Owner",
  },
  {
    quote: "Awesome and detailed work, very creative, I'm so happy and that my vision came together.",
    name: "Eric Moore",
    role: "Owner",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-white py-20 lg:py-32 overflow-x-clip">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-24 lg:gap-x-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mt-16 sm:mt-24 lg:mt-0">
              <div className="absolute -inset-x-10 -inset-y-5 lg:-inset-20 bg-gradient-to-br from-purple-100/50 via-blue-100/50 to-transparent rounded-full blur-3xl opacity-70"></div>
              
              <h2 className="absolute -top-16 left-0 sm:-top-24 sm:-left-8 lg:-top-[55px] lg:-left-[85px] font-display text-7xl sm:text-8xl lg:text-[140px] lg:leading-[0.8] font-bold bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent z-10 transform -rotate-[5deg]">
                Testimonial
              </h2>

              <div className="relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/happy-businesswoman-posing-1-12.png"
                  alt="A professional woman posing for the testimonial section"
                  width={453}
                  height={608}
                  className="rounded-2xl object-cover w-full max-w-[453px] mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <blockquote className="space-y-8">
                      <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <footer className="border-t border-border-light pt-8">
                        <h4 className="text-xl font-bold text-text-primary">{testimonial.name}</h4>
                        <p className="text-base text-text-secondary">{testimonial.role}</p>
                      </footer>
                    </blockquote>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-start items-center gap-2.5 mt-12">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      current === index ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
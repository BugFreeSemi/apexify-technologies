import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const services = [
    { name: 'Website Development', href: '#' },
    { name: 'Mobile App Development', href: '#' },
    { name: 'Graphic Design', href: '#' },
    { name: 'Logo Design', href: '#' },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-12 items-center">
          {/* Left Column: Image with Badge */}
          <div className="relative mx-auto lg:mx-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/2149241219-1-e1730318539284-5.png"
              alt="A professional woman working on a laptop in a modern office."
              width={560}
              height={570}
              className="rounded-xl object-cover"
            />
            <div className="absolute top-12 -right-12 hidden xl:block bg-[#1a2c42] text-white p-8 rounded-lg shadow-2xl w-[210px] text-center">
              <h2 className="font-display font-bold text-6xl leading-none">
                <strong>04</strong>
              </h2>
              <p className="mt-2 text-lg">Years Experience</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="relative lg:pl-12">
            <div className="absolute top-12 left-0 w-1 h-24 bg-primary rounded-full hidden lg:block"></div>
            <div>
              <h4 className="font-body font-semibold text-primary text-sm uppercase tracking-[0.1em] mb-4">
                About our company
              </h4>
              <h2 className="font-display text-4xl font-bold text-text-primary leading-tight mb-5">
                Empowering businesses with creative, reliable, and innovative digital solutions.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-10">
                With years of experience and a knack for creative problem-solving, our team brings together diverse skills and expertise. We pride ourselves on creating visually engaging and technically robust digital experiences that not only meet but exceed expectations. From the first conversation to final launch and beyond, Apexify Technologies is here to support your growth journey with a client-centric approach, tailored solutions, and unwavering commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <Link
                  href="#"
                  className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 group"
                >
                  <span className="text-sm">Discover More</span>
                  <ArrowRight className="w-5 h-5 mt-1 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <ul className="w-full space-y-4">
                  {services.map((service) => (
                    <li key={service.name}>
                      <h4 className="text-xl font-semibold">
                        <Link
                          href={service.href}
                          className="flex justify-between items-center text-text-primary hover:text-primary transition-colors duration-300 group"
                        >
                          <span>{service.name}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
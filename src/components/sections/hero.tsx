import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-dark-background text-white overflow-hidden">
      {/* Background and Overlays */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/banner-3-29.webp"
          alt="Business meeting in an office"
          fill
          priority
          quality={100}
          className="object-cover opacity-20 saturate-[0.7]" />

        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/97e72688-64fa-4378-ae71-8c4cc8dea841/visual-edit-uploads/1765005654787-045ckh7jnzpv.webp)'
          }}
        ></div>
        
        {/* Gradient Blob */}
        <div
          className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full filter blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(65, 105, 255, 0.4) 0%, rgba(107, 63, 245, 0.2) 70%)', opacity: 0.5 }}>
        </div>
      </div>

      {/* Decorative Rotating Arc */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[3%] translate-x-1/2 w-[350px] h-[350px] border-2 border-white rounded-full border-l-transparent border-b-transparent opacity-30 animate-[spin_15s_linear_infinite]"></div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 right-0 z-0 w-[150px] sm:w-[200px] lg:w-[280px]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/4-4.png"
          alt="Decorative Shape"
          width={408}
          height={389}
          className="h-auto w-full" />

      </div>

      <div className="container relative z-10 pt-48 pb-32 sm:pt-56 sm:pb-40 lg:pt-64 lg:pb-48">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-8">
          {/* Left Column: Title */}
          <div className="lg:w-3/5 xl:w-2/3">
            <h1 className="text-hero-display text-white">
              DIGITAL <br />
              <strong className="font-bold">EXPERIENCE</strong>
            </h1>
          </div>

          {/* Right Column: Stats and CTA */}
          <div className="lg:w-2/5 xl:w-1/3">
              <div>
                <div className="text-stat-number text-white">276</div>
                <span className="text-lg font-medium text-white block mt-1">Completed Projects</span>
              </div>
              <p className="text-body-lg text-white/90 mt-6 max-w-md">
                Transforming ideas into impactful digital experiences with custom websites, apps, and designs tailored to your success.
              </p>
              <div className="mt-8">
                <Link href="/contact-us" className="group text-button text-white inline-flex items-center gap-3 transition-colors">
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
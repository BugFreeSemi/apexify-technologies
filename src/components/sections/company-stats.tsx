import Image from 'next/image';
import { Check } from 'lucide-react';

const CompanyStats = () => {
  return (
    <section className="bg-[#0F1B2D] text-white py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl lg:text-[44px] font-bold font-display leading-tight mb-12">
              Grow business with <br /> creative ideas
            </h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold font-display mb-2">Professional Agency</h4>
                  <p className="text-gray-300/80 font-body text-base leading-relaxed">
                    Your trusted partner for innovative, high-impact digital solutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold font-display mb-2">Solutions Provider</h4>
                  <p className="text-gray-300/80 font-body text-base leading-relaxed">
                    Apexify Technologies combines expertise and creativity to elevate your brand and transform your vision into reality.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="relative mt-16 lg:mt-0 lg:pl-12">
            <div className="relative">
              <span className="absolute -top-10 left-0 text-sm text-gray-400 uppercase tracking-widest font-body">
                We have worked for you
              </span>
              <h2
                className="absolute top-[-10px] right-[-20px] text-[100px] lg:text-[130px] font-bold font-display leading-none text-transparent z-10"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)' }}
              >
                SINCE <span className="font-bold">2021</span>
              </h2>
              <div className="rounded-2xl overflow-hidden relative z-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/2149207983-e1730329255495-13.jpg"
                  alt="A modern office environment with a team collaborating"
                  width={650}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute bottom-[-30px] left-[-30px] lg:bottom-[-50px] lg:left-[-50px] w-[150px] h-[150px] z-20">
                <svg
                  viewBox="0 0 100 100"
                  className="animate-spin"
                  style={{ animationDuration: '20s' }}
                >
                  <defs>
                    <path 
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text>
                    <textPath 
                      href="#circlePath" 
                      className="fill-white font-body text-[9px] uppercase tracking-[0.2em]"
                    >
                      Award winning creative agency •&nbsp;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
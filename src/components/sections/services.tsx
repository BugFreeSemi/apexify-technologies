import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: string;
  description: string;
  title: string;
  category: string;
  link: string;
}

const serviceItems: ServiceItem[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/5-1-6.png",
    description: "Building innovative applications for a seamless user experience.",
    title: "Application Design & Development",
    category: "Software",
    link: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/icons/6-1-1.png",
    description: "Creating impactful, user-friendly websites that elevate your brand.",
    title: "Website Design & Development",
    category: "WEB SOLUTIONS",
    link: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/7-8.png",
    description: "Boosting your online presence with targeted strategies.",
    title: "Digital Marketing & SEO",
    category: "Online Growth Strategy",
    link: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/8-9.png",
    description: "Designing visuals that capture attention and communicate your brand.",
    title: "Graphic Design",
    category: "Visual Communication",
    link: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/9-10.png",
    description: "Crafting memorable logos that define your brand identity.",
    title: "Logo Design",
    category: "Brand Identity",
    link: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/4-1-11.png",
    description: "Ensuring your digital solutions stay secure and up-to-date.",
    title: "Maintenance & Support",
    category: "Ongoing Digital Support",
    link: "#",
  },
];

const ServiceCard = ({ icon, description, title, category, link }: ServiceItem) => (
  <div className="relative bg-white rounded-[20px] p-10 shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out hover:-translate-y-2 group overflow-hidden flex flex-col">
    <div className="flex-grow pb-10">
      <div className="mb-5">
        <Image src={icon} alt={`${title} icon`} width={56} height={56} />
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <div>
      <h4 className="font-display text-xl font-bold text-foreground mb-2">
        <a href={link} className="hover:text-primary transition-colors">
          {title}
        </a>
      </h4>
      <span className="text-xs font-semibold tracking-[1.2px] uppercase text-muted-foreground">
        {category}
      </span>
    </div>
    <a
      href={link}
      className="absolute bottom-10 right-10 w-[45px] h-[45px] bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10"
    >
      <ArrowRight size={20} />
    </a>
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/15-7.webp"
      alt="Decorative Shape"
      width={120}
      height={120}
      className="absolute -bottom-[25px] -right-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
    />
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
          <div className="md:col-span-2 xl:col-span-2 bg-gradient-to-br from-[hsl(256,90%,50%)] to-[hsl(224,100%,58%)] rounded-[20px] p-[50px] lg:py-[85px] lg:px-[50px] text-white flex flex-col justify-between">
            <div>
              <h5 className="font-body text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                Our Services
              </h5>
              <h2 className="font-display text-5xl font-bold leading-tight mb-8">
                Digital solutions tailored for your success.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-white font-medium text-base relative w-fit group"
            >
              See All
              <span className="absolute bottom-[-4px] left-0 block h-[1px] bg-white w-0 group-hover:w-full transition-all duration-500"></span>
            </Link>
          </div>

          {serviceItems.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
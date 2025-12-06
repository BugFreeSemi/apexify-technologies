import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F1B2D] text-white font-body">
      {/* Top Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Left Column: Logo, Tagline, Socials */}
            <div className="md:col-span-2 lg:col-span-5 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] p-8 sm:p-12 flex flex-col relative overflow-hidden">
              <Link href="/" className="mb-6 block">
                <span className="font-display text-4xl font-bold text-white">Apexify</span>
              </Link>
              <p className="text-gray-200 mb-8 leading-relaxed flex-grow">
                Are off under folly death writter transforming cold regular. Almost do am or limits of hearts.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/image-1-28.png"
                alt="Decorative background shape"
                width={193}
                height={193}
                className="absolute -bottom-12 -left-12 opacity-50 pointer-events-none"
              />
            </div>

            {/* Middle Column: Company Links */}
            <div className="md:col-span-1 lg:col-span-3 lg:pt-6">
              <h4 className="font-display text-xl font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-300 hover:text-white hover:underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Info */}
            <div className="md:col-span-1 lg:col-span-4 lg:pt-6">
              <h4 className="font-display text-xl font-semibold text-white mb-6">Contact Info</h4>
              <ul className="space-y-5 text-gray-300">
                <li>
                  <span className="text-white font-medium block mb-1">ADDRESS:</span>
                  Coming Soon
                </li>
                <li>
                  <span className="text-white font-medium block mb-1">EMAIL:</span>
                  <a href="mailto:info@apexifytechnologies.com" className="hover:text-white hover:underline transition-colors">
                    info@apexifytechnologies.com
                  </a>
                </li>
                <li>
                  <span className="text-white font-medium block mb-1">PHONE:</span>
                  <a href="tel:+16826004502" className="hover:text-white hover:underline transition-colors">
                    +1 (682) 600-4502
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0F1B2D] border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright 2023 Apexify. All Rights Reserved by Apexify
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
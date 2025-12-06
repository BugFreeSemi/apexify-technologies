"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`text-base font-medium transition-colors duration-300 ${
            isActive 
                ? "text-primary" 
                : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary/80"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="relative h-[48px] w-[170px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/Group-74-1.png"
            alt="Apexify Technologies Logo"
            fill
            className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            priority
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/Group-71-2.png"
            alt="Apexify Technologies Scrolled Logo"
            fill
            className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <button
          className="lg:hidden z-50 text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`} />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#0F1B2D] z-[100] flex flex-col p-8 lg:hidden animate-in fade-in-0 slide-in-from-right-full duration-300"
        >
          <div className="flex justify-between items-center mb-16">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97e72688-64fa-4378-ae71-8c4cc8dea841-apexifytechnologies-com/assets/images/logo-light-1-3.png"
                alt="Apexify Technologies Logo"
                width={163}
                height={60}
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} className="text-white" />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-medium transition-colors duration-300 ${
                        pathname === link.href ? "text-primary" : "text-white hover:text-primary/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
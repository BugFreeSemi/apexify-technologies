import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import CompanyStats from "@/components/sections/company-stats";
import TeamStatsSection from "@/components/sections/team-stats";
import TeamMembers from "@/components/sections/team-members";
import TrustedPartners from "@/components/sections/trusted-partners";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <CompanyStats />
        <TeamStatsSection />
        <TeamMembers />
        <TrustedPartners />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
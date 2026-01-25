import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Consultations from "./components/Consultations";
import AppIndustries from "./components/AppIndustries";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Consultations />
      <AppIndustries />
      <Portfolio />
      <Services />
      <ContactForm />
    </div>
  );
}

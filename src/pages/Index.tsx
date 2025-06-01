import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import SearchSection from "@/components/SearchSection";
import RegistrationForm from "@/components/RegistrationForm";
import ExcursionBooking from "@/components/ExcursionBooking";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MapSection />
      <SearchSection />
      <RegistrationForm />
      <ExcursionBooking />
    </div>
  );
};

export default Index;

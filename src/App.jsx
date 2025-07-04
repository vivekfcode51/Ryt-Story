import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import FeaturesSection from "./components/FeaturesSection";
import TrustedWorldwideSection from "./components/TrustedWorldwideSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import FaqSection from "./components/FaqSection";
import FreeTrialSection from "./components/FreeTrialSection";
import LogoGrid from './components/LogoGrid';
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    // Force enable dark mode — just for testing
    // document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* header section */}
      <div>
        <Header />
      </div>

      {/* hero section */}
      <div>
        <HeroSection />
      </div>

      {/* logo section */}
      <div>
        <LogoSection/>
      </div>

      {/* Features section */}
      <div>
        <FeaturesSection/>
      </div>

      {/* TrustedWorldwideSection section */}
      <div>
        <TrustedWorldwideSection/>
      </div>

      {/* TestimonialSection section */}
      <div>
        <TestimonialSection/>
      </div>

      {/* PricingSection section */}
      <div>
        <PricingSection/>
      </div>

      {/* FaqSection section */}
      <div>
        <FaqSection/>
      </div>

      {/* FreeTrialSection */}
      <div>
        <FreeTrialSection/>
      </div>

      {/* LogoGrid section */}
      {/* <div>
      <LogoGrid />
    </div> */}

    {/* footer section */}
    <div>
      <Footer/>
    </div>

    </div>
    </>
  )
}

export default App

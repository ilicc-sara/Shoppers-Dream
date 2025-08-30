import { useRef } from "react";
import HomeSection from "./components/homeSection/HomeSection";
import ProductsSection from "./components/productsSection/ProductsSection";
import CoreValuesSection from "./components/coreValuesSection/CoreValuesSection";
import BenefitsSection from "./components/benefitsSection/BenefitsSection";
import TestimonialsSection from "./components/testimonialsSection/TestimonialsSection";
import Reveal from "./components/Reveal";
import { useOutletContext } from "react-router-dom";

function Index() {
  const coreValuesRef = useRef();

  const scrollToCoreValues = () => {
    coreValuesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { ref } = useOutletContext();
  return (
    <>
      <HomeSection ref={ref} scrollToCoreValues={scrollToCoreValues} />

      <Reveal>
        <ProductsSection />
      </Reveal>

      <Reveal>
        <CoreValuesSection coreValuesRef={coreValuesRef} />
      </Reveal>

      <Reveal>
        <BenefitsSection />
      </Reveal>

      <Reveal>
        <TestimonialsSection />
      </Reveal>
    </>
  );
}

export default Index;

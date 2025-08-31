import { useRef, useEffect } from "react";
import HomeSection from "./components/homeSection/HomeSection";
import ProductsSection from "./components/productsSection/ProductsSection";
import CoreValuesSection from "./components/coreValuesSection/CoreValuesSection";
import BenefitsSection from "./components/benefitsSection/BenefitsSection";
import TestimonialsSection from "./components/testimonialsSection/TestimonialsSection";
import Reveal from "./components/Reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setView } from "../../redux/slice";

function Index() {
  const homeSectionRef = useRef(null);
  const coreValuesRef = useRef();
  const dispatch = useDispatch();

  const scrollToCoreValues = () => {
    coreValuesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const sectionIsInView = useSelector((state) => state.view.isInView);

  useEffect(() => {
    const stickyNav = function (entries) {
      const [entry] = entries;
      // dispatch(setView({ isInView: false }));
      console.log(entry);

      if (entry.isIntersecting) {
        dispatch(setView({ isInView: true }));
      }
      if (!entry.isIntersecting) {
        dispatch(setView({ isInView: false }));
      }
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    headerObserver.observe(homeSectionRef.current);
  }, []);
  console.log("global stejt vju", sectionIsInView);

  return (
    <>
      <HomeSection
        homeSectionRef={homeSectionRef}
        scrollToCoreValues={scrollToCoreValues}
      />

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

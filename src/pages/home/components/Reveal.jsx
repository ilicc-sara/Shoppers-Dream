import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal(props) {
  const { children, width = "100%" } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

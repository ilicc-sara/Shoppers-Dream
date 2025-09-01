import { useEffect } from "react";
import { motion, progress, useAnimate, useMotionValue } from "framer-motion";

function Sequence() {
  const [scope, animate] = useAnimate();
  const progress = useMotionValue(100);

  const sequence = [
    ["#timeline", { width: 0 }, { duration: 5 }],
    [progress, 100, { duration: 5 }],
  ];

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <>
      <div ref={scope}>
        <motion.div
          id="timeline"
          style={{ width: progress, backgroundColor: "red-300" }}
        ></motion.div>
      </div>
    </>
  );
}

export default Sequence;

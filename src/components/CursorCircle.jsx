import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const CursorCircle = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[80px] h-[80px] rounded-full pointer-events-none z-50"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)",
        boxShadow: "0 0 20px rgba(255,0,150,0.8), 0 0 40px rgba(0,204,255,0.8)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CursorCircle;

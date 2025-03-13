import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const StylishCursor = () => {
  // Main cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth following for main cursor
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });
  
  // Trail dots positions (delayed versions of the cursor)
  const trailX1 = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const trailY1 = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const trailX2 = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const trailY2 = useSpring(mouseY, { stiffness: 60, damping: 15 });
  
  // Dynamic properties
  const scale = useTransform(
    smoothX, 
    [0, window.innerWidth], 
    [0.8, 1.2]
  );
  const rotate = useTransform(
    smoothY, 
    [0, window.innerHeight], 
    [0, 360]
  );
  
  // State for controlling color
  const [mainColor, setMainColor] = useState(
    "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
  );
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Change colors every 2 seconds
    const interval = setInterval(() => {
      const hue1 = Math.floor(Math.random() * 360);
      const hue2 = (hue1 + 180) % 360; // Complementary color
      setMainColor(
        `radial-gradient(circle, hsla(${hue1}, 100%, 70%, 0.8) 0%, hsla(${hue2}, 100%, 50%, 0.8) 100%)`
      );
    }, 2000);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.6 : scale,
          rotate,
          background: mainColor,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
          mixBlendMode: "difference",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
      />
      
      {/* Trail dot 1 */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-40"
        style={{
          x: trailX1,
          y: trailY1,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(255, 255, 255, 0.5)",
          mixBlendMode: "difference",
        }}
      />
      
      {/* Trail dot 2 */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-30"
        style={{
          x: trailX2,
          y: trailY2,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(255, 255, 255, 0.3)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default StylishCursor;
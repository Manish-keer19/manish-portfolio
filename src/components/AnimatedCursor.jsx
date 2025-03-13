// // // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // // import { useEffect, useState } from "react";

// // // // // const AnimatedCursor = () => {
// // // // //   const mouseX = useMotionValue(0);
// // // // //   const mouseY = useMotionValue(0);

// // // // //   const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
// // // // //   const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

// // // // //   const scale = useTransform(smoothX, [0, window.innerWidth], [1, 1.5]);
// // // // //   const opacity = useTransform(smoothY, [0, window.innerHeight], [0.7, 1]);

// // // // //   const [color, setColor] = useState(
// // // // //     "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
// // // // //   );

// // // // //   useEffect(() => {
// // // // //     const handleMouseMove = (e) => {
// // // // //       mouseX.set(e.clientX);
// // // // //       mouseY.set(e.clientY);
// // // // //     };

// // // // //     const interval = setInterval(() => {
// // // // //       setColor(
// // // // //         `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%) 0%, hsl(${Math.random() * 360}, 100%, 50%) 100%)`
// // // // //       );
// // // // //     }, 1000);

// // // // //     window.addEventListener("mousemove", handleMouseMove);
// // // // //     return () => {
// // // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // // //       clearInterval(interval);
// // // // //     };
// // // // //   }, [mouseX, mouseY]);

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="fixed top-0 left-0 w-[70px] h-[70px] rounded-full pointer-events-none z-50"
// // // // //       style={{
// // // // //         x: smoothX,
// // // // //         y: smoothY,
// // // // //         scale,
// // // // //         opacity,
// // // // //         background: color,
// // // // //         boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
// // // // //         mixBlendMode: "difference",
// // // // //       }}
// // // // //       transition={{
// // // // //         type: "spring",
// // // // //         stiffness: 150,
// // // // //         damping: 20,
// // // // //       }}
// // // // //     />
// // // // //   );
// // // // // };

// // // // // export default AnimatedCursor;




// // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // import { useEffect, useState } from "react";

// // // // const AnimatedCursor = () => {
// // // //   // Motion values for mouse position
// // // //   const mouseX = useMotionValue(0);
// // // //   const mouseY = useMotionValue(0);

// // // //   // Smoothened values for a fluid effect
// // // //   const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
// // // //   const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });

// // // //   // Dynamic transformations
// // // //   const scale = useTransform(smoothX, [0, window.innerWidth], [0.8, 1.2]);
// // // //   const rotate = useTransform(smoothY, [0, window.innerHeight], [-15, 15]);
// // // //   const opacity = useTransform(smoothY, [0, window.innerHeight], [0.6, 1]);

// // // //   // State for gradient and shape
// // // //   const [gradient, setGradient] = useState(
// // // //     "radial-gradient(circle, rgba(255, 105, 180, 0.9) 0%, rgba(0, 191, 255, 0.7) 100%)"
// // // //   );
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e) => {
// // // //       mouseX.set(e.clientX - 50); // Offset to center the cursor
// // // //       mouseY.set(e.clientY - 50);
// // // //     };

// // // //     // Dynamic color shifting
// // // //     const interval = setInterval(() => {
// // // //       const hue1 = Math.floor(Math.random() * 360);
// // // //       const hue2 = Math.floor(Math.random() * 360);
// // // //       setGradient(
// // // //         `radial-gradient(circle, hsl(${hue1}, 80%, 70%) 0%, hsl(${hue2}, 90%, 50%) 100%)`
// // // //       );
// // // //     }, 1500);

// // // //     // Detect hover on interactive elements
// // // //     const handleHover = () => setIsHovered(true);
// // // //     const handleHoverEnd = () => setIsHovered(false);

// // // //     window.addEventListener("mousemove", handleMouseMove);
// // // //     document.querySelectorAll("a, button").forEach((el) => {
// // // //       el.addEventListener("mouseenter", handleHover);
// // // //       el.addEventListener("mouseleave", handleHoverEnd);
// // // //     });

// // // //     return () => {
// // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // //       document.querySelectorAll("a, button").forEach((el) => {
// // // //         el.removeEventListener("mouseenter", handleHover);
// // // //         el.removeEventListener("mouseleave", handleHoverEnd);
// // // //       });
// // // //       clearInterval(interval);
// // // //     };
// // // //   }, [mouseX, mouseY]);

// // // //   return (
// // // //     <>
// // // //       {/* Main Cursor */}
// // // //       <motion.div
// // // //         className="fixed w-[90px] h-[90px] rounded-full pointer-events-none z-50 mix-blend-difference"
// // // //         style={{
// // // //           x: smoothX,
// // // //           y: smoothY,
// // // //           scale: isHovered ? 1.5 : scale, // Enlarge on hover
// // // //           rotate,
// // // //           opacity,
// // // //           background: gradient,
// // // //           boxShadow: "0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.3)",
// // // //           border: "2px solid rgba(255, 255, 255, 0.2)",
// // // //         }}
// // // //         transition={{ type: "spring", stiffness: 200, damping: 20 }}
// // // //       >
// // // //         {/* Inner glow effect */}
// // // //         <motion.div
// // // //           className="w-full h-full rounded-full"
// // // //           style={{
// // // //             background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 70%)",
// // // //             scale: isHovered ? 1.2 : 1,
// // // //           }}
// // // //           animate={{ scale: [1, 1.1, 1] }}
// // // //           transition={{ duration: 1.5, repeat: Infinity }}
// // // //         />
// // // //       </motion.div>

// // // //       {/* Trailing Particle Effect */}
// // // //       <motion.div
// // // //         className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-40"
// // // //         style={{
// // // //           x: smoothX,
// // // //           y: smoothY,
// // // //           background: gradient,
// // // //           opacity: 0.5,
// // // //         }}
// // // //         transition={{ type: "spring", stiffness: 50, damping: 30, delay: 0.1 }}
// // // //       />
// // // //     </>
// // // //   );
// // // // };

// // // // export default AnimatedCursor;




// // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // import { useEffect, useState } from "react";

// // // const AnimatedCursor = () => {
// // //   const mouseX = useMotionValue(0);
// // //   const mouseY = useMotionValue(0);
// // //   const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
// // //   const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

// // //   // Scale and opacity transformations
// // //   const scale = useTransform(smoothX, [0, window.innerWidth], [1, 1.5]);
// // //   const opacity = useTransform(smoothY, [0, window.innerHeight], [0.7, 1]);

// // //   // Rotation transformation
// // //   const rotate = useTransform(smoothX, [0, window.innerWidth], [0, 360]);

// // //   // Color state and gradient
// // //   const [color, setColor] = useState(
// // //     "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
// // //   );

// // //   // Particle effect state
// // //   const [particles, setParticles] = useState([]);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       mouseX.set(e.clientX);
// // //       mouseY.set(e.clientY);

// // //       // Add particles on mouse move
// // //       setParticles((prev) => [
// // //         ...prev,
// // //         {
// // //           id: Date.now(),
// // //           x: e.clientX,
// // //           y: e.clientY,
// // //           scale: Math.random() * 1.5 + 0.5,
// // //           opacity: 1,
// // //         },
// // //       ]);
// // //     };

// // //     // Randomize gradient color every second
// // //     const interval = setInterval(() => {
// // //       setColor(
// // //         `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%) 0%, hsl(${
// // //           Math.random() * 360
// // //         }, 100%, 50%) 100%)`
// // //       );
// // //     }, 1000);

// // //     // Cleanup particles after they fade out
// // //     const particleCleanup = setInterval(() => {
// // //       setParticles((prev) =>
// // //         prev
// // //           .map((p) => ({
// // //             ...p,
// // //             opacity: Math.max(0, p.opacity - 0.02),
// // //           }))
// // //           .filter((p) => p.opacity > 0)
// // //       );
// // //     }, 30);

// // //     window.addEventListener("mousemove", handleMouseMove);

// // //     return () => {
// // //       window.removeEventListener("mousemove", handleMouseMove);
// // //       clearInterval(interval);
// // //       clearInterval(particleCleanup);
// // //     };
// // //   }, [mouseX, mouseY]);

// // //   return (
// // //     <>
// // //       {/* Main cursor */}
// // //       <motion.div
// // //         className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full pointer-events-none z-50"
// // //         style={{
// // //           x: smoothX,
// // //           y: smoothY,
// // //           scale,
// // //           opacity,
// // //           rotate,
// // //           background: color,
// // //           boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
// // //           mixBlendMode: "difference",
// // //         }}
// // //         transition={{
// // //           type: "spring",
// // //           stiffness: 150,
// // //           damping: 20,
// // //         }}
// // //       />

// // //       {/* Particles */}
// // //       {particles.map((particle) => (
// // //         <motion.div
// // //           key={particle.id}
// // //           className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-40"
// // //           style={{
// // //             x: particle.x,
// // //             y: particle.y,
// // //             scale: particle.scale,
// // //             opacity: particle.opacity,
// // //             background: "rgba(255, 255, 255, 0.8)",
// // //             boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
// // //           }}
// // //         />
// // //       ))}
// // //     </>
// // //   );
// // // };

// // // export default AnimatedCursor;



// // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const AnimatedCursor = () => {
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
// //   const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
// //   const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

// //   // Scale and opacity transformations
// //   const scale = useTransform(smoothX, [0, window.innerWidth], [1, 1.5]);
// //   const opacity = useTransform(smoothY, [0, window.innerHeight], [0.7, 1]);

// //   // Rotation transformation
// //   const rotate = useTransform(smoothX, [0, window.innerWidth], [0, 360]);

// //   // Color state and gradient
// //   const [color, setColor] = useState(
// //     "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
// //   );

// //   // Particle effect state
// //   const [particles, setParticles] = useState([]);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       mouseX.set(e.clientX);
// //       mouseY.set(e.clientY);

// //       // Add particles on mouse move
// //       setParticles((prev) => [
// //         ...prev,
// //         {
// //           id: Date.now(),
// //           x: e.clientX,
// //           y: e.clientY,
// //           scale: Math.random() * 1.5 + 0.5,
// //           opacity: 1,
// //         },
// //       ]);
// //     };

// //     // Randomize gradient color every second
// //     const colorInterval = setInterval(() => {
// //       setColor(
// //         `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%) 0%, hsl(${
// //           Math.random() * 360
// //         }, 100%, 50%) 100%)`
// //       );
// //     }, 1000);

// //     // Cleanup particles after they fade out
// //     const particleCleanupInterval = setInterval(() => {
// //       setParticles((prev) =>
// //         prev
// //           .map((p) => ({
// //             ...p,
// //             opacity: Math.max(0, p.opacity - 0.02),
// //           }))
// //           .filter((p) => p.opacity > 0) // Remove particles with opacity <= 0
// //       );
// //     }, 30);

// //     // Add mousemove event listener
// //     window.addEventListener("mousemove", handleMouseMove);

// //     // Cleanup function
// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       clearInterval(colorInterval);
// //       clearInterval(particleCleanupInterval);
// //     };
// //   }, [mouseX, mouseY]);

// //   return (
// //     <>
// //       {/* Main cursor */}
// //       <motion.div
// //         className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full pointer-events-none z-50"
// //         style={{
// //           x: smoothX,
// //           y: smoothY,
// //           scale,
// //           opacity,
// //           rotate,
// //           background: color,
// //           boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
// //           mixBlendMode: "difference",
// //         }}
// //         transition={{
// //           type: "spring",
// //           stiffness: 150,
// //           damping: 20,
// //         }}
// //       />

// //       {/* Particles */}
// //       {particles.map((particle) => (
// //         <motion.div
// //           key={particle.id}
// //           className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-40"
// //           style={{
// //             x: particle.x,
// //             y: particle.y,
// //             scale: particle.scale,
// //             opacity: particle.opacity,
// //             background: "rgba(255, 255, 255, 0.8)",
// //             boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
// //           }}
// //         />
// //       ))}
// //     </>
// //   );
// // };

// // export default AnimatedCursor;


// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";

// const AnimatedCursor = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
//   const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

//   // Scale and opacity transformations
//   const scale = useTransform(smoothX, [0, window.innerWidth], [1, 1.5]);
//   const opacity = useTransform(smoothY, [0, window.innerHeight], [0.7, 1]);

//   // Rotation transformation
//   const rotate = useTransform(smoothX, [0, window.innerWidth], [0, 360]);

//   // Color state and gradient
//   const [color, setColor] = useState(
//     "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
//   );

//   // Particle effect state
//   const [particles, setParticles] = useState([]);

//   // Check if the device is mobile
//   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );

//   useEffect(() => {
//     if (isMobile) return; // Disable cursor and particles on mobile

//     const handleMove = (x, y) => {
//       mouseX.set(x);
//       mouseY.set(y);

//       // Add particles on move with random colors
//       setParticles((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           x,
//           y,
//           scale: Math.random() * 1.5 + 0.5,
//           opacity: 1,
//           color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random particle color
//         },
//       ]);
//     };

//     const handleMouseMove = (e) => {
//       handleMove(e.clientX, e.clientY);
//     };

//     const handleTouchMove = (e) => {
//       const touch = e.touches[0];
//       handleMove(touch.clientX, touch.clientY);
//     };

//     // Randomize gradient color every second
//     const colorInterval = setInterval(() => {
//       setColor(
//         `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%) 0%, hsl(${
//           Math.random() * 360
//         }, 100%, 50%) 100%)`
//       );
//     }, 1000);

//     // Cleanup particles after they fade out
//     const particleCleanupInterval = setInterval(() => {
//       setParticles((prev) =>
//         prev
//           .map((p) => ({
//             ...p,
//             opacity: Math.max(0, p.opacity - 0.02),
//           }))
//           .filter((p) => p.opacity > 0) // Remove particles with opacity <= 0
//       );
//     }, 30);

//     // Add event listeners for both mouse and touch
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("touchmove", handleTouchMove);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("touchmove", handleTouchMove);
//       clearInterval(colorInterval);
//       clearInterval(particleCleanupInterval);
//     };
//   }, [mouseX, mouseY, isMobile]);

//   // Disable on mobile
//   if (isMobile) return null;

//   return (
//     <>
//       {/* Main cursor */}
//       <motion.div
//         className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full pointer-events-none z-50"
//         style={{
//           x: smoothX,
//           y: smoothY,
//           scale,
//           opacity,
//           rotate,
//           background: color,
//           boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
//           mixBlendMode: "difference",
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 150,
//           damping: 20,
//         }}
//       />

//       {/* Particles */}
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-40"
//           style={{
//             x: particle.x,
//             y: particle.y,
//             scale: particle.scale,
//             opacity: particle.opacity,
//             background: particle.color, // Use random particle color
//             boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default AnimatedCursor;



import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCursor = () => {
  // Check if the device is mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Disable the cursor on mobile devices
  if (isMobile) return null;

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothened values for a fluid effect
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Dynamic transformations
  const scale = useTransform(smoothX, [0, window.innerWidth], [1, 1.5]);
  const opacity = useTransform(smoothY, [0, window.innerHeight], [0.7, 1]);

  // Rotation transformation
  const rotate = useTransform(smoothX, [0, window.innerWidth], [0, 360]);

  // Color state and gradient
  const [color, setColor] = useState(
    "radial-gradient(circle, rgba(255,0,150,0.8) 0%, rgba(0,204,255,0.8) 100%)"
  );

  // Particle effect state
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (x, y) => {
      mouseX.set(x);
      mouseY.set(y);

      // Add particles on move with random colors
      setParticles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x,
          y,
          scale: Math.random() * 1.5 + 0.5,
          opacity: 1,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random particle color
        },
      ]);
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    // Randomize gradient color every second
    const colorInterval = setInterval(() => {
      setColor(
        `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 70%) 0%, hsl(${
          Math.random() * 360
        }, 100%, 50%) 100%)`
      );
    }, 1000);

    // Cleanup particles after they fade out
    const particleCleanupInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: Math.max(0, p.opacity - 0.02),
          }))
          .filter((p) => p.opacity > 0) // Remove particles with opacity <= 0
      );
    }, 30);

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(colorInterval);
      clearInterval(particleCleanupInterval);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          scale,
          opacity,
          rotate,
          background: color,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
          mixBlendMode: "difference",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-40"
          style={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            opacity: particle.opacity,
            background: particle.color, // Use random particle color
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
          }}
        />
      ))}
    </>
  );
};

export default AnimatedCursor;
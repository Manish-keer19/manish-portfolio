import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { TicofabCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "<FullStackDreamer />",
      "Code, Coffee & Creativity",
      "MERN to Spring, All in Sync",
      "Gaming and Debugging, One Life at a Time",
      "From C++ to Caffeine Shots",
      "Turning Logic into Art",
      "Bug Hunter, Code Lover",
      "Coding Dreams into Reality",
      "Passion for Pixels & Performance",
      "When in Doubt, Console.Log",
      "Breaking Limits, One Commit at a Time",
      "From Bytes to Beats",
      "Reacting to Challenges, Natively",
      "Building Bridges Between Code and Creativity",
      "Full Stack Grind, 24/7 Mind",
      "Syntax Slayer & Problem Tamer",
      "From Binary to Brilliance",
      "Debugging Life's Glitches",
      "Coding with Style & Substance",
      "Breaking Loops, Not Hearts",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
          <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              {/* <span className="hidden sm:inline">Manish Keer</span> */}
              <span className="inline sm:inline">Manish Keer</span>

            </span>
          </h1>

          <p
            className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}
          >
            {text}
            <Cursor cursorColor="#915eff" />
          </p>
        </div>
      </div>
      <TicofabCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
        <Link target="_blank" to="https://www.linkedin.com/in/manish-keer19/">
          <BsLinkedin
            size={30}
            className="icon hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://github.com/Manish-keer19">
          <BsGithub
            size={30}
            className="icon hover:text-[#494646] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://x.com/manishkeer_19">
          <BsTwitter
            size={30}
            className="icon hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://discord.com/users/manish_35844">
          <BsDiscord
            size={30}
            className="icon hover:text-[#5865F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://www.instagram.com/manish_keer19/">
          <BsInstagram
            size={30}
            className="icon hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/manish.keer.5074">
          <BsFacebook
            size={30}
            className="icon hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;

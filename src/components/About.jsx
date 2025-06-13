import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { manish } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Overview.
        </h2>
      </div>
      {/* <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello! I'm Manish Keer, a passionate Full-Stack Developer with
          expertise in modern technologies such as Java, JavaScript (ES6+), C++,
          Spring Boot, React, React Native, Node.js, Express.js, MongoDB, and
          SQL. I specialize in building robust, scalable, and user-centric web
          and mobile applications. With a strong focus on clean code and
          performance optimization, I strive to deliver solutions that combine
          functionality with great user experience. 🔧 Project Highlights:
          Real-Time Messenger App Developed a secure, real-time messaging
          platform using Spring Boot and MongoDB. Features include OAuth2 login
          (Google/GitHub), JWT-based authentication, and media sharing.
          Instagram Clone Built a fully responsive Instagram clone using React,
          Node.js, Express.js, and MongoDB. Includes features such as user
          authentication, photo uploading, likes, comments, and a dynamic feed.
          Cross-Platform Desktop App Created a desktop application using
          Electron.js, compatible with Windows, Linux, and macOS, providing
          seamless cross-platform functionality. I'm always enthusiastic about
          exploring new technologies and collaborating on innovative projects.
         
        
          <a
            href="mailto:manishkeer530@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            manishkeer530@gmail.com
          </a>{" "}
          Feel free to explore my work and get in touch!
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                // src={manish1}
                // src={manish2}
                src={manish3}
                // src={manish}
                alt="manish"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div> */}




<div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
  <p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] px-4 text-justify"
  >
    <span className="block mb-4">
      Hello! I'm <strong>Manish Keer</strong>, a passionate Full-Stack Developer skilled in modern technologies including <strong>Java, JavaScript (ES6+), C++, Spring Boot, React, React Native, Node.js, Express.js, MongoDB</strong>, and <strong>SQL</strong>.
    </span>

    <span className="block mb-4">
      I specialize in developing scalable, efficient, and user-friendly web and mobile applications. With a strong focus on clean architecture and performance, I aim to deliver seamless digital experiences.
    </span>

    <span className="block mb-4">
      I've worked on a variety of projects including a real-time chat application, an Instagram-inspired social platform, and a cross-platform desktop app. 
    </span>

    <span className="block mb-4">
      I'm always enthusiastic about exploring new technologies and collaborating on innovative ideas. Feel free to reach out to me at{" "}
      <a
        href="mailto:manishkeer530@gmail.com"
        className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
      >
        manishkeer530@gmail.com
      </a>
      .
    </span>
  </p>

  <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
    <div
      variants={fadeIn("", "", 0.5, 1)}
      className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
      >
        <img
          src={manish}
          alt="manish"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </Tilt>
</div>

      
      <div className="mt-60 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

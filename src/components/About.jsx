import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/me.png";
import resumeFile from '../assets//Daniel-Miranda.pdf';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className={`flex ${styles.flexColMdFlexRow} justify-center items-center`}>
          <div className='text-center md:text-left'>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${styles.textContentCenterMdTextLeft}`}
            >
              I'm a dedicated Junior Software Engineer with a passion for developing innovative software, creating user-friendly interfaces, 
              and building web applications. My commitment to learning and problem-solving, along with a solid grasp of programming languages 
              and frameworks, drives me to make a meaningful impact in the tech industry.
            </motion.p>
            {/* View Resume Button */}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline ${styles.resumeButton}`}
            >
              View Resume
            </a>
            {/* Download Resume Button */}
            <a
              href={resumeFile}
              download
              className={`inline-block mt-4 ml-4 px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline ${styles.resumeButton}`}
            >
              Download Resume
            </a>
          </div>
          <img
            src={profilePic}
            alt='Daniel Miranda'
            className={`md:w-[400px] md:h-[350px] w-[300px] h-[300px] rounded-full object-cover ${styles.imgStyle}`}
          />
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
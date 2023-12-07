import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  achievement,
  icon, // Assuming you have an icon for each achievement
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full text-center' // Centered text
  >
    <img
      src={icon}
      alt='Achievement Icon'
      className='w-16 h-16 mx-auto' // Center the icon and adjust size as needed
    />
    <div className='mt-4'> {/* Adjust margin as needed */}
      <p className='text-white tracking-wider text-[18px]'>{achievement}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.achievement} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
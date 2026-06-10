import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { extracurriculars } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ExtraCard = ({ index, title, subtitle, date, icon, iconBg, points }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className="w-full"
  >
    <div className="bg-[#1d1836] rounded-2xl p-8 flex flex-col gap-5 h-full border border-[#ffffff10] hover:border-[#915EFF44] transition-all duration-300">
      {/* Header */}
      <div className="flex flex-row items-center gap-5">
        {/* Icon circle */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: iconBg, border: "2px solid #ffffff15" }}
        >
          {icon}
        </div>

        {/* Title block */}
        <div>
          <h3 className="text-white font-bold text-[20px] leading-tight">{title}</h3>
          <p className="text-[#915EFF] text-[14px] font-medium mt-1">{subtitle}</p>
          <p className="text-secondary text-[13px] mt-1">{date}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#ffffff10]" />

      {/* Points */}
      <ul className="flex flex-col gap-3">
        {points.map((point, i) => (
          <li key={i} className="flex flex-row gap-3 items-start">
            <span className="w-2 h-2 rounded-full bg-[#915EFF] mt-[6px] flex-shrink-0" />
            <p className="text-secondary text-[14px] leading-[1.7]">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Extra Curricular Activities</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
        {extracurriculars.map((item, index) => (
          <ExtraCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");

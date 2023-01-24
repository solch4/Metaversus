'use client';

import { motion as m } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <m.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
      >
        <div className="feedback-gradient" />
        <div className="text-white z-10 p-3 sm:p-0">
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-10 leading-9">
            Samantha
          </h4>
          <p className="mt-2 font-normal sm:text-[18px] text-xs sm:leading-[22px] leading-4">Founder Metaverus</p>
          <p className="mt-6 font-normal sm:text-2xl text-[18px] sm:leading-[45px] leading-[39px]">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </div>
      </m.div>
      <m.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-1 flex justify-center items-center relative'
      >
        <img
          src="/planet-09.png"
          alt="planet 09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <m.div
          variants={zoomIn(0.4, 1)}
          className='lg:block hidden absolute -left-[10%] top-[3%]'
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] aspect-square object-contain"
          />
        </m.div>
      </m.div>
    </m.div>
  </section>
);

export default Feedback;

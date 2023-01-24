'use client';

import { motion as m } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from '../constants'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-1 flex justify-center flex-col'
      >
        <TypingText title='| Whats New?' />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-12 flex flex-wrap justify-between gap-6">
          {newFeatures.map((feat) => (
            <NewFeatures 
              key={feat.title}
              {...feat}
            />
          ))}
        </div>
      </m.div>
      <m.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get started"
          className="w-[90%] h-[90%] object-contain"
        />
      </m.div>
    </m.div>
  </section>
);

export default WhatsNew;

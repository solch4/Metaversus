'use client';

import { useState } from "react";
import { motion as m } from "framer-motion";
import styles from "../styles";
import { ExploreCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from '../constants'

const Explore = () => {
  const [active, setActive] = useState(exploreWorlds[1].id)

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| The world' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles='text-center'
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Explore;

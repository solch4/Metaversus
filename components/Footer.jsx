'use client';

import { motion as m } from "framer-motion";
import styles from "../styles";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <m.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 text-white`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-3"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-6 aspect-square object-contain"
          />
          <span>ENTER METAVERSE</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-2xl">METAVERUS</h4>
          <p className="text-sm opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map(social => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-6 aspect-square object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </m.footer>
);

export default Footer;

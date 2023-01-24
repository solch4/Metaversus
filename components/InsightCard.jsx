'use client';

import { motion as m } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <m.div
    variants={fadeIn("up", "spring", index * 0.4, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full md:w-[270px] h-[250px] object-cover rounded-[32px]"
    />
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{title}</h4>
        <p className='mt-4 font-normal lg:text-[20px] text-[14px] text-secondary-white'>{subtitle}</p>
      </div>
    </div>
    <button className='hidden lg:flex self-center items-center justify-center h-[100px] aspect-square rounded-full bg-transparent border-[1px] border-white'>
      <img
        src='/arrow.svg'
        alt='arrow'
        className='w-[40%] h-[40%] object-contain'
      />
    </button>
  </m.div>
);

export default InsightCard;

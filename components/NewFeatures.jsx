import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]'>
    <div className={`${styles.flexCenter} mb-6 w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <img
        src={imgUrl}
        alt='icon'
        className='w-1/2 h-1/2 object-contain'
      />
    </div>
    <h3 className="mb-4 text-2xl font-bold leading-[30px] text-white">{title}</h3>
    <p className="flex-1 font-normal text-lg text-[#B0B0B0] leading-8">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;

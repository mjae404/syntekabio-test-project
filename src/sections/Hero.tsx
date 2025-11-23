import React from 'react';
import styles from '@/styles/sections/Hero.module.scss';
import SubTitle from '@/components/SubTitle';
import Image from 'next/image';

type HeroProps = {
  heading: string;
  paragraph: string;
  decorationText?: string;
  mobileImage: string;
  pcImage: string;
};

const Hero: React.FC<HeroProps> = ({ heading, paragraph, decorationText, mobileImage, pcImage }) => {
  return (
    <div className="container">
      <SubTitle heading={heading} paragraph={paragraph} decorationText={decorationText} />
      <div className={styles['hero-image-container']}>
        <Image
          src={pcImage}
          alt="hero pc image"
          className={`${styles['hero-image']} pc-image`}
        />
        <Image
          src={mobileImage}
          alt="hero mobile image"
          className={`${styles['hero-image']} mobile-image`}
        />
      </div>
    </div>
  );
};

export default Hero;

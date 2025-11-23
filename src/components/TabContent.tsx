import React from 'react';
import pcTab01 from '../assets/images/pc_tab01.png';
import pcTab02 from '../assets/images/pc_tab02.png';
import pcTab03 from '../assets/images/pc_tab03.png';
import mobileTab01 from '../assets/images/mobile_tab01.png';
import mobileTab02 from '../assets/images/mobile_tab02.png';
import mobileTab03 from '../assets/images/mobile_tab03.png';
import styles from '../styles/components/TabContent.module.scss';
import Image from 'next/image';

export const TabContent1: React.FC = () => (
  <div className={styles['tab-image-container']}>
    <Image
      src={pcTab01}
      alt="pc tab image1"
      className={`${styles['tab-image']} pc-image`}
    />
    <Image
      src={mobileTab01}
      alt="mobile tab image1"
      className={`${styles['tab-image']} mobile-image`}
    />
  </div>
);

export const TabContent2: React.FC = () => (
  <div className={styles['tab-image-container']}>
    <Image
      src={pcTab02}
      alt="pc tab image2"
      className={`${styles['tab-image']} pc-image`}
    />
    <Image
      src={mobileTab02}
      alt="mobile tab image2"
      className={`${styles['tab-image']} mobile-image`}
    />
  </div>
);

export const TabContent3: React.FC = () => (
  <div className={styles['tab-image-container']}>
    <Image
      src={pcTab03}
      alt="pc tab image3"
      className={`${styles['tab-image']} pc-image`}
    />
    <Image
      src={mobileTab03}
      alt="mobile tab image3"
      className={`${styles['tab-image']} mobile-image`}
    />
  </div>
);

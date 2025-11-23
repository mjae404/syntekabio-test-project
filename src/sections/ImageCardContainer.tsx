import React from 'react';
import styles from '@/styles/sections/ImageCardContainer.module.scss';
import SubTitle from '@/components/SubTitle';
import { ImageCard, CardData } from '@/components/ImageCard';

type ImageCardContainerProps = {
  heading: string;
  paragraph: string;
  color?: 'green' | undefined;
  cards?: CardData[];
};

const ImageCardContainer: React.FC<ImageCardContainerProps> = ({ heading, paragraph, color, cards = [] }) => {
  return (
    <div className={styles['image-card-container']}>
      <div className={styles['image-card-title']}>
        <SubTitle heading={heading} paragraph={paragraph} color={color} />
      </div>
      <div className={styles['image-card-inner']}>
        <ImageCard cards={cards} />
      </div>
    </div>
  );
};

export default ImageCardContainer;

import React from 'react';
import styles from '@/styles/components/SubTitle.module.scss';

type SubTitleProps = {
  heading: string;
  paragraph: string;
  decorationText?: string;
  color?: 'green' | undefined;
};

const SubTitle: React.FC<SubTitleProps> = ({ heading, paragraph, decorationText, color }) => {
  return (
    <div className={`${styles['title-container']} ${color ? styles[color] : ''}`}>
      {decorationText && <div className={styles['title-decoration-text']}>{decorationText}</div>}
      <h2 className={styles['title-heading']}>{heading}</h2>
      <p className={styles['title-paragraph']}>{paragraph}</p>
    </div>
  );
};

export default SubTitle;

import React from 'react';
import styles from '@/styles/sections/TabContainer.module.scss';
import SubTitle from '@/components/SubTitle';
import { Tab, TabItem } from '@/components/Tab';

type TabContainerProps = {
  heading: string;
  paragraph: string;
  tabMenu?: TabItem[];
};

const TabContainer: React.FC<TabContainerProps> = ({ heading, paragraph, tabMenu }) => {
  return (
    <div className="container">
      <SubTitle heading={heading} paragraph={paragraph} />
      <div className={styles['tab-container']}>
        <Tab items={tabMenu ?? []} />
      </div>
    </div>
  );
};

export default TabContainer;

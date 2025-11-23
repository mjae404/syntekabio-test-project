import React, { useState } from 'react';
import styles from '@/styles/components/Tab.module.scss';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabProps {
  items: TabItem[];
  defaultActiveId?: string;
}

export const Tab: React.FC<TabProps> = ({ items, defaultActiveId }) => {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveId(id);
  };

  const activeItem = items.find(item => item.id === activeId);

  return (
    <div className={styles['tab-container']}>
      <ul className={styles['tab-list']}>
        {items.map((item) => (
          <li key={item.id} className={styles['tab-item']}>
            <button
              className={`${styles['tab-button']} ${activeId === item.id ? styles['active'] : ''}`}
              onClick={() => handleTabClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles['tab-content']}>
        {activeItem?.content}
      </div>
    </div>
  );
};

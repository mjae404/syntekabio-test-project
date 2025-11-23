import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/LanguageDropdown.module.scss';

type LanguageOption = {
  label: string;
  value: string;
};

type Props = {
  options?: LanguageOption[];
};

export default function LanguageDropdown({
   options = [
     { label: '한국어', value: 'ko' },
     { label: 'English', value: 'en' },
   ],
  }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].label);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  const handleSelect = (label: string) => {
    setSelected(label);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={`
        ${styles['dropdown-container']}
        ${open ? styles['active'] : ''}
      `}
    >
      <button
        className={styles['dropdown-selected-button']}
        onClick={toggle}
        type="button"
      >
        {selected}
      </button>

      {open && (
        <ul className={styles['dropdown-list']}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`
                ${styles['dropdown-item']}
                ${selected === opt.label ? styles['active'] : ''}
              `}
              onClick={() => handleSelect(opt.label)}
            >
              <button
                type="button"
                className={`
                  ${styles['dropdown-item-button']}
                  ${selected === opt.label ? styles['active'] : ''}
                `}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

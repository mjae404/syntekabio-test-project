import React, { useState, useEffect } from 'react';
import styles from '@/styles/sections/Gnb.module.scss';
import logo from '@/assets/images/logo.png';
import Button from '@/components/Button';
import LanguageDropdown from '@/components/LanguageDropdown';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  id: number;
  label: string;
  href: string;
}

interface MobileMenuItem {
  id: number;
  label: string;
  href: string;
  bold: boolean;
}

interface GnbProps {
  menu: MenuItem[];
  mobileMenu: MobileMenuItem[];
}

const Gnb: React.FC<GnbProps> = ({ menu, mobileMenu }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 992px)');

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsActive(false);
        return;
      }

      setIsActive(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={`${styles['gnb']} ${isActive ? styles.active : ''}`}>
      <div className={styles['gnb-inner']}>
        <div className={styles['gnb-logo']}>
          <Link href="#" className={styles['gnb-logo-link']}>
            <Image src={logo} alt="신테카바이오" className={styles['gnb-logo-image']} />
          </Link>
        </div>

        {!isMobile && (
          <>
            <ul className={styles['gnb-menu-list']} role="menubar">
              {menu.map((item) => (
                <li key={item.id} role="none" className={styles['gnb-menu-item']}>
                  <a href={item.href} role="menuitem" className={styles['gnb-menu-link']}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageDropdown />
            <Button size="md" color="primary" type="button">Login</Button>
          </>
        )}

        {isMobile && (
          <>
            <button
              type="button"
              className={styles['gnb-mobile-open-button']}
              aria-expanded={open}
              aria-controls="mobileMenuLayer"
              onClick={toggleMenu}
            >
              <span className="blind">메뉴 열기</span>
            </button>

            {open && (
              <div
                id="mobileMenuLayer"
                className={styles['gnb-mobile-menu-layer']}
                role="dialog"
                aria-modal="true"
              >
                <div className={styles['gnb-mobile-header']}>
                  <div className={styles['gnb-mobile-logo']}>
                    <Link href="#" className={styles['gnb-mobile-logo-link']}>
                      <Image src={logo} alt="신테카바이오" className={styles['gnb-logo-image']} />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className={styles['gnb-mobile-close-button']}
                    onClick={toggleMenu}
                  >
                    <span className="blind">메뉴 닫기</span>
                  </button>
                </div>
                <div className={styles['gnb-mobile-body']}>
                  <ul className={styles['gnb-mobile-menu-list']} role="menu">
                    {mobileMenu.map((item) => (
                      <li key={item.id} role="none" className={styles['gnb-mobile-menu-item']}>
                        <a
                          href={item.href}
                          role="menuitem"
                          className={`${styles['gnb-mobile-menu-link']} ${item.bold ? styles['bold'] : ''}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <LanguageDropdown />
                  <div className={styles['gnb-mobile-footer']}>
                    <Button size="md" block={true} color="primary" type="button">Login</Button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Gnb;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from '@/styles/components/ImageCard.module.scss';
import Image from 'next/image';

export interface CardData {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

export interface ImageCardProps {
  cards: CardData[];
  centered?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({
    cards,
    centered = true,
    spaceBetween = 16,
  }) => {
  return (
    <div className={styles['card-swiper-container']}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={centered}
        spaceBetween={spaceBetween}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles['card-swiper']}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className={styles['card-swiper-slide']}>
            <div className={styles['card-swiper-item']}>
              <div className={styles['card-swiper-thumbnail']}>
                <Image
                  src= {card.thumbnail}
                  alt={card.title}
                  className={styles['card-swiper-thumbnail-image']}
                />
              </div>
              <div className={styles['card-swiper-text']}>
                <strong className={styles['card-swiper-title']}>{card.title}</strong>
                <p className={styles['card-swiper-description']}>{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

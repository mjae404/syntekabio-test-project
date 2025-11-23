import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ImageCard } from './ImageCard';
import thumbnail from '@/assets/images/card-thumbnail-image.jpg';

const meta: Meta<typeof ImageCard> = {
  title: 'Components/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

const sampleCards = [
  {
    id: 1,
    thumbnail: thumbnail,
    title: '과제용 카드',
    description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
  },
  {
    id: 2,
    thumbnail: thumbnail,
    title: '과제용 카드',
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다.',
  },
  {
    id: 3,
    thumbnail: thumbnail,
    title: '과제용 카드의 제목이 길어졌을 경우 이렇게 됩니다.',
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다.',
  },
  {
    id: 4,
    thumbnail: thumbnail,
    title: '과제용 카드',
    description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
  },
  {
    id: 5,
    thumbnail: thumbnail,
    title: '과제용 카드',
    description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
  },
  {
    id: 6,
    thumbnail: thumbnail,
    title: '과제용 카드',
    description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
  },
];

export const Default: Story = {
  args: {
    cards: sampleCards,
    centered: true,
    spaceBetween: 16,
    slidesPerView: 3,
  },
};

export const FewCards: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    centered: true,
    spaceBetween: 16,
    slidesPerView: 3,
  },
};

export const ManyCards: Story = {
  args: {
    cards: [
      ...sampleCards,
      {
        id: 7,
        thumbnail: 'https://picsum.photos/seed/7/400/300',
        title: 'City Lights',
        description: 'The vibrant nightlife and illuminated streets of bustling metropolitan areas.',
      },
      {
        id: 8,
        thumbnail: 'https://picsum.photos/seed/8/400/300',
        title: 'Tropical Paradise',
        description: 'Palm trees and white sandy beaches in exotic locations around the world.',
      },
    ],
    centered: true,
    spaceBetween: 16,
    slidesPerView: 3,
  },
};

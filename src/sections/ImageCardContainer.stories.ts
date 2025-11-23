import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ImageCardContainer from './ImageCardContainer';
import thumbnail from '@/assets/images/card-thumbnail-image.jpg';

const meta: Meta<typeof ImageCardContainer> = {
  title: 'Sections/ImageCardContainer',
  component: ImageCardContainer,
  argTypes: {
  },
};

export default meta;

export const Default: StoryObj<typeof ImageCardContainer> = {
  args: {
    heading: '테스트용 이미지 카드 단락입니다',
    paragraph: '면접 과제용으로 제작된 샘플 단락입니다. 인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    color: 'green',
    cards: [
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
    ]
  },
};

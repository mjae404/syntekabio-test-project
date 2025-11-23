import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Hero from './Hero';
import iphone from '@/assets/images/mobile_iphone.png';
import ipad from '@/assets/images/pc_ipad.png';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  argTypes: {
  },
};

export default meta;

export const Default: StoryObj<typeof Hero> = {
  args: {
    decorationText: 'Syntekabio',
    heading: '이 페이지는 테스트 중입니다',
    paragraph: '면접 과제용으로 제작된 샘플 페이지입니다.',
    mobileImage: iphone,
    pcImage: ipad,
  },
};

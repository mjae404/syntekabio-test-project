import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SubTitle from './SubTitle';

const meta: Meta<typeof SubTitle> = {
  title: 'Components/SubTitle',
  component: SubTitle,
  argTypes: {
    color: {
      control: 'select',
      options: ['green', undefined],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof SubTitle> = {
  args: {
    heading: '메인 타이틀 텍스트',
    paragraph: '단락 텍스트가 여기에 들어갑니다.',
  },
};

export const WithDecoration: StoryObj<typeof SubTitle> = {
  args: {
    heading: '메인 타이틀 텍스트',
    paragraph: '단락 텍스트가 여기에 들어갑니다.',
    decorationText: 'DECORATION',
  },
};

export const Colored: StoryObj<typeof SubTitle> = {
  args: {
    heading: '컬러 타이틀',
    paragraph: '컬러가 적용된 단락',
    color: 'green',
  },
};

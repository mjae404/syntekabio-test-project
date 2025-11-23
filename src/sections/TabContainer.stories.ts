import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TabContainer from './TabContainer';
import { TabContent1, TabContent2, TabContent3 } from '@/components/TabContent';

const meta: Meta<typeof TabContainer> = {
  title: 'Sections/TabContainer',
  component: TabContainer,
  argTypes: {
  },
};

export default meta;

export const Default: StoryObj<typeof TabContainer> = {
  args: {
    heading: '테스트용 탭 영역 단락 입니다',
    paragraph: '면접 과제용으로 제작된 샘플 탭 단락입니다.',
    tabMenu: [
      {
        id: 'tab1',
        label: '탭영역1',
        content: TabContent1({}),
      },
      {
        id: 'tab2',
        label: '탭영역2',
        content: TabContent2({}),
      },
      {
        id: 'tab3',
        label: '탭영역3',
        content: TabContent3({}),
      },
    ]
  },
};

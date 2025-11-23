import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Tab } from './Tab';
import { TabContent1, TabContent2, TabContent3 } from './TabContent';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
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
    ],
  },
};

export const TwoTabs: Story = {
  args: {
    items: [
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
    ],
  },
};

export const CustomDefaultActive: Story = {
  args: {
    items: [
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
    ],
    defaultActiveId: 'tab3',
  },
};

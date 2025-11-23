import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Gnb from './Gnb';

const meta: Meta<typeof Gnb> = {
  title: 'Sections/Gnb',
  component: Gnb,
};

export default meta;

type Story = StoryObj<typeof Gnb>;

const sampleMenu = [
  { id: 1, label: 'Service Menu 1', href: '#' },
  { id: 2, label: 'Service Menu 2', href: '#' },
  { id: 3, label: 'Service Menu 3', href: '#' },
  { id: 4, label: 'Service Menu 4', href: '#' },
];

const sampleMobileMenu = [
  { id: 1, label: 'Home', href: '#', bold: true },
  { id: 2, label: 'Service', href: '#', bold: true },
  { id: 3, label: 'Service Menu 1', href: '#', bold: false },
  { id: 4, label: 'Service Menu 2', href: '#', bold: false },
  { id: 5, label: 'Service Menu 3', href: '#', bold: false },
  { id: 6, label: 'Service Menu 4', href: '#', bold: false },
];

export const Default: Story = {
  args: {
    menu: sampleMenu,
    mobileMenu: sampleMobileMenu,
  },
};

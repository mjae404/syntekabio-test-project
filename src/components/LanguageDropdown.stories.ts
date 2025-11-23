import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LanguageDropdown from './LanguageDropdown';

const meta: Meta<typeof LanguageDropdown> = {
  title: 'Components/LanguageDropdown',
  component: LanguageDropdown,
};

export default meta;

type Story = StoryObj<typeof LanguageDropdown>;

export const Default: Story = {
  args: {
    options: [
      { label: '한국어', value: 'ko' },
      { label: 'English', value: 'en' },
    ],
  },
};

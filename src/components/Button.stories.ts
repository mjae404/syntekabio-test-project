import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary'],
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SizeXS: Story = {
  args: {
    size: 'xs',
    children: 'XS Button',
  },
};

export const SizeSM: Story = {
  args: {
    size: 'sm',
    children: 'SM Button',
  },
};

export const SizeMD: Story = {
  args: {
    size: 'md',
    children: 'MD Button',
  },
};

export const SizeLG: Story = {
  args: {
    size: 'lg',
    children: 'LG Button',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Block: Story = {
  args: {
    block: true,
    children: 'block Button',
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

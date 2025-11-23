import type { Meta, StoryObj } from '@storybook/react-webpack5';
import VideoContainer from './VideoContainer';
import videoPoster from '@/assets/images/video-cover.png';

const meta: Meta<typeof VideoContainer> = {
  title: 'Sections/VideoContainer',
  component: VideoContainer,
  argTypes: {
  },
};

export default meta;

export const Default: StoryObj<typeof VideoContainer> = {
  args: {
    heading: '테스트용 영상 단락',
    paragraph: '면접 과제용으로 제작된 샘플 영상 단락입니다. 사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.',
    video: '/video/main.mp4',
    videoCover: videoPoster
  },
};

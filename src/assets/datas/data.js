import iphone from '@/assets/images/mobile_iphone.png';
import ipad from '@/assets/images/pc_ipad.png';
import videoPoster from '@/assets/images/video-cover.png';
import { TabContent1, TabContent2, TabContent3 } from '@/components/TabContent';
import thumbnail from '@/assets/images/card-thumbnail-image.jpg';

const gnbMenu = [
  { id: 1, label: 'Service Menu 1', href: '#' },
  { id: 2, label: 'Service Menu 2', href: '#' },
  { id: 3, label: 'Service Menu 3', href: '#' },
  { id: 4, label: 'Service Menu 4', href: '#' },
];

const gnbMobileMenu = [
  { id: 1, label: 'Home', href: '#', bold: true },
  { id: 2, label: 'Service', href: '#', bold: true },
  { id: 3, label: 'Service Menu 1', href: '#', bold: false },
  { id: 4, label: 'Service Menu 2', href: '#', bold: false },
  { id: 5, label: 'Service Menu 3', href: '#', bold: false },
  { id: 6, label: 'Service Menu 4', href: '#', bold: false },
];

const heroData = {
  decorationText: 'Syntekabio',
  heading: '이 페이지는 테스트 중입니다',
  paragraph: '면접 과제용으로 제작된 샘플 페이지입니다.',
  mobileImage: iphone,
  pcImage: ipad,
}

const videoData = {
  heading: '테스트용 영상 단락',
  paragraph: '면접 과제용으로 제작된 샘플 영상 단락입니다.',
  video: './video/main.mp4',
  videoCover: videoPoster,
}

const tabData = {
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
}

const imageCardData = {
  heading: '테스트용 이미지 카드 단락입니다',
  paragraph: '면접 과제용으로 제작된 샘플 단락입니다.',
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
}

export { gnbMenu, gnbMobileMenu, heroData, videoData, tabData, imageCardData };

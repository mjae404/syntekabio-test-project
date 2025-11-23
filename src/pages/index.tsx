import { gnbMenu, gnbMobileMenu, heroData, videoData, tabData, imageCardData } from '@/assets/datas/data.js';
import Gnb from '@/sections/Gnb';
import Hero from '@/sections/Hero';
import VideoContainer from '@/sections/VideoContainer';
import TabContainer from '@/sections/TabContainer';
import ImageCardContainer from '@/sections/ImageCardContainer';

export default function Home() {
  return (
    <>
      <Gnb menu={gnbMenu} mobileMenu={gnbMobileMenu} />
      <Hero heading={heroData.heading} paragraph={heroData.paragraph} decorationText={heroData.decorationText} mobileImage={heroData.mobileImage} pcImage={heroData.pcImage} />
      <VideoContainer heading={videoData.heading} video={videoData.video} paragraph={videoData.paragraph} videoCover={videoData.videoCover} />
      <TabContainer heading={tabData.heading} paragraph={tabData.paragraph} tabMenu={tabData.tabMenu} />
      <ImageCardContainer heading={imageCardData.heading} paragraph={imageCardData.paragraph} color='green' cards={imageCardData.cards} />
    </>
  );
}

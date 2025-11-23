import React, { useEffect, useRef } from 'react';
import styles from '@/styles/sections/VideoContainer.module.scss';
import SubTitle from '@/components/SubTitle';

type VideoContainerProps = {
  heading: string;
  paragraph: string;
  video?: string;
  videoCover?: string;
};

const VideoContainer: React.FC<VideoContainerProps> = ({ heading, paragraph, video, videoCover }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <SubTitle heading={heading} paragraph={paragraph} />
      <div className={styles['video-container']}>
        <video
          ref={videoRef}
          src={video}
          width="100%"
          muted
          playsInline
          poster={videoCover}
          className={styles['video']}
        />
      </div>
    </div>
  );
};

export default VideoContainer;

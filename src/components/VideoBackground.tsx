import { useEffect, useRef } from 'react';
import '../styles/VideoBackground.css';

interface VideoBackgroundProps {
  videoSrc?: string;
  poster?: string;
}

export default function VideoBackground({
  videoSrc = `${import.meta.env.BASE_URL}videos/video.mp4`,
  poster,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="video-background">
      <div className="video-overlay"></div>
      <video
        ref={videoRef}
        className="video-element"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

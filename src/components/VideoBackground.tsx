import { useEffect, useRef, forwardRef } from 'react';
import '../styles/VideoBackground.css';

interface VideoBackgroundProps {
  videoSrc?: string;
  poster?: string;
}

const VideoBackground = forwardRef<HTMLVideoElement, VideoBackgroundProps>(
  ({ videoSrc = `${import.meta.env.BASE_URL}videos/video.mp4`, poster }, ref) => {
    const internalRef = useRef<HTMLVideoElement>(null);
    const videoRef = (ref as React.RefObject<HTMLVideoElement>) || internalRef;

    useEffect(() => {
      if (videoRef.current) {
        // El video empieza muted por defecto para permitir autoplay
        videoRef.current.play().catch((error) => {
          console.log('Video autoplay failed:', error);
        });
      }
    }, [videoRef]);

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
);

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;

import { useRef } from 'react';
import VideoBackground from './VideoBackground';
import VideoAudioControl from './VideoAudioControl';

interface VideoWithControlProps {
  baseUrl?: string;
}

export default function VideoWithControl({ baseUrl = '/' }: VideoWithControlProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <VideoBackground ref={videoRef} baseUrl={baseUrl} />
      <VideoAudioControl videoRef={videoRef} />
    </>
  );
}

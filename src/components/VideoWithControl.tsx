import { useRef } from 'react';
import VideoBackground from './VideoBackground';
import VideoAudioControl from './VideoAudioControl';

export default function VideoWithControl() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <VideoBackground ref={videoRef} />
      <VideoAudioControl videoRef={videoRef} />
    </>
  );
}

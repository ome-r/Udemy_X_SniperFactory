import styles from './styles/sfac-player.module.css'; //Next.js의 경우 CSS 모듈을 사용하기 위해서는 CSS 파일 이름에 .module.css 확장자를 사용

import classNames from "classnames";
import React, { memo, useEffect, useRef, useState } from "react";
// import Controlbar from "./Controlbar";


const SFACPlayer: React.FC<SFACPlayerProps> = ({className , src}) => {

  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);

  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  const classProps = classNames(styles.video, className);

  const videoSrc = src || "";
  const startTime = Math.floor(currentTime);

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent: number) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 3000);
    }
  };
  return (
    <div>
      <video className="sfac-player" controls autoPlay={true} muted={true} playsInline={true} >
        <source src={src} type="video/mp4"  />
        Your browser does not support the video tag. ss
      </video>
    </div>
  );
};

export default SFACPlayer;

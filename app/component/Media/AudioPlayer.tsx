import React, { useState, useEffect, useMemo } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import classNames from "classnames";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audio = useMemo(() => new Audio(src), [src]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  function handleEnd() {
    setIsPlaying(false);
  }
  useEffect(() => {
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("durationchange", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnd);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, [audio]);

  const handleTimeUpdate = (e) => {
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audio) {
      setDuration(audio.duration);
    }
  };

  return (
    <div className="flex items-center w-full">
      <button
        onClick={togglePlay}
        type="button"
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="flex-1 ml-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className={classNames("h-full bg-blue-500 rounded-full", {
              "w-full": currentTime === duration,
            })}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default AudioPlayer;

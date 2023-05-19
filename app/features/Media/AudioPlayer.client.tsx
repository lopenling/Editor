import React, { useState, useEffect, useMemo } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import classNames from "classnames";
import { formatTime } from "./lib/formatTime";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [audio] = useState(() => new Audio(src));

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
      audio.addEventListener("durationchange", handleLoadedMetadata, false);
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
    if (audio.duration != Infinity) {
      var duration = audio.duration;

      setDuration(duration);
    }
  };
  const [isDragging, setIsDragging] = useState(false);
  const handleProgressMouseDown = (e) => {
    audio.pause();
    setIsPlaying(false);
    setIsDragging(true);
    updateCurrentTime(e);
  };
  const updateCurrentTime = (e) => {
    const progressBar = document.getElementById("progress-bar");
    const rect = progressBar.getBoundingClientRect();
    const newCurrentTime =
      audio.duration * ((e.clientX - rect.left) / rect.width);
    if (newCurrentTime !== Infinity) {
      audio.currentTime = newCurrentTime;
      setCurrentTime(newCurrentTime);
      setIsDragging(false);
    }
  };
  const handleProgressMouseMove = (e) => {
    if (isDragging) {
      updateCurrentTime(e);
    }
  };

  const handleProgressMouseUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      updateCurrentTime(e);
    }
  };
  if (!src || src === undefined) return null;
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
        <div
          className="h-2 bg-gray-200 rounded-full"
          id="progress-bar"
          onMouseDown={handleProgressMouseDown}
          onMouseMove={handleProgressMouseMove}
          onMouseUp={handleProgressMouseUp}
          onMouseLeave={handleProgressMouseUp}
        >
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

export default AudioPlayer;

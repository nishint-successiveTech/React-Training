"use client";
import React, { useEffect, useState } from "react";

const Slideshow = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [intervalTime, setIntervalTime] = useState(3000);

  const images = [
    "/images/image copy 3.png",
    "/images/image copy 4.png",
    "/images/image copy 5.png",
    "/images/image copy 6.png",
    "/images/image copy 7.png",
    "/images/image copy 8.png",
    "/images/image copy.png",
    "/images/kholi.png",
    "/images/rohit.png",
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, intervalTime, images.length]);

  return (
    <div>
      <img src={images[currIndex]} />

      <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div>
          <label>
            Interval (ms):
            <input
              type="number"
              value={intervalTime}
              onChange={(e) => setIntervalTime(Number(e.target.value))}
              min={500}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

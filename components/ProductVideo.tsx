"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { BLOG_HERO_IMAGE } from "@/lib/blog-images";

/** Replace with `/videos/befikra-demo.mp4` when you have your own file in public/videos/ */
const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_25fps.mp4";

export default function ProductVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-900 shadow-[0_12px_48px_rgba(15,23,42,0.12)] ring-1 ring-gray-200/80">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        controls={playing}
        playsInline
        preload="metadata"
        poster={BLOG_HERO_IMAGE}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
          aria-label="Play Befikra product video"
        >
          <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-emerald-500 shadow-lg transition-transform hover:scale-105 hover:bg-emerald-600">
            <Play
              className="ml-1 h-7 w-7 md:h-9 md:w-9 fill-white text-white"
              strokeWidth={0}
            />
          </span>
        </button>
      )}
    </div>
  );
}

"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { SECTION_IDS } from "@/constants/navigation";
import {
  HERO_HEADING,
  HERO_SUBLINE_1,
  HERO_SUBLINE_2,
  HERO_CTA_TEXT,
  HERO_PROMO_BOX_BEFORE,
  HERO_PROMO_BOX_ACCENT,
  HERO_VIDEO_CAPTION_BEFORE,
  HERO_VIDEO_CAPTION_ACCENT,
} from "@/constants/hero";
import Button from "@/components/ui/Button";

interface HeroProps {
  onOpenForm: () => void;
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Hero({ onOpenForm }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(video.duration);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShowControls(true);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 2500);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      scheduleHide();
    } else {
      video.pause();
      setShowControls(true);
    }
  };

  const toggleMute = (e: ReactMouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    video.volume = val;
    setVolume(val);
    if (val === 0) {
      video.muted = true;
      setIsMuted(true);
    } else if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const seekTo = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width),
    );
    video.currentTime = ratio * duration;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id={SECTION_IDS.hero}
      className="bg-surface pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-20 lg:pt-10 xl:pb-24 xl:pt-12"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          {/* Text + CTA */}
          <div className="flex max-w-xl flex-col items-center text-center lg:max-w-none lg:items-start lg:text-left">
            <h1 className="text-2xl font-bold leading-tight text-neutral-950 sm:text-3xl lg:text-[44px] lg:leading-[1.12] xl:text-[52px]">
              {HERO_HEADING}
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-6 lg:max-w-lg lg:text-lg xl:text-xl">
              {HERO_SUBLINE_1}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-4 lg:max-w-lg lg:text-lg xl:text-xl">
              {HERO_SUBLINE_2}
            </p>

            <div className="mt-8 w-full max-w-md lg:mt-10 lg:max-w-md">
              <Button
                onClick={onOpenForm}
                className="w-full px-6 py-4 text-base font-semibold sm:text-lg lg:px-10 lg:py-4 lg:text-lg xl:text-xl"
              >
                {HERO_CTA_TEXT}
              </Button>
            </div>

            {/* <div className="shadow-lg mt-6 w-full max-w-md rounded-2xl bg-neutral-50 px-4 py-4 text-sm leading-snug text-neutral-700 sm:text-base lg:mt-8 lg:px-6 lg:py-5 lg:text-lg">
              {HERO_PROMO_BOX_BEFORE}
              <span className="font-medium text-primary-800">
                {HERO_PROMO_BOX_ACCENT}
              </span>
            </div> */}
          </div>

          {/* Video + caption */}
          <div className="flex w-full flex-col items-center lg:items-stretch">
            <div
              className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] sm:aspect-video sm:rounded-3xl cursor-pointer select-none"
              onClick={togglePlay}
              onMouseMove={scheduleHide}
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
              >
                <source src="/assets/kid-speak.MP4" type="video/mp4" />
              </video>

              {/* Big center play button — only when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition hover:scale-110 lg:h-20 lg:w-20">
                    <svg
                      className="ml-1 h-7 w-7 lg:h-9 lg:w-9 text-neutral-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Bottom controls bar */}
              <div
                className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 sm:px-4 sm:pb-4 transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Timeline */}
                <div
                  ref={progressRef}
                  className="group/bar relative mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/30"
                  onClick={seekTo}
                >
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: `${progress}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity"
                    style={{ left: `${progress}%`, marginLeft: -7 }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  {/* Play / Pause */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="text-white hover:text-white/80 transition"
                  >
                    {isPlaying ? (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 ml-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    )}
                  </button>

                  {/* Time */}
                  <span className="text-xs text-white/80 tabular-nums min-w-[70px]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <div className="flex-1" />

                  {/* Volume */}
                  <div className="flex items-center gap-1.5 group/vol">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="text-white hover:text-white/80 transition"
                    >
                      {isMuted || volume === 0 ? (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      onClick={(e) => e.stopPropagation()}
                      className="w-0 group-hover/vol:w-16 transition-all duration-200 accent-white h-1 cursor-pointer opacity-0 group-hover/vol:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-neutral-700 sm:text-base lg:mt-6 lg:max-w-none lg:text-left lg:text-lg xl:text-xl">
              {HERO_VIDEO_CAPTION_BEFORE}
              <span className="font-medium text-primary-800">
                {HERO_VIDEO_CAPTION_ACCENT}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "@/components/icons";

export default function HeroMedia() {
  const videoRef = useRef(null);
  const pausedByUser = useRef(false);
  const enabledByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;

    function syncPlayback() {
      const motionAllowed = !preference.matches || enabledByUser.current;
      if (inView && !document.hidden && motionAllowed && !pausedByUser.current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 });

    observer.observe(video);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (video.paused) {
      pausedByUser.current = false;
      enabledByUser.current = true;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  }

  return (
    <>
      <Image className="hero-image" src="/images/hero-poster.jpeg" alt="Un snowboarder contempla las montañas nevadas desde una cresta, con su tabla a un lado" fill sizes="100vw" preload />
      <video ref={videoRef} className={`hero-video${failed ? " media-failed" : ""}`} src="/videos/hero.mp4" poster="/images/hero-poster.jpeg" muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
      {!failed && (
        <button className="video-control" onClick={togglePlayback} aria-label={playing ? "Pausar video del hero" : "Reproducir video del hero"}>
          <PlayIcon playing={playing} />
          <span>{playing ? "Pausar" : "Reproducir"}</span>
        </button>
      )}
    </>
  );
}

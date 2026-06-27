"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import styles from "./VideoSlider.module.css";

const slides = [
  {
    id: 1,
    videoSrc: "/videos/VIDEO-1.mp4", 
    title: "High-Precision",
    titleHighlight: "Offset Printing",
    subtitle: "Delivering crisp, vivid colors that bring your brand to life with unmatched clarity.",
  },
  {
    id: 2,
    videoSrc: "/videos/VIDEO-2.mp4", 
    title: "Custom ",
    titleHighlight: "Packaging Solutions",
    subtitle: "Durable, elegant mono cartons and corrugated boxes designed perfectly for you.",
  },
  {
    id: 3,
    videoSrc: "/videos/VIDEO-3.mp4", 
    title: "Premium",
    titleHighlight: "Retail Materials",
    subtitle: "Rigid visual retail displays crafted to capture attention and elevate your brand.",
  },
  {
    id: 4,
    videoSrc: "/videos/VIDEO-4.mp4", 
    title: "End-to-End",
    titleHighlight: "Excellence",
    subtitle: "From concept to final print, we ensure top-tier quality at every single step.",
  }
];

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  // Create refs for text elements to animate
  const titleRef = useRef(null);
  const highlightRef = useRef(null);
  const subtitleRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);
  
  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 7000); // 7 seconds per slide for a premium feel
    return () => clearInterval(timer);
  }, [isAnimating, nextSlide]);

  useEffect(() => {
    // Text reveal animation on slide change
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current, 
        { y: 40, opacity: 0, rotationX: 45 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(highlightRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }, sliderRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <div className={styles.heroWrapper} ref={sliderRef}>
      <div className={styles.heroInner}>
        {/* Videos Container */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            style={{ zIndex: index === currentSlide ? 2 : 1 }}
          >
            <video
              className={styles.videoBackground}
              autoPlay
              loop
              muted
              playsInline
              src={slide.videoSrc}
            />
            <div className={styles.overlay}></div>
          </div>
        ))}

        {/* Content Box */}
        <div className={styles.contentBox}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.titleBase} ref={titleRef}>
                {slides[currentSlide].title}
              </span>
              <span className={styles.titleHighlight} ref={highlightRef}>
                {slides[currentSlide].titleHighlight}
              </span>
            </h1>
            <p className={styles.subtitle} ref={subtitleRef}>
              {slides[currentSlide].subtitle}
            </p>
            <button className={styles.ctaButton}>
              Explore Services
            </button>
          </div>
        </div>

        {/* Arrow Navigation buttons */}
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Previous Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Next Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;

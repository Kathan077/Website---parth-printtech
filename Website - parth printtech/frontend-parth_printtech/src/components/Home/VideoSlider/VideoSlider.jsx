"use client";

import { useState, useEffect, useRef } from "react";
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
  
  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 7000); // 7 seconds per slide for a premium feel
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

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

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

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
      </div>
    </div>
  );
};

export default VideoSlider;

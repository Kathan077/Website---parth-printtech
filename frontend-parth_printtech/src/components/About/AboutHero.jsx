"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance animation for text
      gsap.fromTo(
        ".hero-text-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Entrance animation for the structural grid collage
      gsap.fromTo(
        ".collage-item",
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      >
        <source src="/videos/video-3.mp4" type="video/mp4" />
      </video>

      {/* Blueprint Grid Lines Overlay */}
      <div className={styles.blueprintOverlay}>
        <div className={styles.gridLineX}></div>
        <div className={styles.gridLineY}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left Block: Modern Typography & Copy */}
          <div className={styles.contentBlock}>
            <span className={`${styles.subtitle} hero-text-reveal`}>
              <span className={styles.blueDot}></span> RE-IMAGINING PACKAGING
            </span>
            <h1 className={`${styles.title} hero-text-reveal`}>
              Precision In Every Fold,
              <span className={styles.accentText}>Color & Detail</span>
            </h1>
            <p className={`${styles.description} hero-text-reveal`}>
              Since 2015, Parth Printtech has engineered custom packaging and commercial print products that bridge structural integrity with high-fidelity color execution. We turn raw card stock into tactile brand experiences.
            </p>

            <div className={`${styles.ctaWrapper} hero-text-reveal`}>
              <Link href="/contact" className={styles.ctaButton}>
                <span>Get a Quote</span>
                <div className={styles.btnIcon}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Block: Staggered Structural Collage with Blueprint Outlines */}
          <div className={styles.collageBlock}>
            <div className={styles.collageContainer}>
              {/* Drafting alignment marks in corners */}
              <div className={`${styles.alignMark} ${styles.markTL}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markTR}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markBL}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markBR}`}>+</div>

              {/* Image 1: Large Base Card */}
              <div className={`${styles.collageCard} ${styles.primaryCard} collage-item`}>
                <div className={styles.wireframeBorder}></div>
                <img
                  src="/images/Who_We_Are.jpg"
                  alt="Precision offset printing press"
                  className={styles.collageImg}
                />
              </div>

              {/* Image 2: Overlay Card (Right / Top Offset) */}
              <div className={`${styles.collageCard} ${styles.secondaryCard} collage-item`}>
                <div className={styles.wireframeBorder}></div>
                <img
                  src="/images/products/luxury_gift_boxes.png"
                  alt="Luxury Packaging Box"
                  className={styles.collageImg}
                />
                <span className={styles.blueprintCode}>DWG-04-R</span>
              </div>

              {/* Image 3: Small Accent Card (Bottom / Left Offset) */}
              <div className={`${styles.collageCard} ${styles.tertiaryCard} collage-item`}>
                <div className={styles.wireframeBorder}></div>
                <img
                  src="/images/products/mono_cartons.png"
                  alt="Mono Carton Packaging"
                  className={styles.collageImg}
                />
                <span className={styles.blueprintCode}>CUT-01</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;

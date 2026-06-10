"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhoWeAre.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax image inside the arch
      gsap.fromTo(".creative-media",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Rotating circular badge
      gsap.to(".rotating-badge", {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 15,
      });

      // Reveal massive text lines
      gsap.fromTo(".reveal-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-block",
            start: "top 80%",
          },
        }
      );

      // Stagger fade in the floating glass cards
      gsap.fromTo(".float-card",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".float-cards-container",
            start: "top 85%",
          },
        }
      );

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.creativeSection}>

      {/* Infinite Tilted Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>PARTH PRINTTECH • INNOVATION IN PRINTING • CUSTOM PACKAGING SOLUTIONS • </span>
          <span>PARTH PRINTTECH • INNOVATION IN PRINTING • CUSTOM PACKAGING SOLUTIONS • </span>
        </div>
      </div>

      <div className={styles.mainGrid}>

        {/* Left Side: Massive Typography & Content */}
        <div className={`${styles.contentBlock} content-block`}>
          <div className={`${styles.subheading} reveal-text`}>
            <span className={styles.blueDot}></span> WHO WE ARE
          </div>

          <h2 className={styles.heading}>
            <div className="reveal-text">Redefining The</div>
            <div className="reveal-text">
              <span className={styles.outlinedText}>Art</span> Of Printing.
            </div>
          </h2>

          <div className={`${styles.descriptionWrapper} reveal-text`}>
            <p className={styles.description}>
              We are not just a printing press. We are architects of packaging and masters of color. By merging traditional craftsmanship with next-generation offset technology, we turn your boldest ideas into physical masterpieces that demand attention.
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <h4 className={styles.statNum}>100%</h4>
                    <p className={styles.statLabel}>Client Satisfaction</p>
                  </div>
                  <div className={styles.flipCardBack}>
                    <p className={styles.flipText}>Our clients are always happy!</p>
                  </div>
                </div>
              </div>

              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <h4 className={styles.statNum}>Top</h4>
                    <p className={styles.statLabel}>Quality Materials</p>
                  </div>
                  <div className={styles.flipCardBack}>
                    <p className={styles.flipText}>Built to impress!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Creative Media Composition */}
        <div className={styles.mediaBlock}>

          <div className={styles.mediaContainer}>
            <div className={styles.mediaWrapper}>
              {/* Using a highly professional placeholder image */}
              <img
                className={`${styles.mediaElement} creative-media`}
                src="/images/Who_We_Are.jpg"
                alt="Premium Printing"
              />
            </div>

            {/* Circular Rotating Badge overlaid on the corner, now OUTSIDE the overflow container */}
            <div className={`${styles.badgeWrapper}`}>
              <svg viewBox="0 0 100 100" className={`${styles.circularText} rotating-badge`}>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    • ESTABLISHED EXPERTS • PREMIUM PRINTING
                  </textPath>
                </text>
              </svg>
              <div className={styles.badgeCenter}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009fe3" strokeWidth="3"><path d="M12 2L2 22h20L12 2z" /></svg>
              </div>
            </div>

            {/* Floating Glass Cards overlapping the media */}
            <div className={`${styles.floatCardsContainer} float-cards-container`}>
              <div className={`${styles.floatCard} float-card`}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009fe3" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <div>
                  <h5>Precision Tech</h5>
                  <p>State of the art machinery.</p>
                </div>
              </div>
              <div className={`${styles.floatCard} float-card`} style={{ marginLeft: "40px", marginTop: "-10px" }}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009fe3" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <h5>Custom Packaging</h5>
                  <p>Tailored to your brand.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

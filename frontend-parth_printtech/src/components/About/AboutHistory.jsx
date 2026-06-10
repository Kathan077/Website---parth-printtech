"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutHistory.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const historyData = [
  {
    year: "2015",
    title: "Inception & Core Foundation",
    description: "Parth Printtech began its journey with a vision to deliver unmatched print precision, starting with local commercial packaging and basic print contracts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    year: "2018",
    title: "Technology Scale-Up",
    description: "We scaled our capacity by investing in automated Heidelberg offset presses, shifting into high-volume premium commercial print production.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    year: "2021",
    title: "Dedicated Packaging Division",
    description: "To meet growing luxury and FMCG packaging demands, we set up a dedicated state-of-the-art mono carton and corrugated box plant.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    year: "2024",
    title: "Complete Automation & Global Standards",
    description: "Equipped with automated folder-gluers, rigid box makers, and high-speed die-cutters, we serve global standards in sustainable packaging.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  }
];

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const HistoryCard = ({ item, isEven }) => {
  const cardWrapperRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !cardWrapperRef.current) return;
    const rect = cardWrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    // Subtle rotation ranges (-6 to 6 degrees)
    const rotateX = -(y - yc) / (rect.height / 10);
    const rotateY = (x - xc) / (rect.width / 10);

    cardRef.current.style.setProperty("--rx", `${rotateX}deg`);
    cardRef.current.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={cardWrapperRef}
      className={`${styles.timelineItem} ${isEven ? styles.leftSide : styles.rightSide} timeline-item-animate`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Timeline central node dot */}
      <div className={styles.timelineNode}>
        <div className={styles.nodeInner}></div>
      </div>

      {/* Horizontal connector line */}
      <div className={styles.connectorLine}></div>

      {/* Card Wrapper for 3D Perspective */}
      <div className={styles.card3DContainer}>
        <div ref={cardRef} className={styles.timelineCard}>
          {/* Packaging fold corner tabs */}
          <div className={styles.boxFlap}></div>
          <div className={styles.dieCutLine}></div>

          {/* Card Top: Year + Icon */}
          <div className={styles.cardHeader}>
            <span className={styles.year}>{item.year}</span>
            <div className={styles.iconWrapper}>{item.icon}</div>
          </div>

          <h3 className={styles.milestoneTitle}>{item.title}</h3>
          <p className={styles.milestoneDesc}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutHistory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 993px)",
      isMobile: "(max-width: 992px)"
    }, (context) => {
      let { isDesktop } = context.conditions;

      // Fade-in header
      gsap.fromTo(
        ".history-header-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".history-section-trigger",
            start: "top 80%",
          },
        }
      );

      // Animate each timeline item individually as it enters the viewport
      const items = gsap.utils.toArray(".timeline-item-animate");
      items.forEach((item) => {
        const isLeft = item.classList.contains(styles.leftSide);
        const card = item.querySelector(`.${styles.timelineCard}`);
        const node = item.querySelector(`.${styles.timelineNode}`);
        const connector = item.querySelector(`.${styles.connectorLine}`);

        // Node scales up
        if (node) {
          gsap.fromTo(
            node,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );
        }

        // Connector line draws out (desktop only)
        if (connector && isDesktop) {
          gsap.fromTo(
            connector,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              transformOrigin: isLeft ? "right center" : "left center",
              duration: 0.6,
              delay: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );
        }

        // Card slides in (left/right on desktop, bottom/right on mobile)
        if (card) {
          const xVal = isDesktop ? (isLeft ? -80 : 80) : 40;
          const yVal = isDesktop ? 0 : 40;

          gsap.fromTo(
            card,
            { x: xVal, y: yVal, opacity: 0 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            }
          );
        }
      });

      // Grow active center timeline line
      gsap.fromTo(
        ".timeline-line-grow",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-trigger",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    // Refresh layout calculations after short delay to handle Next.js hydration shifts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={`${styles.section} history-section-trigger`}>
      {/* Blueprint background grid lines */}
      <div className={styles.blueprintOverlay}></div>

      {/* Print alignment markers */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "4%", top: "5%" }} />
        <RegistrationMark style={{ right: "4%", top: "5%" }} />
        <RegistrationMark style={{ left: "4%", bottom: "5%" }} />
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} history-header-reveal`}>
            Our Journey of <span className={styles.accentText}>Evolution</span>
          </h2>
          <p className={`${styles.description} history-header-reveal`}>
            Explore the key milestones that transformed Parth Printtech from a local printer into an industrial packaging powerhouse.
          </p>
        </div>

        {/* Timeline Container */}
        <div className={`${styles.timelineContainer} timeline-trigger`}>
          {/* Central vertical track line */}
          <div className={styles.timelineLine}>
            <div className={`${styles.timelineLineActive} timeline-line-grow`}></div>
          </div>

          {/* Timeline Items List */}
          <div className={styles.timelineList}>
            {historyData.map((item, idx) => (
              <HistoryCard key={idx} item={item} isEven={idx % 2 === 0} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHistory;

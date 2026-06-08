"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./CareerHero.module.css";

const CareerHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
      gsap.fromTo(
        ".career-card-item",
        { scale: 0.92, opacity: 0, y: 30 },
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
      {/* Blueprint Grid Lines Overlay */}
      <div className={styles.blueprintOverlay}>
        <div className={styles.gridLineX}></div>
        <div className={styles.gridLineY}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left: Content */}
          <div className={styles.contentBlock}>
            <h1 className={`${styles.title} hero-text-reveal`}>
              Build Your Career,{" "}
              <span className={styles.accentText}>Print Your Future</span>
            </h1>
            <p className={`${styles.description} hero-text-reveal`}>
              At Parth Printtech, we craft more than packaging — we build careers. Join a team of passionate engineers, designers, and print technicians pushing the boundaries of precision and creativity.
            </p>

            <div className={`${styles.ctaWrapper} hero-text-reveal`}>
              <a href="#open-roles" className={styles.ctaButton}>
                <span>View Open Roles</span>
                <div className={styles.btnIcon}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              <Link href="/contact" className={styles.ctaButtonOutline}>
                <span>Talk to Us</span>
                <div className={styles.btnIcon}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className={`${styles.statsRow} hero-text-reveal`}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>10<span className={styles.statAccent}>+</span></span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>150<span className={styles.statAccent}>+</span></span>
                <span className={styles.statLabel}>Team Members</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>5<span className={styles.statAccent}>★</span></span>
                <span className={styles.statLabel}>Work Culture</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Diagram Block */}
          <div className={styles.visualBlock}>
            <div className={styles.visualContainer}>
              {/* Corner Markers */}
              <div className={`${styles.alignMark} ${styles.markTL}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markTR}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markBL}`}>+</div>
              <div className={`${styles.alignMark} ${styles.markBR}`}>+</div>

              {/* Main Card */}
              <div className={`${styles.diagramCard} ${styles.mainCard} career-card-item`}>
                <div className={styles.wireframeBorder}></div>
                <div className={styles.cardIconRow}>
                  <div className={styles.cardIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                      <line x1="12" y1="12" x2="12.01" y2="12"/>
                    </svg>
                  </div>
                  <span className={styles.cardTagLine}>Open Roles</span>
                </div>
                <div>
                  <div className={styles.cardBigNumber}>12</div>
                  <div className={styles.cardBigNumberSub}>Active positions</div>
                </div>
                <div className={styles.miniBar}>
                  <div className={styles.miniBarFill} style={{ width: "72%" }}></div>
                </div>
                <div className={styles.cardList}>
                  <div className={styles.cardListItem}>
                    <span className={styles.listDot}></span>
                    Print Production Technician
                  </div>
                  <div className={styles.cardListItem}>
                    <span className={styles.listDot}></span>
                    Packaging Design Engineer
                  </div>
                  <div className={styles.cardListItem}>
                    <span className={styles.listDot}></span>
                    Quality Control Lead
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className={`${styles.diagramCard} ${styles.secondCard} career-card-item`}>
                <div className={styles.wireframeBorder}></div>
                <span className={styles.secondCardLabel}>Avg. Tenure</span>
                <div>
                  <div className={styles.secondCardValue}>4.2</div>
                  <div className={styles.secondCardSub}>years per employee</div>
                </div>
              </div>

              {/* Third Card */}
              <div className={`${styles.diagramCard} ${styles.thirdCard} career-card-item`}>
                <div className={styles.wireframeBorder}></div>
                <div className={styles.cmykBadge}>
                  <span className={`${styles.cmykDot} ${styles.c}`}></span>
                  <span className={`${styles.cmykDot} ${styles.m}`}></span>
                  <span className={`${styles.cmykDot} ${styles.y}`}></span>
                  <span className={`${styles.cmykDot} ${styles.k}`}></span>
                </div>
                <div className={styles.thirdCardText}>Diverse, Inclusive Workplace</div>
                <span className={styles.blueprintCode}>HRM-REF-2024</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerHero;

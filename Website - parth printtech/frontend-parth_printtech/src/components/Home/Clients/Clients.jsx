"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Clients.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clientLogos = [
  {
    id: 1,
    name: "Aura",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <circle cx="20" cy="17.5" r="10" fill="none" stroke="#e91e63" strokeWidth="2.5" />
        <circle cx="27" cy="17.5" r="10" fill="none" stroke="#009fe3" strokeWidth="2" />
        <text x="44" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="14" fill="#1e293b">AURA</text>
      </svg>
    )
  },
  {
    id: 2,
    name: "Veda",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <path d="M12 25 L22 8 L32 25 Z" fill="none" stroke="#4caf50" strokeWidth="2.5" />
        <path d="M22 8 L22 25" stroke="#4caf50" strokeWidth="1.5" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="14" fill="#1e293b">VEDA</text>
      </svg>
    )
  },
  {
    id: 3,
    name: "Nutri",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <rect x="12" y="10" width="16" height="16" rx="4" fill="none" stroke="#ff7a00" strokeWidth="2.5" />
        <circle cx="20" cy="18" r="4" fill="#ff7a00" />
        <text x="36" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">NUTRI</text>
      </svg>
    )
  },
  {
    id: 4,
    name: "Zenith",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <line x1="12" y1="17.5" x2="32" y2="17.5" stroke="#00bcd4" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="22" y1="7.5" x2="22" y2="27.5" stroke="#00bcd4" strokeWidth="3.5" strokeLinecap="round" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">ZENITH</text>
      </svg>
    )
  },
  {
    id: 5,
    name: "Urban",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <path d="M12 28 V12 H32 V28 Z" fill="none" stroke="#9c27b0" strokeWidth="2.5" />
        <path d="M18 12 Q22 6 26 12" fill="none" stroke="#9c27b0" strokeWidth="2" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">URBAN</text>
      </svg>
    )
  },
  {
    id: 6,
    name: "Apex",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <path d="M22 8 Q28 18 28 24 A6 6 0 1 1 16 24 Q16 18 22 8 Z" fill="none" stroke="#607d8b" strokeWidth="2.5" />
        <text x="38" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="14" fill="#1e293b">APEX</text>
      </svg>
    )
  },
  {
    id: 7,
    name: "Bloom",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <circle cx="22" cy="18" r="6" fill="none" stroke="#e3007b" strokeWidth="2.5" />
        <path d="M22 8 V28 M12 18 H32" stroke="#e3007b" strokeWidth="1.5" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">BLOOM</text>
      </svg>
    )
  },
  {
    id: 8,
    name: "Krishi",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <path d="M12 26 C12 16, 22 16, 22 26" fill="none" stroke="#ff5722" strokeWidth="2.5" />
        <path d="M22 26 C22 16, 32 16, 32 26" fill="none" stroke="#ff5722" strokeWidth="2.5" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">KRISHI</text>
      </svg>
    )
  },
  {
    id: 9,
    name: "Nova",
    logo: (
      <svg viewBox="0 0 100 35" className={styles.logoSvg}>
        <polygon points="22 6 32 12 32 24 22 30 12 24 12 12" fill="none" stroke="#009fe3" strokeWidth="2.5" />
        <text x="40" y="24" fontFamily="var(--font-montserrat), sans-serif" fontWeight="800" fontSize="13" fill="#1e293b">NOVA</text>
      </svg>
    )
  }
];

// Split logo sets to render in 3 vertical columns
const col1Logos = [clientLogos[0], clientLogos[1], clientLogos[2]];
const col2Logos = [clientLogos[3], clientLogos[4], clientLogos[5]];
const col3Logos = [clientLogos[6], clientLogos[7], clientLogos[8]];

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal header details
      gsap.fromTo(
        ".clients-reveal",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Reveal grid block
      gsap.fromTo(
        ".clients-grid-reveal",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.mainContainer}>
        
        {/* Left Side: Title & Description (Clean B2B copy, no button) */}
        <div className={`${styles.contentSide} clients-reveal`}>
          <span className={styles.subtitle}>
            <span className={styles.blueDot}></span> GLOBAL PARTNERSHIPS
          </span>
          <h2 className={styles.title}>
            Trusted by the <span className={styles.outlinedText}>Industry Leaders</span>
          </h2>
          <p className={styles.description}>
            We design, manufacture, and print packaging for leading consumer brands, pharmaceutical companies, organic suppliers, and retail networks worldwide.
          </p>
        </div>

        {/* Right Side: Triple Vertical Columns (Alternating Directions) */}
        <div className={`${styles.marqueeSide} clients-grid-reveal`}>
          
          {/* Column 1: Upward to Downward (moving down) */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackDown}`}>
              {[...col1Logos, ...col1Logos].map((item, idx) => (
                <div key={`${item.id}-c1-${idx}`} className={styles.logoCard}>
                  {item.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Downward to Upward (moving up) */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackUp}`}>
              {[...col2Logos, ...col2Logos].map((item, idx) => (
                <div key={`${item.id}-c2-${idx}`} className={styles.logoCard}>
                  {item.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Upward to Downward (moving down) */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackDown}`}>
              {[...col3Logos, ...col3Logos].map((item, idx) => (
                <div key={`${item.id}-c3-${idx}`} className={styles.logoCard}>
                  {item.logo}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Clients;

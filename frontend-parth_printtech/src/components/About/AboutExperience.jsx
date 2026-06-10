"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutExperience.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilitiesData = [
  {
    id: "printing",
    title: "Offset & Flexo Press",
    description: "High-precision multicolor offset presses ensuring standard-setting color fidelity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
        <line x1="18" y1="18" x2="18.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
    specs: [
      { label: "Machine", value: "Heidelberg Speedmaster" },
      { label: "Substrates", value: "80 - 450 gsm Cardstock" },
      { label: "Speed Rate", value: "15,000 sheets / hr" }
    ]
  },
  {
    id: "diecutting",
    title: "Die-Cutting & Creasing",
    description: "Micron-level die-cutting precision to guarantee clean folds and structural rigidity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.07 7.07l-9.66 9.66a1 1 0 0 1-1.41-1.41l9.66-9.66a6 6 0 0 1 7.07-7.07l-3.77 3.78z" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
      </svg>
    ),
    specs: [
      { label: "Machine", value: "Bobst Automatic Cutter" },
      { label: "Accuracy", value: "± 0.1 mm tolerance" },
      { label: "Max Sheet", value: "1020 x 720 mm" }
    ]
  },
  {
    id: "folding",
    title: "Folding & Gluing",
    description: "High-speed automated glue lines for crash-lock, straight-line, and double-wall cartons.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    specs: [
      { label: "Machine", value: "High-Speed Folder Gluer" },
      { label: "Daily Output", value: "120,000 cartons" },
      { label: "Glue Types", value: "Hot-melt & Cold glue" }
    ]
  },
  {
    id: "finishing",
    title: "Special Finishing",
    description: "Luxury decorative embellishments including foil stamping, blind embossing, and Spot UV.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    specs: [
      { label: "Processes", value: "Hot Foil / Spot UV / Drip" },
      { label: "Embossing", value: "Micro-embossed textures" },
      { label: "Foil Types", value: "Metallic, Holographic" }
    ]
  }
];

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const AboutExperience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal header details
      gsap.fromTo(
        ".exp-header-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-trigger-section",
            start: "top 80%",
          }
        }
      );

      // Reveal capability grid cards
      gsap.fromTo(
        ".exp-card-reveal",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-grid-trigger",
            start: "top 80%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`${styles.section} exp-trigger-section`}>
      {/* Blueprint drawing line backdrop */}
      <div className={styles.blueprintOverlay}></div>

      {/* Alignment marks */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "4%", top: "6%" }} />
        <RegistrationMark style={{ right: "4%", top: "6%" }} />
        <RegistrationMark style={{ left: "4%", bottom: "6%" }} />
        <RegistrationMark style={{ right: "4%", bottom: "6%" }} />
      </div>

      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} exp-header-reveal`}>
            Technical Expertise & <span className={styles.accentText}>Capabilities</span>
          </h2>
          <p className={`${styles.description} exp-header-reveal`}>
            Operating with a state-of-the-art facility to deliver commercial packaging solutions at high output and low tolerances.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className={`${styles.grid} exp-grid-trigger`}>
          {capabilitiesData.map((item) => (
            <div key={item.id} className={`${styles.card} exp-card-reveal`}>
              {/* Icon Container */}
              <div className={styles.iconContainer}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              {/* Specifications List */}
              <div className={styles.specificationsList}>
                {item.specs.map((spec, idx) => (
                  <div key={idx} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutExperience;

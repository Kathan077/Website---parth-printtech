"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutProcess.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stepsData = [
  {
    num: "01",
    id: "cad",
    title: "Structural CAD & Dieline Design",
    shortTitle: "CAD & Dieline",
    tagline: "MICRON-LEVEL BOX ARCHITECTURE",
    description: "Every package starts with structural integrity. Our CAD specialists engineer custom flat-fold shapes and tuck options, ensuring precise locking mechanisms, thickness tolerance calibration, and toolless assembly.",
    stats: [
      { label: "Tolerance", value: "± 0.05 mm" },
      { label: "Software", value: "Impact CAD / ArtiosCAD" }
    ],
    svg: (
      <svg viewBox="0 0 400 300" className={styles.visualSvg} fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Grid Backdrop */}
        <defs>
          <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 159, 227, 0.06)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cadGrid)" stroke="rgba(0, 159, 227, 0.1)" rx="8" />

        {/* Outer dimensions and cut lines */}
        <g stroke="#009fe3" strokeWidth="1.5">
          {/* Main box layout outlines */}
          <rect x="120" y="80" width="80" height="120" rx="2" />
          <rect x="200" y="80" width="80" height="120" rx="2" />
          {/* Tuck flap top */}
          <path d="M 120 80 L 130 50 L 190 50 L 200 80" />
          {/* Tuck flap bottom */}
          <path d="M 120 200 L 130 230 L 190 230 L 200 200" />
          {/* Dust flaps side */}
          <path d="M 120 100 L 100 110 L 100 170 L 120 180" strokeDasharray="3 3" />
          <path d="M 280 100 L 300 110 L 300 170 L 280 180" strokeDasharray="3 3" />
        </g>

        {/* Crease fold lines (Dashed Red-ish or Accent) */}
        <g stroke="#e02424" strokeWidth="1" strokeDasharray="4 4" opacity="0.75">
          <line x1="200" y1="80" x2="200" y2="200" />
          <line x1="120" y1="80" x2="280" y2="80" />
          <line x1="120" y1="200" x2="280" y2="200" />
        </g>

        {/* Dimension labels */}
        <g stroke="#888" strokeWidth="0.8">
          <line x1="120" y1="40" x2="200" y2="40" />
          <line x1="120" y1="36" x2="120" y2="44" />
          <line x1="200" y1="36" x2="200" y2="44" />

          <line x1="90" y1="80" x2="90" y2="200" />
          <line x1="86" y1="80" x2="94" y2="80" />
          <line x1="86" y1="200" x2="94" y2="200" />
        </g>
        <text x="160" y="32" fill="#888" fontFamily="monospace" fontSize="9" textAnchor="middle">W: 80.00mm</text>
        <text x="55" y="145" fill="#888" fontFamily="monospace" fontSize="9" textAnchor="middle">H: 120.00mm</text>
        <text x="240" y="145" fill="#009fe3" fontFamily="monospace" fontSize="10" fontWeight="bold">DWG // 01-A</text>
      </svg>
    )
  },
  {
    num: "02",
    id: "color",
    title: "Spectrophotometer Color Sync",
    shortTitle: "Color Sync",
    tagline: "CMYK HIGHLIGHT CALIBRATION",
    description: "Digital proofing meets physical reality. We align our offset ink plates through densitometer testing, securing perfect color density matching. Specially mixed Pantone shades are calibrated to delta-E standards under regulated D50 lighting.",
    stats: [
      { label: "Color Target", value: "Delta-E < 1.5" },
      { label: "Standard", value: "ISO 12647-2 (Offset)" }
    ],
    svg: (
      <svg viewBox="0 0 400 300" className={styles.visualSvg} fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.02)" stroke="rgba(0, 159, 227, 0.1)" rx="8" />
        
        {/* Overlapping CMYK circular color blocks simulating registration calibration */}
        <circle cx="160" cy="130" r="50" fill="rgba(0, 159, 227, 0.15)" stroke="#009fe3" strokeWidth="1" />
        <circle cx="240" cy="130" r="50" fill="rgba(224, 36, 36, 0.12)" stroke="#e02424" strokeWidth="1" />
        <circle cx="200" cy="175" r="50" fill="rgba(234, 179, 8, 0.12)" stroke="#eab308" strokeWidth="1" />
        
        {/* Color Bars at Bottom */}
        <rect x="50" y="240" width="70" height="20" fill="#009fe3" rx="2" />
        <rect x="130" y="240" width="70" height="20" fill="#e02424" rx="2" />
        <rect x="210" y="240" width="70" height="20" fill="#eab308" rx="2" />
        <rect x="290" y="240" width="70" height="20" fill="#1e293b" rx="2" />

        <text x="85" y="253" fill="#ffffff" fontFamily="monospace" fontSize="8" textAnchor="middle">C: 100%</text>
        <text x="165" y="253" fill="#ffffff" fontFamily="monospace" fontSize="8" textAnchor="middle">M: 100%</text>
        <text x="245" y="253" fill="#ffffff" fontFamily="monospace" fontSize="8" textAnchor="middle">Y: 100%</text>
        <text x="325" y="253" fill="#ffffff" fontFamily="monospace" fontSize="8" textAnchor="middle">K: 100%</text>

        {/* Calibration Target crosshairs overlay */}
        <g stroke="#1e293b" strokeWidth="1">
          <circle cx="200" cy="145" r="16" strokeDasharray="3 3" />
          <line x1="200" y1="120" x2="200" y2="170" />
          <line x1="175" y1="145" x2="225" y2="145" />
        </g>
        <text x="200" y="105" fill="#1e293b" fontFamily="monospace" fontSize="9" textAnchor="middle" fontWeight="bold">ALIGNMENT COMPLIANT</text>
      </svg>
    )
  },
  {
    num: "03",
    id: "press",
    title: "High-Speed Press Sheet Run",
    shortTitle: "Press Sheet Run",
    tagline: "AUTOMATED HIGH-SPEED OFFSET",
    description: "Our high-capacity Heidelberg Speedmaster presses lock cylinder plates in registry. Paper boards run at speeds up to 15,000 sheets per hour under automatic spectrophotometer adjustments, ensuring continuous color uniformity from the first sheet to the last.",
    stats: [
      { label: "Output Speed", value: "15,000 sheets / hr" },
      { label: "Technology", value: "In-line Image Control" }
    ],
    svg: (
      <svg viewBox="0 0 400 300" className={styles.visualSvg} fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.02)" stroke="rgba(0, 159, 227, 0.1)" rx="8" />

        {/* Cylinder Rollers */}
        <circle cx="130" cy="150" r="35" fill="none" stroke="#009fe3" strokeWidth="3" />
        <circle cx="130" cy="150" r="40" stroke="rgba(0, 159, 227, 0.2)" strokeWidth="1" />
        
        <circle cx="270" cy="150" r="35" fill="none" stroke="#e02424" strokeWidth="3" />
        <circle cx="270" cy="150" r="40" stroke="rgba(224, 36, 36, 0.2)" strokeWidth="1" />

        {/* Feeding Paper board sheet passing through rollers */}
        <path d="M 40 160 L 95 160 C 115 160, 145 130, 165 130 L 235 130 C 255 130, 285 160, 305 160 L 360 160" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Sheet indicator arrows */}
        <path d="M 60 152 L 70 152 M 65 148 L 72 152 L 65 156" stroke="#009fe3" strokeWidth="1.2" />
        <path d="M 320 152 L 330 152 M 325 148 L 332 152 L 325 156" stroke="#e02424" strokeWidth="1.2" />

        <text x="200" y="70" fill="#1e293b" fontFamily="monospace" fontSize="11" textAnchor="middle" fontWeight="bold">HEIDELBERG SPEEDMASTER FLOW</text>
        <text x="200" y="210" fill="#888" fontFamily="monospace" fontSize="8" textAnchor="middle">ROTATIONAL SYNC: OK // REGISTRATION: 100%</text>
      </svg>
    )
  },
  {
    num: "04",
    id: "finish",
    title: "Tactile Foil & Die-Cut Crease",
    shortTitle: "Foil & Die-Cut",
    tagline: "LUXURY EMBELLISHMENT & SHAPE",
    description: "The final touch of distinction. High-pressure die-cutters stamp clean folds, lock tabs, and hanger loops with absolute precision. We overlay specialized custom textures: gloss spot UV highlights, deep blind embossing, and metallic foils.",
    stats: [
      { label: "Finishes", value: "Metallic Foil / Spot UV" },
      { label: "Tolerance", value: "± 0.1 mm accuracy" }
    ],
    svg: (
      <svg viewBox="0 0 400 300" className={styles.visualSvg} fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.02)" stroke="rgba(0, 159, 227, 0.1)" rx="8" />

        {/* Luxury Packaging Box Perspective Drawing */}
        <g stroke="#009fe3" strokeWidth="1.2" transform="translate(60, 30)">
          {/* Top lid */}
          <polygon points="140,50 200,80 140,110 80,80" fill="rgba(0, 159, 227, 0.05)" />
          {/* Front face */}
          <polygon points="80,80 140,110 140,190 80,160" fill="rgba(0, 159, 227, 0.08)" />
          {/* Side face */}
          <polygon points="140,110 200,80 200,160 140,190" fill="rgba(0, 159, 227, 0.02)" />

          {/* Embellished Highlight Lines (Gold Foil Sim) */}
          <polyline points="90,85 135,107 135,180 90,157 90,85" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
          <polyline points="145,107 190,85 190,157 145,180 145,107" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Text indicators */}
        <text x="200" y="245" fill="#eab308" fontFamily="monospace" fontSize="9" textAnchor="middle" fontWeight="bold">SPOT UV & HOT FOIL CALIBRATION</text>
        <text x="200" y="260" fill="#888" fontFamily="monospace" fontSize="8" textAnchor="middle">PRESSURE ACCURACY APPROVED // STAGE 4 COMPLETE</text>
      </svg>
    )
  }
];

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const AboutProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade-in header details
      gsap.fromTo(
        ".process-header-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-section-trigger",
            start: "top 80%",
          }
        }
      );

      // Fade-in main grid layout
      gsap.fromTo(
        ".process-grid-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid-reveal",
            start: "top 85%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate active visual card change
  useEffect(() => {
    gsap.fromTo(
      ".active-visual-reveal",
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".active-content-reveal",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 }
    );
  }, [activeStep]);

  return (
    <section ref={containerRef} className={`${styles.section} process-section-trigger`}>
      {/* Blueprint grid pattern backdrop */}
      <div className={styles.blueprintOverlay}>
        <div className={styles.gridLineX}></div>
        <div className={styles.gridLineY}></div>
      </div>

      {/* Calibration markers */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "4%", top: "5%" }} />
        <RegistrationMark style={{ right: "4%", top: "5%" }} />
        <RegistrationMark style={{ left: "4%", bottom: "5%" }} />
        <RegistrationMark style={{ right: "4%", bottom: "5%" }} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={`${styles.subtitle} process-header-reveal`}>
            <span className={styles.blueDot}></span> TECHNICAL WORKFLOW
          </span>
          <h2 className={`${styles.title} process-header-reveal`}>
            The Journey From <span className={styles.accentText}>Dieline to Detail</span>
          </h2>
          <p className={`${styles.description} process-header-reveal`}>
            Follow the process of structural execution, verifying print calibration tolerances and tactile embellishments at every stage.
          </p>
        </div>

        {/* Layout Grid */}
        <div className={`${styles.layoutGrid} process-grid-reveal`}>
          {/* Left Panel: Steps & Descriptions */}
          <div className={styles.leftPanel}>
            {/* Step Navigation Tabs */}
            <div className={styles.tabsContainer}>
              {stepsData.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`${styles.tabBtn} ${activeStep === idx ? styles.activeTab : ""}`}
                >
                  <span className={styles.tabNum}>{step.num}</span>
                  <span className={styles.tabLabel}>{step.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Step Content */}
            <div className={styles.contentBlock}>
              <span className={`${styles.tagline} active-content-reveal`}>
                {stepsData[activeStep].tagline}
              </span>
              <h3 className={`${styles.stepTitle} active-content-reveal`}>
                {stepsData[activeStep].title}
              </h3>
              <p className={`${styles.stepDesc} active-content-reveal`}>
                {stepsData[activeStep].description}
              </p>

              {/* Step Specs */}
              <div className={`${styles.specsGrid} active-content-reveal`}>
                {stepsData[activeStep].stats.map((stat, sIdx) => (
                  <div key={sIdx} className={styles.specBox}>
                    <span className={styles.specLabel}>{stat.label}</span>
                    <span className={styles.specValue}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive CAD Viewport */}
          <div className={styles.rightPanel}>
            <div className={styles.viewportConsole}>
              <div className={styles.consoleHeader}>
                <div className={styles.consoleTitle}>
                  DIELINE LAB // CALIBRATION_STAGE_{stepsData[activeStep].num}
                </div>
              </div>

              <div className={`${styles.viewportBody} active-visual-reveal`}>
                {stepsData[activeStep].svg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;

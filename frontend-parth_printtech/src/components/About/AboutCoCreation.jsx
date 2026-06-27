"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutCoCreation.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    id: "luxury-box",
    category: "Luxury Packaging",
    title: "Magnetic Rigid Presentation Box",
    challenge: "Lid closure misalignment and bubble gaps in wrapping 1200gsm rigid greyboard laminates.",
    solution: "Configured CNC routing tables to groove precise 90° V-cuts. Structured dual N52 neodymium magnets directly into die-cut board cavities before hand-wrapping with premium textured paper.",
    specs: [
      { label: "Substrate", value: "1200gsm Rigid Board" },
      { label: "Closure", value: "Dual N52 Magnets" },
      { label: "Tolerance", value: "± 0.25 mm" }
    ],
    image: "/images/products/luxury_gift_boxes.png",
    dielineSvg: (
      <svg viewBox="0 0 300 220" fill="none" stroke="#009fe3" strokeWidth="1.2">
        <rect width="100%" height="100%" fill="rgba(0, 159, 227, 0.03)" stroke="rgba(0, 159, 227, 0.15)" rx="6" />
        {/* Base */}
        <rect x="80" y="70" width="80" height="80" strokeDasharray="3 3" />
        {/* Sides */}
        <rect x="80" y="30" width="80" height="40" />
        <rect x="80" y="150" width="80" height="40" />
        <rect x="40" y="70" width="40" height="80" />
        <rect x="160" y="70" width="40" height="80" />
        {/* Flap Lid */}
        <rect x="200" y="70" width="60" height="80" />
        {/* Magnet points */}
        <circle cx="240" cy="95" r="4" fill="#eab308" stroke="#eab308" />
        <circle cx="240" cy="125" r="4" fill="#eab308" stroke="#eab308" />
        <text x="120" y="115" fill="#009fe3" fontSize="8" fontFamily="monospace" textAnchor="middle">BASE</text>
        <text x="230" y="115" fill="#eab308" fontSize="7" fontFamily="monospace" textAnchor="middle">LID FLAP</text>
        <text x="240" y="85" fill="#eab308" fontSize="5" fontFamily="monospace" textAnchor="middle">MAGNET N52</text>
      </svg>
    )
  },
  {
    id: "pharma-carton",
    category: "Pharmaceuticals",
    title: "Optical Verification Mono Carton",
    challenge: "Micro glue-line failures during high-speed packaging lines leading to carton popping and line stoppage.",
    solution: "Integrated automated cold-glue extrusion systems equipped with computerized inline optical sensors. Real-time scanning immediately triggers pneumatic ejection of cartons with deviation.",
    specs: [
      { label: "Material", value: "300gsm SBS Bleached Board" },
      { label: "Validation", value: "Optical Glue Scanning" },
      { label: "Line Speed", value: "120,000 units / hr" }
    ],
    image: "/images/products/mono_cartons.png",
    dielineSvg: (
      <svg viewBox="0 0 300 220" fill="none" stroke="#009fe3" strokeWidth="1.2">
        <rect width="100%" height="100%" fill="rgba(0, 159, 227, 0.03)" stroke="rgba(0, 159, 227, 0.15)" rx="6" />
        {/* Flat folding dieline of carton */}
        <g transform="translate(10, 0)">
          <rect x="50" y="50" width="50" height="120" />
          <rect x="100" y="50" width="50" height="120" />
          <rect x="150" y="50" width="50" height="120" />
          <rect x="200" y="50" width="50" height="120" />
          {/* Glue Tab */}
          <polygon points="50,50 35,55 35,165 50,170" fill="rgba(224, 36, 36, 0.08)" stroke="#e02424" strokeWidth="1" />
          {/* Top/Bottom Flaps */}
          <path d="M 50 50 L 50 25 L 100 25 L 100 50 M 150 50 L 150 25 L 200 25 L 200 50" strokeDasharray="3 3" />
          <path d="M 50 170 L 50 195 L 100 195 L 100 170 M 150 170 L 150 195 L 200 195 L 200 170" strokeDasharray="3 3" />
          <text x="42" y="115" fill="#e02424" fontSize="6" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 42 115)">GLUE LINE</text>
          <text x="125" y="115" fill="#009fe3" fontSize="8" fontFamily="monospace" textAnchor="middle">BODY PANEL</text>
        </g>
      </svg>
    )
  },
  {
    id: "corrugated-shipper",
    category: "Logistics & Shipping",
    title: "High-ECT Double-Wall Box",
    challenge: "Flute crushing and box buckling under high stack load in sea freight containers with elevated humidity.",
    solution: "Engineered double-wall (5-ply) BC-flute profiles using premium virgin Kraft liners. Re-calibrated paper fiber grain direction vertically to maximize crush resistance.",
    specs: [
      { label: "Profile", value: "5-Ply BC Double-Wall" },
      { label: "Load Rating", value: "ECT-42 (Edge Crush Test)" },
      { label: "Coating", value: "Water-resistant coating" }
    ],
    image: "/images/products/corrugated_boxes.png",
    dielineSvg: (
      <svg viewBox="0 0 300 220" fill="none" stroke="#009fe3" strokeWidth="1.2">
        <rect width="100%" height="100%" fill="rgba(0, 159, 227, 0.03)" stroke="rgba(0, 159, 227, 0.15)" rx="6" />
        {/* Standard corrugated flap box laydown */}
        <g transform="translate(10, 0)">
          <rect x="40" y="60" width="60" height="100" />
          <rect x="100" y="60" width="50" height="100" />
          <rect x="150" y="60" width="60" height="100" />
          <rect x="210" y="60" width="50" height="100" />
          {/* Top/Bottom Flaps standard RSC */}
          <rect x="40" y="20" width="60" height="40" strokeDasharray="2 2" />
          <rect x="100" y="20" width="50" height="40" strokeDasharray="2 2" />
          <rect x="150" y="20" width="60" height="40" strokeDasharray="2 2" />
          <rect x="210" y="20" width="50" height="40" strokeDasharray="2 2" />

          <rect x="40" y="160" width="60" height="40" strokeDasharray="2 2" />
          <rect x="100" y="160" width="50" height="40" strokeDasharray="2 2" />
          <rect x="150" y="160" width="60" height="40" strokeDasharray="2 2" />
          <rect x="210" y="160" width="50" height="40" strokeDasharray="2 2" />

          {/* Flute pattern line indicators */}
          <line x1="70" y1="70" x2="70" y2="150" stroke="rgba(0,159,227,0.3)" strokeWidth="1" strokeDasharray="1 3" />
          <line x1="125" y1="70" x2="125" y2="150" stroke="rgba(0,159,227,0.3)" strokeWidth="1" strokeDasharray="1 3" />
          <line x1="180" y1="70" x2="180" y2="150" stroke="rgba(0,159,227,0.3)" strokeWidth="1" strokeDasharray="1 3" />

          <text x="150" y="115" fill="#009fe3" fontSize="8" fontFamily="monospace" textAnchor="middle">VERTICAL FLUTES</text>
        </g>
      </svg>
    )
  }
];

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const CaseStudyCard = ({ study }) => {
  const [showProduct, setShowProduct] = useState(false);
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className={`${styles.card} cocreate-card-reveal`}>
      {/* Visual Toggle Frame */}
      <div className={styles.visualFrame}>
        {/* Toggle Switch */}
        <div className={styles.toggleContainer}>
          <button
            onClick={() => setShowProduct(false)}
            className={`${styles.toggleBtn} ${!showProduct ? styles.toggleActive : ""}`}
          >
            Dieline
          </button>
          <button
            onClick={() => setShowProduct(true)}
            className={`${styles.toggleBtn} ${showProduct ? styles.toggleActive : ""}`}
          >
            Product
          </button>
        </div>

        <div className={styles.viewport}>
          {/* Cad Dieline SVG */}
          <div className={`${styles.dielineContainer} ${!showProduct ? styles.visibleView : styles.hiddenView}`}>
            {study.dielineSvg}
            <span className={styles.cadCode}>DWG-REV-{study.id.toUpperCase()}</span>
          </div>

          {/* Final Product Image */}
          <div className={`${styles.imageContainer} ${showProduct ? styles.visibleView : styles.hiddenView}`}>
            <Image
              src={study.image}
              alt={study.title}
              fill
              className={styles.productImg}
              onError={(e) => {
                e.target.src = "data:image/svg+xml;utf8,<svg viewBox='0 0 300 220' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%231e293b'/><text x='50%' y='50%' font-family='sans-serif' font-size='12' fill='%236c757d' text-anchor='middle'>PARTH PRINTTECH</text></svg>";
              }}
            />
          </div>
        </div>
      </div>

      {/* Specification Content */}
      <div className={styles.content}>
        <span className={styles.category}>{study.category}</span>
        <h3 className={styles.cardTitle}>{study.title}</h3>

        <div className={styles.detailBlock}>
          <h4 className={styles.sectionHeader}>THE CHALLENGE</h4>
          <p className={styles.descText}>{study.challenge}</p>
        </div>

        <div className={styles.detailBlock}>
          <h4 className={styles.sectionHeader}>OUR CALIBRATED SOLUTION</h4>
          <p className={styles.descText}>{study.solution}</p>
        </div>

        <div className={styles.specsList}>
          {study.specs.map((spec, sIdx) => (
            <div key={sIdx} className={styles.specRow}>
              <span className={styles.specLabel}>{spec.label}</span>
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>

        <Link href={`/contact?subject=Inquiry for ${study.title}`} className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

const AboutCoCreation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade/slide up section header
      gsap.fromTo(
        ".cocreate-header-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered cards reveal
      gsap.fromTo(
        ".cocreate-card-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cocreate-grid-trigger",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    // Refresh triggers to ensure scroll offset calculations align with home page layout elements
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      {/* Dark Blueprint Grid Overlay */}
      <div className={styles.blueprintOverlay}></div>

      {/* Alignment Marks */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "4%", top: "4%" }} />
        <RegistrationMark style={{ right: "4%", top: "4%" }} />
        <RegistrationMark style={{ left: "4%", bottom: "4%" }} />
        <RegistrationMark style={{ right: "4%", bottom: "4%" }} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={`${styles.subtitle} cocreate-header-reveal`}>
            <span className={styles.blueDot}></span> CASE STUDIES
          </span>
          <h2 className={`${styles.title} cocreate-header-reveal`}>
            Structural <span className={styles.accentText}>Co-Creation</span>
          </h2>
          <p className={`${styles.description} cocreate-header-reveal`}>
            Explore how we calibrated custom structural configurations to resolve complex engineering bottlenecks for major retail brands.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className={`${styles.grid} cocreate-grid-trigger`}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCoCreation;

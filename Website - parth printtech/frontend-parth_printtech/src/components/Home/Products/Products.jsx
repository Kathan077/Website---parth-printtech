"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Products.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const productsData = [
  {
    id: "01",
    category: "Folding Cartons",
    title: "Folding Mono Cartons",
    description: "Our high-precision custom mono cartons are manufactured from premium duplex board, solid bleached sulfate (SBS), and recycled Kraft paper. Tailored with custom die-cut designs and luxury embellishments, they ensure outstanding shelf-presence and structural protection.",
    image: "/images/products/mono_cartons.png",
    accentColor: "#ff7a00",
    specs: [
      { label: "Substrate", value: "Duplex / SBS / Kraft Board" },
      { label: "Print Process", value: "Heidelberg Offset" },
      { label: "Finishing", value: "Spot UV / Gold Hot Foil" },
      { label: "Est. MOQ", value: "1,000 Units" }
    ]
  },
  {
    id: "02",
    category: "Shipping & Logistics",
    title: "Corrugated Packaging",
    description: "Built for durability and tough transit routes, our industrial-grade corrugated boxes utilize high-quality Kraft liners and flutes. Available in various wall structures (3-ply, 5-ply, 7-ply) to secure large heavy goods with maximum crushing resistance.",
    image: "/images/products/corrugated_boxes.png",
    accentColor: "#009fe3",
    specs: [
      { label: "Flute Profile", value: "3-Ply / 5-Ply / 7-Ply Heavy" },
      { label: "Material", value: "Premium Kraft Liner" },
      { label: "Print Tech", value: "Flexo / Litho-Laminated" },
      { label: "Strength Rating", value: "32 ECT to 48 ECT" }
    ]
  },
  {
    id: "03",
    category: "POSM Displays",
    title: "Rigid Retail Displays",
    description: "Maximize retail visibility with our custom-engineered Point of Sale displays and structural standees. Crafted from durable sunboard, MDF, and flute sheets, these flat-pack displays assemble without tools to place your brand in the visual spotlight.",
    image: "/images/products/retail_displays.png",
    accentColor: "#e91e63",
    specs: [
      { label: "Structure", value: "Custom Die-Cut Standee" },
      { label: "Materials", value: "Flute-sheet / MDF / Sunboard" },
      { label: "Print Tech", value: "High-Res Direct UV" },
      { label: "Assembly", value: "Flat-Pack / Toolless" }
    ]
  },
  {
    id: "04",
    category: "Pouches & Wraps",
    title: "Flexible Packaging",
    description: "Our food-grade stand-up pouches and barrier wraps feature multilayer PET, MET-PET, and PE laminates. Engineered with oxygen and moisture barriers, tear notches, and resealable zippers to keep contents fresh and secure.",
    image: "/images/products/flexible_pouches.png",
    accentColor: "#4caf50",
    specs: [
      { label: "Structure", value: "PET / MET-PET / PE Laminate" },
      { label: "Barrier", value: "High Moisture & O2 Shield" },
      { label: "Style", value: "Stand-Up Zipper / Gusset" },
      { label: "Features", value: "Tear Notch, Degassing Valve" }
    ]
  },
  {
    id: "05",
    category: "Stickers & Labels",
    title: "Product Label Rolls",
    description: "Engineered for high-speed automated production lines, our self-adhesive label rolls offer outstanding print clarity. Resistant to moisture, oil, and tearing, they are ideal for cosmetic jars, squeeze bottles, and chemical containers.",
    image: "/images/products/product_labels.png",
    accentColor: "#2196f3",
    specs: [
      { label: "Substrate", value: "Chrome / Clear PP / Foil" },
      { label: "Adhesive", value: "Permanent / Removable" },
      { label: "Print Tech", value: "Flexo Roll / Digital UV" },
      { label: "Resistance", value: "Water, Oil, Scratch Proof" }
    ]
  },
  {
    id: "06",
    category: "Luxury Packaging",
    title: "Luxury Rigid Boxes",
    description: "Elevate your premium product gifting experience with our rigid set-up boxes. Constructed from heavy-duty greyboard wrapped in imported textured papers, they feature magnetic flip lids, embossed hot foil, and custom-formed EVA foam inserts.",
    image: "/images/products/luxury_gift_boxes.png",
    accentColor: "#9c27b0",
    specs: [
      { label: "Core Board", value: "1.5mm - 3.0mm Greyboard" },
      { label: "Outer Wrap", value: "Specialty Textured Paper" },
      { label: "Insert Type", value: "Custom EVA / Velvet Satin" },
      { label: "Closure", value: "Magnetic Flip / Ribbon Tie" }
    ]
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".product-header-reveal",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-trigger-section",
            start: "top 85%",
          },
        }
      );

      // Animate each row as it enters the viewport
      const rows = gsap.utils.toArray(".product-row-animate");
      rows.forEach((row) => {
        const imageBlock = row.querySelector(".row-image-block");
        const productImage = row.querySelector(".parallax-product-image");
        const contentBlock = row.querySelector(".row-content-block");
        const specBorders = row.querySelectorAll(".spec-border-draw");
        const specTexts = row.querySelectorAll(".spec-text-fade");
        
        const isLeftImage = row.classList.contains("row-left-image");
        
        // 1. Image Block Slide & Fade
        gsap.fromTo(imageBlock,
          { x: isLeftImage ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
            }
          }
        );

        // 2. Image Scroll Parallax (Subtle Scrub)
        if (productImage) {
          gsap.fromTo(productImage,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        }

        // 3. Content Block Fade/Reveal Stagger
        const contentTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          }
        });

        contentTimeline.fromTo(contentBlock,
          { x: isLeftImage ? 60 : -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );

        // 4. Draw-in vertical colored borders on spec boxes
        if (specBorders.length > 0) {
          contentTimeline.fromTo(specBorders,
            { scaleY: 0 },
            { scaleY: 1, transformOrigin: "top", duration: 0.6, stagger: 0.1, ease: "power2.out" },
            "-=0.8"
          );
        }

        // 5. Stagger fade in the spec labels/values
        if (specTexts.length > 0) {
          contentTimeline.fromTo(specTexts,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" },
            "-=0.6"
          );
        }
      });
      
      // Rotate background print marks gently
      gsap.to(".print-mark-rotate", {
        rotation: 360,
        repeat: -1,
        duration: 30,
        ease: "none"
      });

    }, containerRef);

    return () => {};
  }, []);

  return (
    <section ref={containerRef} className={`${styles.section} product-trigger-section`}>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={`${styles.subtitle} product-header-reveal`}>
            <span className={styles.blueDot}></span> PRODUCT SHOWCASE
          </span>
          <h2 className={`${styles.title} product-header-reveal`}>
            Engineered Print <span className={styles.outlinedText}>Solutions</span>
          </h2>
          <p className={`${styles.description} product-header-reveal`}>
            Explore our core print and packaging offerings, built with state-of-the-art machinery and premium finishing operations.
          </p>
        </div>

        {/* Alternating Showcase Rows */}
        <div className={styles.rowsContainer}>
          {productsData.map((prod, idx) => {
            const isLeftImage = idx % 2 === 0;
            return (
              <div 
                key={prod.id} 
                className={`${styles.productRow} product-row-animate ${isLeftImage ? "row-left-image " + styles.rowLeftImage : styles.rowRightImage}`}
              >
                {/* Image Showcase Panel */}
                <div className={`${styles.imageBlock} row-image-block`}>
                  <div className={styles.imageFrame} style={{ "--accent-glow": prod.accentColor }}>
                    <div className={`${styles.imageWrapper} parallax-image-container`}>
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        fill
                        className={`${styles.productImage} parallax-product-image`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`${styles.contentBlock} row-content-block`}>
                  {/* Category and Title */}
                  <span className={styles.categoryLabel}>{prod.category}</span>
                  <h3 className={styles.productTitle}>{prod.title}</h3>
                  <p className={styles.productDesc}>{prod.description}</p>
                  
                  {/* Technical 2x2 Specifications Grid */}
                  <div className={styles.specsGrid}>
                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className={styles.specBox}>
                        {/* Animated growing left border line */}
                        <span className={`${styles.specBorder} spec-border-draw`} style={{ backgroundColor: prod.accentColor }}></span>
                        
                        <span className={`${styles.specLabel} spec-text-fade`}>{spec.label}</span>
                        <span className={`${styles.specValue} spec-text-fade`}>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Configure / Request Quote CTA button */}
                  <button className={styles.configureBtn} style={{ "--hover-accent": prod.accentColor }}>
                    Configure & Request Quote
                    <svg className={styles.btnArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

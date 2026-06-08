"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { productsData } from "./productsData";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Folding Cartons", "Logistics & Shipping", "Luxury & Labels", "POSM Displays"];

  const filteredProducts = activeCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    document.title = "Products | Parth Printing Technology";

    let ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".prod-header-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      // Card entrance
      gsap.fromTo(
        ".prod-card-reveal",
        { scale: 0.96, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", overwrite: "auto" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className={styles.mainContainer}>
        {/* Blueprint drafting grids */}
        <div className={styles.blueprintOverlay}></div>

        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.header}>
            <h1 className={`${styles.title} prod-header-reveal`}>
              Our Print & <span className={styles.accentText}>Packaging Solutions</span>
            </h1>
            <p className={`${styles.description} prod-header-reveal`}>
              Inspect the engineering details, sizes, and print calibrations of our premium commercial packaging solutions.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className={`${styles.filterBar} prod-header-reveal`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Creative Blueprint Grid Layout */}
          <div className={styles.grid}>
            {filteredProducts.map((prod) => (
              <div key={prod.id} className={`${styles.card} prod-card-reveal`} style={{ "--accent-color": prod.accentColor }}>
                
                {/* Registration corner marks & index line */}
                <div className={styles.blueprintMarkLine}></div>
                
                {/* Header CAD spec block */}
                <div className={styles.cadHeader}>
                  <span className={styles.cadIndex}>[ {prod.num} {"//"} SPEC ]</span>
                  <span className={styles.cadReg}>{prod.regMark}</span>
                </div>

                {/* Technical visualizer frame */}
                <div className={styles.imageFrame}>
                  {/* Grid overlay & crosshair mark */}
                  <div className={styles.frameGrid}></div>
                  <div className={styles.crosshair}></div>
                  <div className={styles.dimensionLabel}>{prod.dim}</div>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className={styles.productImage}
                      sizes="(max-width: 768px) 100vw, 30vw"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;utf8,<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23fafbfc'/><text x='50%' y='50%' font-family='sans-serif' font-size='16' fill='%236c757d' text-anchor='middle'>PARTH PRINTTECH</text></svg>";
                      }}
                    />
                  </div>
                </div>

                {/* Info blocks */}
                <div className={styles.infoBlock}>
                  <div className={styles.titleRow}>
                    <span className={styles.categoryLabel}>{prod.category}</span>
                    <h3 className={styles.cardTitle}>{prod.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{prod.description}</p>
                </div>

                {/* Specification CAD metadata table */}
                <div className={styles.specsContainer}>
                  <div className={styles.specsHeader}>CALIBRATION PARAMETERS</div>
                  <div className={styles.specsList}>
                    {prod.specs.slice(0, 4).map((spec, sIdx) => (
                      <div key={sIdx} className={styles.specItem}>
                        <span className={styles.specLabel}>{spec.label}</span>
                        <span className={styles.specValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Link */}
                <Link href={`/products/${prod.id}`} className={styles.quoteBtn}>
                  <span>More Details & Calibration →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;

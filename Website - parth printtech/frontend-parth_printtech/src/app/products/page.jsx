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

  const categories = ["All", "Shrink Sleeves", "Wrap-Around Labels", "Heat Transfer Labels", "Shrink Film"];

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

          {/* Product Cards Grid */}
          <div className={styles.grid}>
            {filteredProducts.map((prod) => (
              <div key={prod.id} className={`${styles.card} prod-card-reveal`} style={{ "--accent": prod.accentColor }}>

                {/* ── Top: Colored gradient image section ── */}
                <div className={styles.cardImageArea} style={{ background: `linear-gradient(145deg, ${prod.accentColor}22 0%, ${prod.accentColor}44 100%)` }}>
                  {/* Wishlist / badge top-right */}
                  <span className={styles.cardNumBadge}>{prod.num}</span>

                  {/* Product image — floating centered */}
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, 28vw"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;utf8,<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23fafbfc'/><text x='50%' y='50%' font-family='sans-serif' font-size='16' fill='%236c757d' text-anchor='middle'>PARTH PRINTTECH</text></svg>";
                      }}
                    />
                  </div>
                </div>

                {/* ── Bottom: White info panel ── */}
                <div className={styles.cardInfoPanel}>
                  {/* Title */}
                  <h3 className={styles.cardTitle}>{prod.title}</h3>

                  {/* Category chip */}
                  <div className={styles.cardChips}>
                    <span className={styles.cardChip} style={{ color: prod.accentColor, borderColor: prod.accentColor + "55", backgroundColor: prod.accentColor + "11" }}>
                      {prod.category}
                    </span>
                    <span className={styles.cardChip} style={{ color: "#64748b", borderColor: "#e2e8f0" }}>
                      {prod.dim}
                    </span>
                  </div>

                  {/* Short description */}
                  <p className={styles.cardDesc}>{prod.description}</p>

                  {/* CTA row */}
                  <div className={styles.cardCta}>
                    <Link href={`/products/${prod.id}`} className={styles.cardBtn} style={{ backgroundColor: prod.accentColor === "#111111" ? "#1e293b" : prod.accentColor }}>
                      View Details →
                    </Link>
                  </div>
                </div>
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

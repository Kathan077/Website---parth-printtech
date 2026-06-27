"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MarketsWeServe.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Categories Data (8 Items) with CAD Blueprint properties
const categories = [
  {
    id: "pvc-shrink-sleeves",
    num: "01",
    regMark: "REG-PVC-01",
    dim: "Custom Diameter & Height",
    title: "PVC Shrink Sleeves",
    desc: "High-grade PVC shrink sleeve labels offering 360-degree graphics contouring for food, beverage, cosmetics, and household containers.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 2v20M5 7h14M5 17h14" />
      </svg>
    ),
    badge: "360° Graphics",
    bgGradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    accentColor: "#009fe3",
    photo: "/images/products/pvc_shrink_sleeves.png",
    frameShape: "shapeCircle",
    specs: [
      { label: "Substrate", value: "High-Grade PVC Film" },
      { label: "Shrinkage Rate", value: "Up to 50% - 58%" },
      { label: "Print Process", value: "Rotogravure / High-Def Flexo" },
      { label: "Material Thickness", value: "35 to 50 Microns" }
    ]
  },
  {
    id: "petg-shrink-sleeves",
    num: "02",
    regMark: "REG-PETG-02",
    dim: "Custom Contour Fit",
    title: "PETG Shrink Sleeves",
    desc: "Premium eco-friendly polyester shrink sleeves with maximum shrinkage percentage for highly contoured beverage and aerosol bottles.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    badge: "Eco Clarity",
    bgGradient: "linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)",
    accentColor: "#e3007b",
    photo: "/images/products/petg_shrink_sleeves.png",
    frameShape: "shapeWrap",
    specs: [
      { label: "Substrate", value: "Eco-Friendly PETG Polyester" },
      { label: "Shrinkage Rate", value: "Up to 70% - 78% Max" },
      { label: "Print Process", value: "Narrow-Web Gravure / UV Flexo" },
      { label: "Sustainability", value: "100% Recyclable / Low Carbon" }
    ]
  },
  {
    id: "bopp-wrap-around-labels",
    num: "03",
    regMark: "REG-BOPP-03",
    dim: "Roll Format / Cut-and-Stack",
    title: "BOPP Wrap-Around Labels",
    desc: "High-speed roll-fed BOPP wrap-around labels with superior water and scuff resistance, ideal for mineral water and carbonated drinks.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 12h10M12 7v10" />
      </svg>
    ),
    badge: "Waterproof",
    bgGradient: "linear-gradient(135deg, #fefce8 0%, #fef08a 100%)",
    accentColor: "#ffd400",
    photo: "/images/products/bopp_label.png",
    frameShape: "shapeHexagon",
    specs: [
      { label: "Substrate", value: "BOPP (Clear, White, Metallic)" },
      { label: "Film Thickness", value: "35 to 50 Microns" },
      { label: "Print Technology", value: "CI Wide-Web Flexo / Offset" },
      { label: "Adhesive Match", value: "Hot-Melt Glue System Compatible" }
    ]
  },
  {
    id: "heat-transfer-labels",
    num: "04",
    regMark: "REG-HTL-04",
    dim: "Custom Fusion Profile",
    title: "Heat Transfer Labels (HTL)",
    desc: "Dry-fusion decoration labels that permanently bond graphics to plastic containers, creating a seamless, scratch-proof 'no-label' look.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    badge: "Dry Fusion",
    bgGradient: "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)",
    accentColor: "#111111",
    photo: "/images/products/htl_label_rolls.png",
    frameShape: "shapeCad",
    specs: [
      { label: "Carrier Film", value: "Specially Coated PET Carrier" },
      { label: "Ink System", value: "Fully UV Cured / Scratch-Proof" },
      { label: "Fusion Temp", value: "130°C to 180°C" },
      { label: "Application Tech", value: "Heat & Press Fusion Roller" }
    ]
  },
  {
    id: "plain-pvc-shrink-film",
    num: "05",
    regMark: "REG-PVC-05",
    dim: "Custom Roll Width & Length",
    title: "Plain PVC Shrink Film",
    desc: "Premium unprinted PVC shrink film rolls for manual or automated wrapping, offering superior clarity, uniform shrinkage, and strong seals.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    badge: "Plain Film",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    accentColor: "#4f46e5",
    photo: "/images/products/pvc_lamination_films.png",
    frameShape: "shapeWrap",
    specs: [
      { label: "Substrate", value: "Premium Grade Plain PVC" },
      { label: "Shrinkage Rate", value: "Up to 50% - 55%" },
      { label: "Format", value: "Rolls / Centerfold" },
      { label: "Layflat Range", value: "30mm to 600mm" }
    ]
  }
];

// Industries Data (6 Items)
const industries = [
  {
    id: "food-bev",
    name: "Food & Beverage",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    desc: "Eco-kraft squeeze bottles, wet-strength labels, and direct moisture resistant stickers."
  },
  {
    id: "cosmetics",
    name: "Cosmetics & Beauty",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10M2 12h20" />
      </svg>
    ),
    desc: "Chic matte clear laminations, metallic foil seals, and soft-touch textures."
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    desc: "Vial syringes, pharmaceutical batch codes, and tamper-evident vaccine security tags."
  },
  {
    id: "retail",
    name: "Retail",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    desc: "Luxury hang tags, barcode pricing stickers, and adhesive gift seals."
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    desc: "High-temperature components, warning plates, and product asset tracking codes."
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    desc: "Logistical shipping boxes, pallets, inventory stickers, and heavy load transit markers."
  }
];

// Featured Product Showcase Data
const featuredProducts = [
  {
    id: "pvc-shrink-sleeves",
    title: "360° Shrink Graphics",
    desc: "Vibrant, full-body graphics that conform perfectly to complex container geometries without distortion.",
    metric: "360-degree coverage",
    accent: "#009fe3",
    photo: "/images/products/pvc_shrink_sleeves.png"
  },
  {
    id: "petg-shrink-sleeves",
    title: "Eco-Friendly PETG Clarity",
    desc: "Ultra-clear polyester films offering extreme shrinkage profiles and minimal carbon footprint for sustainability.",
    metric: "100% Recyclable Polyester",
    accent: "#e3007b",
    photo: "/images/products/petg_shrink_sleeves.png"
  },
  {
    id: "bopp-wrap-around-labels",
    title: "High-Speed Hot-Melt Dispensing",
    desc: "Tensile-strength biaxially-oriented polypropylene roll-fed labels designed for seamless high-speed Hot-Melt labeling lines.",
    metric: "Zero-tear rotary speed",
    accent: "#ffd400",
    photo: "/images/products/bopp_label.png"
  },
  {
    id: "heat-transfer-labels",
    title: "Permanent Dry-Fusion Finish",
    desc: "Direct decoration fused into plastic packaging with heat and pressure, leaving no sticky residue or label edges.",
    metric: "Chemical & scratch-proof",
    accent: "#111111",
    photo: "/images/products/htl_label_rolls.png"
  },
  {
    id: "plain-pvc-shrink-film",
    title: "Plain PVC Shrink Film Rolls",
    desc: "Super-clear unprinted PVC shrink films offering high dust/humidity protection and low-temperature uniform shrinkage.",
    metric: "High-speed wrap stability",
    accent: "#4f46e5",
    photo: "/images/products/pvc_lamination_films.png"
  }
];

// Why Choose Us Grid
const whyChooseUs = [
  {
    title: "High-Quality Printing",
    desc: "Every order undergoes micro-dot registration validation to match color calibration points.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M22 12h-4M6 12H2M12 2v4M12 18v4" />
      </svg>
    )
  },
  {
    title: "Fast Turnaround",
    desc: "Pre-flight digital approvals processed in hours, with standard orders dispatching in 3–5 business days.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: "Custom Sizes & Shapes",
    desc: "Digital laser die-cut technology creates complex, custom silhouettes without expensive die setups.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    )
  },
  {
    title: "Premium Materials",
    desc: "Direct access to textured cotton linen, transparent vinyls, kraft sheets, and protective laminations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Bulk Order Support",
    desc: "Structured B2B scaling parameters providing significant cost efficiencies for millions of labels.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: "Nationwide Delivery",
    desc: "Logistics configurations synchronized with primary shipping routes to ensure punctual site delivery.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    )
  }
];

// Workflow Steps
const workflowSteps = [
  { step: "01", title: "Choose Product", desc: "Select catalog templates, structural styles, roll setups, or customize labels." },
  { step: "02", title: "Upload Artwork", desc: "Drag and drop your vector design assets (PDF, AI, or EPS) directly to our server." },
  { step: "03", title: "Customize Options", desc: "Select specific substrate materials, grades, size contours, and specialty finishes." },
  { step: "04", title: "Approve Design", desc: "Receive high-fidelity digital proofs calibrated by our pre-flight engineering teams." },
  { step: "05", title: "Print Production", desc: "Your order goes to flexographic or high-capacity digital printing presses." },
  { step: "06", title: "Delivery", desc: "Securely packed rolls or die-cut label sheets ship directly to your site location." }
];

// Success Metrics
const metrics = [
  { id: "orders", target: 10000, suffix: "+", label: "Orders Completed" },
  { id: "clients", target: 2500, suffix: "+", label: "Happy Clients" },
  { id: "sat", target: 99, suffix: "%", label: "Customer Satisfaction" },
  { id: "ind", target: 50, suffix: "+", label: "Industries Served" }
];

// Popular Searches Tags
const popularSearches = [
  "Waterproof Labels",
  "Food Labels",
  "Bottle Stickers",
  "Barcode Labels",
  "QR Labels",
  "Custom Packaging Labels"
];

const PremiumMarketsWeServe = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  // Active chip category
  const [activeChip, setActiveChip] = useState("All");

  // Counter states
  const [counts, setCounts] = useState({
    orders: 0,
    clients: 0,
    sat: 0,
    ind: 0
  });

  const handleChipClick = (categoryName) => {
    setActiveChip(categoryName);
    if (categoryName === "All") {
      setSearchTerm("");
    } else {
      setSearchTerm(categoryName);
    }
  };

  const handleTagClick = (tagName) => {
    setSearchTerm(tagName);
    setActiveChip("All");
  };




  // Entrance reveals and stats count-up trigger using GSAP ScrollTrigger
  useEffect(() => {
    document.title = "Markets We Serve | Parth Printing Technology";

    let ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.fromTo(
        `.heroReveal`,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );

      // Card grids scroll reveals
      gsap.fromTo(
        `.cardReveal`,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.categoriesSection}`,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Industry grids scroll reveals
      gsap.fromTo(
        `.industryReveal`,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.industrySection}`,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Timeline scroll reveal
      gsap.fromTo(
        `.timelineStep`,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.processSection}`,
            start: "top 75%"
          }
        }
      );

      // Active connection lines reveal
      gsap.fromTo(
        `.lineFill`,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: `.${styles.processSection}`,
            start: "top 65%"
          }
        }
      );

      // Metric section count-up triggers
      ScrollTrigger.create({
        trigger: `.${styles.metricsSection}`,
        start: "top 85%",
        onEnter: () => {
          const duration = 2; // Duration of count-up in seconds
          const steps = 60;
          const interval = (duration * 1000) / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            setCounts({
              orders: Math.floor((metrics[0].target / steps) * currentStep),
              clients: Math.floor((metrics[1].target / steps) * currentStep),
              sat: Math.floor((metrics[2].target / steps) * currentStep),
              ind: Math.floor((metrics[3].target / steps) * currentStep)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                orders: metrics[0].target,
                clients: metrics[1].target,
                sat: metrics[2].target,
                ind: metrics[3].target
              });
            }
          }, interval);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Slider navigation
  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmt = 350;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmt : scrollAmt,
        behavior: "smooth"
      });
    }
  };

  // Filter categories grid by search query
  const filteredCategories = categories.filter((cat) => {
    const query = searchTerm.toLowerCase();
    return (
      cat.title.toLowerCase().includes(query) ||
      cat.desc.toLowerCase().includes(query) ||
      cat.badge.toLowerCase().includes(query)
    );
  });

  return (
    <div ref={containerRef} className={styles.pageWrapper}>
      <Navbar />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.radialGlow1}></div>
        <div className={styles.radialGlow2}></div>

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            {/* Left Block: Search & Brand Pitch */}
            <div className={styles.heroContent}>
              <span className={`${styles.badgeLabel} heroReveal`}>
                <span className={styles.blueDot}></span> Premium Print Platform
              </span>
              <h1 className={`${styles.heroTitle} heroReveal`}>
                Markets We Serve & <br />
                <span className={styles.accentText}>Printing Solutions</span>
              </h1>
              <p className={`${styles.heroDesc} heroReveal`}>
                Discover premium, high-performance label printing solutions custom engineered for our markets. From PVC and PETG shrink sleeves to BOPP wrap-arounds and Heat Transfer Labels, we print with absolute precision.
              </p>
            </div>

            {/* Right Block: Floating Modern 3D Label Mockup Cards with Real Photos */}
            <div className={`${styles.heroGraphics} heroReveal`}>
              <div className={styles.graphicsWrapper}>

                {/* Card 1: PVC Sleeve */}
                <div className={`${styles.floatingMockup} ${styles.mockup1}`}>
                  <div className={styles.mockupHeader}>
                    <span className={styles.mockupTag} style={{ color: "#009fe3", backgroundColor: "#e0f2fe" }}>PVC SLEEVE</span>
                    <span className={styles.mockupCode}>REG-PVC-01</span>
                  </div>
                  <div className={styles.mockupPhotoFrame} style={{ borderRadius: "16px", borderTop: "4px solid #009fe3" }}>
                    <Image
                      src="/images/products/pvc_shrink_sleeves.png"
                      alt="PVC Shrink Sleeve"
                      fill
                      sizes="160px"
                      className={styles.mockupPhoto}
                    />
                  </div>
                  <h4 className={styles.mockupTitle}>PVC Shrink Sleeve</h4>
                  <p className={styles.mockupText}>360° Graphic Coverage • 58% Shrink</p>
                </div>

                {/* Card 2: PETG Contoured Sleeve */}
                <div className={`${styles.floatingMockup} ${styles.mockup2}`}>
                  <div className={styles.mockupHeader}>
                    <span className={styles.mockupTag} style={{ color: "#e3007b", backgroundColor: "#fdf2f8" }}>PETG SLEEVE</span>
                    <span className={styles.mockupCode}>REG-PETG-02</span>
                  </div>
                  <div className={styles.mockupPhotoFrame} style={{ borderRadius: "16px", borderBottom: "4px solid #e3007b" }}>
                    <Image
                      src="/images/products/petg_shrink_sleeves.png"
                      alt="PETG Shrink Sleeve"
                      fill
                      sizes="160px"
                      className={styles.mockupPhoto}
                    />
                  </div>
                  <h4 className={styles.mockupTitle}>PETG Contoured Sleeve</h4>
                  <p className={styles.mockupText}>Eco-Friendly Recyclable • 78% Max Shrink</p>
                </div>

                {/* Card 3: BOPP Wrap-Around */}
                <div className={`${styles.floatingMockup} ${styles.mockup3}`}>
                  <div className={styles.mockupHeader}>
                    <span className={styles.mockupTag} style={{ color: "#b28900", backgroundColor: "#fefce8" }}>BOPP WRAP</span>
                    <span className={styles.mockupCode}>REG-BOPP-03</span>
                  </div>
                  <div className={styles.mockupPhotoFrame} style={{ borderRadius: "8px 24px 8px 24px", borderLeft: "4px solid #ffd400", aspectRatio: "16/9" }}>
                    <Image
                      src="/images/products/bopp_label.png"
                      alt="BOPP Wrap-Around Label"
                      fill
                      sizes="200px"
                      className={styles.mockupPhoto}
                    />
                  </div>
                  <h4 className={styles.mockupTitle}>BOPP Wrap-Around</h4>
                  <p className={styles.mockupText}>High-Speed Rotary Roll • Hot-Melt Ready</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Markets We Serve Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Markets We Serve Catalog</span>
            <h2 className={styles.sectionTitle}>Browse Printing Categories</h2>
            <p className={styles.sectionDesc}>Explore our custom layout and structural label profiles engineered to wrap beautifully on any packaging geometry.</p>
          </div>

          {/* Search & Filter Controls */}
          <div className={`${styles.filterContainer} cardReveal`}>
            {/* Large Enterprise-style Search Bar */}
            <div className={styles.filterSearchWrapper}>
              <div className={styles.searchInner}>
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search labels, industries, or materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className={styles.clearBtn} aria-label="Clear search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Quick Chips */}
            <div className={styles.filterChipsContainer}>
              <span className={styles.chipsLabel}>Quick Access:</span>
              <div className={styles.chipsRow}>
                {["All", "Shrink Sleeves", "Wrap-Around Labels", "Heat Transfer Labels", "Shrink Film"].map((name) => {
                  const isActive = (name === "All" && activeChip === "All" && !searchTerm) || activeChip === name;
                  return (
                    <button
                      key={name}
                      onClick={() => handleChipClick(name)}
                      className={`${styles.chipBtn} ${isActive ? styles.chipBtnActive : ""}`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.categoriesGrid}>
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className={`${styles.categoryCard} cardReveal`}
                style={{ "--accent-color": cat.accentColor }}
              >
                {/* Category Visualizer Frame */}
                <div
                  className={styles.imageFrame}
                  style={{ backgroundColor: "#f8fafc", borderColor: cat.accentColor + "30" }}
                >
                  {/* Accent corner tag */}
                  <div className={styles.imageAccentCorner} style={{ backgroundColor: cat.accentColor }}>
                    <span className={styles.imageAccentNum}>{cat.num}</span>
                  </div>

                  {/* Photo with object-fit cover */}
                  <div className={styles.photoCoverWrapper}>
                    <Image
                      src={cat.photo}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 22vw"
                      className={styles.categoryPhoto}
                      priority={cat.id === "pvc-shrink-sleeves" || cat.id === "petg-shrink-sleeves"}
                    />
                    {/* Gradient overlay at bottom */}
                    <div className={styles.photoGradientOverlay} style={{ background: `linear-gradient(to top, ${cat.accentColor}22 0%, transparent 60%)` }}></div>
                  </div>

                  {/* Category badge overlay */}
                  <div className={styles.imageBadgeOverlay} style={{ backgroundColor: cat.accentColor }}>
                    {cat.badge}
                  </div>

                  {/* Icon in corner */}
                  <div className={styles.imageIconCorner} style={{ backgroundColor: cat.accentColor + "20", color: cat.accentColor }}>
                    {cat.icon}
                  </div>
                </div>

                {/* Info blocks */}
                <div className={styles.infoBlock}>
                  <div className={styles.titleRow}>
                    <span className={styles.categoryLabel}>{cat.badge}</span>
                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                  </div>
                  <p className={styles.categoryDesc}>{cat.desc}</p>
                </div>

                {/* Explore Category Link */}
                <Link href={`/contact?subject=Inquiry for ${cat.title}`} className={styles.categoryBtn}>
                  <span>Explore Category &amp; Inquire →</span>
                </Link>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className={styles.emptyResults}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h3>No matching printing solutions found</h3>
              <p>Try searching for general keywords like "BOPP", "Waterproof", "Cosmetics", or click "All" to reset filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Browse by Industry Section */}
      <section className={styles.industrySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Industry Vertical Solutions</span>
            <h2 className={styles.sectionTitle}>Engineered for Every Segment</h2>
            <p className={styles.sectionDesc}>From regulatory compliance markings to premium retail aesthetics, we supply calibrated labels matched to your industry specifications.</p>
          </div>

          <div className={styles.industryGrid}>
            {industries.map((ind) => (
              <div key={ind.id} className={`${styles.industryCard} industryReveal`}>
                <div className={styles.industryIconFrame}>
                  {ind.icon}
                </div>
                <h3 className={styles.industryTitle}>{ind.name}</h3>
                <p className={styles.industryDesc}>{ind.desc}</p>
                <div className={styles.industryLinkBlock}>
                  <Link href={`/contact?subject=Specs for ${ind.name}`} className={styles.industryLink}>
                    View Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Printing Solutions Slider */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sliderHeaderRow}>
            <div className={styles.sliderHeaderLeft}>
              <span className={styles.sectionSubtitle}>Bespoke Formats</span>
              <h2 className={styles.sectionTitle}>Featured Printing Solutions</h2>
            </div>
            
            {/* Slider Navigation Buttons */}
            <div className={styles.sliderArrows}>
              <button onClick={() => slide("left")} className={styles.arrowBtn} aria-label="Slide Left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button onClick={() => slide("right")} className={styles.arrowBtn} aria-label="Slide Right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div ref={sliderRef} className={styles.featuredSlider}>
            {featuredProducts.map((fp) => (
              <div key={fp.id} className={styles.sliderCard} style={{ "--solution-accent": fp.accent }}>
                <div className={styles.sliderVisualArea}>
                  {/* Real product photo */}
                  <div className={styles.sliderPhotoFrame}>
                    <Image
                      src={fp.photo}
                      alt={fp.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 340px"
                      className={styles.sliderPhoto}
                    />
                  </div>
                  {/* Metric badge */}
                  <span className={styles.sliderMetric}>{fp.metric}</span>
                  {/* Accent bar at bottom */}
                  <div className={styles.sliderAccentBar} style={{ backgroundColor: fp.accent }}></div>
                </div>
                <div className={styles.sliderCardInfo}>
                  <h3 className={styles.sliderCardTitle}>{fp.title}</h3>
                  <p className={styles.sliderCardDesc}>{fp.desc}</p>
                  <Link href={`/contact?subject=Quote for ${fp.title}`} className={styles.sliderCardBtn}>
                    <span>Inquire Now</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Our Printing Solutions */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Our Commitments</span>
            <h2 className={styles.sectionTitle}>Precision Printing Standards</h2>
            <p className={styles.sectionDesc}>We combine structural packaging engineering with high-capacity digital output to deliver industry-leading label quality.</p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((wcu, idx) => (
              <div key={idx} className={styles.whyCard}>
                <div className={styles.whyIconWrapper}>
                  {wcu.icon}
                </div>
                <h3 className={styles.whyCardTitle}>{wcu.title}</h3>
                <p className={styles.whyCardDesc}>{wcu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Apple-style Printing Process Timeline */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Seamless Integration</span>
            <h2 className={styles.sectionTitle}>How We Print Your Labels</h2>
            <p className={styles.sectionDesc}>A streamlined design-to-delivery workflow ensuring zero calibration mistakes and rapid B2B dispatch.</p>
          </div>

          {/* Workflow Scroll Horizontal List */}
          <div className={styles.processTimelineContainer}>
            {/* Timeline connectors */}
            <div className={styles.timelineConnectors}>
              <div className={`${styles.lineFill} lineFill`}></div>
            </div>

            <div className={styles.processTimeline}>
              {workflowSteps.map((step, sIdx) => (
                <div key={sIdx} className={`${styles.timelineStep} timelineStep`}>
                  <div className={styles.stepCircle}>
                    <span className={styles.stepNum}>{step.step}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  {sIdx < workflowSteps.length - 1 && (
                    <span className={styles.stepArrow}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Success Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            {metrics.map((metric) => (
              <div key={metric.id} className={styles.metricItem}>
                <div className={styles.metricNumberBlock}>
                  <span className={styles.metricNumber}>
                    {metric.id === "orders" && counts.orders.toLocaleString()}
                    {metric.id === "clients" && counts.clients.toLocaleString()}
                    {metric.id === "sat" && counts.sat}
                    {metric.id === "ind" && counts.ind}
                  </span>
                  <span className={styles.metricSuffix}>{metric.suffix}</span>
                </div>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEO-Optimized Content Section */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoHeader}>
            <span className={styles.sectionSubtitle}>Professional Label Printing & Packaging</span>
            <h2 className={styles.seoTitle}>Custom Label Printing Solutions</h2>
          </div>
          
          <div className={styles.seoGrid}>
            {/* Column 1 */}
            <div className={styles.seoCol}>
              <div className={styles.seoBlock}>
                <h3 className={styles.seoBlockHeading}>Why Quality Labels Matter</h3>
                <p className={styles.seoBlockText}>
                  First impressions are critical. Whether your products sit on retail shelves or navigate complex shipping networks, the quality of your label represents the standard of your brand. As a leading <strong>label manufacturer</strong> and <strong>label supplier</strong>, Parth Printtech provides professional <strong>label printing</strong> that ensures high-contrast barcodes, rich colors, and durable adhesion. High-quality <strong>sticker printing</strong> is not just an aesthetic addition—it is a core component of your product's <strong>packaging labels</strong> and logistical success.
                </p>
              </div>

              <div className={styles.seoBlock}>
                <h3 className={styles.seoBlockHeading}>Label Types We Offer</h3>
                <p className={styles.seoBlockText}>
                  We manufacture a comprehensive array of <strong>custom labels</strong> calibrated for diverse applications. For automatic packaging lines, our <strong>roll labels</strong> offer high-speed compatibility and seamless dispensing. For asset tracking and inventory management, our high-contrast <strong>barcode labels</strong> and <strong>thermal labels</strong> deliver smudge-free clarity. For logistics and dispatch, our pre-cut <strong>shipping labels</strong> are compatible with all major carriers. We also offer waterproof <strong>product labels</strong>, cosmetics stickers, food-safe adhesives, and <strong>custom sticker printing</strong> options tailored to your dimensions.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className={styles.seoCol}>
              <div className={styles.seoBlock}>
                <h3 className={styles.seoBlockHeading}>Industries We Serve</h3>
                <p className={styles.seoBlockText}>
                  Parth Printtech serves a vast range of sectors, providing bespoke labeling solutions for:
                </p>
                <ul className={styles.seoList}>
                  <li><strong>Food & Beverage:</strong> Damp-proof and grease-resistant label options.</li>
                  <li><strong>Cosmetics & Beauty:</strong> Luxury soft-touch laminations and hot foil accents.</li>
                  <li><strong>Healthcare & Pharmaceuticals:</strong> Legible print and tamper-evident vaccine security tags.</li>
                  <li><strong>Retail & Apparel:</strong> Premium product identification and pricing stickers.</li>
                  <li><strong>Logistics & Warehousing:</strong> High-durability shipping labels and barcode prints.</li>
                </ul>
              </div>

              <div className={styles.seoBlock}>
                <h3 className={styles.seoBlockHeading}>Customization Options</h3>
                <p className={styles.seoBlockText}>
                  Every brand is unique, which is why we offer extensive material options and customization capabilities. Choose from waterproof BOPP vinyl, eco-friendly kraft papers, metallic foils, or clear transparent sheets for a "no-label" look. Our printing technologies include high-fidelity Heidelberg offset printing and precision digital printing. You can select custom shapes, sizes, adhesive strengths (permanent, removable, or freezer-grade), and matte or glossy protective laminations.
                </p>
              </div>

              <div className={styles.seoBlock}>
                <h3 className={styles.seoBlockHeading}>Why Choose Our Label Printing Services</h3>
                <p className={styles.seoBlockText}>
                  At Parth Printtech, we integrate state-of-the-art machinery with strict quality checks to ensure your designs are printed with absolute registration and color accuracy. With fast turnaround times, low minimum order quantities, and custom packaging support, we scale from boutique pilot runs to millions of units. We are committed to being your trusted <strong>label supplier</strong>, delivering nationwide logistics and direct bulk pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Popular Searches Section */}
      <section className={styles.searchesSection}>
        <div className={styles.container}>
          <div className={styles.searchesBox}>
            <span className={styles.searchesTitle}>Popular Searches:</span>
            <div className={styles.searchesList}>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={styles.searchTag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaCircularGlow}></div>
            <div className={styles.ctaCardBorder}></div>

            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Create Your Custom Labels?</h2>
              <p className={styles.ctaDesc}>
                Whether you need high-capacity roll labels for automation, transparent luxury seals, or compliance barcode layouts, our engineering team is here to check your vector dimensions and print.
              </p>
              
              <div className={styles.ctaButtons}>
                <button onClick={() => { setActiveChip("All"); setSearchTerm(""); }} className={styles.ctaBtnPrimary}>
                  Browse Products
                </button>
                <Link href="/contact?subject=Quote Request" className={styles.ctaBtnSecondary}>
                  Request Quote
                </Link>
                <Link href="/contact?subject=Design Specs" className={styles.ctaBtnOutline}>
                  Design Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumMarketsWeServe;

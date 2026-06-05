"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Grid */}
        <div className={styles.grid}>
          
          {/* Column 1: Brand details with Logo image */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Link href="/" className={styles.logoLink}>
                <div className={styles.logoIconWrapper}>
                  <Image
                    src="/images/logo.png"
                    alt="Parth Printtech Logo"
                    className={styles.logoImageRaw}
                    width={72}
                    height={72}
                    priority
                  />
                </div>
                <div className={styles.logoText}>
                  <span className={styles.logoParth}>PARTH</span>
                  <span className={styles.logoPrinttech}>PRINTTECH LLP</span>
                </div>
              </Link>
            </div>
            <p className={styles.brandDesc}>
              Architects of custom packaging prototypes and high-precision offset commercial printing. Delivering premium duplex cartons, labels, and corrugated shipping solutions globally.
            </p>
            {/* CMYK Registration marks decoration */}
            <div className={styles.registrationMarks}>
              <span className={`${styles.regDot} ${styles.cyan}`}></span>
              <span className={`${styles.regDot} ${styles.magenta}`}></span>
              <span className={`${styles.regDot} ${styles.yellow}`}></span>
              <span className={`${styles.regDot} ${styles.key}`}></span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>About Us</Link>
              </li>
              <li>
                <Link href="/products" className={styles.link}>Products</Link>
              </li>
              <li>
                <Link href="/career" className={styles.link}>Careers</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products / Offerings */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linksList}>
              <li>
                <span className={styles.staticLink}>Folding Mono Cartons</span>
              </li>
              <li>
                <span className={styles.staticLink}>Corrugated Packaging</span>
              </li>
              <li>
                <span className={styles.staticLink}>Rigid Luxury Boxes</span>
              </li>
              <li>
                <span className={styles.staticLink}>Product Labels & Rolls</span>
              </li>
              <li>
                <span className={styles.staticLink}>Flexible Packaging Pouches</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210" className={styles.contactLink}>+91 98765 43210</a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@parthprinttech.com" className={styles.contactLink}>info@parthprinttech.com</a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className={styles.contactText}>
                  Plot No. 124, Industrial Area, Phase-1, G.I.D.C., Gujarat, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <hr className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyText}>
            © {new Date().getFullYear()} Parth Printtech LLP. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bullet}>•</span>
            <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

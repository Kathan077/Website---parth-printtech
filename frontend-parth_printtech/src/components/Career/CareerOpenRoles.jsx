"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CareerOpenRoles.module.css";

gsap.registerPlugin(ScrollTrigger);

const allRoles = [
  {
    id: "1",
    title: "Senior Print Production Technician",
    dept: "Production",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "4–7 yrs",
    isNew: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: "2",
    title: "Packaging Design Engineer",
    dept: "Design",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "2–5 yrs",
    isNew: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
      </svg>
    ),
  },
  {
    id: "3",
    title: "Quality Control & Inspection Lead",
    dept: "QC",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "3–6 yrs",
    isNew: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    id: "4",
    title: "Sales Executive – Print & Packaging",
    dept: "Sales",
    location: "Gujarat / Remote",
    type: "Full-time",
    experience: "2–4 yrs",
    isNew: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
  },
  {
    id: "5",
    title: "Offset Press Operator",
    dept: "Production",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "3–8 yrs",
    isNew: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    id: "6",
    title: "Graphic Design Specialist (Pre-press)",
    dept: "Design",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "1–3 yrs",
    isNew: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: "7",
    title: "Supply Chain & Procurement Manager",
    dept: "Operations",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "5–9 yrs",
    isNew: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: "8",
    title: "HR & Talent Acquisition Executive",
    dept: "HR",
    location: "Gujarat, India",
    type: "Full-time",
    experience: "1–3 yrs",
    isNew: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "9",
    title: "Junior Sales Intern – B2B",
    dept: "Sales",
    location: "Remote",
    type: "Internship",
    experience: "0–1 yr",
    isNew: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
];

const departments = ["All", "Production", "Design", "QC", "Sales", "Operations", "HR"];

const CareerOpenRoles = ({ onSelectRole }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  const filteredRoles =
    activeFilter === "All"
      ? allRoles
      : allRoles.filter((r) => r.dept === activeFilter);

  const getCount = (dept) =>
    dept === "All" ? allRoles.length : allRoles.filter((r) => r.dept === dept).length;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".roles-header",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".roles-header", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="open-roles">
      <div className={styles.blueprintOverlay}></div>
      <div className={styles.container}>
        <div className={`${styles.header} roles-header`}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>
              Open <span className={styles.accentText}>Roles</span>
            </h2>
            <span className={styles.roleCount}>
              <span className={styles.roleCountNum}>{filteredRoles.length}</span> position{filteredRoles.length !== 1 ? "s" : ""} available
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterRow}>
          {departments.map((dept) => (
            <button
              key={dept}
              className={`${styles.filterBtn} ${activeFilter === dept ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(dept)}
              id={`career-filter-${dept.toLowerCase()}`}
            >
              {dept}
              <span className={styles.filterCount}>{getCount(dept)}</span>
            </button>
          ))}
        </div>

        {/* Roles List */}
        <div className={styles.rolesList}>
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <div key={role.id} className={styles.roleCard} id={`role-card-${role.id}`}>
                <div className={styles.roleLeft}>
                  <div className={styles.roleIconBox}>{role.icon}</div>
                  <div className={styles.roleInfo}>
                    <span className={styles.roleTitle}>{role.title}</span>
                    <div className={styles.roleMeta}>
                      <span className={styles.roleMetaItem}>
                        <svg className={styles.metaIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {role.location}
                      </span>
                      <span className={styles.roleMetaItem}>
                        <svg className={styles.metaIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {role.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.tagList}>
                  <span className={styles.tag + " " + styles.tagDept}>{role.dept}</span>
                  <span className={styles.tag + " " + styles.tagType}>{role.type}</span>
                  {role.isNew && <span className={styles.tag + " " + styles.tagNew}>New</span>}
                </div>

                <a
                  href="#career-apply"
                  className={styles.applyBtn}
                  id={`apply-btn-${role.id}`}
                  onClick={() => onSelectRole && onSelectRole(role.title)}
                >
                  Apply Now
                  <svg className={styles.applyBtnIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No roles found in this category currently. Check back soon.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerOpenRoles;

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

// Yeh ek chota sa component hai jo numbers ko animate karega
const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Left Side: Text and Stats */}
        <div className={styles.textContent}>
          <span className={styles.badge}>LeadsEdge BPO</span>
          <h1 className={styles.heading}>
            Your Trusted Partner for Premium Leads & Peak Performance.
          </h1>
          <p className={styles.description}>
            We help businesses scale with qualified leads, efficient operations, and round-the-clock support. Our experienced team focuses on performance, compliance, and measurable ROI.
          </p>

          <div className={styles.btnGroup}>
            <Link href="#contact" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="#services" className={styles.secondaryBtn}>
              Explore Services
            </Link>
          </div>

          {/* Animated Stats Section */}
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <h3 className={styles.statNumber}>
                <Counter end={500} duration={2000} suffix="+" />
              </h3>
              <p className={styles.statText}>Large-Scale Workforce</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statBox}>
              <h3 className={styles.statNumber}>
                <Counter end={10} duration={2000} suffix="K+" />
              </h3>
              <p className={styles.statText}>High-Volume Transfers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Premium Rounded Image (From Screenshot Vibe) */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium BPO Services" 
              className={styles.image}
            />
            {/* Design Elements (Dotted Circles like Leadcrest) */}
            <div className={styles.circleDecoration}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
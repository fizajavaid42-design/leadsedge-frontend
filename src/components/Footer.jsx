"use client"; 

import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { useState, useEffect } from 'react'; // Hooks import kiye

export default function Footer() {
  // Shuru mein year empty rakha hai
  const [currentYear, setCurrentYear] = useState("");

  // useEffect sirf client (browser) par chalta hai
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand Section */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            Leads<span style={{ color: 'var(--accent-blue)' }}>Edge</span>
          </Link>
          <p className={styles.description}>
            Your premium AI-powered BPO partner. We help businesses scale through expert telemarketing and automated solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksGroup}>
          <h3 className={styles.title}>Company</h3>
          <Link href="#about" className={styles.link}>About Us</Link>
          <Link href="#services" className={styles.link}>Services</Link>
          <Link href="#contact" className={styles.link}>Contact</Link>
        </div>

        {/* Legal */}
        <div className={styles.linksGroup}>
          <h3 className={styles.title}>Legal</h3>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
<Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} LeadsEdge. All rights reserved. Built by Fiza.
      </div>
    </footer>
  );
}
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      {/* Logo Area */}
      <Link href="/" className={styles.logo}>
        Leads<span style={{ color: 'var(--accent-blue)' }}>Edge</span>
      </Link>
      
      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <Link href="#services" className={styles.link}>Services</Link>
        <Link href="#about" className={styles.link}>About Us</Link>
        <Link href="#contact" className={styles.link}>Contact</Link>
      </nav>

      {/* Call to Action Button */}
      <Link href="#contact" className={styles.btn}>
        Book A Free Call
      </Link>
    </header>
  );
}
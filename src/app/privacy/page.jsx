import styles from '../../styles/Legal.module.css'; // <-- Yeh line change karni hai
import Link from 'next/link';
export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>
        
        <h1 className={styles.title}>Privacy Policy</h1>
        <span className={styles.date}>Last Updated: October 2026</span>

        <h2 className={styles.heading}>1. Information We Collect</h2>
        <p className={styles.text}>
          We collect information you provide directly to us when you fill out the contact form on our website. This includes your full name, email address, phone number, and any details provided in your message.
        </p>

        <h2 className={styles.heading}>2. How We Use Your Information</h2>
        <p className={styles.text}>
          The information collected is strictly used to communicate with you regarding your project inquiries, provide customer support, and improve our BPO services. We do not sell your personal data to third parties.
        </p>

        <h2 className={styles.heading}>3. Data Security</h2>
        <p className={styles.text}>
          We implement industry-standard security measures, including secure databases and encrypted connections, to protect your personal information from unauthorized access or disclosure.
        </p>
      </div>
    </div>
  );
}
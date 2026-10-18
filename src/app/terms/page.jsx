import styles from '../../styles/Legal.module.css'; // <-- Yeh line change karni hai
import Link from 'next/link';
export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>
        
        <h1 className={styles.title}>Terms of Service</h1>
        <span className={styles.date}>Last Updated: October 2026</span>

        <h2 className={styles.heading}>1. Acceptance of Terms</h2>
        <p className={styles.text}>
          By accessing and using the LeadsEdge website and services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className={styles.heading}>2. Service Description</h2>
        <p className={styles.text}>
          LeadsEdge provides premium BPO solutions including inbound/outbound sales, customer support, and lead generation. We reserve the right to modify or discontinue any service with or without notice.
        </p>

        <h2 className={styles.heading}>3. User Responsibilities</h2>
        <p className={styles.text}>
          Users agree to provide accurate and complete information when using our contact forms. Any misuse of the website or attempt to breach security will result in immediate termination of services.
        </p>
      </div>
    </div>
  );
}
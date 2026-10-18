import styles from '../styles/WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.subtitle}>Why Partner With Us</span>
          <h2 className={styles.title}>Bridging Premium Leads And Scalable Conversions.</h2>
        </div>

        {/* 3-Column Text Section */}
        <div className={styles.textGrid}>
          <div className={styles.featureItem}>
            <p className={styles.featureDesc}>
              • We focus exclusively on quality prospects. Our team meticulously designs a data driven outreach system that delivers highly interested inbound and outbound traffic, ensuring your sales pipeline stays loaded with premium, verified opportunities.
            </p>
          </div>
          
          <div className={styles.featureItem}>
            <p className={styles.featureDesc}>
              • Maximum speed and minimum wait times define our services. We combine premium dialing infrastructure with highly trained professionals who maximize every connection giving your brand an unmatched seamless customer experience.
            </p>
          </div>

          <div className={styles.featureItem}>
            <p className={styles.featureDesc}>
              • Growth is nothing without security. We run strict, real time quality assurance and compliance audits to protect your business, while relentlessly optimizing your campaign data to squeeze out the highest possible ROI.
            </p>
          </div>
        </div>

        {/* 3-Images Gallery Section */}
        <div className={styles.imageGrid}>
         <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
            alt="Call Center Agents" 
            className={styles.gridImage} 
          />
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
            alt="Corporate Team Meeting" 
            className={styles.gridImage} 
          />
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
            alt="Data Analytics" 
            className={styles.gridImage} 
          />
        </div>

      </div>
    </section>
  );
}
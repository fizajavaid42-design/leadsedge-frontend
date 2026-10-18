import styles from '../styles/Services.module.css';
import { Headset, TrendingUp, Bot, Users } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Inbound & Outbound Sales",
      description: "Convert leads into loyal customers with our expert telemarketing sales team.",
      icon: <TrendingUp size={28} />
    },
    {
      id: 2,
      title: "Customer Support (24/7)",
      description: "Provide seamless, round-the-clock support to enhance your customer experience.",
      icon: <Headset size={28} />
    },
    {
      id: 3,
      title: "AI Automation Solutions",
      description: "Integrate smart AI chatbots and automated workflows to reduce operational costs.",
      icon: <Bot size={28} />
    },
    {
      id: 4,
      title: "Lead Generation",
      description: "High-quality, targeted lead generation campaigns to grow your sales pipeline.",
      icon: <Users size={28} />
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.sectionHeader}>
        <span className={styles.subtitle}>Our Expertise</span>
        <h2 className={styles.title}>Solutions That Drive Growth</h2>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
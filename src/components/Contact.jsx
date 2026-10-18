"use client";

import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  // Form ke data ko save karne ke liye state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // Success ya error message dikhane ke liye

  // Jab user type kare toh state update ho
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Jab form submit ho
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Live FastAPI backend par data bhejna (Link Updated)
      const response = await fetch("https://leadsedge-backend-topaz.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! We will contact you soon.");
        // Form clear karna
        setFormData({ full_name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error connecting to the server.");
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        
        {/* Left Side: Contact Information */}
        <div className={styles.contactInfo}>
          <div>
            <span className={styles.subtitle}>Get In Touch</span>
            <h2 className={styles.title}>Ready to Scale Your Business?</h2>
            <p className={styles.description}>
              Fill out the form and our team will get back to you within 24 hours to discuss how LeadsEdge can help you grow.
            </p>
          </div>

          <div className={styles.infoItem}>
            <Mail className={styles.icon} size={24} />
            <span>hello@leadsedge.com</span>
          </div>
          <div className={styles.infoItem}>
            <Phone className={styles.icon} size={24} />
            <span>+1 (800) 123-4567</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin className={styles.icon} size={24} />
            <span>123 Business Avenue, Tech Park</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input 
              type="text" 
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className={styles.input} 
              placeholder="John Doe" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input} 
              placeholder="john@company.com" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input} 
              placeholder="+1 (555) 000-0000" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>How can we help?</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea} 
              placeholder="Tell us about your project..." 
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
          
          {/* Status Message */}
          {status && <p style={{ color: status.includes("success") ? "green" : "red", marginTop: "10px", fontWeight: "bold" }}>{status}</p>}
        </form>

      </div>
    </section>
  );
}
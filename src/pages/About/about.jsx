import React from "react";
import { useEffect } from "react";

import "./about.css";

// Image imports
import bac from "../../assets/About/bac.png";
import m1 from "../../assets/About/man1.png";
import gst from "../../assets/About/gst.png";
import frc from "../../assets/About/frc.png";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in, .fade-up, .slide-left, .slide-right, .zoom-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* HERO (same as reference top section) */}
      <section className="about-hero zoom-in">
        <img src={bac} alt="About Us" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Trusted • Global • Excellance.</p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview fade-up">
        <div className="overview-text slide-left">
          <h2>valmik CHAUDHARY</h2>
          <span className="text-muted fw-medium fw-bolder fs-5 ">
            CEO
          </span>
          <p>
            My journey in the import–export industry is driven by a strong commitment to quality, consistency, and trust across global markets. I specialize in exporting a diverse range of products, including jaggery, jaggery powder, tea powder, coconut, turmeric powder, and premium textile products such as Solapuri blankets and towels. In addition, I supply reliable construction materials including construction nails, roofing nails, and binding nails, ensuring durability and adherence to international specifications.
Every product is carefully sourced, processed, and packaged to meet global quality standards and customer expectations. My focus has always been on maintaining transparent trade practices, timely deliveries, and building long-term partnerships worldwide. Through consistent performance and strict compliance with international trade norms, I aim to deliver value-driven solutions and establish a reputation rooted in reliability and excellence.
          </p>
        </div>

        <div className="overview-image slide-right hover-zoom">
          <img src={m1} alt="founder" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story-section fade-up">
        <h2 className="our-story-title">Our Story</h2>

        <p className="our-story-text">
          Our journey in the import–export industry is built on a strong commitment to delivering quality, consistency, and trust across global markets. With a diversified portfolio spanning agro-based products, textile goods, and construction materials, we connect India’s rich production strengths with international demand through transparent, reliable, and ethical trade practices.
        </p>

        <p className="our-story-text">
          Our agro-product range includes jaggery, jaggery powder, tea powder, coconut, and turmeric powder, carefully sourced from trusted producers to ensure natural quality, purity, and compliance with international food standards. In the textile segment, we specialize in Solapuri blankets and towels, reflecting India’s traditional craftsmanship combined with modern quality expectations. Additionally, our construction product line—construction nails, roofing nails, and binding nails—is supplied to meet the durability and performance requirements of global infrastructure projects.

          From sourcing to final shipment, every stage of our operations is guided by strict quality control measures and adherence to export regulations. We work closely with reliable suppliers, logistics partners, and international clients to ensure that each product meets precise specifications and industry standards. Our focus on long-term partnerships, transparency, and operational excellence continues to drive sustainable growth and reinforce our reputation as a dependable global trade partner.
        </p>
      </section>

     

      {/* what sets us apart */}
      <section className="towel-features-section fade-in">
        <h2 className="features-title">What Sets Us Apart</h2>
        <p className="features-subtitle">
          Delivering reliability, compliance, and long-term value across
          international markets.
        </p>

        <div className="features-grid">
          <div className="feature-card zoom-in">
            <div className="feature-icon">✔️</div>
            <h3>Trusted Quality</h3>
            <p>
              Consistently delivering internationally benchmarked standards
              through rigorous checks, reliability, and long-term trade
              excellence.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🌍</div>
            <h3>Global Compliance</h3>
            <p>
              Ensuring full adherence to international trade regulations, export
              documentation, and globally accepted logistics practices.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">🔄</div>
            <h3>Versatile Solutions</h3>
            <p>
              Providing flexible sourcing, packaging, and delivery solutions
              tailored to diverse international business requirements.
            </p>
          </div>

          <div className="feature-card zoom-in">
            <div className="feature-icon">📦</div>
            <h3>Export Quality</h3>
            <p>
              Meeting global buyer expectations with export-grade handling,
              secure packaging, and premium shipment presentation.
            </p>
          </div>
        </div>
      </section>
{/* -----------------------------------------prathmesh deasie------------------------------------------- */}
     {/* ================= CERTIFICATIONS SECTION ================= */}

<section className="cert-section">
  <div className="cert-container">
    
    <div className="cert-header">
      <h2>Our Certifications</h2>
      <p>
        We are a legally registered export company committed to quality,
        transparency, and global compliance.
      </p>
    </div>

    <div className="cert-grid">

      {/* GST Certificate */}
      <div className="cert-card">
        <img src={gst} alt="GST Certificate" />
        <div className="cert-content">
          <h3>GST Registration Certificate</h3>
          <p>
            Official Goods & Services Tax registration confirming
            our business compliance in India.
          </p>
        </div>
      </div>

      {/* IEC Certificate */}
      <div className="cert-card">
        <img src={frc} alt="IEC Certificate" />
        <div className="cert-content">
          <h3>Import Export Code (IEC)</h3>
          <p>
            Government-issued Import Export Code authorizing us
            to conduct international trade operations.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* VISION / MISSION / QUALITY */}
      <section className="about-pillars">
        <div className="pillar-card fade-up hover-card">
          <h3>Our Vision</h3>
          <p>
            To become a globally trusted trade partner, recognized for
            integrity, transparency, and long-term business value.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable import–export solutions while maintaining
            ethical practices, efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="pillar-card fade-up hover-card">
          <h3>Our Commitment to Quality</h3>
          <p>
            Ensuring every shipment meets international standards through strict
            quality control and compliance processes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;

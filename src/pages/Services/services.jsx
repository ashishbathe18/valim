import React from "react";
import "./services.css";
import nsdl from "../../assets/services/nsdl.png";
import card from "../../assets/services/card.png";

function Services() {

  const services = [
    {
      title: "GST Registration & Return",
      desc: "Complete GST registration and monthly return filing services with expert compliance support for businesses."
    },
    {
      title: "Income Tax Return Filing",
      desc: "Professional ITR filing for salaried individuals, businesses and freelancers with full documentation support."
    },
    {
      title: "PTEC & PTRC Registration",
      desc: "Professional tax enrollment and registration for businesses and employees."
    },
    {
      title: "Shop Act & Udyam Registration",
      desc: "Register your business legally under Shop Act and MSME Udyam registration."
    },
    {
      title: "IEC Import Export Code",
      desc: "Get Import Export Code registration for international trading and export business."
    },
    {
      title: "APEDA - RCMC Registration",
      desc: "Agricultural export certification and registration for global trade compliance."
    },
    {
      title: "FSSAI Food Licence",
      desc: "Food license registration for restaurants, food manufacturers and traders."
    },
    {
      title: "Accounting & Book Keeping",
      desc: "Professional accounting and financial record management for businesses."
    },
    {
      title: "Partnership Deed",
      desc: "Legal partnership deed drafting and documentation services."
    }
  ];

  return (

    <div className="services-page">

      {/* Header */}
     {/* Header */}

<div className="services-header">

  <div className="header-left">

    <h4 className="header-tag">Our Professional Services</h4>

    <h1>
      Tax & Business <span>Consultancy</span>
    </h1>

    <p>
      Chaudhary & Co. provides reliable tax consultancy and 
      government registration services for individuals,
      startups and businesses with expert compliance support.
    </p>

  

  </div>

  <div className="header-right">

    <div className="nsdl-box">
      <img src={nsdl} alt="NSDL" />
      <p className="nsdl-text">Authorized PAN Card Service Center</p>
    </div>

  </div>

</div>

      {/* VISITING CARD IMAGE */}

      <div className="visiting-card-section">

        <h2>Our Official Service Center</h2>

        <div className="card-image-box">
          <img src={card} alt="Chaudhary & Co Visiting Card"/>
        </div>

      </div>

      {/* PAN CARD SERVICE */}

      <div className="pan-service">

        <h2>PAN CARD Services</h2>

        <div className="pan-cards">

          <div className="pan-box">
            <h3>PAN Card Apply</h3>
            <p>New PAN card application through NSDL authorized center.</p>
          </div>

          <div className="pan-box">
            <h3>PAN Correction</h3>
            <p>Correction in name, DOB, photo or signature in PAN card.</p>
          </div>

          <div className="pan-box">
            <h3>Duplicate PAN</h3>
            <p>Reissue of lost or damaged PAN card quickly.</p>
          </div>

        </div>

      </div>

      {/* SERVICES GRID */}

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">✓</div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

          </div>

        ))}

      </div>

      {/* CONTACT CTA */}

      <div className="service-cta">

        <h2>Need Professional Assistance?</h2>

        <p>
          Contact Chaudhary & Co. for trusted tax consultancy
          and government registration services.
        </p>

        <a href="/contact" className="service-btn">
          Contact Now
        </a>

      </div>

    </div>
  );
}

export default Services;
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="custom-footer mt-4">
      <div className="container">
        <div className="row">

          {/* ABOUT */}
          <div className="col-md-2 footer-col"style={{marginRight:"120px"}}>  {/* Address */}
            <h5 className="footer-title">
              <span className="icon-circle">◎</span> Address
            </h5>
            <p className="fw-bold">
             CHAUDHARY AND CO.
           Company Location (Full Address) : 1st FLOOR, BHUJBAL COMPLEX, BEHIND – IRON PARADISE GYM, TALEGAON ROAD, SHIRKRAPUR, TA. SHIRUR, DIST. PUNE - 412208
              {/* 203 Fake St. Mountain View,<br />
              San Francisco, California,<br />
              USA */}
            </p>
            <p>📞 +91-9607483143</p>
            <p className="email">✉ chaudharyandcom@gmail.com </p>

            
          </div>

          {/* LATEST NEWS */}
          <div className="col-md-2 footer-col"style={{marginRight:"30px"}}>  {/* Latest Updates */}
            <h5 className="footer-title">
              <span className="icon-circle">📰</span> Latest Updates
            </h5>

            <div className="news-item">
              <img src="https://picsum.photos/60/60?1" alt="" />
              <div>
                <p>Delivering powders and vegitables products to international markets with trusted quality.</p>
                <small>jan 19,2025</small>
              </div>
            </div>

            <div className="news-item">
              <img src="https://picsum.photos/60/60?2" alt="" />
              <div>
                <p>Ensuring export-grade standards, secure packaging, and on-time shipments worldwide.</p>
                <small>jan 19,2025</small>
              </div>
            </div>
          </div>

          {/* INFORMATION */}
        <div className="col-md-2 footer-col"style={{marginRight:"20px"}}>  {/* Quick Links */}
            <h5 className="footer-title">
              <span className="icon-circle">📄</span> Quick Links
            </h5>
            <ul className="footer-links fw-bold">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/products">Products</Link></li>
  <li><Link to="/services">services</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
          </div>

          {/* INSTAGRAM */}
          <div className="col-md-2 footer-col" style={{marginRight:"30px"}}>  {/* Instagram */}
            <h5 className="footer-title">
              <span className="icon-circle">📸</span> Instagram
            </h5>
            <div className="insta-grid">
              {[1,2,3,4,5,6].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/100/100?${i}`}
                  alt=""
                />
              ))}
            </div>
          </div>
          {/* FOLLOW US */}
<div className="col-md-2 footer-col">  {/* Follow Us */}
  <h5 className="footer-title">
    <span className="icon-circle">🌐</span> Follow Us
  </h5>

  <div className="social-icons">

    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>

    <a 
      href="https://www.facebook.com/profile.php?id=100054382816639" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>

    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>

    <a 
      href="https://www.linkedin.com/in/valmik-chaudhary-a351b34b/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>

  </div>
</div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

/* ===== HERO IMAGES ===== */
import ash1 from "../../assets/Homes/ash1.png";
import ash2 from "../../assets/Homes/ash2.png";
import ash3 from "../../assets/Homes/ash3.png";
import back from "../../assets/Homes/back.png";

/* ===== HOME ASSETS ===== */
import bowel from "../../assets/Homes/bowel.png";
import lunch from "../../assets/Homes/lunch.png";
import tatali from "../../assets/Homes/tatali.png";
import images from "../../assets/Homes/images.png";


import ashw from "../../assets/Homes/ashw.png";
import moriga from "../../assets/Homes/moriga.png";
import term from "../../assets/Homes/term.png";
import gandha from "../../assets/Homes/gandha.png"

import right from "../../assets/Homes/right.png";
import left from "../../assets/Homes/left.png";


// dish
import dish from "../../assets/Homes/dish.png";
import dish1 from "../../assets/Homes/dish1.png";
import dish2 from "../../assets/Homes/dish2.png";
import dish3 from "../../assets/Homes/dish3.png";
import dish4 from "../../assets/Homes/dish4.png";
import dish5 from "../../assets/Homes/dish5.png";
import dish6 from "../../assets/Homes/dish6.png";
import dish7 from "../../assets/Homes/dish7.png";
import dish8 from "../../assets/Homes/dish8.png";
import dish9 from "../../assets/Homes/dish9.png";
const heroImages = [ash1, ash2, ash3, back];

function Home() {
  useEffect(() => {
    document.title = "CHAUDHARY AND CO. | VEGETABLE PRODUCT Exporter";
  }, []);

  const [current, setCurrent] = useState(0);

  /* ===== AUTO SLIDER ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="hero-section ">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-image ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h6>Trusted Export Partner</h6>

          <h1 className="title">CHAUDHARY AND CO.</h1>

          <p>
            Delivering high-quality agricultural products, consistency,
            and global standards.
          </p>

          <Link to="/about">
            <button className="home-btn secondary">Read More</button>
          </Link>
        </div>
      </header>

      {/* ===== ABOUT COMPANY ===== */}
      <section className="about-home">
        <div className="container text-center">
          <h2>ABOUT CHAUDHARY AND CO.</h2>
          <p>
            CHAUDHARY AND CO. is dedicated to providing high-quality vegetarian
            products made with purity and care. We believe in offering healthy,
            fresh, and completely plant-based food options for our customers.
            Our commitment is to maintain hygiene, authenticity, and great taste
            in every product. With a focus on quality and customer satisfaction,
            we strive to bring nutritious vegetarian choices to every home.
          </p>
        </div>
      </section>

      {/* ===== FEATURE SECTION ===== */}
      <section className="feature-section">
        <div className="feature-box"style={{marginLeft:"35px"}}>
          <img src={bowel} alt="Plant Based" className="feature-img" />
          <p>Largest range of plant-based ingredients for foodservice.</p>
        </div>

        <div className="feature-box"style={{marginLeft:"35px"}}>
          <img src={lunch} alt="Trusted Chefs" className="feature-img" />
          <p>Trusted by thousands of chefs and caterers.</p>
        </div>

        <div className="feature-box"style={{marginLeft:"35px"}}>
          <img src={tatali} alt="Secure Payment" className="feature-img" />
          <p>Checkout instantly by card or apply for a credit account.</p>
        </div>
      </section>
      
<section className="export-section">
  <div className="export-container">

    {/* Left Image */}
    <div className="export-image-wrapper">
      <img src={images} alt="Farmer Field" className="export-image" />

    

      
    </div>

    {/* Right Content */}
    <div className="export-content">
      <p className="export-tagline">From India to the World</p>
      <h2>Trusted Export Solutions</h2>

      <div className="export-badges">
        <div className="export-badge">✔ Trusted Quality</div>
        <div className="export-badge">✔ Global Reach</div>
      </div>

      <p className="export-highlight">
        Delivering premium spices, textiles, and fresh produce with assured
        quality and global standards.
      </p>

      <p className="export-description">
        We specialize in delivering premium products that meet international
        standards with authenticity and reliability.
      </p>

      <div className="export-shipment">
        <div>📦</div>
        <h3>Every shipment carries our promise of excellence</h3>
      </div>

      <button className="export-btn">Discover more</button>
    </div>

  </div>
</section>
{/* ===== PORTFOLIO SECTION ===== */}
<section className="portfolio-section">
  <div className="portfolio-header">
    <p className="portfolio-tag">Our Portfolio</p>
    <h2>From Indian Farms & Mills to Global Markets</h2>
    <p className="portfolio-sub">
      Explore our key export categories — towels, spices, fruits, and vegetables.
    </p>
  </div>

  <div className="portfolio-grid">
    
    {/* CARD 1 */}
    <div className="portfolio-card">
      <img src={ashw} alt="Towels" />
      <div className="portfolio-content">
        <span className="category">TOWELS</span>
        <h3>Terry Towels</h3>
        <p>
          Soft, absorbent, export-grade towels for healthcare,
          hospitality & retail.
        </p>
        <button className="portfolio-btn"style={{marginBottom:"7px"}}>Explore</button>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="portfolio-card">
      <img src={moriga} alt="Spices" />
      <div className="portfolio-content">
        <span className="category">SPICES</span>
        <h3>Moringa Powder</h3>
        <p>
          It is rich in vitamins, minerals, and antioxidants and is commonly used in food
        </p>
        <button className="portfolio-btn"style={{marginTop:"19px"}}>Explore</button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="portfolio-card">
      <img src={term} alt="Fruits" />
      <div className="portfolio-content">
        <span className="category">SPICES</span>
        <h3>Turmeric Fingers & Powder</h3>
        <p>
         Premium Salem & Nizam turmeric – culinary,
          pharma & cosmetic use.
        </p>
        <button className="portfolio-btn">Explore</button>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="portfolio-card">
      <img src={gandha} alt="Vegetables" />
      <div className="portfolio-content">
        <span className="category">SPICES</span>
        <h3>Ashwagandha Powder</h3>
        <p>
          Ayurvedic medicine for improving strength, reducing stress, and supporting overall health.
        </p>
        <button className="portfolio-btn ">Explore</button>
      </div>
    </div>

  </div>
</section>
{/* ================= PROMO BANNER SECTION ================= */}

<section className="promo-section">
  <div className="promo-container">

    {/* RIGHT CARD */}
    <div
      className="promo-card"
      style={{ backgroundImage: `url(${left})` }}
    >
      <div className="promo-overlay"></div>
      <div className="promo-content">
        <p className="promo-sub">Nature’s Freshest Harvest</p>
        <h2>Carefully processed natural powders for a healthier lifestyle</h2>
      
      </div>
    </div>

    {/* LEFT CARD */}
    <div
      className="promo-card"
      style={{ backgroundImage: `url(${right})` }}
    >
      <div className="promo-overlay"></div>
      <div className="promo-content">
        <p className="promo-sub">Healthy Harvest </p>
        <h2>Healthy, hygienic, and naturally cultivated vegetables.</h2>
      
      </div>
    </div>


  </div>
</section>
{/* ================= RECIPES SECTION ================= */}

<section className="recipes-section">
  <div className="recipes-wrapper">

    {/* LEFT CAROUSEL */}
    <div className="recipes-carousel left">
      <div className="carousel-track">
        <img src={dish} alt="" />
        <img src={dish2} alt="" />
        <img src={dish1} alt="" />
        <img src={dish6} alt="" />
        <img src={dish7} alt="" />
      </div>
    </div>

    {/* CENTER CONTENT */}
    <div className="recipes-content">
      <h2>Vegetables And Powders</h2>
      <p>
       Moringa is a highly nutritious plant known as a superfood.Ashwagandha is a powerful Ayurvedic herb.Turmeric is a bright yellow spice widely used in cooking.Amla is also known as Indian gooseberry.Onion is a common vegetable used in many dishes.
       Beet Root Powder – A natural powder that supports blood circulation and increases stamina.Turmeric Powder – A powerful anti-inflammatory spice rich in curcumin for immunity support.
       Coriander Powder – A spice powder that improves digestion and adds aroma to food.Mint Powder – A refreshing herbal powder that aids digestion and freshens breath.
       Bittergourd Powder – A healthy powder that helps regulate blood sugar levels.Lemon Grass Powder – An aromatic powder known for detox and calming benefits.
      </p>
      <button 
      className="recipes-btn"
      onClick={() => navigate("/products")}
    >
      Visit Products
    </button>
    </div>

    {/* RIGHT CAROUSEL */}
    <div className="recipes-carousel right">
      <div className="carousel-track reverse">
        <img src={dish3} alt="" />
        <img src={dish4} alt="" />
        <img src={dish5} alt="" />
        <img src={dish8} alt="" />
        <img src={dish9} alt="" />
      </div>
    </div>

  </div>
</section>
    </>
  );
}

export default Home;
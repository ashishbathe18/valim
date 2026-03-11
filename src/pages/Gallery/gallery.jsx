import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gallery.css";

import blog from "../../assets/gallery/blog.png";
import blog1 from "../../assets/gallery/blog1.png";
import blog2 from "../../assets/gallery/blog2.png";
import image4 from "../../assets/gallery/image4.png";
import blog3 from "../../assets/gallery/blog3.png";
import blog4 from "../../assets/gallery/blog4.png";
import herog from "../../assets/gallery/image.png"

const images = [
  { id: 1, src: blog, category: "turmeric" },
  { id: 2, src: blog1, category: "coconut" },
  { id: 3, src: blog2, category: "jaggery" },
  { id: 4, src: image4, category: "tea" },
  { id: 5, src: blog3, category: "jaggery" },
  { id: 6, src: blog4, category: "halad" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <>
      {/* HERO */}
  <section
  className="gallery-hero"
  style={{ backgroundImage: `url(${herog})` }}
>
  <div className="gallery-hero-overlay"></div>

  <div className="gallery-hero-content">
    <h1 className="gallery-title fw-bold m-4">Our Product Gallery</h1>
    <p className="gallery-subtitle">
      Premium Indian products exported worldwide
    </p>
  </div>
</section>

      {/* GALLERY GRID */}
      <section className="gallery-section">
        <div className="container text-center">
          <h3>Gallery of All Products</h3>

          <div className="row g-4 mt-4">
            {filteredImages.map((img) => (
              <div className="col-lg-4 col-md-6" key={img.id}>
                <div className="gallery-card">
                  <img src={img.src} alt="gallery" className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-wrapper">
        <div className="cta-box">
          <h4>Let’s Build Global Partnerships</h4>
          <p>
            Exporting turmeric, jaggery, tea, coconut and more with global standards.
          </p>

          <Link to="/contact">
            <button className="home-btn">Get In Touch</button>
          </Link>
        </div>
      </section>
    </>
  );
}
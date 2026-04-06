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
import herog from "../../assets/gallery/imagesss.png"
import chica from "../../assets/gallery/chica.png";
import dish7 from "../../assets/gallery/dish7.png";
import basil from "../../assets/gallery/Basil.png";
import mori from "../../assets/gallery/mori.png";
import beetroot from "../../assets/gallery/beetroot.png";
import garlik from "../../assets/gallery/garlik.png";
import wheat from "../../assets/gallery/wheat.png";
import leman from "../../assets/gallery/leman.png";
import mint from "../../assets/gallery/mint.png";

const images = [
  { id: 1, src: blog, category: "turmeric" },
  { id: 2, src: blog1, category: "coconut" },
  { id: 3, src: blog2, category: "jaggery" },
  { id: 4, src: image4, category: "tea" },
  { id: 5, src: blog3, category: "jaggery" },
  { id: 6, src: blog4, category: "halad" },
  {id: 7, src:chica , category:"chica"},
 {id:8, src:dish7, category:"karla"},
 {id:9, src:basil, category:"badishap"},
 {id:10, src:mori, category:"moriga"},
 {id:11, src:beetroot, category:"beetroot"},
 {id:12, src:garlik, category:"garlik"},
 {id:13, src:wheat, category:"wheatgrass"},
 {id:14, src:leman, category:"lemangrass"},
 {id:15, src:mint, category:"mint"},

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
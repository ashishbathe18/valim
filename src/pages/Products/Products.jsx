import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import bg1 from "../../assets/gallery/imagesss.png";
import "./Products.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

/* ---------------- SLUG FUNCTION ---------------- */

const slugify = (str) =>
  str
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* ---------------- ATTRIBUTE NORMALIZE ---------------- */

function normalizeAttributes(attributes = []) {

  const map = {};

  attributes.forEach((attr) => {

    if (!map[attr.attributeKey]) map[attr.attributeKey] = [];

    if (Array.isArray(attr.values)) {
      map[attr.attributeKey].push(...attr.values);
    }

  });

  return Object.entries(map).map(([key, values]) => ({
    attributeKey: key,
    values: [...new Set(values)],
  }));

}

/* ====================================================== */

function Products() {

  const { categorySlug, subSlug } = useParams();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadData();

  }, [categorySlug, subSlug]);

  const loadData = async () => {

    try {

      setLoading(true);

      /* ---------------- CATEGORIES ---------------- */

      const catRes = await axios.get(`${API_BASE}/categories`, {
        params: { domainName: DOMAIN_NAME },
      });

      const cats = catRes.data?.data || [];

      setCategories(cats);

      const activeCategory = cats.find(
        (c) => slugify(c.slug || c.name) === slugify(categorySlug)
      );

      /* ---------------- SUBCATEGORIES ---------------- */

      let subs = [];

      if (activeCategory) {

        const subRes = await axios.get(`${API_BASE}/sub-categories`, {
          params: {
            domainName: DOMAIN_NAME,
            categoryId: activeCategory._id,
          },
        });

        subs = subRes.data?.data || [];

      } else {

        const subRes = await axios.get(`${API_BASE}/sub-categories`, {
          params: { domainName: DOMAIN_NAME },
        });

        subs = subRes.data?.data || [];

      }

      setSubcategories(subs);

      const activeSubcategory = subs.find(
        (s) => slugify(s.slug || s.name) === slugify(subSlug)
      );

      /* ---------------- PRODUCTS ---------------- */

      let productRes;

      if (activeSubcategory) {

        productRes = await axios.get(`${API_BASE}/products`, {
          params: {
            domainName: DOMAIN_NAME,
            subCategoryId: activeSubcategory._id,
          },
        });

      } else if (activeCategory) {

        productRes = await axios.get(`${API_BASE}/products`, {
          params: {
            domainName: DOMAIN_NAME,
            categoryId: activeCategory._id,
          },
        });

      } else {

        productRes = await axios.get(`${API_BASE}/products`, {
          params: { domainName: DOMAIN_NAME },
        });

      }

      setProducts(productRes.data?.data || []);

    } catch (error) {

      console.error("API ERROR", error);

    } finally {

      setLoading(false);

    }

  };

  /* ====================================================== */

  return (

    <>
      <section
        className="product-hero-section"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="product-hero-overlay">

          <div className="product-hero-content">

            <h1>Our <span>Products</span></h1>

            <p>
              Explore our premium quality range designed for durability,
              performance, and global export standards.
            </p>

          </div>

        </div>
      </section>

      <div className="product-page-container">

        {loading && (
          <p className="product-page-center">Loading products...</p>
        )}

        {!loading && products.length === 0 && (
          <p className="product-page-center">No products found</p>
        )}

        <div className="product-page-grid">

          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        </div>

      </div>

    </>
  );
}

/* ====================================================== */

function ProductCard({ product }) {

  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    if (!product?._id) return;

    const loadImages = async () => {

      try {

        const res = await axios.get(`${API_BASE}/product-images`, {
          params: { productId: product._id },
        });

        setImages(res.data?.data || []);

      } catch {

        setImages([]);

      }

    };

    loadImages();

  }, [product]);

  const attrs = normalizeAttributes(product.attributes);

  const getAttr = (key) =>
    attrs.find((a) => a.attributeKey === key)?.values || [];

  const productName =
    getAttr("product_name")[0] ||
    product.name ||
    "Product";

  const description = getAttr("description")[0];
  const usages = getAttr("usages")[0] || getAttr("usage")[0];
  const benefits = getAttr("benefits")[0] || getAttr("benefit")[0];

  return (

    <div className="product-page-card">

      {/* LEFT */}

      <div className="product-page-left">

        <h2 className="product-page-title">
          {productName}
        </h2>

        {description && (
          <p className="product-page-desc">
            {description}
          </p>
        )}

        {usages && (
          <>
            <h3>Usages</h3>
            <p>{usages}</p>
          </>
        )}

        {benefits && (
          <>
            <h3>Benefits</h3>
            <p>{benefits}</p>
          </>
        )}

        <table className="product-page-table">

          <tbody>

            {attrs.map((attr) => (

              <tr key={attr.attributeKey}>

                <td className="product-page-key">
                  {attr.attributeKey}
                </td>

                <td className="product-page-value">
                  {attr.values.join(", ")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <Link to="/contact">
          <button className="product-page-btn">
            Enquiry
          </button>
        </Link>

      </div>

      {/* RIGHT */}

      <div className="product-page-right">

        <div className="product-page-main-img">

          {images.length > 0 ? (
            <img src={images[activeIndex]?.image} alt={productName} />
          ) : (
            <span>No Image</span>
          )}

        </div>

        <div className="product-page-thumbs">

          {images.map((img, index) => (

            <img
              key={index}
              src={img.image}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? "product-page-thumb-active"
                  : ""
              }
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Products;
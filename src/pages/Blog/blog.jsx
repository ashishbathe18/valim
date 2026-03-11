import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import "./blog.css";

// HERO IMAGE
import hero from "../../assets/blogs/hero.png";

// ENV VARIABLES
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

// ✅ IMAGE URL HANDLER (FIXED)
const getImageSrc = (image) => {

  if (!image) return "";

  // 1️⃣ BASE64 IMAGE
  if (image.startsWith("data:image")) {
    return image;
  }

  // 2️⃣ FULL URL IMAGE
  if (image.startsWith("http")) {
    return image;
  }

  // 3️⃣ FILE PATH IMAGE
  const domain = API_BASE_URL.replace("/api", "");
  const cleanPath = image.replace(/^\/+/, "");

  return `${domain}/${cleanPath}`;
};

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const response = await axios.get(`${API_BASE_URL}/blogs`, {
          params: {
            domainName: DOMAIN_NAME,
          },
        });

        console.log("BLOG API RESPONSE:", response.data);

        if (response.data?.data) {
          setBlogs(response.data.data);
        } else {
          setBlogs([]);
        }

      } catch (err) {

        console.error("Blog Fetch Error:", err);
        setError("Unable to load blogs");

      } finally {
        setLoading(false);
      }

    };

    fetchBlogs();

  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay"></div>
        <Container>
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">
            • Vegetables • Powder Products
          </p>
        </Container>
      </section>

      {/* LOADING */}
      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <p className="text-center text-danger my-5">{error}</p>
      )}

      {/* BLOG LIST */}
      {!loading &&
        blogs.map((blog, index) => (

          <section className="about-section" key={blog._id || index}>
            <Container>

              <Row className="align-items-center">

                {/* TEXT */}
                <Col md={6} className={index % 2 !== 0 ? "order-md-2" : ""}>

                  <h2>{blog.title}</h2>

                  {blog.subTitle && (
                    <h6 className="text-muted">{blog.subTitle}</h6>
                  )}

                  <p>{blog.content}</p>

                </Col>

                {/* IMAGE */}
                <Col md={6}>

                  {blog.image ? (

                    <img
                      src={getImageSrc(blog.image)}
                      alt={blog.title}
                      className="img-fluid rounded-img"
                    />

                  ) : (
                    <p>No Image</p>
                  )}

                </Col>

              </Row>

            </Container>
          </section>

        ))}

      {/* EMPTY STATE */}
      {!loading && blogs.length === 0 && !error && (
        <p className="text-center my-5">No blogs found</p>
      )}
    </>
  );
};

export default Blog;
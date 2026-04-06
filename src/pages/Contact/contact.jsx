import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contact.css";
import hand from "../../assets/contact/hand.png";

function Contact() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const domainName = import.meta.env.VITE_DOMAIN_NAME;

  /* ---------------- STATES ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH CONTACT PAGE ---------------- */
  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const res = await axios.get(`${baseURL}/contact-page`, {
          params: { domainName },
        });

        console.log("API Response:", res.data);

        // Safe fallback
        const data = res?.data?.data || res?.data || null;

        if (data) {
          setContactData(data);
        } else {
          setContactData({});
        }
      } catch (err) {
        console.error("Contact page error:", err);
        setContactData({});
      } finally {
        setLoading(false);
      }
    };

    fetchContactPage();
  }, [baseURL, domainName]);

  if (loading) return <div className="loading">Loading...</div>;

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/contact`, {
        ...formData,
        domainName,
      });

      alert("Enquiry submitted successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactData?.heroImage || hand})`,
        }}
      >
        <div className="hero-overlay">
          <h1>{contactData?.pageTitle || "Contact Us"}</h1>
          <p>{contactData?.subtitle || "We’d love to hear from you"}</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-wrapper">
        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h3>{contactData?.pageTitle}</h3>
            <p><strong>Address:CHAUDHARY AND CO. Company Location (Full Address): 1st FLOOR, BHUJBAL COMPLEX, BEHIND – IRON PARADISE GYM, TALEGAON ROAD, SHIRKRAPUR, TA. SHIRUR, DIST. PUNE - 412208

</strong> {contactData?.description}</p>
            <p><strong>Email:chaudharyandcom@gmail.com</strong> {contactData?.email}</p>
            <p><strong>Phone:: 9607483143</strong> {contactData?.phone}</p>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Our Location</h2>
          <p className="map-address">{contactData?.description}</p>

       <div className="map-embed">
  <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.4733130477784!2d74.13523137492149!3d18.68761616405089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d95186f4e421%3A0x3387652af66989ad!2sCHAUDHARY%20%26%20CO.%20(TAX%20CONSULTANT)!5e0!3m2!1sen!2sin!4v1775292169588!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
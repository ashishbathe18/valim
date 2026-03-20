import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cetificate.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const DOMAIN = import.meta.env.VITE_DOMAIN_NAME;

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/certificates`,
        {
          params: { domainName: DOMAIN }
        }
      );

      setCertificates(res?.data || []);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  return (
    <div id="certificates-page">

      {/* TITLE */}
      <div className="cert-title-section">
        <h1 className="cert-title">Our Certifications</h1>
        <p className="cert-subtitle">
          Recognised globally for quality and sustainability — our
          certifications reflect our commitment to excellence.
        </p>
      </div>

      {/* GRID */}
      <div className={`cert-grid ${certificates.length <= 2 ? "center-grid" : ""}`}>
        {certificates?.map((cert, index) => (
          <div
            className="cert-card"
            key={cert?._id || index}
            onClick={() => setSelectedImage(cert)}
          >

            <div className="cert-img-box">
              <img
                src={cert?.certificateImage}
                alt={cert?.certificateTitle}
              />
            </div>

            <h3>{cert?.certificateTitle}</h3>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="cert-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage?.certificateImage}
              alt={selectedImage?.certificateTitle}
            />

            <p className="cert-modal-title">
              {selectedImage?.certificateTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
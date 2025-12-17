// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll + close mobile menu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Close navbar on mobile after click
      if (navbarRef.current?.classList.contains("show")) {
        navbarRef.current.classList.remove("show");
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark fixed-top shadow-sm ${
        scrolled ? "bg-primary" : "bg-black"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="container">
        {/* BRAND */}
        <span
          className="navbar-brand fw-bold text-white"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("hero")}
        >
          Software Engineer
        </span>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
          <ul className="navbar-nav ms-auto text-center">
            {["hero", "tech", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <span
                  className="nav-link text-white fw-semibold px-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

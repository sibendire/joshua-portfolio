// src/components/Navbar.js
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm transition ${
        scrolled ? "bg-primary" : "bg-black"
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold text-white"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
         
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["hero", "tech", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className="nav-link text-white fw-semibold mx-2"
                  onClick={() => scrollToSection(section)}
                  style={{ cursor: "pointer", transition: "0.3s" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

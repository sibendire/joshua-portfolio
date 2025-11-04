import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <div className="bg-light text-dark min-vh-100">
      {/* HERO SECTION */}
      <section className="text-center text-white py-5" style={{ background: "linear-gradient(to right, #1e3a8a, #3730a3)" }}>
        <h1 className="display-4 fw-bold mb-3">Sibendire Joshua</h1>
        <p className="fs-4 mb-3">Full Stack Software Engineer — Java | Spring Boot | React</p>
        <p className="mx-auto w-75">
          I build real-world enterprise systems with Spring Boot and React — from backend APIs to interactive frontends.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a
            href="https://github.com/sibendire"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light fw-semibold text-primary px-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sibendire-joshua-5b0850262/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light fw-semibold px-4"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold text-primary mb-4">Tech Stack</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Frontend</h5>
                <p className="card-text">
                  React, Thymeleaf, HTML5, CSS3, Bootstrap, JavaScript
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Backend</h5>
                <p className="card-text">
                  Java, Spring Boot, Spring Security, Hibernate, MySQL
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Tools & Others</h5>
                <p className="card-text">
                  Git, Docker, Maven, Launch4j, REST APIs, PDF Export
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-primary text-center mb-4">Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title">🎓 School Management System</h4>
                  <p className="card-text text-secondary">
                    A full-featured Spring Boot + Thymeleaf application for managing
                    student admissions, fee payments, report cards, and offline
                    license validation.
                  </p>
                  <a
                    href="https://github.com/sibendire"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold text-primary text-decoration-none"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title">📚 Bookshop Management App</h4>
                  <p className="card-text text-secondary">
                    Java Spring Boot desktop-style app with Launch4j installer, PDF
                    invoice generation, and license activation system.
                  </p>
                  <a
                    href="https://github.com/sibendire"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold text-primary text-decoration-none"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: "#1e3a8a" }}>
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="mb-4">
          Let’s collaborate or discuss your next software project.
        </p>
        <a
          href="mailto:sibendirejoshua@gmail.com"
          className="btn btn-light text-primary px-5 py-2 fw-semibold"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-3 text-center bg-secondary-subtle text-muted">
        © {new Date().getFullYear()} Sibendire Joshua — All rights reserved.
      </footer>
    </div>
  );
};

export default App;

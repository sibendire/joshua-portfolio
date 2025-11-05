import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const App = () => {
  return (
    <div className="bg-light text-dark min-vh-100">
      {/* HERO SECTION */}
      <section className="text-center text-white py-5" style={{ background: "linear-gradient(135deg, #1e3a8a, #4338ca)" }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Sibendire Joshua</h1>
          <p className="fs-4 mb-3">Full Stack Software Engineer</p>
          <p className="mx-auto w-75">
            I’m a results-driven developer specializing in <strong>Java (Spring Boot)</strong> and <strong>React</strong>,
            passionate about designing secure, scalable, and maintainable enterprise software.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a
              href="https://github.com/sibendire"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light fw-semibold text-primary px-4"
            >
              <i className="bi bi-github me-2"></i>GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sibendire-joshua-5b0850262/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light fw-semibold px-4"
            >
              <i className="bi bi-linkedin me-2"></i>LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light fw-semibold text-primary px-4"
            >
              <i className="bi bi-file-earmark-text me-2"></i>Resume
            </a>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold text-primary mb-4">Core Technologies</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Frontend</h5>
                <p className="card-text">
                  React, TypeScript, HTML5, CSS3, Bootstrap, JavaScript, Vite
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Backend</h5>
                <p className="card-text">
                  Java, Spring Boot, Hibernate, Spring Security, RESTful APIs, MySQL
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title fw-semibold">DevOps & Tools</h5>
                <p className="card-text">
                  Git, Docker, Maven, Launch4j, Postman, PDF Export, License Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-primary text-center mb-4">Highlighted Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title mb-3">🎓 School Management System</h4>
                  <p className="card-text text-secondary">
                    A robust enterprise-grade system built with Spring Boot and Thymeleaf for managing
                    admissions, fees, academics, and offline license validation. Designed for real-world school operations.
                  </p>
                  <a
                    href="https://github.com/sibendire"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold text-primary text-decoration-none"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title mb-3">📚 Bookshop Management App</h4>
                  <p className="card-text text-secondary">
                    A Spring Boot–based desktop-style app with license activation, PDF invoicing,
                    and executable installer (Launch4j). Focused on practical offline-first architecture.
                  </p>
                  <a
                    href="https://github.com/sibendire"
                    target="_blank"
                    rel="noreferrer"
                    className="fw-semibold text-primary text-decoration-none"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: "#1e3a8a" }}>
        <div className="container">
          <h2 className="fw-bold mb-3">Let’s Work Together</h2>
          <p className="mb-4">
            Have a project, idea, or opportunity in mind? I’m open to freelance, contract, and full-time roles.
          </p>
          <a
            href="mailto:sibendirejoshua@gmail.com"
            className="btn btn-light text-primary px-5 py-2 fw-semibold"
          >
            <i className="bi bi-envelope me-2"></i> Email Me
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-3 text-center bg-secondary-subtle text-muted">
        © {new Date().getFullYear()} Sibendire Joshua — All rights reserved.
      </footer>
    </div>
  );
};

export default App;

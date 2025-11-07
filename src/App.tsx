import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";


const App = () => {
  return (
    <div className="bg-light text-dark min-vh-100">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          minHeight: "70vh",
          backgroundImage: "url('/screenshots/port.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "70px",
        }}
      >
        <div
          className="container py-5 px-4"
          style={{
            //backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "16px",
            maxWidth: "800px",
          }}
        >
          <h1 className="display-4 fw-bold mb-3">Sibendire Joshua</h1>
          <p className="fs-4 mb-3">Full Stack Software Engineer</p>
          <p className="mb-4">
            I’m a results-driven developer specializing in{" "}
            <strong>Java (Spring Boot)</strong> and <strong>React</strong>,
            passionate about designing secure, scalable, and maintainable
            enterprise software.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://github.com/sibendire"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light fw-semibold text-primary px-4 py-2"
            >
              <i className="bi bi-github me-2"></i>GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sibendire-joshua-5b0850262/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light fw-semibold px-4 py-2"
            >
              <i className="bi bi-linkedin me-2"></i>LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light fw-semibold text-primary px-4 py-2"
            >
              <i className="bi bi-file-earmark-text me-2"></i>Resume
            </a>
          </div>
        </div>
      </section>
      {/* TECH STACK */}
      <section id="tech" className="py-5 text-center container">
        <h2 className="fw-bold text-primary mb-5">Core Technologies</h2>
        <div className="row g-4">
          {[
            {
              title: "Frontend",
              text: "React, TypeScript, HTML5, CSS3, Bootstrap, JavaScript, Vite",
            },
            {
              title: "Backend",
              text: "Java, Spring Boot, Hibernate, Spring Security, RESTful APIs, MySQL",
            },
            {
              title: "DevOps & Tools",
              text: "Git, Docker, Maven, Launch4j, Postman, PDF Export, License Systems",
            },
          ].map((tech, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{tech.title}</h5>
                  <p className="card-text">{tech.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="py-5 bg-light">
  <div className="container">
    <h2 className="fw-bold text-primary text-center mb-5">
      Highlighted Projects
    </h2>
    <div className="row g-4">
      {[
        {
          title: "🎓 School Management System",
          image: "/screenshots/port.jpg",
          description:
            "A full-stack Spring Boot + Thymeleaf system for managing student admissions, fees, report cards, and offline licenses.",
          github: "https://github.com/sibendire",
          demo: "https://your-live-demo-link.com", // replace with actual live demo if available
        },
        {
          title: "📚 Bookshop Management App",
          image: "/screenshots/images.jpeg",
          description:
            "A desktop-style Spring Boot app with license activation, PDF invoicing, and a Windows installer via Launch4j.",
          github: "https://github.com/sibendire",
          demo: "https://your-live-demo-link.com", // replace with actual live demo if available
        },
      ].map((project, idx) => (
        <div className="col-md-6" key={idx}>
          <div className="card h-100 shadow-sm border-0 project-card">
            <img
              src={project.image}
              className="card-img-top"
              alt={project.title}
              style={{
                borderBottom: "3px solid #0d6efd",
                objectFit: "cover",
                height: "250px",
              }}
            />
            <div className="card-body d-flex flex-column">
              <h4 className="card-title mb-3">{project.title}</h4>
              <p className="card-text text-secondary flex-grow-1">{project.description}</p>
              
              {/* Buttons */}
              <div className="d-flex gap-2 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary fw-semibold flex-grow-1"
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary fw-semibold flex-grow-1"
                >
                  <i className="bi bi-display me-1"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#1e3a8a" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Let’s Work Together</h2>
          <p className="mb-4">
            Have a project, idea, or opportunity in mind? I’m open to freelance,
            contract, and full-time roles.
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

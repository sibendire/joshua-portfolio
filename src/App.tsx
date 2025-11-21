import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";

const App = () => {
  // Toggle for projects
  const [showMore, setShowMore] = useState(false);

  // All projects (6)
  const allProjects = [
    {
      title: "🎓 School Management System",
      image: "/screenshots/port.jpg",
      description:
        "A full-stack enterprise solution built with Spring Boot and Thymeleaf for managing student admissions, fees, report cards, and offline licensing. Designed for real-world deployment with role-based security and PDF exports.",
      github: "https://github.com/sibendire",
      demo: "#",
    },
    {
      title: "📚 Bookshop Management Application",
      image: "/screenshots/images.jpeg",
      description:
        "A modern Spring Boot desktop-style system featuring license activation, PDF invoicing, and a Windows installer (Launch4j). Built for performance, scalability, and offline functionality.",
      github: "https://github.com/sibendire",
      demo: "#",
    },
    {
      title: "🛒 E-Commerce Platform",
      image: "/screenshots/ecom.jpeg",
      description:
        "A modern e-commerce solution with cart, orders, and admin dashboards (React + Spring Boot).",
      github: "https://github.com/sibendire",
      demo: "#",
    },
    {
      title: "📡 Blogging Platform API",
      image: "/screenshots/news.jpeg",
      description:
        "REST API blogging system built in Spring Boot with JWT security, comments, and categories.",
      github: "https://github.com/sibendire",
      demo: "#",
    },
    {
      title: "📝 Task Manager App",
      image: "/screenshots/task.jpeg",
      description:
        "React task manager with authentication, reminders, priority tags, and drag-and-drop tasks.",
      github: "https://github.com/sibendire",
      demo: "#",
    },
    {
      title: "🏥 Clinic Management System",
      image: "/screenshots/heal.jpg",
      description:
        "Healthcare management system supporting patient records, prescriptions, billing, and appointments.",
      github: "https://github.com/sibendire",
      demo: "#",
    },
  ];

  // Projects to render
  const displayedProjects = showMore ? allProjects : allProjects.slice(0, 3);

  // Tech cards (same info you had)
  const techs = [
    {
      icon: "bi bi-laptop",
      title: "Frontend Development",
      text: "React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Vite",
      bg: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    },
    {
      icon: "bi bi-server",
      title: "Backend Development",
      text: "Java, Spring Boot, Hibernate, Spring Security, REST APIs, MySQL",
      bg: "linear-gradient(135deg, #ede7f6, #ffffff)",
    },
    {
      icon: "bi bi-gear-wide-connected",
      title: "DevOps & Tools",
      text: "Git, Docker, Maven, Launch4j, Postman, PDF Export, License Systems",
      bg: "linear-gradient(135deg, #e8f5e9, #ffffff)",
    },
  ];

  return (
    <div className="bg-light text-dark min-vh-100">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "90vh",
          backgroundImage: "url('/screenshots/port.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="container py-5"
          style={{
            borderRadius: "20px",
            maxWidth: "1100px",
          }}
        >
          <div className="row align-items-center justify-content-between">
            {/* LEFT — TEXT CONTENT */}
            <div className="col-md-7 text-md-start text-center mb-4 mb-md-0 text-light">
              <h1 className="display-4 fw-bold mb-3 text-shadow-lg">
                Sibendire Joshua
              </h1>
              <h4 className="fw-semibold text-info mb-3">
                Full Stack Software Engineer
              </h4>
              <p className="mb-4 fs-5">
                I’m a results-driven{" "}
                <strong>Full Stack Software Engineer</strong> specializing in{" "}
                <strong>Java (Spring Boot)</strong> and{" "}
                <strong>React</strong>, dedicated to developing{" "}
                <strong className="text-info">
                  secure, scalable, and enterprise-grade software solutions
                </strong>{" "}
                that empower organizations to achieve their goals efficiently.
              </p>

              {/* BUTTONS */}
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://github.com/sibendire"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light fw-semibold text-primary px-4 py-2 shadow-sm"
                >
                  <i className="bi bi-github me-2"></i>GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sibendire-joshua-5b0850262/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light fw-semibold px-4 py-2 shadow-sm"
                >
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light fw-semibold text-primary px-4 py-2 shadow-sm"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>Resume
                </a>
              </div>
            </div>

            {/* RIGHT — PROFILE PHOTO */}
            <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
              <div
                className="p-2 rounded-circle shadow-lg border border-4 border-light bg-white"
                style={{
                  width: "240px",
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/screenshots/joshua.jpg"
                  alt="Sibendire Joshua"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    transition: "transform 0.4s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.07)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-uppercase text-primary mb-4">
            Core Technologies
          </h2>
          <p className="text-secondary mb-5 fs-5">
            A diverse set of tools and frameworks I use to design, develop, and
            deliver high-quality enterprise solutions.
          </p>

          <div className="row g-4">
            {techs.map((tech, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    background: tech.bg,
                    borderRadius: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.05)";
                  }}
                >
                  <div className="card-body py-4">
                    <div className="mb-3 text-primary">
                      <i className={`${tech.icon} fs-1`}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{tech.title}</h5>
                    <p className="card-text text-secondary">{tech.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div className="container">
          <h2
            className="fw-bold text-center mb-5"
            style={{
              color: "#1e3a8a",
              fontSize: "2.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Featured Projects
          </h2>

          <div className="row g-4">
            {displayedProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary px-4 py-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "More Projects"}
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-5 text-center text-white"
        style={{
          backgroundColor: "#1e3a8a",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Let’s Work Together</h2>
          <p className="mb-4 fs-5">
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

// Reusable ProjectCard component
const ProjectCard = ({ project }) => (
  <div className="col-md-6 col-lg-4">
    <div
      className="card h-100 border-0 shadow-sm project-card position-relative overflow-hidden"
      style={{
        borderRadius: "20px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="position-relative">
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          style={{
            height: "250px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0))",
          }}
        ></div>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <h4
          className="fw-bold mb-3"
          style={{
            color: "#0d1b2a",
            fontSize: "1.2rem",
          }}
        >
          {project.title}
        </h4>
        <p className="text-secondary flex-grow-1">{project.description}</p>

        <div className="d-flex gap-2 mt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary fw-semibold flex-grow-1"
            style={{
              borderRadius: "50px",
            }}
          >
            <i className="bi bi-github me-1"></i> GitHub
          </a>
          <a
            href={project.demo || project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary fw-semibold flex-grow-1"
            style={{
              borderRadius: "50px",
              background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
              border: "none",
            }}
          >
            <i className="bi bi-display me-1"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default App;

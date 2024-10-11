import React from "react";
import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
const ProjectItemHome = () => {
  return (
    <>
      <div className="container-fluid project py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary animated-heading">Our Project</h5>
            <h1 className="animated-title">Our Recently Completed Projects</h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 fadeInUp" data-wow-delay=".3s">
              <div className="project-item creative-hover">
                <div className="project-img">
                  <img
                    src={project1}
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content animated-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Web Design</h4>
                      <p className="m-0 text-dark">Urban Classes</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fadeInUp" data-wow-delay=".5s">
              <div className="project-item creative-hover">
                <div className="project-img">
                  <img
                    src={project2}
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content animated-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">App Development</h4>
                      <p className="m-0 text-dark">Brightwood Academy</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 fadeInUp" data-wow-delay=".7s">
              <div className="project-item creative-hover">
                <div className="project-img">
                  <img
                    src={project3}
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="project-content animated-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Mobile Info</h4>
                      <p className="m-0 text-dark">Upcoming Phone</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s ease;
        }

        .project-item:hover {
          transform: scale(1.05);
        }

        .project-img img {
          transition: transform 0.5s ease;
        }

        .project-item:hover .project-img img {
          transform: scale(1.1);
        }

        .project-content {
          position: absolute;
          bottom: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: bottom 0.5s ease;
          opacity: 0;
          visibility: hidden;
        }

        .project-item:hover .project-content {
          bottom: 0;
          opacity: 1;
          visibility: visible;
        }

        .animated-heading {
          font-size: 1.5rem;
          color: #007bff;
          animation: fadeIn 1s ease-in-out;
        }

        .animated-title {
          font-size: 2.5rem;
          color: #333;
          animation: slideIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .project-content {
            bottom: 0;
          }

          .project-item {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectItemHome;

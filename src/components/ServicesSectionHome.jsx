import React from "react";
import aboutt from "../assets/img/aboutt.png";
import soft from "../assets/img/soft.png";
import phone from "../assets/img/phone.png";
import seoo from "../assets/img/seoo.png";
import graphs from "../assets/img/graphs.png";
import domaim from "../assets/img/domaim.png";
import ecom2 from "../assets/img/ecom2.png";
import anim from "../assets/img/anim.png";
import marketing from "../assets/img/marketing.png";
const ServiceSectionHome = () => {
  return (
    <div
      className="container-fluid mt-5"
      style={{ backgroundColor: "lightblue", padding: "50px" }}
    >
      <h2 className="text-center text-danger">
        Symbosys services that Boost your business Online & Offline.
      </h2>

      {/* Row 1 */}
      <div className="row mt-4 mb-4">
        {[
          {
            imgSrc: aboutt,
            title: "Web Design & Development",
            text: "We are a creative group of designers and developers. Our fluid designs always surprise whatever device you have. Web development is our strength & high in demand.",
            link: "webDesign.html",
          },
          {
            imgSrc: soft,
            title: "Software Development",
            text: "If you have a long-term business plan and want to develop software in stages to achieve a bigger goal, Brightcode would like to be your software development firm.",
            link: "software.html",
          },
          {
            imgSrc: phone,
            title: "Mobile Apps Development",
            text: "We deliver custom Android apps with high performance and utility ranging from productivity business and mCommerce to gaming leisure and social apps.",
            link: "mobile.html",
          },
        ].map((service, index) => (
          <div className="col-md-4 d-flex align-items-stretch" key={index}>
            <div className="card w-100">
              <img
                src={service.imgSrc}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-dark">{service.text}</p>
                <a href={service.link} className="btn btn-warning">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="row mt-4 mb-4">
        {[
          {
            imgSrc: seoo,
            title: "Search Engine Optimization",
            text: "We offer you the best SEO Service in Ranchi that provides a cutting-edge technology-supported, process-oriented, latest algorithm-based approach towards the project.",
            link: "seo.html",
          },
          {
            imgSrc: graphs,
            title: "Graphic Designing",
            text: "Our innovative approaches with an integration of modern technologies give us a unique blend of power to create responsive and concise design with uniform cross-platform compatibility.",
            link: "graphics.html",
          },
          {
            imgSrc: domaim,
            title: "Domain & Hosting",
            text: "Domains serve as the digital equivalents of street addresses. Our offerings include domain management, SSL certificates, facilitating users in locating your website effortlessly.",
            link: "domain.html",
          },
        ].map((service, index) => (
          <div className="col-md-4 d-flex align-items-stretch" key={index}>
            <div className="card w-100">
              <img
                src={service.imgSrc}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-dark">{service.text}</p>
                <a href={service.link} className="btn btn-warning">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3 */}
      <div className="row mt-4 mb-4">
        {[
          {
            imgSrc: ecom2,
            title: "Ecommerce Website",
            text: "E-commerce stands as a beacon of innovation in the retail landscape, bestowing upon consumers the power to peruse and procure goods from the comfort of their abodes.",
            link: "ecommerce.html",
          },
          {
            imgSrc: anim,
            title: "Video & Animation",
            text: "The Rise of Video and Animation In the fast-paced world of digital marketing, video and animation have emerged as game-changers. Gone are the days of static ads.",
            link: "video.html",
          },
          {
            imgSrc: marketing,
            title: "Digital Marketing",
            text: "In today's rapidly evolving world, digital marketing serves as the cornerstone for unlocking a robust online presence for businesses striving to maintain competitiveness.",
            link: "digital.html",
          },
        ].map((service, index) => (
          <div className="col-md-4 d-flex align-items-stretch" key={index}>
            <div className="card w-100">
              <img
                src={service.imgSrc}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-dark">{service.text}</p>
                <a href={service.link} className="btn btn-warning">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionHome;

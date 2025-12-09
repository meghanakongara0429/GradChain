import React from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
    return (
        <section id="about" className="about section">

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row gy-5 align-items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="col-lg-5"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="content">

                            <h6 className="subtitle">Discover your future</h6>

                            <h2>From Campus to Career – with Gradchain</h2>

                            <p>
                                Gradchain is a student-first professional growth platform designed
                                to help you build real-world skills, meaningful connections and
                                career-ready confidence.
                            </p>

                            <p>
                                We bridge the gap between education and employment through
                                learning, networking and guided pathways.
                            </p>

                            <ul className="features-list">
                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>Access internships, live projects & job-ready pathways</span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Connect with professionals, mentors & peers worldwide.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Learn industry-relevant skills through our pathways
                                    </span>
                                </li>
                            </ul>

                            <a href="#" className="btn btn-primary">Discover More</a>

                        </div>
                    </div>

                    {/* RIGHT IMAGES BLOCK */}
                    <div
                        className="col-lg-7"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <div className="image-composition">

                            <div className="image-main">
                                <img
                                    src="/assets/img/about/about-9.webp"
                                    alt="Modern office with a team working"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>

                            <div className="image-secondary">
                                <img
                                    src="/assets/img/about/about-square-8.webp"
                                    alt="Collaborative discussion"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>

                            <div className="stats-card">
                                <div className="stats-item">
                                    <h3>20+</h3>
                                    <p>Years (Expertise partners)</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;

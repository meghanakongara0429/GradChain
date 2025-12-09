import React from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Services = () => {
    return (
        <section id="services" className="services section">

            {/* Section Title */}
            <div
                className="container section-title"
                data-aos="fade-up"
            >
                <h2>Services</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>
            </div>

            {/* Services List */}
            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row gy-4">

                    {/* Service 1 */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-palette"></i>
                            </div>
                            <h4><a href="#">Skill Development</a></h4>
                            <p>
                                Build industry-ready skills through practical learning, guided programs,
                                and real-world exposure designed for students and freshers.
                            </p>
                            <a href="#" className="service-link">
                                <span>Learn More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-layout-text-window-reverse"></i>
                            </div>
                            <h4><a href="#">Grow Network</a></h4>
                            <p>
                                Connect with students, mentors, and working professionals
                                to build meaningful career relationships.
                            </p>
                            <a href="#" className="service-link">
                                <span>Learn More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-phone"></i>
                            </div>
                            <h4><a href="#">Resume Writing</a></h4>
                            <p>
                                Create a powerful, job-ready resume with expert guidance
                                to stand out in internships and job applications.
                            </p>
                            <a href="#" className="service-link">
                                <span>Learn More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-megaphone"></i>
                            </div>
                            <h4><a href="#">Interview Success</a></h4>
                            <p>
                                Boost your confidence with mock interviews, expert tips,
                                and preparation strategies for HR & technical rounds.
                            </p>
                            <a href="#" className="service-link">
                                <span>Learn More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="bi bi-code-slash"></i>
                            </div>
                            <h4><a href="#">Internship Opportunities</a></h4>
                            <p>
                                Access verified internships, live projects, and hands-on
                                experiences to build real-world skills before you graduate.
                            </p>
                            <a href="#" className="service-link">
                                <span>Learn More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="row mt-5">
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="services-cta">
                            <h3>Ready to Transform Your Digital Presence?</h3>
                            <p>Let's discuss your project and create something amazing together</p>
                            <a href="#" className="btn btn-primary">Get Started Today</a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Services;

import React from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Team = () => {
    return (
        <section id="team" className="team section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4">

                    {/* LEFT SIDE INTRO */}
                    <div className="col-lg-6">
                        <div className="team-intro" data-aos="fade-right" data-aos-delay="150">
                            <div className="intro-content">
                                <h3>Meet Our Exceptional Team</h3>

                                <p>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et voluptates repudiandae sint
                                    et molestiae non recusandae.
                                </p>

                                <div className="stats-row">
                                    <div className="stat-item">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Team Members</span>
                                    </div>

                                    <div className="stat-item">
                                        <span className="stat-number">8</span>
                                        <span className="stat-label">Departments</span>
                                    </div>

                                    <div className="stat-item">
                                        <span className="stat-number">15+</span>
                                        <span className="stat-label">Countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE TEAM GRID */}
                    <div className="col-lg-6">
                        <div className="team-grid" data-aos="fade-left" data-aos-delay="200">

                            {/* Member 1 */}
                            <div className="member-hexagon" data-aos="zoom-in" data-aos-delay="250">
                                <div className="hexagon-inner">
                                    <img src="https://gradchain.com/assets/img/person/person-f-3.webp" alt="Team Member" />
                                    <div className="member-overlay">
                                        <h5>Sarah Chen</h5>
                                        <span>Creative Director</span>
                                        <div className="social-icons">
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                            <a href="#"><i className="bi bi-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Member 2 */}
                            <div className="member-hexagon" data-aos="zoom-in" data-aos-delay="300">
                                <div className="hexagon-inner">
                                    <img src="https://gradchain.com/assets/img/person/person-m-4.webp" alt="Team Member" />
                                    <div className="member-overlay">
                                        <h5>Marcus Johnson</h5>
                                        <span>Tech Lead</span>
                                        <div className="social-icons">
                                            <a href="#"><i className="bi bi-github"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Member 3 */}
                            <div className="member-hexagon" data-aos="zoom-in" data-aos-delay="350">
                                <div className="hexagon-inner">
                                    <img src="https://gradchain.com/assets/img/person/person-f-8.webp" alt="Team Member" />
                                    <div className="member-overlay">
                                        <h5>Emma Rodriguez</h5>
                                        <span>Product Manager</span>
                                        <div className="social-icons">
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                            <a href="#"><i className="bi bi-dribbble"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Member 4 */}
                            <div className="member-hexagon" data-aos="zoom-in" data-aos-delay="400">
                                <div className="hexagon-inner">
                                    <img src="https://gradchain.com/assets/img/person/person-m-6.webp" alt="Team Member" />
                                    <div className="member-overlay">
                                        <h5>David Kim</h5>
                                        <span>UX Architect</span>
                                        <div className="social-icons">
                                            <a href="#"><i className="bi bi-behance"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Team;

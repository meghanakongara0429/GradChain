import React from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";

const Hero = () => {
    useEffect(() => {
        new PureCounter();
    }, []);

    return (
        <section id="home" className="hero section">

            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="col-lg-6"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="hero-content">

                            <h1>Launch Your Career With Confidence</h1>

                            <p>One global network infinite possibilities.</p>

                            <div className="hero-buttons">
                                <a href="#" className="btn btn-primary">Get Started</a>
                            </div>

                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span
                                        className="stat-number purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="10000"
                                        data-purecounter-duration="1"
                                    ></span>
                                    <span className="stat-label">Registered Students</span>
                                </div>

                                <div className="stat-item">
                                    <span
                                        className="stat-number purecounter"
                                        data-purecounter-start="0"
                                        data-purecounter-end="100"
                                        data-purecounter-duration="1"
                                    ></span>
                                    <span className="stat-label">Top Companies</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="hero-visual">
                            <div className="hero-image">
                                <img
                                    src="https://gradchain.com/assets/img/misc/misc-16.webp"
                                    alt="Digital Agency Hero"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Shapes */}
            <div className="hero-bg-elements">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-particles"></div>
            </div>

        </section>
    );
};

export default Hero;

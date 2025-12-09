import React from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactUs = () => {
    return (
        <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">

                    {/* LEFT FORM */}
                    <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
                        <div className="contact-form-card">

                            <div className="form-header">
                                <div className="header-icon">
                                    <i className="bi bi-chat-dots-fill"></i>
                                </div>

                                <h3>Let's Start a Conversation</h3>

                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur excepteur sint.
                                </p>
                            </div>

                            <form className="php-email-form">

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="4"
                                        placeholder="Tell us more about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>

                                <button type="submit" className="submit-btn">
                                    <span>Send Message</span>
                                    <i className="bi bi-send-fill"></i>
                                </button>

                            </form>

                        </div>
                    </div>

                    {/* RIGHT INFO PANEL */}
                    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
                        <div className="contact-info-area">

                            <div className="info-header">
                                <h3>Ready to Transform Your Ideas?</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium totam rem aperiam.
                                </p>
                            </div>

                            <div className="contact-methods">

                                {/* Email Card */}
                                <div className="method-card" data-aos="zoom-in" data-aos-delay="250">
                                    <div className="card-icon">
                                        <i className="bi bi-envelope-at"></i>
                                    </div>

                                    <div className="card-content">
                                        <h5>Email Us</h5>
                                        <p>hello@productdemo.com</p>
                                        <span className="response-time">Response in 2-4 hours</span>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="method-card" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="card-icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>

                                    <div className="card-content">
                                        <h5>Call Us</h5>
                                        <p>+1 (555) 987-6543</p>
                                        <span className="response-time">Available 9AM - 6PM EST</span>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="method-card" data-aos="zoom-in" data-aos-delay="350">
                                    <div className="card-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>

                                    <div className="card-content">
                                        <h5>Visit Our Office</h5>
                                        <p>4821 Broadway Street, New York, NY 10013</p>
                                        <span className="response-time">Open Monday - Friday</span>
                                    </div>
                                </div>

                            </div>

                            {/* Stats + Social Footer */}
                            <div className="additional-info" data-aos="fade-up" data-aos-delay="400">

                                <div className="info-stats">
                                    <div className="stat-item">
                                        <div className="stat-number">24h</div>
                                        <div className="stat-label">Average Response</div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-number">98%</div>
                                        <div className="stat-label">Client Satisfaction</div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-number">150+</div>
                                        <div className="stat-label">Projects Delivered</div>
                                    </div>
                                </div>

                                <div className="social-connect">
                                    <h6>Connect With Us</h6>

                                    <div className="social-links">
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-github"></i></a>
                                        <a href="#"><i className="bi bi-discord"></i></a>
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

export default ContactUs;

import React, { useState } from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const closeMobileNav = () => {
        setMobileNavOpen(false);
    };

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                {/* Logo */}
                <a href="#home" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename no-underline">GradChain</h1>
                </a>

                {/* NAV MENU */}
                <nav
                    id="navmenu"
                    className={`navmenu ${mobileNavOpen ? "mobile-nav-active" : ""}`}
                >
                    <ul>
                        <li>
                            <a href="#home" onClick={closeMobileNav} className="active">Home</a>
                        </li>

                        <li>
                            <a href="#about" onClick={closeMobileNav}>About</a>
                        </li>

                        <li>
                            <a href="#services" onClick={closeMobileNav}>Services</a>
                        </li>

                        <li>
                            <a href="#team" onClick={closeMobileNav}>Team</a>
                        </li>

                        <li>
                            <a href="#contact" onClick={closeMobileNav}>Contact Us</a>
                        </li>
                    </ul>

                    {/* Mobile Nav Toggle Inside Nav */}
                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${mobileNavOpen ? "bi-x" : "bi-list"}`}
                        onClick={toggleMobileNav}
                    ></i>
                </nav>

                {/* REGISTER BUTTON */}
                <a className="btn-getstarted" href="#about" onClick={closeMobileNav}>
                    Register
                </a>

            </div>
        </header>
    );
};

export default Header;

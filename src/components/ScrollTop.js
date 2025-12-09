import React, { useEffect, useState } from "react";
import "../main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            id="scroll-top"
            className={`scroll-top d-flex align-items-center justify-content-center ${visible ? "active" : ""}`}
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            aria-label="Scroll to top"
        >
            <i className="bi bi-arrow-up-short"></i>
        </button>
    );
};

export default ScrollTop;

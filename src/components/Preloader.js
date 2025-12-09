import React, { useEffect } from "react";
import "../main.css";

const Preloader = ({ children }) => {
    useEffect(() => {
        const preloader = document.getElementById("preloader");

        // Remove preloader once page fully loads
        window.addEventListener("load", () => {
            if (preloader) {
                preloader.classList.add("loaded");
                setTimeout(() => {
                    if (preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 400); // same as CSS fade-out duration
            }
        });
    }, []);

    return (
        <>
            {/* Preloader Element */}
            <div id="preloader"></div>

            {/* Page Content */}
            {children}
        </>
    );
};

export default Preloader;

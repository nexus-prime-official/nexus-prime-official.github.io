import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            <Navbar />
            <div className="about-cont">
                About
            </div>
            <Footer />
        </section>
    );
};

export default About;
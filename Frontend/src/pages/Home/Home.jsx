import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <section id="home">
            <Navbar />
            <div className="home-cont">
                Home
            </div>
            <Footer />
        </section>
    );
};

export default Home;
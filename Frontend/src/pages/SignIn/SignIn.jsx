import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./SignIn.css";

const SignIn = () => {
    return (
        <section id="sign-in">
            <Navbar />
            <div className="sign-in-cont">
                Sign In
            </div>
            <Footer />
        </section>
    );
};

export default SignIn;
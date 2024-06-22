import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./SignUp.css";

const SignUp = () => {
    return (
        <section id="sign-up">
            <Navbar />
            <div className="sign-up-cont">
                Sign Up
            </div>
            <Footer />
        </section>
    );
};

export default SignUp;
import React from "react";
import heroImg from '../assets/profile-main.avif';
import { Link } from "react-router-dom";

function Hero(){
    return(<>
    <section id="home">
    <div class="hero-content">
         <h3>Hello I am</h3>
    <h1>Shivam Dixit</h1>
    <h2>BSC Final Year Student</h2>
    <p>I am learning web development and building my skills in HTML,<br/>
         CSS and JavaScript.</p>
    <Link to="/about">Read more</Link>
    </div>
    <div class="hero-image">
                <img src={heroImg} alt="hero-image" />

    </div>
   </section>
    </>)
}

export default Hero;
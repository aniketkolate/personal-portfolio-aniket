import React from 'react';
import aniketImage from "@/assets/images/aniket.png";
import "./Home.scss";

const Home: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Hi, I’m Aniket</h1>
                <p className="hero__subtitle">Senior Software Engineer</p>
            </div>

            <div className="hero__image">
                <img src={aniketImage} alt="Aniket" />
            </div>
        </section>
    );
};

export default Home;

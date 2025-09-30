import React from 'react';
import aniketImage from "@/assets/images/aniket.png";
import "./Home.scss";
import GlowButton from '@/components/common/GlassButton/GlowButton';
import SocialIcons from '@/components/common/SocialIcons/SocialIcons';

const Home: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <div>
                    <h1 className="hero__title">Hi, I’m Aniket</h1>
                    <p className="hero__subtitle">Senior Software Engineer</p>
                </div>

                <div className="hero__action_desktop">
                    <GlowButton />
                    <SocialIcons />
                </div>
            </div>
            <div className="hero__image">
                <img src={aniketImage} alt="Aniket" />
            </div>
            <div className="hero__action_mobile">
                <GlowButton />
                <SocialIcons />
            </div>
        </section>
    );
};

export default Home;

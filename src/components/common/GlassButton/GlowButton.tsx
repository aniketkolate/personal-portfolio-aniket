import React from "react";
import "./GlowButton.scss";

const GlowButton: React.FC = () => {
  return (
    <button className="glow-btn">
      <span className="text">See What I’ve Built 🚀</span>
      <span className="shine" />
    </button>
  );
};

export default GlowButton;

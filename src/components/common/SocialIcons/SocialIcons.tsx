import React from 'react';
import './SocialIcons.scss';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/aniketwhocodes', icon: <FaLinkedin color="white" size={22}/> },
  { name: 'GitHub', url: 'https://github.com/aniketkolate', icon: <FaGithub color="white" size={22}/> },
  { name: 'X', url: 'https://x.com/theaniketverse', icon: <FaXTwitter color="white" size={22}/> },
  { name: 'Instagram', url: 'https://instagram.com/theaniketverse', icon: <FaInstagram color="white" size={22}/> },
  { name: 'WhatsApp', url: 'https://wa.me/+918956181856', icon: <FaWhatsapp color="white" size={22}/> },
];

const SocialIcons: React.FC = () => (
  <div className="social-icons">
    {socialLinks.map(link => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;

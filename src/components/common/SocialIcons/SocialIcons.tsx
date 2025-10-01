import React from 'react';
import './SocialIcons.scss';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin color="white" size={25}/> },
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub color="white" size={25}/> },
  { name: 'X', url: 'https://x.com/yourusername', icon: <FaXTwitter color="white" size={25}/> },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: <FaInstagram color="white" size={25}/> },
  { name: 'WhatsApp', url: 'https://wa.me/yourphonenumber', icon: <FaWhatsapp color="white" size={25}/> },
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

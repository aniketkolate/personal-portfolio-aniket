import React from 'react';
import './SocialIcons.scss';
import GitHubIcon from '@/assets/icons/github.png';
import LinkedInIcon from '@/assets/icons/linkedin.png';
import InstagramIcon from '@/assets/icons/instagram.png';
import XIcon from '@/assets/icons/x.png';
import WhatsAppIcon from '@/assets/icons/whatsapp.png';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: LinkedInIcon },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: InstagramIcon },
  { name: 'X', url: 'https://x.com/yourusername', icon: XIcon },
  { name: 'WhatsApp', url: 'https://wa.me/yourphonenumber', icon: WhatsAppIcon },
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
        <img src={link.icon} alt={link.name} />
      </a>
    ))}
  </div>
);

export default SocialIcons;

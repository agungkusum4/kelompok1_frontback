import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__taskbar">
        <a href="https://github.com/agungkusum4/kelompok1-webdev.git" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/cpslaboratory/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://lms.cpsrg.org/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
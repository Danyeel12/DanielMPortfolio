import React from 'react';
import { FaGithub, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons"> {/* Corrected class name here */}
        <a href="https://github.com/Danyeel12" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/zachdanieeel/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.facebook.com/ZachDaneMiranda/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={30} />
        </a>
      </div>
      <p className="footer-text"> {/* Added class name for the paragraph */}
        &copy; {new Date().getFullYear()} Daniel Miranda | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2025 by Hardik Raiyani | All Rights Reserved.</p>
        </div>
        <p onclick="topFunction()" id="myBtns" title="Go to top">
          <i className="fa-solid fa-square-caret-up" />
        </p>
      </footer>
      <div id="fixedlink" target="_blank" rel="nofollow noopener">
        <a href="https://www.facebook.com/hr.h.hr.581">
          <img src="/images/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/imhardikraiyani/?hl=en">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/hardikraiyanii">
          <img src="/images/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/hardik-raiyani-5992a8362">
          <img src="/images/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

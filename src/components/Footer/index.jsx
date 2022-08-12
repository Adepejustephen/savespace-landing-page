import React from "react";
import "./footer.css";
import Logo from '../../assests/images/footer-logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer_logo">
            <img src={Logo} alt="save-space-logo" />
            <p className="footer__left--text">
              SaveSpace is the world largest and most secure digital savings
              service.
            </p>
            <div className="footer__icons"></div>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__list--item item__title">Company</li>
            <li className="footer__list--item">Career</li>
            <li className="footer__list--item">SaveSpace blog</li>
            <li className="footer__list--item">Press</li>
            <li className="footer__list--item">Our story</li>
            <li className="footer__list--item">Contact</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list--item item__title">Product</li>
            <li className="footer__list--item">Features</li>
            <li className="footer__list--item">What’s new?</li>
            <li className="footer__list--item">Coming soon</li>
            <li className="footer__list--item">SaveSpace guide</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list--item item__title">Resources</li>
            <li className="footer__list--item">Forum</li>
            <li className="footer__list--item">SaveSpace community</li>
            <li className="footer__list--item">Events</li>
            <li className="footer__list--item">Accessibility</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list--item item__title">About</li>
            <li className="footer__list--item">Support</li>
            <li className="footer__list--item">Terms of use</li>
            <li className="footer__list--item">Privacy Policy</li>
            <li className="footer__list--item">FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How we works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Map</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Useful Links</h2>
            <Link to="/">Sign-up</Link>
            <Link to="/">Client Area</Link>
            <Link to="/">Services</Link>
            <Link to="/">Products</Link>
          </div>
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Web Development</Link>
            <Link to="/">UX/UI Design</Link>
            <Link to="/">Mobile Apps</Link>
            <Link to="/">Custom Software</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <AiFillAppstore className="navbar-icon" />
              Damsonsoft
            </Link>
          </div>
          <small className="website-rights">{""}© Copyright 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//www.facebook.com/Damsonsoft"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"// www.youtube.com/channel/UCD6roakx03hEFA1aKMr1wlw"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="//www.youtube.com/c/jamesqquick"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

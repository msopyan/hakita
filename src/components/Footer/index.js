import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <div className="brand-icon">
                <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.email && (
              <p className="FooterComponent__email">
                {props.email}
              </p>
            )}
            
            {props.address && (
              <p className="FooterComponent__address">
                {props.address}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copywrite">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://msopyan.web.id/images/icon-facebook.svg"
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://msopyan.web.id/images/icon-instagram.svg"
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://msopyan.web.id/images/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;

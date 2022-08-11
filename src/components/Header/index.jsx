import React from 'react'
import Logo from '../../assests/images/save-logo.svg'
import { Link } from "react-scroll";
import './header.css'
import { Button } from '../generalComponents';

const Header = () => {
    return (
      <header >
        <div className="header__content" >
          <div className="header__logo">
            <img src={Logo} alt="header-logo" />
          </div>

          <nav className="nav__desktop">
            <ul className="nav__desktop--list">
              <li className="nav__desktop--item">
                <Link
                  to="home"
                  activeClass="link-active"
                 
                  smooth={true}
                 
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="#">Save</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="#">Business</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="#">Blog</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="nav__btns">
            <Button className={"noBackground-btn left-btn"} type="button">
              Login
            </Button>
            <Button className={"background-btn"} type="button">
              Create Free Account
            </Button>
          </div>
          <nav className="nav__mobile">
            <ul className="nav__mobile--list">
              <li className="mobile__item">
                <Link to="#">Home</Link>
              </li>
              <li className="mobile__item">
                <Link to="#">Save</Link>
              </li>
              <li className="mobile__item">
                <Link to="#">Business</Link>
              </li>
              <li className="mobile__item">
                <Link to="#">Blog</Link>
              </li>
              <li className="mobile__item">
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
            <div className="mobile__btns">
              <Button className={"noBackground-btn"} type="button">
                Login
              </Button>
              <Button className={"background-btn"} type="button">
                Create Free Account
              </Button>
            </div>
          </nav>
        </div>
      </header>
    );
}

export default Header
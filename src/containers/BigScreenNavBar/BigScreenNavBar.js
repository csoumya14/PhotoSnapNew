import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import { Container, Logo } from './BigScreenNavBar.css';

const NavBarBigScreen = () => {
  return (
    <Container>
      <Link to="/" className="logo-container">
        <Logo src={logo} alt=""></Logo>
      </Link>
      <ul className="menu-big">
        <li className="list-item-big">
          <Link className="link-items-big" to="/stories">
            Stories
          </Link>
        </li>
        <li className="list-item-big">
          <Link className="link-items-big" to="/features">
            features
          </Link>
        </li>
        <li className="list-item-big">
          <Link className="link-items-big" to="/pricing">
            pricing
          </Link>
        </li>
      </ul>
      <button className="invite-button">Get an invite</button>
    </Container>
  );
};

export default NavBarBigScreen;

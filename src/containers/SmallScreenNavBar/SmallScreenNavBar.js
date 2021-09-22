import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import DropDownMenu from '../../components/NavBarDropDownMenu/NavBarDropDownMenu';
import OpenCloseImage from '../../components/NavBarHamburgerCloseImage/HamburgerCloseImage';
import { Container, Logo } from './SmallScreenNavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const wrapKeyHandler = event => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      activatorRef.current.focus();
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const clickOutsideHandler = event => {
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseup', clickOutsideHandler);
      //dropdownListRef.current.querySelector('a').focus();
    } else {
      document.removeEventListener('mouseup', clickOutsideHandler);
    }
    return () => {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen]);

  return (
    <Container>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <nav className="dropdown" onKeyUp={wrapKeyHandler}>
        <OpenCloseImage activatorRef={activatorRef} toggleNav={toggleNav} isOpen={isOpen} />
        {isOpen && <DropDownMenu dropdownListRef={dropdownListRef} toggleNav={toggleNav} />}
      </nav>
    </Container>
  );
};

export default NavBar;

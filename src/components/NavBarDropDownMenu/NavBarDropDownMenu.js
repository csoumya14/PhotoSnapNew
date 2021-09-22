import { Menu, ListItems, LinkItems, InviteButton, Line } from './NavBarDropDownMenu.css';
const DropDownMenu = ({ dropdownListRef, toggleNav }) => {
  return (
    <Menu ref={dropdownListRef} id="dropdown1" tabIndex="-1" className="menu">
      <ListItems>
        <LinkItems to="/stories" onClick={toggleNav}>
          Stories
        </LinkItems>
      </ListItems>
      <ListItems>
        <LinkItems to="/features" onClick={toggleNav}>
          Features
        </LinkItems>
      </ListItems>
      <ListItems>
        <LinkItems to="/pricing" onClick={toggleNav}>
          Pricing
        </LinkItems>
      </ListItems>
      <Line className="line"></Line>
      <InviteButton className="invite-button">Get an invite</InviteButton>
    </Menu>
  );
};

export default DropDownMenu;

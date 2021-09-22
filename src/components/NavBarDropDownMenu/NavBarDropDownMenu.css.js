import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.ul`
  position: absolute;
  top: 3rem;
  transform: translate(-70%);
  border: 1px solid transparent;
  width: 100vw;
  height: 15.813rem;
  background-color: #fff;
  text-align: center;
`;

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const LinkItems = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  color: black;
  letter-spacing: 2.5px;
  margin-bottom: 1.25rem;

  text-transform: uppercase;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
export const Line = styled.div`
  height: 1px;
  width: 19.375rem;
  background: #000;
  opacity: 0.25;
  margin-left: -1rem;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 29.375rem;
  }
`;

export const InviteButton = styled.button`
  width: 19.375rem;
  height: 3rem;
  margin-top: 1.25rem;
  margin-left: -3.5rem;
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
  letter-spacing: 2.5px;
  color: #fff;
  background: #000;
`;

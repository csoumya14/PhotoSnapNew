import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled.ul`
  margin-top: 3.063rem;
  padding-left: 0px;
  list-style-type: none;
  height: 7.563rem;
  @media only screen and (min-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    margin-top: 5rem;
    height: 0px;
    padding-bottom: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    flex-direction: column;
    margin-top: 4rem;
    margin-left: 0px;
  }
`;

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  letter-spacing: 2px;
  height: 1rem;
  &:hover,
  &:focus {
    text-decoration: underline;
    opacity: 0.3;
  }
  @media only screen and (min-width: 768px) {
    height: 4rem;
  }
`;

export const ListItems = styled.li`
  display: block;
  max-width: 100%;
  text-align: center;
`;

/*
display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  */

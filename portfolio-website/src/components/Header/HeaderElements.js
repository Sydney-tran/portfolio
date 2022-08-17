import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0rem;
  width: 100%;
  height: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: white;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  padding-right: 3rem;
  cursor: pointer;
  &:hover {
    color: #F2ACAC;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
`;

export const ResumeBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

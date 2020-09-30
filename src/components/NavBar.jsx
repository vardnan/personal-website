import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 88%;
  height: 55px;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;

  .new-logo {
    padding: 35px;
    padding-bottom: 0;
    color: #000000;
    font-size: 17px;
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    margin-left: 0%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <div className="new-logo">Vardnan Sivarajah</div>
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;

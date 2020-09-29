import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #0000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .navbar-logo {
    padding: 15px 0;
  }
`;

function NavBar() {
  return (
    <Nav>
      <div className="navbar-logo">Vardnan Sivarajah</div>
      <Burger />
    </Nav>
  );
}

export default NavBar;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;

  li {
    padding: 21px 25px;
    color: #000000;
    font-size: 17px;
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    margin-top: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    padding-top: 25%;
    transition: transform 0.4s ease-in-out;
    li {
      color: #fcfcfc;
      font-size: 25px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li id="li-items">Home</li>
      </Link>
      <Link to="/about">
        <li id="li-items">About</li>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/vardnan/"
      >
        <li id="li-items">LinkedIn</li>
      </a>
    </Ul>
  );
};

export default RightNav;

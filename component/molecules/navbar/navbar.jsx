"use client"
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  return (
    <StyleNavbar className="navbar">
      <div className="logo">Logo</div>

      <div className="hamburger">
        <button className="hamburgerMenu">
          <MenuIcon />
        </button>
      </div>
    </StyleNavbar>
  );
};

const StyleNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 30px 0;
  align-items: center;

  .logo {
    padding: 10px 60px;
    border: 1px solid black;
    font-size: 30px;
    font-weight: 600;
  }

  .hamburger {
    .hamburgerMenu {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    svg {
      font-size: 40px;
    }
  }
`;

export default Navbar;

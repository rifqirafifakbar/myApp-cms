"use client";
import styled from "@emotion/styled";
import MenuHamburger from "@/component/atoms/menu/menu";

const Navbar = (props) => {
  return (
    <StyleNavbar
      className={props.isLoginLogout ? "navbar container" : "navbar"}
    >
      <div className="logo">Logo</div>

      {!props.isLoginLogout ? <MenuHamburger /> : ""}
    </StyleNavbar>
  );
};

const StyleNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 30px 0;
  align-items: center;

  &.container {
    padding: 10px 20px;
  }

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

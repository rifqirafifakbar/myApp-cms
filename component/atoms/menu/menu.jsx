import * as React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { setCookie } from "@/src/utils/cookie";
import { setLocalStorage } from "@/src/utils/localstorage";

const MenuHamburger = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const link = (url) => {
    if (url === "/profile" || url === "/") {
      return router.push(url);
    }

    if (url === "/logout") {
        setCookie("");
        setLocalStorage("");
        return router.push("/");
    }

    return router.push(`/profile${url}`);
  };

  return (
    <div>
      <StyleButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </StyleButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => link("/")}>Home</MenuItem>
        <MenuItem onClick={() => link("/profile")}>My profile</MenuItem>
        <MenuItem onClick={() => link("/profile")}>Edit profile</MenuItem>
        <MenuItem onClick={() => link("/logout")}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

const StyleButton = styled(Button)`
  color: black;

  svg {
    font-size: 42px;
  }
`;

export default MenuHamburger;

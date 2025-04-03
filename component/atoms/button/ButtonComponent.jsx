'use client'
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

const CustomButton = styled(Button)`
  background-color: black;
  color:rgb(255, 255, 255);

  &:hover {
    background-color:rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }

  &:active {
    background-color: #0d47a1;
  }

  &:disabled {
    color: #94a3b8;
  }
`;

export default ButtonComponent;

"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

const CustomButton = styled(Button)`
  background-color: black;
  color: rgb(255, 255, 255);
  border-radius: 0;

  &.btn-save {
    background-color: rgb(78, 78, 78);
    color: white;
    &:hover {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }

    &:active {
      background-color: #0d47a1;
    }

    &:disabled {
      color: #94a3b8;
    }
  }

  &.btn-cancel {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    min-width: 150px;

    &:hover {
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    }

    &:disabled {
      color: #94a3b8;
    }
  }

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }

  &:active {
    background-color: #0d47a1;
  }

  &:disabled {
    color: #94a3b8;
  }
`;

export default ButtonComponent;

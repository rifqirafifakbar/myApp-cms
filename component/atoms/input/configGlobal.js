'use client'
import { FormControl } from "@mui/material";
import styled from "@emotion/styled";

export const StyleFormControl = styled(FormControl)`
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;

  label {
    width: 40%;
    justify-content: flex-end;
    margin-right: 15px;
  }

  .MuiInput-root {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 0;
    width: 40%;
  }
`;
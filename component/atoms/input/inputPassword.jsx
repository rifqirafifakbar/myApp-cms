'use client'
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FormControl from '@mui/joy/FormControl';
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { StyleFormControl } from "./configGlobal";
import styled from "@emotion/styled";

const InputPassword = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [Text, setText] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handlerInput = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
  };

  return (
    <StyleFormControl >
      {props.label ? 
        <FormLabel>{props.label}</FormLabel> : ''
      }
      <StyleInput 
        onChange={handlerInput}
        type={showPassword ? "text" : "password"}
        value={Text}
        endDecorator={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </StyleFormControl>
  );
};


const StyleInput = styled(Input)`
  width: 40%;
`;


export default InputPassword;

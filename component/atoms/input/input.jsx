'use client'
import * as React from "react";
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { StyleFormControl } from "./configGlobal";

const InputComponent = (props) => {
  const [text, setText] = React.useState("");

  const handlerInput = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
  };
  return (
    <StyleFormControl {...props}>
      {props.label ? 
        <FormLabel>{props.label}</FormLabel> : ''
      }
      
      <Input onChange={handlerInput}/>
      {/* <StyleFormHelperText>This is a helper text.</StyleFormHelperText> */}
    </StyleFormControl>
  );
};




export default InputComponent;

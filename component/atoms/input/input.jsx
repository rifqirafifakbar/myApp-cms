'use client'
import * as React from "react";
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { StyleFormControl } from "./configGlobal";

const InputComponent = (props) => {

  const handlerInput = (e) => {
    props?.handlerChange(e);
  };

  return (
    <StyleFormControl className={props.className}>
      {props.label ? 
        <FormLabel>{props.label}</FormLabel> : ''
      }
      
      <Input onChange={handlerInput} value={props?.onValue ?? ''} name={props?.name ?? ''} id={props?.id ?? ''}/>
      {/* <StyleFormHelperText>This is a helper text.</StyleFormHelperText> */}
    </StyleFormControl>
  );
};




export default InputComponent;

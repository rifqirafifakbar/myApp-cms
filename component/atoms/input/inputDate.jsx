"use client";
import * as React from "react";
import { StyleFormControl } from "./configGlobal";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import FormLabel from '@mui/joy/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const InputDate = (props) => {
  return (
    <StyleFormControl {...props}>
      {props.label ? <FormLabel>{props.label}</FormLabel> : ""}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimeField
            format="DD/MM/YYYY"
            onChange={(newValue) => props.handlerChange('12/10/1000')}
            className="inputDate"
            name={props.name}
            id={props.id}
        />
      </LocalizationProvider>
    </StyleFormControl>
  );
};

export default InputDate;

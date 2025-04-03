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
        //   value={value}
        //   onChange={(newValue) => setValue(newValue)}
            className="inputDate"
        />
      </LocalizationProvider>
    </StyleFormControl>
  );
};

export default InputDate;

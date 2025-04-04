"use client";
import * as React from "react";
import { StyleFormControl } from "./configGlobal";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import FormLabel from '@mui/joy/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";

const InputDate = (props) => {

  const handlerValueDate = (newValue)=> {
    props.handlerChange(dayjs(newValue).format('DD/MM/YYYY'))
  }

  return (
    <StyleFormControl {...props}>
      {props.label ? <FormLabel>{props.label}</FormLabel> : ""}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimeField
            format="DD/MM/YYYY"
            onChange={handlerValueDate}
            className="inputDate"
            name={props.name}
            id={props.id}
        />
      </LocalizationProvider>
    </StyleFormControl>
  );
};

export default InputDate;

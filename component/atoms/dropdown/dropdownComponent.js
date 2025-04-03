'use client'
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";

const dataDummy = [
  {
    name: 'Select',
    value: '',
  }
];

const DropdownComponent = (props) => {
  const [select, setSelect] = React.useState("");
  const [data, setData] = React.useState(props.data || dataDummy);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <StyleFormControl {...props}>
        {props.label ? 
          <label aria-label="dropdown">
            {props.label}
          </label>
          : ''
        }
        <StyleSelect
          value={select}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          required
        >
          {data.length ? data.map((item,idx) => {
            return (
              <StyleMenuItem value={item.value} key={idx}>{item.name}</StyleMenuItem>
            )
          }) : ''}
        </StyleSelect>
      </StyleFormControl>
    </>
  );
};

const StyleFormControl = styled(FormControl)`
  width: 100%;
  label {
    margin-bottom: 10px;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }
`;

const StyleSelect = styled(Select)`
  color: black;
  max-height: 40px;
  border-radius: 0;
  border: 1px solid black;

  .MuiInputBase-input {
    max-height: 40px;
    display: flex;

    svg {
      margin-right: 10px;
    }
  }
`;

const StyleMenuItem = styled(MenuItem)`
  color: black;
  padding: 10px 20px;

  svg {
    margin-right: 10px;
  }
`;


export default DropdownComponent;

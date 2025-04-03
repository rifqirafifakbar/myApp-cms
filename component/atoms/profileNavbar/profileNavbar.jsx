'use client'
import * as React from "react";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styled from "@emotion/styled";
import { StyleFormControl } from "../input/configGlobal";


const ProfileNavbar = (props) => {

  const handlerInput = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
  };



  return (
    <>
      <p> anjing emang ul li anmak setan pusing anak anjing masa sih ini bisa hot reload anak anjing</p>

    </>
  );
};



const StyleFormHelperText = styled(FormHelperText)`
  width: 100%;
`;


export default ProfileNavbar;



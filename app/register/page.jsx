"use client";
import "../global.scss";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import InputComponent from "@/component/atoms/input/input";
import InputPassword from "@/component/atoms/input/inputPassword";
import styled from "@emotion/styled";
import React from "react";
import { useFormik } from "formik";
import { useRegisterData } from "@/src/utils/axiosConfig";

export default function Login() {
  const router = useRouter();

  const [isWarning, setIsWarning] = React.useState(false);
  const loginData = async (values) =>{
    const response = await useRegisterData(values);
    if (response){
      return router.push("/login");
    }else {
      setIsWarning(true);

      setTimeout(() => {
        setIsWarning(false);
      }, 3000);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginData(values);
    },
  });

  return (
    <StyledivLoginPage className="loginPage">
      <div className="loginWrapper">
        <span className="title">
          Welcome to my <strong>myApp</strong>
        </span>
        <form onSubmit={formik.handleSubmit}>
          <InputComponent
            label="User ID*"
            handlerChange={formik.handleChange}
            onValue={formik.values.email}
            name={"email"}
            id={"email"}
          />
          <InputPassword
            label="Password*"
            handlerChange={formik.handleChange}
            onValue={formik.values.password}
            name={"password"}
            id={"password"}
          />

          <ButtonComponent className="btn-login" type="submit">
            Register
          </ButtonComponent>
        </form>

        <span>
          Have account ? <Link href="/login">Login here</Link>{" "}
        </span>
      </div>

      {isWarning ? 
      
        <div className="error animateOpen">
          <span>Error data</span>
        </div> : ''
      }
    </StyledivLoginPage>
  );
}

const StyledivLoginPage = styled.div`
  .loginWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
  }
  
  .error {
    position: absolute;
    bottom: -88px;
    padding: 30px;
    background-color: red;
    color: white;
    border-top-left-radius: 30px 30px;
    border-top-right-radius: 30px 30px;

    &.animateOpen{
      -webkit-animation:moveOpen 4s;
      -webkit-animation-fill-mode: forwards;
    }

    /* Safari and Chrome */
    @-webkit-keyframes moveOpen 
      {
      from {-webkit-transform: translate(0, 0px);}
      10% {-webkit-transform: translate(0,-80px);}
      12% {-webkit-transform: translate(0,-82px);}
      16% {-webkit-transform: translate(0,-84px);}
      80% {-webkit-transform: translate(0,-86px);}
      85% {-webkit-transform: translate(0,-88px);}
      to {-webkit-transform: translate(0, 0px);}
    }
  }

  .CheckboxWrapper {
    margin: 25px 20px 25px 0;

    label {
      margin-left: 20px;
    }
  }

  .btn-login {
    width: 25%;
    margin-bottom: 20px;
  }

  span {
    display: block;

    a {
      text-decoration: underline;
    }
  }
`;

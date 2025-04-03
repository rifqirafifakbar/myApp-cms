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
import { setCookie } from "@/src/utils/cookie";
import { setLocalStorage } from "@/src/utils/localstorage";
import { API_APLICATION_ID, API_KEY, BACKEND_PUBLIC_API_BASE_URL } from "@/src/utils/api";

export default function Login() {
  const router = useRouter();
  const [email, isEmail] = React.useState(0);
  const [password, isPassword] = React.useState("");

  const handlerRegister= async () => {
    const data = {
      "email": email,
      "password": password,
    }

    try {
      const response = await axios.post(`${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/register`, data);
      
      if(response.status === 200) {
        return  router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }    
  };


  return (
    <StyledivLoginPage className="loginPage">
      <div className="registerWrapper">
        <span className="title">
          Welcome to my <strong>myApp</strong>
        </span>
        <InputComponent label="User ID*" handlerChange={isEmail} value={email} />
        <InputPassword
          label="Password*"
          handlerChange={isPassword}
          value={password}
        />

        <ButtonComponent className="btn-login" onClick={() => handlerRegister()}>
          Register
        </ButtonComponent>

        <span>
          Have account ? <Link href="/login">Login here</Link>{" "}
        </span>
      </div>
    </StyledivLoginPage>
  );
}

const StyledivLoginPage = styled.div`
  .registerWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
    
  .btn-login {
    width: 25%;
    margin: 20px 0;
  }

  span {
    display: block;

    a {
      text-decoration: underline;
    }
  }
`;

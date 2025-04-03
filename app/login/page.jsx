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

export default function Login() {
  const router = useRouter();
  const [email, isEmail] = React.useState(0);
  const [password, isPassword] = React.useState("");

  process.env.BACKEND_PUBLIC_API_BASE_URL

  const handlerLogin = async () => {
    const data = {
      "login": email,
      "password": password,
    }

    try {
      const response = await axios.post(`https://api.backendless.com/E9CD262C-3DC6-48EE-B5CC-FCF044E3CE94/33513148-B3F6-491D-9033-344F76DE21D3/users/login`, data);
      
      if(response.status === 200) {
        const {data} = response;
        setCookie(data['user-token']);
        setLocalStorage(data['objectId'])
        return  router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    }    
  };


  return (
    <StyledivLoginPage className="loginPage">
      <div className="loginWrapper">
        <span className="title">
          Welcome to my <strong>myApp</strong>
        </span>
        <InputComponent label="User ID*" handlerChange={isEmail} value={email} />
        <InputPassword
          label="Password*"
          handlerChange={isPassword}
          value={password}
        />

        <div className="CheckboxWrapper">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>

        <ButtonComponent className="btn-login" onClick={() => handlerLogin()}>
          Login
        </ButtonComponent>

        <span>
          No account ? <Link href="/Register">Register here</Link>{" "}
        </span>
      </div>
    </StyledivLoginPage>
  );
}

const StyledivLoginPage = styled.div`
  .CheckboxWrapper {
    margin: 25px 20px 25px 0;
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

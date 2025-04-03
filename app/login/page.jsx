'use client'
import  "../global.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import InputComponent from "@/component/atoms/input/input";
import InputPassword from "@/component/atoms/input/inputPassword";
import styled from "@emotion/styled";

export default function Login() {
  const router = useRouter();

  const handlerLogin = () => {
    return  router.push("/profile");
  }

  return (
    <StyledivLoginPage className="loginPage">
      <div className="loginWrapper">
        <span className="title">Welcome to my <strong>myApp</strong></span>
        <InputComponent label="User ID*"/>
        <InputPassword label="Password*" />
        
        <div className="CheckboxWrapper">
          <input type="checkbox" name="checkbox" id="checkbox"/>
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>

        <ButtonComponent className="btn-login" onClick={()=> handlerLogin()}>Login</ButtonComponent>

        <span>No account ? <Link href="/Register">Register here</Link> </span>
      </div>
    </StyledivLoginPage>
  );
}

const StyledivLoginPage = styled.div`
  .CheckboxWrapper {
    margin: 25px 20px 25px 0 ;
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

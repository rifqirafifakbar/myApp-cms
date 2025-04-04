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

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Please select your password";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Login() {
  const router = useRouter();
  const [isWarning, setIsWarning] = React.useState(false);
  const [setTextError, isSetTextError] = React.useState('');

  const loginData = async (values) => {
    const response = await useRegisterData(values);
    if (response.status === 200) {
      return router.push("/login");
    } else {
      setIsWarning(true);
      isSetTextError(response.response.data.message);

      setTimeout(() => {
        setIsWarning(false);
      }, 3000);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
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

          {formik.touched.email && formik.errors.email ? (
            <div className="error-msg">{formik.errors.email}</div>
          ) : null}
          {formik.touched.password && formik.errors.password ? (
            <div className="error-msg">{formik.errors.password}</div>
          ) : null}
          <ButtonComponent className="btn-login" type="submit">
            Register
          </ButtonComponent>
        </form>

        <span>
          Have account ? <Link href="/login">Login here</Link>{" "}
        </span>
      </div>

      {isWarning ? (
        <div className="error animateOpen">
          <span>{setTextError}</span>
        </div>
      ) : (
        ""
      )}
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

    .error-msg {
      color: red;
      margin-bottom: 10px;
    }
  }

  .error {
    position: absolute;
    bottom: -88px;
    padding: 30px;
    background-color: red;
    color: white;
    border-top-left-radius: 30px 30px;
    border-top-right-radius: 30px 30px;

    &.animateOpen {
      -webkit-animation: moveOpen 4s;
      -webkit-animation-fill-mode: forwards;
    }

    /* Safari and Chrome */
    @-webkit-keyframes moveOpen {
      from {
        -webkit-transform: translate(0, 0px);
      }
      10% {
        -webkit-transform: translate(0, -80px);
      }
      12% {
        -webkit-transform: translate(0, -82px);
      }
      16% {
        -webkit-transform: translate(0, -84px);
      }
      80% {
        -webkit-transform: translate(0, -86px);
      }
      85% {
        -webkit-transform: translate(0, -88px);
      }
      to {
        -webkit-transform: translate(0, 0px);
      }
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

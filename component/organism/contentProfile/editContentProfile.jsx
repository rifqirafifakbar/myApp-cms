"use client";
import * as React from "react";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import useDataStore from "@/src/store/dataStore";
import { useFormik } from "formik";
import { usePostData } from "@/src/utils/axiosConfig";

const dataDropdown = [
  {
    name: "Select salutation",
    value: "",
    icon: "",
  },
  {
    name: "Mr",
    value: "Mr",
  },
  {
    name: "Mrs",
    value: "Mrs",
  },
  {
    name: "Ms",
    value: "Ms",
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Please select your first name";
  }

  if (!values.lastName) {
    errors.lastName = "Please select your last name";
  }

  if (!values.email) {
    errors.email = "Please select your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.salutation) {
    errors.salutation = "Please select your salutation";
  }

  return errors;
};

const EditContentProfile = (props) => {
  const { setData } = useDataStore();

  const postData = async (values) =>{
    const response = await usePostData(values);
    if (response){
      setData(response);
      props?.setIsEdit(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      salutation: "",
    },
    validate,
    onSubmit: (values) => {
      postData(values);
    },
  });

  return (
    <StyleContentProfileWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="imageWrapper">
          <div className="image"></div>
          <div className="attachWrapper">
            <label htmlFor="attachment">Upload image</label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>

        <div className="details">
          <div
            className={`${
              formik.errors.salutation
                ? "details-profile error"
                : "details-profile"
            }`}
          >
            <DropdownComponent
              label="Salutation*"
              data={dataDropdown}
              handlerChange={formik.handleChange}
              onValue={formik.values.salutation}
              name={"salutation"}
              id={"salutation"}
            />
            {formik.errors.salutation ? (
              <span className="error-msg">{formik.errors.salutation}</span>
            ) : null}
          </div>
          <div
            className={`${
              formik.errors.firstName
                ? "details-profile error"
                : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="First name*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.firstName}
              name={"firstName"}
              id={"firstName"}
            />
            {formik.errors.firstName ? (
              <span className="error-msg">{formik.errors.firstName}</span>
            ) : null}
          </div>
          <div
            className={`${
              formik.errors.lastName
                ? "details-profile error"
                : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="Last name*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.lastName}
              name={"lastName"}
              id={"lastName"}
            />
            {formik.errors.lastName ? (
              <span className="error-msg">{formik.errors.lastName}</span>
            ) : null}
          </div>
          <div
            className={`${
              formik.errors.email ? "details-profile error" : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="Email address*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.email}
              name={"email"}
              id={"email"}
            />
            {formik.errors.email ? (
              <span className="error-msg">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="buttonWrapper">
            <ButtonComponent className="btn-save" type="submit">
              SAVE & UPDATE
            </ButtonComponent>
            <ButtonComponent className="btn-cancel" onClick={(e)=> props.setIsEdit(false)}>CANCEL</ButtonComponent>
          </div>

          <span className="mandatory">* mandatory field</span>
        </div>
      </form>
    </StyleContentProfileWrapper>
  );
};

const StyleContentProfileWrapper = styled.div`
  text-align: left;
  display: flex;

  .buttonWrapper {
    margin-bottom: 30px;
    .btn-save {
      margin-right: 10px;
    }
  }

  .mandatory {
    font-size: 14px;
    font-style: italic;
  }

  .imageWrapper {
    .image {
      background-image: url("/profile.png");
      width: 100px;
      height: 100px;
      background-size: cover;
      margin-right: 50px;
    }

    .attachWrapper {
      position: relative;

      label {
        text-decoration: underline;
        cursor: pointer;
      }

      input {
        opacity: 0;
        position: absolute;
        top: 0;
      }
    }
  }

  .details {
    .details-profile {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      &.error {
        .error-msg {
          margin-top: 5px;
          color: red;
        }

        fieldset,
        .MuiInputBase-root,
        .MuiInput-root {
          border: 1px solid red;
        }
      }

      .title {
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
`;

export default EditContentProfile;

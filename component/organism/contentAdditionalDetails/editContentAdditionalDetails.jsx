"use client";
import * as React from "react";
import styled from "@emotion/styled";
import useDataStore from "@/src/store/dataStore";
import { useFormik } from "formik";
import { usePostData } from "@/src/utils/axiosConfig";
import InputComponent from "@/component/atoms/input/input";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import InputDate from "@/component/atoms/input/inputDate";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";

const data = [
  {
    name: "Marital status",
    value: "",
    icon: "",
  },
  {
    name: "Single",
    value: "single",
  },
  {
    name: "Married",
    value: "married",
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.address) {
    errors.address = "Please select your address";
  }

  if (!values.country) {
    errors.country = "Please select your country";
  }

  if (!values.postal_code) {
    errors.postal_code = "Please select your postal code";
  }

  return errors;
};

const EditContentAdditionalDetails = (props) => {
  const { setData } = useDataStore();

  const postData = async (values) => {
    const response = await usePostData(values);
    if (response) {
      setData(response);
      props?.setIsEdit(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      country: "",
      postal_code: "",
      birth_date: "",
      martial_status: "",
    },
    validate,
    onSubmit: (values) => {
      postData(values);
    },
  });

  return (
    <StyleContentProfileWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="details">
          <div
            className={`${
              formik.errors.address ? "details-profile error" : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="Home address*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.address}
              name={"address"}
              id={"address"}
            />
            {formik.errors.address ? (
              <span className="error-msg">{formik.errors.address}</span>
            ) : null}
          </div>
          <div
            className={`${
              formik.errors.country ? "details-profile error" : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="Country*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.country}
              name={"country"}
              id={"country"}
            />
            {formik.errors.country ? (
              <span className="error-msg">{formik.errors.country}</span>
            ) : null}
          </div>
          <div
            className={`${
              formik.errors.postal_code ? "details-profile error" : "details-profile"
            }`}
          >
            <InputComponent
              className="flex"
              label="Postal code*"
              required="true"
              handlerChange={formik.handleChange}
              onValue={formik.values.postal_code}
              name={"postal_code"}
              id={"postal_code"}
            />
            {formik.errors.postal_code ? (
              <span className="error-msg">{formik.errors.postal_code}</span>
            ) : null}
          </div>
          <div className="details-profile">
            <InputDate
              className="flex"
              label="Date of birth"
              handlerChange={formik.handleChange}
              onValue={formik.values.birth_date}
              name={"birth_date"}
              id={"birth_date"}
            />
          </div>
          <div className="details-profile">
            <DropdownComponent
              label="Marital status"
              data={data}
              handlerChange={formik.handleChange}
              onValue={formik.values.martial_status}
              name={"martial_status"}
              id={"martial_status"}
            />
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

export default EditContentAdditionalDetails;

"use client";
import * as React from "react";
import useDataStore from "@/src/store/dataStore";
import { useFormik } from "formik";
import { usePostData } from "@/src/utils/axiosConfig";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";

const data = [
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

const EditContentSpouseDetails = (props) => {
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
      spouse_salutation: "",
      spouse_first_name: "",
      spouse_last_name: "",
    },
    onSubmit: (values) => {
      postData(values);
    },
  });

  return (
    <StyleContentProfileWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="details">
          <div className="details-profile">
            <DropdownComponent
              label="Salutation"
              data={data}
              handlerChange={formik.handleChange}
              onValue={formik.values.spouse_salutation}
              name={"spouse_salutation"}
              id={"spouse_salutation"}
            />
          </div>
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="First name"
              handlerChange={formik.handleChange}
              onValue={formik.values.spouse_first_name}
              name={"spouse_first_name"}
              id={"spouse_first_name"}
            />
          </div>
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="Last name"
              handlerChange={formik.handleChange}
              onValue={formik.values.spouse_last_name}
              name={"spouse_last_name"}
              id={"spouse_last_name"}
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

      .title {
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
`;

export default EditContentSpouseDetails;

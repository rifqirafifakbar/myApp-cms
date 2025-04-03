"use client";
import * as React from "react";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import InputDate from "@/component/atoms/input/inputDate";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";

const data= [
  {
    name: 'Marital status',
    value: '',
    icon: '',
  },
  {
    name: 'Single',
    value: 'single',
  },
  {
    name: 'Married',
    value: 'married',
  },
];

const EditContentAdditionalDetails = (props) => {
  return (
    <StyleContentProfileWrapper>
      <div className="details">
        <div className="details-profile">
          <InputComponent className="flex" label="Home address*" required="true" />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Country*" required="true" />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Postal code*" required="true" />
        </div>
        <div className="details-profile">
          <InputDate className="flex" label="Date of birth" />
        </div>
        <div className="details-profile">
          <DropdownComponent label="Marital status*" data={data}/>
        </div>


        <div className="buttonWrapper">
          <ButtonComponent className="btn-save">SAVE & UPDATE</ButtonComponent>
          <ButtonComponent className="btn-cancel">CANCEL</ButtonComponent>
        </div>

        <span className="mandatory">* mandatory field</span>
      </div>
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

export default EditContentAdditionalDetails;

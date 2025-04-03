"use client";
import * as React from "react";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";


const EditContentPersonalPreferences= (props) => {
  return (
    <StyleContentProfileWrapper>
      <div className="details">
        <div className="details-profile">
          <InputComponent className="flex" label="Hobbies and interests" />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Favorite sport" />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Preferred music genre" />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Preferred movie/TV show" />
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

export default EditContentPersonalPreferences;

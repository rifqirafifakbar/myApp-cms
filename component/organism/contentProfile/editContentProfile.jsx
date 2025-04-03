"use client";
import * as React from "react";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import DropdownComponent from "@/component/atoms/dropdown/dropdownComponent";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";

const EditContentProfile = (props) => {
  return (
    <StyleContentProfileWrapper>
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
        <div className="details-profile">
          <DropdownComponent label="Salutation*" />
        </div>
        <div className="details-profile">
          <InputComponent
            className="flex"
            label="First name*"
            required="true"
          />
        </div>
        <div className="details-profile">
          <InputComponent className="flex" label="Last name*" required="true" />
        </div>
        <div className="details-profile">
          <InputComponent
            className="flex"
            label="Email address*"
            required="true"
          />
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

      .title {
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
`;

export default EditContentProfile;

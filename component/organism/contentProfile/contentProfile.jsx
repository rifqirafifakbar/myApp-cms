"use client";
import * as React from "react";
import styled from "@emotion/styled";

const ContentProfile = (props) => {
  const {data} = props;
  return (
    <StyleContentProfileWrapper>
      <div className="image"></div>
      <div className="details">
        <div className="details-profile">
          <span className="title">Salutation*</span>
          <span className="content">{data.salutation}</span>
        </div>
        <div className="details-profile">
          <span className="title">First name*</span>
          <span className="content">{data.firstName}</span>
        </div>
        <div className="details-profile">
          <span className="title">Last name</span>
          <span className="content">{data.lastName}</span>
        </div>
        <div className="details-profile">
          <span className="title">Email address*</span>
          <span className="content">{data.email}</span>
        </div>
      </div>
    </StyleContentProfileWrapper>
  );
};

const StyleContentProfileWrapper = styled.div`
    text-align: left;
    display: flex;

    .image {
      background-image: url("/profile.png");
      width: 100px;
      height: 100px;
      background-size: cover;
      margin-right: 50px;
    }

    .details {
      .details-profile {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

        .title {
          font-weight: 600;
          display: block;
          margin-bottom: 10px;
        }
      }
    }
`;


export default ContentProfile;

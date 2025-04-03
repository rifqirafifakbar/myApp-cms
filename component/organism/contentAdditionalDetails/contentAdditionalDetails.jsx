"use client";
import * as React from "react";
import styled from "@emotion/styled";

const ContentAdditionalDetails = (props) => {
  const {data} = props;

  return (
    <StyleContentProfileWrapper>
      <div className="details">
        <div className="details-profile">
          <span className="title">Home address*</span>
          <span className="content">{data?.address ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">Country*</span>
          <span className="content">{data?.country  ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">Postal code*</span>
          <span className="content">{data?.postal_code ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">Date of birth</span>
          <span className="content">{data?.birth_date ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">Marital status</span>
          <span className="content">{data?.martial_status ?? ''}</span>
        </div>
      </div>
    </StyleContentProfileWrapper>
  );
};

const StyleContentProfileWrapper = styled.div`
  text-align: left;
  display: flex;

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

export default ContentAdditionalDetails;

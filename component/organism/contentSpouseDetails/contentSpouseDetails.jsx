"use client";
import * as React from "react";
import styled from "@emotion/styled";

const ContentSpouseDetails = (props) => {
  const {data} = props;

  return (
    <StyleContentProfileWrapper>
      <div className="details">
        <div className="details-profile">
          <span className="title">Salutation</span>
          <span className="content">{data?.spouse_salutation ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">First name</span>
          <span className="content">{data?.spouse_first_name ?? ''}</span>
        </div>
        <div className="details-profile">
          <span className="title">Last name</span>
          <span className="content">{data?.spouse_last_name ?? ''}</span>
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

export default ContentSpouseDetails;

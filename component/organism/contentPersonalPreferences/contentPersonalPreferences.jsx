"use client";
import * as React from "react";
import styled from "@emotion/styled";

const ContentPersonalPreferences = (props) => {
  return (
    <StyleContentProfileWrapper>
      <div className="details">
        <div className="details-profile">
          <span className="title">Hobbies and interests</span>
          <span className="content">Mr</span>
        </div>
        <div className="details-profile">
          <span className="title">Favorite sport</span>
          <span className="content">John</span>
        </div>
        <div className="details-profile">
          <span className="title">Preferred music genre</span>
          <span className="content">Mr</span>
        </div>
        <div className="details-profile">
          <span className="title">Preferred movie/TV show</span>
          <span className="content">Mr</span>
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

export default ContentPersonalPreferences;

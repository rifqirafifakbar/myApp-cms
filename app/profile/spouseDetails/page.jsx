"use client";

import * as React from "react";
import "../../global.scss";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import MyProfileSection from "@/component/molecules/myProfile/myProfile";
import EditContentSpouseDetails from "@/component/organism/contentSpouseDetails/editContentSpouseDetails";
import ContentSpouseDetails from "@/component/organism/contentSpouseDetails/contentSpouseDetails";
import { useFetchUserData } from "@/src/utils/axiosConfig";
import Sidebar from "@/component/atoms/sidebar/sidebar";
import { mq } from "@/styles/breakpoint";
import { checkUserLogin } from "@/src/utils/checkId";

export default function Profile() {
  const [isEdit, setIsEdit] = React.useState(false);
  useFetchUserData();
  checkUserLogin();
  return (
    <StyledivProfilePage className="spouseDetails container">
      <Navbar />
      <MyProfileSection isEdit={isEdit} setIsEdit={setIsEdit} />

      <StyleProfileWrapper className="profileWrapper">
        <Sidebar linkActive={"/spouseDetails"} />
        {isEdit ? (
          <EditContentSpouseDetails setIsEdit={setIsEdit} />
        ) : (
          <ContentSpouseDetails />
        )}
      </StyleProfileWrapper>
    </StyledivProfilePage>
  );
}

const StyledivProfilePage = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  flex-direction: column;
`;

const StyleProfileWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 50px;

  ${mq["mobile"]} {
    flex-direction: column;
  }

  .contentProfileWrapper {
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
  }
`;

"use client";

import * as React from "react";
import "../global.scss";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import ContentProfile from "@/component/organism/contentProfile/contentProfile";
import EditContentProfile from "@/component/organism/contentProfile/editContentProfile";
import MyProfileSection from "@/component/molecules/myProfile/myProfile";
import { useFetchUserData } from "@/src/utils/axiosConfig";
import Sidebar from "@/component/atoms/sidebar/sidebar";
import { mq } from "@/styles/breakpoint";
import { checkUserLogin } from "@/src/utils/checkId";

export default function Profile() {
  const [isEdit, setIsEdit] = React.useState(false);
  useFetchUserData();
  checkUserLogin();
  
  return (
    <StyledivProfilePage className="ProfilePage container">
      <Navbar />
      <MyProfileSection setIsEdit={setIsEdit} isEdit={isEdit} />

      <StyleProfileWrapper className="profileWrapper">
        <Sidebar linkActive={"/profile"} />

        {isEdit ? (
          <EditContentProfile setIsEdit={setIsEdit} />
        ) : (
          <ContentProfile />
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
`;

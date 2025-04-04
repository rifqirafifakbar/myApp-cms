'use client'

import * as React from "react";
import "../../global.scss";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import { useRouter } from 'next/navigation';
import MyProfileSection from "@/component/molecules/myProfile/myProfile";
import EditContentAdditionalDetails from "@/component/organism/contentAdditionalDetails/editContentAdditionalDetails";
import ContentAdditionalDetails from "@/component/organism/contentAdditionalDetails/contentAdditionalDetails";
import { useFetchUserData } from "@/src/utils/axiosConfig";
import Sidebar from "@/component/atoms/sidebar/sidebar";
import { mq } from "@/styles/breakpoint";
import { checkUserLogin } from "@/src/utils/checkId";


export default function Profile() {
  const router = useRouter();
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState(false);
  useFetchUserData();
  checkUserLogin();

  return (
    <StyledivAdditionalDetails className="additionalDetails container">
      <Navbar />
      <MyProfileSection isEdit={isEdit} setIsEdit={setIsEdit} />

      <StyleProfileWrapper className="profileWrapper">
        <Sidebar linkActive={'/additionalDetails'} />

        {isEdit ? 
          <EditContentAdditionalDetails setIsEdit={setIsEdit}/>
          : 
          <ContentAdditionalDetails/>
        }
      </StyleProfileWrapper>
    </StyledivAdditionalDetails>
  );
}

const StyledivAdditionalDetails = styled.div`
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

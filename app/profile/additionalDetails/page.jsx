'use client'

import * as React from "react";
import "../../global.scss";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import { mq } from "@/styles/breakpoint";
import { useRouter } from 'next/navigation';
import MyProfileSection from "@/component/molecules/myProfile/myProfile";
import EditContentAdditionalDetails from "@/component/organism/contentAdditionalDetails/editContentAdditionalDetails";
import ContentAdditionalDetails from "@/component/organism/contentAdditionalDetails/contentAdditionalDetails";


export default function Profile() {
  const router = useRouter();
  const [isEdit, setIsEdit] = React.useState(false);

  const link = url => {
    if(url === '/profile') {
      return router.push(url);
    }
    return  router.push(`/profile${url}`);
  }

  return (
    <StyledivProfilePage className="ProfilePage container">
      <Navbar />
      <MyProfileSection isEdit={isEdit} setIsEdit={setIsEdit} />

      <StyleProfileWrapper className="profileWrapper">

        <StyleProfile>
          <ul>
            <li>
              <span onClick={() => link('/profile')}>Basic Details</span> 
            </li>
            <li className="active">
              <span onClick={() => link('/additionalDetails')}>Additional Details</span>
            </li>
            <li>
              <span onClick={() => link('/spouseDetails')}>Spouse Details</span>
            </li>
            <li>
              <span onClick={() => link('/personalPreferences')}>Personal Preferences</span>
            </li>
          </ul>
        </StyleProfile>

        {isEdit ? 
          <EditContentAdditionalDetails />
          : 
          <ContentAdditionalDetails />
        }
      </StyleProfileWrapper>
    </StyledivProfilePage>
  );
}

const StyleProfile= styled.div`
  width: 30%;
  text-align: justify;

  ul {
    list-style-type: none;

    li {
      padding: 10px 0;
      border-bottom: 1px solid black;
      cursor: pointer;

      span {
        padding: 20px 0;
      }

      &.active {
        border-bottom: 2px solid black;
        font-weight: 600;
      }
    }

    li:first-of-type {
      border-top: 1px solid black;
    }
  }
`;

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

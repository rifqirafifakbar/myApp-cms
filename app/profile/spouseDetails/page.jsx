'use client'

import * as React from "react";
import "../../global.scss";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import { mq } from "@/styles/breakpoint";
import { useRouter } from 'next/navigation';
import MyProfileSection from "@/component/molecules/myProfile/myProfile";
import EditContentSpouseDetails from "@/component/organism/contentSpouseDetails/editContentSpouseDetails";
import ContentSpouseDetails from "@/component/organism/contentSpouseDetails/contentSpouseDetails";


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
            <li>
              <span onClick={() => link('/additionalDetails')}>Additional Details</span>
            </li>
            <li className="active">
              <span onClick={() => link('/spouseDetails')}>Spouse Details</span>
            </li>
            <li>
              <span onClick={() => link('/personalPreferences')}>Personal Preferences</span>
            </li>
          </ul>
        </StyleProfile>

        {isEdit ? 
          <EditContentSpouseDetails />
          : 
          <ContentSpouseDetails />
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

const StyleMyProfile = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;

  .edit-profile {
    background-color: transparent;
    border: none;
    display: block;
    text-decoration: underline;
    padding-top: 10px;
    cursor: pointer;
  }

  .myProfileWrapper {
    display: flex;
    width: 60%;
    margin-right: 30px;
    h1 {
      width: 34%;
      font-weight: 200;
      font-size: 48px;

      ${mq['tablet']} {
        width: 60%;
      }

      ${mq['mobile']} {
        width: 60%;
      }

    }

    .squareAssets {
      border-bottom: 5px solid black;
      width: 77%;
      ${mq['tablet']} {
        width: 40%;
      }
    }
  }
`;

"use client";

import * as React from "react";
import "../global.scss";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";
import Navbar from "@/component/molecules/navbar/navbar";
import { mq } from "@/styles/breakpoint";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";
import ContentProfile from "@/component/organism/contentProfile/contentProfile";
import EditContentProfile from "@/component/organism/contentProfile/editContentProfile";
import MyProfileSection from "@/component/molecules/myProfile/myProfile";

export default function Profile() {
  const router = useRouter();
  const [section, setIsSection] = React.useState(0);
  const [isEdit, setIsEdit] = React.useState(false);

  const link = (url) => {
    if (url === "/profile") {
      return router.push(url);
    }
    return router.push(`/profile${url}`);
  };

  return (
    <StyledivProfilePage className="ProfilePage container">
      <Navbar />
      <MyProfileSection setIsEdit={setIsEdit} isEdit={isEdit}/>

      <StyleProfileWrapper className="profileWrapper">
        <StyleProfile>
          <ul>
            <li className={section === 0 ? "active" : ""}>
              <span onClick={() => link("/profile")}>Basic Details</span>
            </li>
            <li className={section === 1 ? "active" : ""}>
              <span onClick={() => link("/additionalDetails")}>
                Additional Details
              </span>
            </li>
            <li className={section === 2 ? "active" : ""}>
              <span onClick={() => link("/spouseDetails")}>Spouse Details</span>
            </li>
            <li className={section === 3 ? "active" : ""}>
              <span onClick={() => link("/personalPreferences")}>
                Personal Preferences
              </span>
            </li>
          </ul>
        </StyleProfile>

        {isEdit ? 
          <EditContentProfile />
          : 
          <ContentProfile />
        }

      </StyleProfileWrapper>
    </StyledivProfilePage>
  );
}

const StyleProfile = styled.div`
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

`;


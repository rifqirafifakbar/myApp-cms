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
import axios from "axios";
import { getLocalStorage } from "@/src/utils/localstorage";

export default function Profile() {
  const router = useRouter();
  const [section, setIsSection] = React.useState(0);
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState(false);

  const link = (url) => {
    if (url === "/profile") {
      return router.push(url);
    }
    return router.push(`/profile${url}`);
  };

  const getData = async () => {
    const id = getLocalStorage(); 

    try {
      const response = await axios.get(`https://api.backendless.com/E9CD262C-3DC6-48EE-B5CC-FCF044E3CE94/33513148-B3F6-491D-9033-344F76DE21D3/users/${id}`);
      if(response.status === 200) {
        const {data} = response;
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }    
  }

  React.useEffect(() => {
    getData();
  },[])

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
          <EditContentProfile data={data}/>
          : 
          <ContentProfile data={data}/>
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


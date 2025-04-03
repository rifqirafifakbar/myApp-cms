"use client"
import { mq } from "@/styles/breakpoint";
import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

const MyProfileSection = (props) => {
  return (
    <StyleMyProfile className="myProfile">
    <div className="myProfileWrapper">
      <h1>
        {props.isEdit ? <>Edit</>:<>My</> } <strong>Profile</strong>
      </h1>
      <div className="squareAssets"></div>
    </div>
    <button className="edit-profile" onClick={() => props.setIsEdit(!props.isEdit)}>
      {props.isEdit ? (
        <>
          <ArrowBackIosIcon /> Go back to My Profile
        </>
      ) : (
        <>
          Edit profile <EditIcon />
        </>
      )}
    </button>
  </StyleMyProfile>
  );
};

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
    display: flex;
    align-items: center;
  }

  .myProfileWrapper {
    display: flex;
    width: 60%;
    margin-right: 30px;
    h1 {
      width: 34%;
      font-weight: 200;
      font-size: 48px;

      ${mq["tablet"]} {
        width: 60%;
      }

      ${mq["mobile"]} {
        width: 60%;
      }
    }

    .squareAssets {
      border-bottom: 5px solid black;
      width: 77%;
      ${mq["tablet"]} {
        width: 40%;
      }
    }
  }
`;


export default MyProfileSection;

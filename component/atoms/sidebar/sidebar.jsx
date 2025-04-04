"use client";

import * as React from "react";
import styled from "@emotion/styled";
import useDataStore from "@/src/store/dataStore";
import { useRouter } from "next/navigation";
import { mq } from "@/styles/breakpoint";

const Sidebar = (props) => {
  const { data } = useDataStore();
  const router = useRouter();
  const link = (url) => {
    if (url === "/profile") {
      return router.push(url);
    }
    return router.push(`/profile${url}`);
  };

  return (
    <StyleProfile>
      <ul>
        <li className={props.linkActive === "/profile" ? "active" : ""}>
          <span onClick={() => link("/profile")}>Basic Details</span>
        </li>
        <li
          className={props.linkActive === "/additionalDetails" ? "active" : ""}
        >
          <span onClick={() => link("/additionalDetails")}>
            Additional Details
          </span>
        </li>
        {data.martial_status === "Single" || data.martial_status === 'single' || !data.martial_status ? (
          ""
        ) : (
          <li className={props.linkActive === "/spouseDetails" ? "active" : ""}>
          <span onClick={() => link("/spouseDetails")}>Spouse Details</span>
        </li>
        )}
        <li
          className={
            props.linkActive === "/personalPreferences" ? "active" : ""
          }
        >
          <span onClick={() => link("/personalPreferences")}>
            Personal Preferences
          </span>
        </li>
      </ul>
    </StyleProfile>
  );
};

const StyleProfile = styled.div`
  width: 30%;
  text-align: justify;

  ${mq["mobile"]} {
    width: 100%;
  }

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

export default Sidebar;

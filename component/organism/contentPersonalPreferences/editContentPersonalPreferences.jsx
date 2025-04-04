"use client";
import * as React from "react";
import styled from "@emotion/styled";
import InputComponent from "@/component/atoms/input/input";
import ButtonComponent from "@/component/atoms/button/ButtonComponent";
import useDataStore from "@/src/store/dataStore";
import { useFormik } from "formik";
import { usePostData } from "@/src/utils/axiosConfig";

const EditContentPersonalPreferences = (props) => {
  const { setData } = useDataStore();

  const postData = async (values) => {
    const response = await usePostData(values);
    if (response) {
      setData(response);
      props?.setIsEdit(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      hobbies_interest: "",
      favorite_sport: "",
      music_genre: "",
      movie: "",
    },
    onSubmit: (values) => {
      postData(values);
    },
  });

  return (
    <StyleContentProfileWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="details">
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="Hobbies and interests"
              handlerChange={formik.handleChange}
              onValue={formik.values.hobbies_interest}
              name={"hobbies_interest"}
              id={"hobbies_interest"}
            />
          </div>
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="Favorite sport"
              handlerChange={formik.handleChange}
              onValue={formik.values.favorite_sport}
              name={"favorite_sport"}
              id={"favorite_sport"}
            />
          </div>
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="Preferred music genre"
              handlerChange={formik.handleChange}
              onValue={formik.values.music_genre}
              name={"music_genre"}
              id={"music_genre"}
            />
          </div>
          <div className="details-profile">
            <InputComponent
              className="flex"
              label="Preferred movie/TV show"
              handlerChange={formik.handleChange}
              onValue={formik.values.movie}
              name={"movie"}
              id={"movie"}
            />
          </div>

          <div className="buttonWrapper">
            <ButtonComponent className="btn-save" type="submit">
              SAVE & UPDATE
            </ButtonComponent>
            <ButtonComponent className="btn-cancel" onClick={(e)=> props.setIsEdit(false)}>CANCEL</ButtonComponent>
          </div>

          <span className="mandatory">* mandatory field</span>
        </div>
      </form>
    </StyleContentProfileWrapper>
  );
};

const StyleContentProfileWrapper = styled.div`
  text-align: left;
  display: flex;

  .buttonWrapper {
    margin-bottom: 30px;
    .btn-save {
      margin-right: 10px;
    }
  }

  .mandatory {
    font-size: 14px;
    font-style: italic;
  }

  .imageWrapper {
    .attachWrapper {
      position: relative;

      label {
        text-decoration: underline;
        cursor: pointer;
      }

      input {
        opacity: 0;
        position: absolute;
        top: 0;
      }
    }
  }

  .details {
    .details-profile {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      .title {
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
`;

export default EditContentPersonalPreferences;

import { useEffect } from "react";
import useDataStore from "../store/dataStore";
import axios from "axios";
import { getLocalStorage } from "../utils/localstorage";
import { API_APLICATION_ID, API_KEY, BACKEND_PUBLIC_API_BASE_URL } from "./api";


const id = getLocalStorage();
export const useFetchUserData = () => {
  const { setData, data } = useDataStore();
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/${id}`
          );
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          console.error("error data:", error);
        }
      }
    };

    fetchData();
  }, [setData, data]);
};

export const usePostData = async (dataBody) => {

  if (id) {
    try {
      const response = await axios.put(
        `${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/${id}`, dataBody
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("error data:", error);
    }
  }
};

export const useloginData = async (dataBody) => {
  try {
    const response = await axios.post(
      `${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/login`, dataBody
    );
    if (response.status === 200) {
      // setData(response.data);
      
      return response.data;
    }
  } catch (error) {
    console.error("error data:", error);
    return error;
  }
};

export const useRegisterData = async (dataBody) => {

  try {
    const response = await axios.post(
      `${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/register`, dataBody
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("error data:", error);
    return error;
  }

};
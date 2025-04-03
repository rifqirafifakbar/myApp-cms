import { useEffect } from "react";
import useDataStore from "../store/dataStore";
import axios from "axios";
import { getLocalStorage } from "../utils/localstorage";
import { API_APLICATION_ID, API_KEY, BACKEND_PUBLIC_API_BASE_URL } from "./api";

export const useFetchUserData = () => {
  const { setData, data } = useDataStore();

  useEffect(() => {
    const fetchData = async () => {
      const id = getLocalStorage();
      if (!data && id) {
        try {
          const response = await axios.get(
            `${BACKEND_PUBLIC_API_BASE_URL}/${API_APLICATION_ID}/${API_KEY}/users/${id}`
          );
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          console.error("Gagal mengambil data user:", error);
        }
      }
    };

    fetchData();
  }, [setData, data]);
};

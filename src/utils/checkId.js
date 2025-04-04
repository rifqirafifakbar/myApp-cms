"use client"
import { getLocalStorage } from "./localstorage";

export const checkUserLogin = () => {
  const id = getLocalStorage();
  if (!id) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined'){
    }
    return window.location.href = '/login';
  }

  return null;
};

"use client";

import { create } from "zustand";

const useDataStore = create((set) => ({
  data: "",
  setData: (newData) => set({ data: newData }),
}));

export default useDataStore;
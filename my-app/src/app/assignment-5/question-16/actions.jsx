"use server";

import axios from "axios";

export const handleSubmitAction = async (url) => {
  try {
    const response = await axios.get(url);
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.data;
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
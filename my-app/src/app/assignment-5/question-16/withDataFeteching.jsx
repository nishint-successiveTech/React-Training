"use client";

import { useEffect, useState } from "react";
import { handleSubmitAction } from "./actions";

const withDataFetching = (Component, url) => (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await handleSubmitAction(url);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Component {...props} data={data} />;
};

export default withDataFetching;

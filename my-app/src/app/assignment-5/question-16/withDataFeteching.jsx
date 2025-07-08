"use client";

import { useEffect, useState } from "react";
import { fetchData } from "./actions";


const withDataFetching = (Component) => (props) => {
  const [data, setData] = useState([]);
  const {url}=props
  const getData = async () => {
    try {
      const response = await fetchData(url);
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

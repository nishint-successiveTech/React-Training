"use client";

import withDataFetching from "./withDataFeteching";

const FetchData = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((item) => (
        <p key={item?.id}>UserName : {item?.name}</p>
      ))}
    </>
  );
};
export default withDataFetching(
  FetchData
);


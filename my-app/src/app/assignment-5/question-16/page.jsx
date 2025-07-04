import FetchData from "./FetchData";

const FetchDataPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q16. Create a higher-order component (HOC) named withDataFetching where
        the data fetching happens in a Server Component using SSR. The fetched
        data should then be passed as props to a Client Component wrapped by the
        HOC, which displays the data.
      </p>
      <FetchData />
    </div>
  );
};
export default FetchDataPage;

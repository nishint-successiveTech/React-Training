import LoggerComponent from "./LoggerComponent";

const LoggerPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q15. Build a higher-order component (HOC) named withLogger that logs
        component lifecycle events like mounting, unmounting, and updating.
        Apply this HOC to a component and ensure the logs appear in the browser
        console.
      </p>
      <LoggerComponent />
    </div>
  );
};
export default LoggerPage;


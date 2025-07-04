import ProtectedComponent from "@/app/assignment-5/question-14/ProtectedComponent";

const ProtectedPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q14. Create a higher-order component (HOC) named withAuth that restricts
        access to a component only to authenticated users. Implement this HOC on
        a sample component and demonstrate how it protects routes or pages in a
        Next.js application.
      </p>

      <ProtectedComponent></ProtectedComponent>
    </div>
  );
};
export default ProtectedPage;
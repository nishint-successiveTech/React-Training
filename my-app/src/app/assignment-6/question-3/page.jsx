import LoginForm from "@/components/assignment-6/LoginForm";

const Page = () => {
  return (
    <>
      <p className="question">
        Q3. You are given a LoginForm component with username and password
        fields and a submit button. Write test cases using React Testing Library
        to verify that the input fields accept user input and the form
        submission works as expected.
      </p>
      <LoginForm/>
    </>
  );
};

export default Page;

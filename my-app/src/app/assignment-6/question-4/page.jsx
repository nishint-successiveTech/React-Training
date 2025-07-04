import UserProfile from "@/components/assignment-6/UserProfile";

const Page = () => {
  return (
    <>
      <p className="question">
        Q4. Implement a UserProfile component that displays a user's name,
        email, and phone number using props. Write tests using React Testing
        Library to ensure the component correctly renders the provided user
        data.
      </p>
      <UserProfile name={"dhuruv"} email={"dhruvdk02@gmail.com"} phone={7668725002} />
    </>
  );
};

export default Page;
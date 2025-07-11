import ModalComponent from "@/components/assignment-6/Modal";

const Page = () => {
  return (
    <>
      <p className="question">
        Q5. Create a Modal component that displays a dialog with content. Users
        should be able to open and close the modal. Write tests using React
        Testing Library to verify that the modal appears and disappears when
        triggered.
      </p>
      <ModalComponent/>
    </>
  );
};

export default Page;

"use client";

import ModalComponent from "@/components/Assignment5/Modal";

const PostFormPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q13. Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal’s visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>
      <h1>Reusable Modal</h1>
      <ModalComponent modalContent = {"This is a dummy content for modal"} modalHeading={"This is heading of modal"}/>
    </div>
  );
}
export default PostFormPage

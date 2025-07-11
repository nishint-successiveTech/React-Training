import Counter from "@/components/assignment-6/Counter";

const Page = () => {
  return (
    <>
      <p className="question">
        Q2. Create a Counter component that shows a number with increment and
        decrement buttons. Write tests using React Testing Library to verify
        that the counter updates correctly on button clicks.
      </p>
     <Counter/>
    </>
  );
};

export default Page;


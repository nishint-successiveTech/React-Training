import Link from "next/link";
const page = () => {
  return (
    <div>
      <center>
        <Link href="question-3/pages/Home">HOME PAGE</Link>
        <br />
        <Link href="question-3/pages/About">ABOUT PAGE</Link>
        <br />
        <Link href="question-3/pages/Not Found Checker">NOT FOUND CHECKER</Link>
      </center>
    </div>
  );
};

export default page;

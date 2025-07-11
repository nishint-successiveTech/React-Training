import dynamic from "next/dynamic";
const About = dynamic(() => import("./About"), {
  loading: () => <p>Loading about</p>,

});

const AboutPage = () => {
  return <About />;
};

export default AboutPage;


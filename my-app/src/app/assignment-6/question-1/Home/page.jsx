import dynamic from "next/dynamic";
const Home = dynamic(() => import("./Home"));

const HomePage = () => {
  return <Home />;
};

export default HomePage;


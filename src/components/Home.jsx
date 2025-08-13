import { Link } from "react-router";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div id="home" className="home-area">
        <h2>Welcome to my Resume Website</h2>
        <h2>I'm Freiku Nana Kwao</h2>
        <p>
          A Passionate full-stack javascript web developer with a drive to build
          impactful solutions
        </p>
        <Button text={"Hire Me!"} />
      </div>
    </>
  );
};

export default Home;

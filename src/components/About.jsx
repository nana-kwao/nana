import { Link } from "react-router";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div id="about" className="hire-me-area">
        <h3>Why Hire Me</h3>
        <p>
          I bring creativity, discipline, and a solution-first mindset to every
          project. I'm detail-oriented, reliable, and passionate about
          transforming ideas into functional web solutions
        </p>
        <p>
          Whether it's building scalable applications or collaborating with a
          team, I thrive in dynamic environments and always aim to deliver
          excellence.
        </p>
        <div className="vision">
          <h3>My Mission</h3>
          <p>
            To build innovative and accessible digital solutions that improve
            lives and empower businesses to grow online
          </p>
        </div>
        <div className="mission">
          <h3>My Vission</h3>
          <p>
            To become a globally recognized web developer and tech innovator
            delivering quality and sustainable solutions.
          </p>
        </div>
      </div>
      <div className="work-together-quote">
        <h3>Let's Work Together</h3>
        <p>
          I'm available for freelance work, collaborations, or full-time
          opportunies. Let's bring your project to life!
        </p>
        <Button text={"Contact Me"} />
      </div>
    </>
  );
};
export default About;

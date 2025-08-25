import {
  Button,
  CourseCardChild,
  CourseTitle,
  AuthWelcomeText,
  AuthBackgroundWrapperDiv,
} from "milesuicomponents";

const About = () => {
  return (
    <>
      <AuthBackgroundWrapperDiv
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <CourseTitle style={{ borderBottom: "none" }}>Why Hire Me</CourseTitle>
        <AuthWelcomeText>
          I bring creativity, discipline, and a solution-first mindset to every
          project. I'm detail-oriented, reliable, and passionate about
          transforming ideas into functional web solutions
        </AuthWelcomeText>
        <AuthWelcomeText>
          Whether it's building scalable applications or collaborating with a
          team, I thrive in dynamic environments and always aim to deliver
          excellence.
        </AuthWelcomeText>
      </AuthBackgroundWrapperDiv>
      <AuthBackgroundWrapperDiv
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <CourseTitle style={{ borderBottom: "none" }}>My Mission</CourseTitle>
        <AuthWelcomeText>
          To build innovative and accessible digital solutions that improve
          lives and empower businesses to grow online
        </AuthWelcomeText>
        <CourseTitle style={{ borderBottom: "none" }}>My Vission</CourseTitle>
        <AuthWelcomeText>
          To become a globally recognized web developer and tech innovator
          delivering quality and sustainable solutions.
        </AuthWelcomeText>
      </AuthBackgroundWrapperDiv>
      <AuthBackgroundWrapperDiv
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <CourseTitle style={{ borderBottom: "none" }}>
          Let's Work Together
        </CourseTitle>
        <AuthWelcomeText>
          I'm available for freelance work, collaborations, or full-time
          opportunies. Let's bring your project to life!
        </AuthWelcomeText>
        <a href="#contact">
          <Button>Hire Me!</Button>
        </a>
      </AuthBackgroundWrapperDiv>
    </>
  );
};
export default About;

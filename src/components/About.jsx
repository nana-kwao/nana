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
        id="about"
        style={{ display: "flex", gap: "1em" }}
      >
        <CourseCardChild>
          <CourseTitle>Why Hire Me</CourseTitle>
          <AuthWelcomeText>
            I bring creativity, discipline, and a solution-first mindset to
            every project. I'm detail-oriented, reliable, and passionate about
            transforming ideas into functional web solutions
          </AuthWelcomeText>
          <AuthWelcomeText>
            Whether it's building scalable applications or collaborating with a
            team, I thrive in dynamic environments and always aim to deliver
            excellence.
          </AuthWelcomeText>
        </CourseCardChild>
        <CourseCardChild>
          <CourseTitle>My Mission</CourseTitle>
          <AuthWelcomeText>
            To build innovative and accessible digital solutions that improve
            lives and empower businesses to grow online
<<<<<<< HEAD
          </p>
        </div>
        <div className="mission">
          <h3>My Vision</h3>
          <p>
=======
          </AuthWelcomeText>
        </CourseCardChild>
        <CourseCardChild>
          <CourseTitle>My Vission</CourseTitle>
          <AuthWelcomeText>
>>>>>>> 3812785 (updated the menu bar)
            To become a globally recognized web developer and tech innovator
            delivering quality and sustainable solutions.
          </AuthWelcomeText>
        </CourseCardChild>
      </AuthBackgroundWrapperDiv>
      <AuthBackgroundWrapperDiv className="work-together-quote">
        <CourseTitle>Let's Work Together</CourseTitle>
        <AuthWelcomeText>
          I'm available for freelance work, collaborations, or full-time
          opportunies. Let's bring your project to life!
        </AuthWelcomeText>
        <Button>Hire Me!</Button>
      </AuthBackgroundWrapperDiv>
    </>
  );
};
export default About;

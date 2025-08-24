import {
  CourseTitle,
  SubjectHeading,
  AuthWelcomeText,
  AuthBackgroundWrapperDiv,
} from "milesuicomponents";

const Home = () => {
  return (
    <>
      <AuthBackgroundWrapperDiv id="home" className="home-area">
        <CourseTitle style={{ fontSize: "28px" }}>
          Welcome to my Resume Website
        </CourseTitle>
        <SubjectHeading style={{ fontSize: "20px" }}>
          I'm Freiku Nana Kwao
        </SubjectHeading>
        <AuthWelcomeText>
          A Passionate full-stack javascript web developer with a drive to build
          impactful solutions
        </AuthWelcomeText>
      </AuthBackgroundWrapperDiv>
    </>
  );
};

export default Home;

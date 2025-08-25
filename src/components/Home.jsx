import {
  CourseTitle,
  SubjectHeading,
  AuthWelcomeText,
  AuthBackground,
  AuthBackGroundWrapper,
  AuthBackgroundWrapperDiv,
} from "milesuicomponents";

const Home = () => {
  return (
    <>
      <AuthBackground>
        <AuthBackGroundWrapper>
          <AuthBackgroundWrapperDiv
            id="home"
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            <CourseTitle style={{ fontSize: "38px" }}>
              Welcome to my Resume Website
            </CourseTitle>
            <SubjectHeading style={{ fontSize: "30px" }}>
              I'm Freiku Nana Kwao
            </SubjectHeading>
            <AuthWelcomeText style={{padding: "1em"}}>
              A Passionate full-stack javascript web developer with a drive to
              build impactful solutions
            </AuthWelcomeText>
          </AuthBackgroundWrapperDiv>
        </AuthBackGroundWrapper>
      </AuthBackground>
    </>
  );
};

export default Home;

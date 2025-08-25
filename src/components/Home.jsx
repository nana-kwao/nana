import {
  InputFieldIcon,
  SubjectHeading,
  AuthWelcomeText,
  AuthBackground,
  AuthBackGroundWrapper,
  AuthBackgroundWrapperDiv,
  Button,
} from "milesuicomponents";
import cv from "../assets/f_nanakwao_cv.pdf";

const Home = () => {
  return (
    <>
      <AuthBackground>
        <AuthBackGroundWrapper
          style={{
            background: "linear-gradient(to top, #fff 40%, transparent 100%)",
          }}
        >
          <AuthBackgroundWrapperDiv
            id="home"
            style={{
              color: "#213547",
              textAlign: "center",
            }}
          >
            <SubjectHeading style={{ fontSize: "30px", padding: "1rem" }}>
              I'm Freiku Nana Kwao
            </SubjectHeading>
            <AuthWelcomeText style={{ padding: "1rem" }}>
              A Passionate full-stack javascript web developer with a drive to
              build impactful solutions
            </AuthWelcomeText>
            <a href={cv} download={"f_nanakwao_cv.pdf"}>
              <Button style={{ width: "fit-content" }}>
                Download CV <InputFieldIcon className="fa fa-download" />
              </Button>
            </a>
          </AuthBackgroundWrapperDiv>
        </AuthBackGroundWrapper>
      </AuthBackground>
    </>
  );
};

export default Home;

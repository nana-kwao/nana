import { Button, IconsWithText, MenuBarUl } from "milesuicomponents";

const Menu = () => {
  return (
    <>
      <MenuBarUl className="menubar" style={{ backgroundColor: "#fff" }}>
        <a href="#home" style={{ color: "#213547" }}>
          <IconsWithText>
            <i className="fa fa-home" /> Home
          </IconsWithText>
        </a>
        <a href="#studies" style={{ color: "#213547" }}>
          <IconsWithText>
            <i className="fa fa-book" /> Studies
          </IconsWithText>
        </a>
        <a href="#about" style={{ color: "#213547" }}>
          <IconsWithText>
            <i className="fa fa-id-card" /> About
          </IconsWithText>
        </a>
        <a href="#contact">
          <Button>Contact Me</Button>
        </a>
      </MenuBarUl>
    </>
  );
};
export default Menu;

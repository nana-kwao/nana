import { Button, IconsWithText, MenuBarUl } from "milesuicomponents";

const Menu = () => {
  return (
    <>
      <MenuBarUl className="menubar">
        <a href="#home" className="menu-li">
          <IconsWithText><i className="fa fa-home"/>{" "}Home</IconsWithText>
        </a>
        <a href="#studies" className="menu-li">
          <IconsWithText><i className="fa fa-book"/>{" "}Studies</IconsWithText>
        </a>
        <a href="#about" className="menu-li">
          <IconsWithText><i className="fa fa-id-card"/>{" "}About</IconsWithText>
        </a>
        <a href="#contact" className="menu-li">
         <Button>Contact Me</Button>
        </a>
        
      </MenuBarUl>
    </>
  );
};
export default Menu;

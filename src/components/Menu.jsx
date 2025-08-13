import Button from "./Button";

const Menu = () => {
  return (
    <>
      <div className="menu-area">
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#studies">
          <li>Studies</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <Button text={"Hire Me"} />
      </div>
    </>
  );
};
export default Menu;

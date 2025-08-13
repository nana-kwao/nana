const Button = ({ text }) => {
  return (
    <>
      <a href="#contact">
        <div>
          <button type="button">{text}</button>
        </div>
      </a>
    </>
  );
};

export default Button;

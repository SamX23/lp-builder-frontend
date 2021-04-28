import "../App.css";

const ButtonMenu = ({ title, img, className }) => {
  return (
    <div className={`button_Menu ${className}`}>
      <button className={`button_${className}`}>
        <img src={img} alt={title} />
        {title}
      </button>
    </div>
  );
};

export default ButtonMenu;

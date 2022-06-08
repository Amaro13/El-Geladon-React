import bag from "../../assets/images/icons/sacola.svg";
import logo from "../../assets/images/icons/logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Home_header Header">
      <div className="row">
        <div className="Header_logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo_icon"
          />
          <span className="Logo_title"> El Geladon </span>
        </div>
        <div className="Header_options Options">
          <div className="Options_bag Bag">
            <img
              src={bag}
              width="40px"
              className="Bag_icon"
              alt="Purchase Bag"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import bag from "../../assets/images/icons/sacola.svg";
import logo from "../../assets/images/icons/logo.svg";
import palet from "../../assets/images/icons/paleta.svg";
import "./navbar.css";

function Navbar({ createPalet }) {
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
          <button
            type="button"
            className="Opions_palet Palet"
            onClick={() => createPalet()}
          >
            <img
              src={palet}
              width="40px"
              className="Palet_icon"
              alt="Add palet"
            />
          </button>

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

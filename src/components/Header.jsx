import { useState } from "react";
import { LOGO_URL } from "../utils/constan";

const Header = () => {
  const [buttonTitle, setButtonTitle] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitem">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts us</li>
          <li>Card</li>
          <button
            onClick={() => {
              setButtonTitle(buttonTitle === "Login" ? "logout" : "Login");
            }}
          >
            {buttonTitle}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

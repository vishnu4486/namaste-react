import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constan";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonTitle, setButtonTitle] = useState("Login");

  useEffect(()=>{
    console.log("Call useEffect");
  },[])
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitem">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact">Contacts us</Link></li>
          <li>Card</li>
          <button
            onClick={() => {
              setButtonTitle(buttonTitle === "Login" ? "logout" : "Login");
              console.log("change state value");
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

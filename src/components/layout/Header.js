import React from "react";
import dashboard from "../../assets/dashbord.jpg";
import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Crop Production Dashboard</h1>
      </header>
      <div className="main-image">
        <img src={dashboard} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;

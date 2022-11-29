import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img
          src={require("../assets/Images/troll-face.png")}
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
};

export default Header;

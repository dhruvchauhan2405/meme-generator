import React from "react";

export const Meme = () => {
  return (
    <div>
      <main>
        <form className="form">
          <input type={"text"} className="form--input" placeholder="Top Text" />
          <input
            type={"text"}
            className="form--input"
            placeholder="Bottom Text"
          />
          <button className="form--button">Get a new meme image 🖼️</button>
        </form>
      </main>
    </div>
  );
};

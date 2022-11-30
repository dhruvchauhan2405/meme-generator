import React from "react";
import memesData from "../memesData";

export const Meme = () => {
  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <div>
      <main>
        <div className="form">
          <input type={"text"} className="form--input" placeholder="Top Text" />
          <input
            type={"text"}
            className="form--input"
            placeholder="Bottom Text"
          />
          <button onClick={handleClick} className="form--button">
            Get a new meme image 🖼️
          </button>
        </div>
      </main>
    </div>
  );
};

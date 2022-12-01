import React from "react";
import memesData from "../memesData";

export const Meme = () => {
  const memesArray = memesData.data.memes;
  const [memeImage, setMemeImage] = React.useState(memesArray[0].url);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    // const url = memesArray[randomNumber].url;
    // console.log(url);
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
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image 🖼️
          </button>
        </div>
        <img src={memeImage} className="meme--image" />
      </main>
    </div>
  );
};

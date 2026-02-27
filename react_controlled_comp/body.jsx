import React from "react";
export default function Body() {
  let [minfo, setminfo] = React.useState({
    topText: "top text",
    bottomText: "bottom text",
    image: "./troll-face.png",
  });
  function handleChange(event) {
    let { value, name } = event.currentTarget;
    setminfo((minfo) => ({ ...minfo, [name]: value }));
  }
  return (
    <>
      <div className="form">
        <label>
          Top text
          <input
            type="text"
            placeholder="enter top joke"
            name="topText"
            onChange={handleChange}
            value={minfo.topText}
          ></input>
        </label>
        <label>
          Bottom text
          <input
            type="text"
            placeholder="enter bottom joke"
            name="bottomText"
            onChange={handleChange}
            value={minfo.bottomText}
          ></input>
        </label>
        <button>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={minfo.image} alt="meme image" />
        <span className="top">{minfo.topText}</span>
        <span className="bottom">{minfo.bottomText}</span>
      </div>
    </>
  );
}

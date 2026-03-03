import React, { useEffect } from "react";
export default function Body() {
  let [minfo, setminfo] = React.useState({
    topText: "top text",
    bottomText: "bottom text",
    image: "./troll-face.png",
  });
  let [mimage, setmimage] = React.useState([]);
  function handleChange(event) {
    let { value, name } = event.currentTarget;
    setminfo((minfo) => ({ ...minfo, [name]: value }));
    //name will have the value of hello what we type
  }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes") //it returns data in chunks
      .then((res) => res.json()) //response has chunk data in body(readable stream) body also has status code, headers
      .then((data) => setmimage(data.data.memes)); //.json converts it into JS objects which is stored in data
  }, []);
  console.log(mimage);
  function handleRandomMeme() {
    const randomIndex = Math.floor(Math.random() * mimage.length); //generates the random array index
    const url = mimage[randomIndex].url; //select url of that object with array index
    setminfo((minfo) => ({ ...minfo, image: url })); // change minfo oject property
  }
  console.log(mimage.length);
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
          ></input>{" "}
          {/* name is also object in minfo. */}
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
        <button onClick={handleRandomMeme}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={minfo.image} alt="meme image" />
        <span className="top">{minfo.topText}</span>
        <span className="bottom">{minfo.bottomText}</span>
      </div>
    </>
  );
}

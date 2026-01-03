import React, { useState } from "react";
export default function Main() { 
  const [oI, newoI] = React.useState([]); //puts value of ingredients array in oI
  function handleSubmit(event) {
    //event here is form submit
    event.preventDefault(); //prevents querystring like ?ingredients=pasta
    //console.log("form submitted");
    const formData = new FormData(event.currentTarget); //form data takes key and value. key is the name in form
    const newIngredient = formData.get("ingredient"); //now formData will have that key name in it which is ingredient
    newoI((oI) => [...oI, newIngredient]); //state change. newOI changes value of our array oI
  }
  //this will help create list
  const nE = oI.map((oI) => {
    return <li>{oI}</li>;
  });
  return (
    <main>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="e.g ingredient" name="ingredient" />
        <button>Add ingredient</button>
      </form>
      <ul>{nE}</ul>
    </main>
  );
}

//<button onClick={handleClick()}>Add ingredient</button>  this will run function on reload. It will dislay console.log even if we didn't click
//event.preventDefault prevents url change in the url. otherwise it will remain in ?igredient='tomato' url

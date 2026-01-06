import React from "react";
import starFilled from "./star-filled.png";
import starEmpty from "./star-empty.png";

export default function App() {
  const [contact, setcontact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function colorChange() {
    setcontact((contact) => {
      return { ...contact, isFavorite: !contact.isFavorite }; //because we need to return objects completely
    });
  }
  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  return (
    <>
      <main>
        <div className="main-body">
          <div>
            <img className="user" src="/user.png" alt="user" />
            <p></p>
            <button onClick={colorChange}>
              <img
                className="star"
                src={starIcon}
                alt={contact.isFavorite ? "starfilled" : "star-empty"}
              />
            </button>
            <h2>
              {contact.firstName} {contact.lastName}
            </h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      </main>
    </>
  );
}

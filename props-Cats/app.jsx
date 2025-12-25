import Data from "./catsdata.jsx";
export default function Cats() {
  return (
    <div className="contacts">
      <Data
        img="/mr-whiskerson.png"
        alt="cat 1"
        name="Mr Whiskerson"
        phone="(111)111111"
        email="whiskerson@email.com"
      />
      <Data
        img="/fluffykins.png"
        alt="cat 2"
        name="Mr fluffykins"
        phone="(222)222222"
        email="fluffykins@email.com"
      />
      <Data
        img="/felix.png"
        name="Felix"
        phone="(333)333333"
        email="felix@email.com"
      />
      <Data
        img="/pumpkin.png"
        name="Pumpkin"
        phone="(444)444444"
        email="pumpkin@email.com"
      />
    </div>
  );
}

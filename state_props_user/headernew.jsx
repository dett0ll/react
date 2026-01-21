export default function Header(props) {
  return (
    <>
      <header>
        <img src="./user2.png" alt="userimage on header"></img>
        <p>{props.userValue}</p>
      </header>
    </>
  );
}

export default function Data(props) {
  return (
    <main>
      <div className="main-container">
        <img src={props.img} alt={props.alt} />
        <h1>{props.name}</h1>
        <img src="/phone-icon.png" alt="phone" />
        <p>phone:{props.phone}</p>
        <img src="/mail-icon.png" alt="mail" />
        <p>email:{props.email}</p>
      </div>
    </main>
  );
}

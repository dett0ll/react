import logo from "./logo.png"
export default function Header() { //export default will help us import this in index.jsx
  //compartmentilization
  return (
    <header className="header">
      <img src={logo} alt="" className="nav-logo" />
      <nav>
        <ul className="nav-bar">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
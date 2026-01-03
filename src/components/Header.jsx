import nytLogo from "../assets/nyt-logo.png";
import "../styles/app.css";

const Header = () => {
  return (
    <header className="header">
      <img src={nytLogo} alt="NY Times Logo" className="logo" style={{ width: "40px", height: "auto" }} />
      <h1>NY Times – Most Viewed Articles</h1>
    </header>
  );
};

export default Header;

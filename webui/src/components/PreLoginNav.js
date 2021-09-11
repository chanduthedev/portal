import { Link } from "react-router-dom";
import "./../App.css";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/signup">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

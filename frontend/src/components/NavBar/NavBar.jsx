import "./NavBar.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>TeamTracker</h1>
      </Link>

      <form>
        <input type="text" placeholder="Search..." />
        <BsSearch className="search-icon" />
      </form>
    </header>
  );
};

import { Link } from "react-router-dom";
import { useRecipeState } from "../context/global.context";

const Navbar = () => {
  const { state, dispatch } = useRecipeState();

  const toggleTheme = () => {
    dispatch({ type: "THEME", payload: !state.theme });
  };
  return (
    <nav>
      <Link to={"/"} className="link">
        <img src="../../public/DH.ico" alt="" />
      </Link>

      <Link to={"/"} className="link">
        Home
      </Link>
      <Link to={"/contact"} className="link">
        Contact
      </Link>
      <Link to={"/fav"} className="link">
        Fav
      </Link>

      <button className="favButton" onClick={toggleTheme}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;

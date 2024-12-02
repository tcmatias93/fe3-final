import { Link } from "react-router-dom";
import { useRecipeState } from "../context/global.context";

const Navbar = () => {
  const { state, dispatch } = useRecipeState();

  const toggleTheme = () => {
    dispatch({ type: "THEME", payload: !state.theme });
  };
  return (
    <nav>
      <Link to={"/"}>
        <img src="../../public/DH.ico" alt="" />
      </Link>

      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/fav"}>Fav</Link>

      <button
        className={`favButton ${state.theme ? "favButton2" : ""}`}
        onClick={toggleTheme}
      >
        {state.theme ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;

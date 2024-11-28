import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

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

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="favButton">Change theme</button>
    </nav>
  );
};

export default Navbar;

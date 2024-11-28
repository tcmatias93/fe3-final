import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { name, id, username } = user;
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("doctor")) || [];
    const isAlreadyFav = existingFavs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      const updatedFavs = [...existingFavs, user];
      localStorage.setItem("doctor", JSON.stringify(updatedFavs));

      alert(`${name} agregado a favoritos!`);
    } else {
      alert(`${name} ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src="../../public/images/doctor.jpg" alt="Imagen de doctor" />
        <p> {name} </p>
      </Link>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;

const Card = ({ user }) => {
  const { name, username } = user;
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("doctor")) || [];
    const isAlreadyFav = existingFavs.some((fav) => fav.id === user.id);

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
      <img src="../../public/images/doctor.jpg" alt="Imagen de doctor" />
      <p> {name} </p>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;

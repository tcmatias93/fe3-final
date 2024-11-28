import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const docFav = JSON.parse(localStorage.getItem("doctor")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {docFav.map((data) => (
          <Card key={data.id} user={data} />
        ))}
      </div>
    </>
  );
};

export default Favs;

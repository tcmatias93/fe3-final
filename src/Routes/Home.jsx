import Card from "../Components/Card";
import { useRecipeState } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useRecipeState();

  console.log("state: ", state);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((data) => (
          <Card key={data.id} user={data} />
        ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;

import Card from "../Components/Card";
import { useRecipeState } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useRecipeState();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((data) => (
          <Card key={data.id} user={data} />
        ))}
      </div>
    </main>
  );
};

export default Home;

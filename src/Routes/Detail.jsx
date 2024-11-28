import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name {doctor.name} </p>
      <p>Email {doctor.emeil} </p>
      <p>Phone {doctor.phone} </p>
      <p>Website {doctor.website} </p>
    </>
  );
};

export default Detail;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "../Components/Table";

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

  return (
    <>
      <h1>Detail Dentist {id} </h1>

      <Table doctor={doctor} />
    </>
  );
};

export default Detail;

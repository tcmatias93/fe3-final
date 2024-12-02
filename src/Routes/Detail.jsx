import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
